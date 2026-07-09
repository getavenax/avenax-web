# AVENAX — Company Website

**Next Standard.**

This is the public repository for [getavenax.com](https://getavenax.com), the website of AVENAX — a company building autonomous AI products that help people think better, work faster, and create more.

This repository contains **only the company website**. Product code lives in private repositories (see `docs/ARCHITECTURE.md` §3).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- TypeScript (strict)
- React 19 (Server Components by default)
- Tailwind CSS 4 (CSS-first — all design tokens in `styles/tokens.css`)
- Cloudflare Pages (auto-deploy from `main`)

## Development

```bash
npm install
npm run dev      # local development
npm run build    # static export to out/
npm run lint     # eslint
npx tsc --noEmit # type-check
```

## Architecture

```
app/          routes only — no design decisions
components/
  ui/         Layer A — primitives
  patterns/   Layer B — compositions
  sections/   Layer C — page sections
styles/       design tokens, themes, fonts (single source of truth)
lib/ hooks/ types/ constants/
docs/         permanent project documentation
```

Imports flow strictly downward: `app → sections → patterns → ui → tokens`. See `docs/ARCHITECTURE.md`.

## Design System

Every color, size, spacing, radius, duration, and easing is a token in `styles/tokens.css` — zero hardcoded design values in components. The visual constitution is `docs/BRAND_DNA.md`; the implementation law is `docs/DESIGN_SYSTEM.md`. Fonts are self-hosted and 100% OFL-licensed.

## Documentation

Start at [`docs/AGENTS.md`](docs/AGENTS.md) — the canonical index. Key documents: `PROJECT_VISION.md`, `ENGINEERING_RULES.md`, `DECISIONS.md` (append-only ADR log), `DESIGN_SYSTEM.md`, `BRAND_DNA.md`.

## Quality Gates

Every release: Lighthouse 100/100/100/100 · WCAG 2.2 AA · clean axe scan · manual keyboard pass · reduced-motion pass.

---

© AVENAX. Website content and brand assets are not licensed for reuse. Font files in `styles/fonts/` are licensed under the SIL Open Font License 1.1 (license texts included alongside each family).
