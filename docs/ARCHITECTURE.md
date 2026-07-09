# AVENAX — Technical Architecture

> Scope: `avenax-web` (company website) and the architectural ground rules that bind all future AVENAX products.
> Authority: subordinate to `PROJECT_VISION.md`; binding on all code. Changes require a new entry in `DECISIONS.md`.

---

## 1. Technology Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16** (App Router) | ⚠️ Next 16 contains breaking changes relative to most AI training data. Before coding against an unfamiliar API, consult the docs shipped in `node_modules/next/docs` (see `AGENTS.md`). |
| Language | **TypeScript** (strict) | No `any` in committed code. |
| UI | **React 19** | Server Components by default; Client Components only when necessary. |
| Styling | **Tailwind CSS 4** | CSS-first configuration. All design tokens live in CSS (`styles/tokens.css` via `@theme`), not in a JS config file. |
| Hosting | **Cloudflare Pages** | Static export for Phase 0. See §5. |
| Repository | GitHub — `getavenax/avenax-web` (public) | Automatic deployment on push to `main`. |
| Package manager | npm | |
| Development environment | VS Code + Claude Code on Windows | `CLAUDE.md` → `AGENTS.md` chain is the session memory entry point. |

## 2. Rendering Strategy

**Phase 0 decision (final): fully static.**

- `output: 'export'`-compatible architecture: no server-side rendering, no API routes, no middleware in `avenax-web` during Phase 0.
- Waitlist form submits to a third-party or Cloudflare-native endpoint (decision pending — see `DECISIONS.md` open items), not to a Next.js API route.
- Rationale: Cloudflare is directing Next.js workloads toward Workers (OpenNext adapter) and Pages' Next.js support is the legacy path. A static site sidesteps the entire question and is the fastest path through Phase 0.

**Phase 1 rule:** evaluate Cloudflare Workers **only when SSR or backend functionality is actually required**. Do not migrate speculatively. The architecture below is designed so a Pages→Workers migration is a configuration change, not a rewrite.

## 3. Repository Strategy

| Repository | Visibility | Contents |
|---|---|---|
| `avenax-web` | **Public** | Company website only. Also serves the "build in public" documentation value. |
| Product One repository (to be created at Phase 1 start) | **Private** | All product code: chart analysis logic, AI orchestration, prompts, backend. |

**Hard rule:** no product logic, no prompt engineering, no AI pipeline code ever enters `avenax-web`. The boundary is the repository itself.

Shared design system: `styles/` + `components/ui/` form the kernel. It is **copied** into the second product when the second product exists; it is extracted into a versioned package only when two consumers are real. No premature monorepo, no premature package publishing.

## 4. Folder Architecture (`avenax-web`)

```
avenax-web/
├── app/                    # routes only — zero design decisions here
│   ├── layout.tsx          # root layout, fonts, metadata, theme attribute
│   └── page.tsx            # landing page (assembles Layer C sections)
├── components/
│   ├── ui/                 # Layer A — primitives (Button, Input, Badge, Card, Icon, Baseline)
│   ├── patterns/           # Layer B — compositions (Field, NavBar, Footer, WaitlistForm)
│   └── sections/           # Layer C — page sections (Hero, ManifestoExcerpt, ProductTeaser, CTASection)
├── styles/
│   ├── tokens.css          # ALL Layer 1 + Layer 2 design tokens — single source of truth
│   ├── themes.css          # dark (default) + light semantic remaps
│   └── globals.css         # resets, base typography, @theme wiring
├── lib/                    # pure utilities (cn, motion helpers) — no React
├── hooks/                  # useReducedMotion, useTheme
├── types/                  # shared TypeScript types
├── constants/              # site config, navigation, metadata, external URLs
├── docs/                   # THIS documentation set — permanent project memory
└── public/
    └── fonts/              # self-hosted fonts — no third-party font requests
```

### Import Direction Law

```
app/  →  components/sections/  →  components/patterns/  →  components/ui/  →  styles tokens
```

Imports flow strictly downward. Never upward. Never sideways-skipping (a section may not import a primitive's internals; it composes patterns and primitives through their public interfaces). `lib/`, `hooks/`, `types/`, `constants/` may be imported from any layer but import nothing from `components/` or `app/`.

## 5. Deployment & Cloudflare Strategy

- **Pipeline:** push to `main` → Cloudflare Pages builds → automatic deployment. Already connected and live.
- **Phase 0:** static Next.js on Cloudflare Pages. **Do not spend time migrating to Workers now** (founder decision, recorded).
- **Phase 1 trigger for re-evaluation:** first real need for SSR, authentication, or server-side API. At that point produce an ADR comparing Pages vs Workers (OpenNext) vs hybrid, in `DECISIONS.md`.
- Environments: `main` = production. Preview deployments per branch/PR come free with Pages — use them for every review.
- DNS/domain: `getavenax.com` on Cloudflare.

## 6. Performance Architecture

Targets (hard gates, verified before every release):

- Lighthouse: **Performance 100, Accessibility 100, Best Practices 100, SEO 100.**
- Core Web Vitals optimized (LCP, CLS, INP).

Structural guarantees that make the targets achievable:
- Server Components by default; `"use client"` only where interactivity requires it.
- Animations restricted to `transform` and `opacity` (compositor-only).
- Self-hosted, subset fonts with `font-display: swap`.
- `next/image` for all raster assets; SVG for logo and icons.
- Code splitting and dynamic imports for anything below the fold that carries JS weight.
- No third-party scripts without an ADR. Analytics choice must be measured against the Performance-100 gate.

## 7. Security Baseline

- No secrets in the public repository — ever. `.env*` gitignored; Cloudflare environment variables for anything sensitive.
- Security headers configured at Cloudflare level (CSP, X-Frame-Options, Referrer-Policy) — added in Phase 0 Day 8–9.
- Dependency policy: minimal surface. Every new dependency requires justification in the PR description (see `ENGINEERING_RULES.md`).

## 8. Future Platform Considerations (design-for, don't build)

The Phase 1+ platform will eventually include: AI platform, authentication, dashboard, billing, API, documentation, blog, careers, investor page, admin panel, analytics, CMS, internationalization, knowledge base, status page.

Obligations this places on today's code:
- Design tokens and primitives must be product-agnostic (they will be reused by AVENAX Insight and beyond).
- Use CSS logical properties (`margin-inline`, `padding-block`) everywhere so RTL/i18n costs nothing later.
- `constants/` centralizes all site configuration so a CMS can replace it without touching components.
- No architectural decision may make these features require a major refactor — but **none of them are built now** (90-day objective governs).

---

*See also: `DESIGN_SYSTEM.md` (token and component architecture), `ENGINEERING_RULES.md` (how code gets written), `DECISIONS.md` (why things are the way they are).*
