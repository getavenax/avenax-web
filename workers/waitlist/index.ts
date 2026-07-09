/*
 * AVENAX waitlist Worker (ADR-019).
 * Stores email + timestamp + source in D1. Stores nothing else — no IP,
 * no user agent, no fingerprint (founder constraint). Never reveals whether
 * an email already exists. Bound SQL parameters only.
 */

/* Minimal local D1 typings — keeps the repo dependency-free. */
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<unknown>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
}
export interface Env {
  DB: D1Database;
}

const STATIC_ORIGINS = new Set([
  "https://getavenax.com",
  "https://www.getavenax.com",
]);
/* Pages production + per-branch preview deployments. */
const PAGES_ORIGIN = /^https:\/\/([a-z0-9-]+\.)?avenax-web\.pages\.dev$/;
const LOCAL_ORIGIN = /^http:\/\/localhost(:\d+)?$/;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL = 254;
const MAX_SOURCE = 64;

/*
 * Best-effort per-isolate rate limiting (backstop to the Cloudflare WAF rule).
 * The IP is read transiently and NEVER persisted or logged.
 */
const WINDOW_MS = 60_000;
const WINDOW_LIMIT = 5;
const hits = new Map<string, { n: number; t: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 10_000) hits.clear();
  const rec = hits.get(ip);
  if (!rec || now - rec.t > WINDOW_MS) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  rec.n += 1;
  return rec.n > WINDOW_LIMIT;
}

function allowedOrigin(origin: string | null): string | null {
  if (!origin) return null;
  if (
    STATIC_ORIGINS.has(origin) ||
    PAGES_ORIGIN.test(origin) ||
    LOCAL_ORIGIN.test(origin)
  ) {
    return origin;
  }
  return null;
}

function corsHeaders(origin: string | null): HeadersInit {
  const headers: Record<string, string> = { Vary: "Origin" };
  if (origin) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type";
    headers["Access-Control-Max-Age"] = "86400";
  }
  return headers;
}

function json(
  body: unknown,
  status: number,
  origin: string | null,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

interface Submission {
  email: string;
  source: string;
  honeypot: string;
  wantsHtml: boolean;
}

async function parseSubmission(request: Request): Promise<Submission> {
  const contentType = request.headers.get("Content-Type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Record<string, unknown>;
    return {
      email: String(body.email ?? ""),
      source: String(body.source ?? "site"),
      honeypot: String(body.website ?? ""),
      wantsHtml: false,
    };
  }
  /* No-JS fallback: form-encoded post, answered with a plain page. */
  const form = await request.formData();
  return {
    email: String(form.get("email") ?? ""),
    source: String(form.get("source") ?? "site"),
    honeypot: String(form.get("website") ?? ""),
    wantsHtml: true,
  };
}

function successFor(sub: Submission, origin: string | null): Response {
  if (sub.wantsHtml) {
    return new Response(
      "<!doctype html><meta charset='utf-8'><title>AVENAX</title><p>You're on the list. You can close this page.</p>",
      { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } },
    );
  }
  return json({ ok: true }, 200, origin);
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = allowedOrigin(request.headers.get("Origin"));
    const url = new URL(request.url);

    if (url.pathname !== "/subscribe") {
      return json({ ok: false }, 404, origin);
    }
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") {
      return json({ ok: false }, 405, origin);
    }

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    if (isRateLimited(ip)) {
      return json({ ok: false, error: "rate_limited" }, 429, origin);
    }

    try {
      const sub = await parseSubmission(request);

      /* Bots that fill the honeypot get success and learn nothing. */
      if (sub.honeypot !== "") {
        return successFor(sub, origin);
      }

      const email = sub.email.trim().toLowerCase();
      if (!EMAIL_PATTERN.test(email) || email.length > MAX_EMAIL) {
        return json({ ok: false, error: "invalid_email" }, 400, origin);
      }
      const source = sub.source.slice(0, MAX_SOURCE);

      /* Idempotent: duplicates are ignored and indistinguishable from new. */
      await env.DB.prepare(
        "INSERT OR IGNORE INTO waitlist (email, source) VALUES (?1, ?2)",
      )
        .bind(email, source)
        .run();

      return successFor(sub, origin);
    } catch {
      return json({ ok: false, error: "server_error" }, 500, origin);
    }
  },
};

export default worker;
