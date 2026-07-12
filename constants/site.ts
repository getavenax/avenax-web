/**
 * Site configuration — the single place a CMS could later replace
 * (ARCHITECTURE.md §8). Components never hardcode site facts.
 */
export const SITE = {
  name: "AVENAX",
  slogan: "Next Standard.",
  product: {
    name: "AVENAX Trace",
    shortName: "Trace",
    displayName: "TRACE.",
    slug: "trace",
  },
  domain: "getavenax.com",
  url: "https://getavenax.com",
  repository: "https://github.com/getavenax/avenax-web",
} as const;

/**
 * Waitlist endpoint (ADR-019: Cloudflare Worker + D1).
 * Development talks to `wrangler dev` locally; NODE_ENV is inlined at build
 * time, so the production export contains only the production URL.
 */
export const WAITLIST_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8787/subscribe"
    : "https://waitlist.getavenax.com/subscribe";
