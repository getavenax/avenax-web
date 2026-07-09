# AVENAX — Engineering Rules

> Source: AVENAX Master CTO Directive. Binding on every contributor, human or AI.
> The standard: code that another senior engineer would admire — FAANG-production-codebase quality.
> Behave like a senior engineer with 20+ years of experience, never like a code generator.

---

## 1. Before Writing Any Code

1. Read the existing project.
2. Understand every folder.
3. Understand every component.
4. Understand the architecture.
5. Explain your understanding.
6. Detect weaknesses.
7. Suggest improvements.
8. Wait for approval if major architectural changes are required.

**Never start coding immediately.**

Next.js 16 note: Next 16 contains breaking changes relative to most AI training data. When touching an unfamiliar Next.js API, consult the documentation shipped inside `node_modules/next/docs` first (per `AGENTS.md`).

## 2. Development Workflow (every request, exact sequence)

1. Understand the request.
2. Inspect the existing project.
3. Identify affected files.
4. Explain architecture changes.
5. Explain implementation plan.
6. Estimate complexity.
7. Write production-quality code.
8. Review your own code.
9. List files changed.
10. Provide Git commit message.
11. Wait for founder confirmation.

**Never skip steps.** This mirrors the founder's standing preference across all projects: phased, approval-gated work with explicit freeze points.

## 3. Coding Rules

- Never duplicate code.
- Never create unnecessary files.
- Never overengineer. Never underengineer.
- Always prefer clean architecture, reusable components, and composition.
- Always optimize: performance, bundle size, accessibility, SEO, maintainability.
- Always think five versions ahead — design so future features (auth, billing, i18n, CMS…) need no major refactor, but **do not build them now**.

## 4. Quality Standards (hard prohibitions)

No hacks. No quick fixes. No temporary solutions. No TODOs. No unfinished code. No unnecessary comments. No duplicated logic. No poor naming. No magic numbers (every value is a named token or constant). No bad architecture.

TypeScript: strict mode; no `any` in committed code; exported functions and components fully typed.

Design values: **zero hardcoded design values in components.** Every color, size, spacing, radius, duration, and easing comes from `styles/tokens.css`. If a needed token doesn't exist, add the token first (system-level decision), then use it.

## 5. Component Rules

- Server Components by default; `"use client"` only when interactivity demands it, as low in the tree as possible.
- Import direction law (see `ARCHITECTURE.md` §4): `app → sections → patterns → ui`. Never upward.
- Every UI primitive ships with: keyboard support, `:focus-visible` state, disabled state, reduced-motion behavior, and both theme mappings — or it doesn't ship.
- Semantic HTML first; ARIA only where semantics cannot express the meaning.
- CSS logical properties (`margin-inline`, `padding-block`) everywhere — RTL readiness is free if done from day one.

## 6. Dependency Policy

Minimal surface. Every new dependency requires written justification (what problem, why not stdlib/platform, bundle cost). Current approved runtime dependencies: `next`, `react`, `react-dom`. Tailwind 4 as build-time. Nothing else without an ADR in `DECISIONS.md`. Explicitly deferred: Framer Motion (CSS transitions suffice for v1), any analytics script (must pass the Performance-100 gate first).

## 7. Performance & Accessibility Gates

Release gates — verified, not assumed:

- Lighthouse 100 / 100 / 100 / 100 (Performance, Accessibility, Best Practices, SEO).
- Core Web Vitals green.
- Automated axe scan clean.
- Manual keyboard pass: every interactive element reachable, operable, visibly focused.
- Reduced-motion pass: `prefers-reduced-motion` collapses all motion to ≤150ms opacity.
- WCAG 2.2 AA contrast verified at the token level (see `DESIGN_SYSTEM.md` §9).

## 8. Git Workflow

- `main` = production (auto-deploys to Cloudflare Pages). Work in feature branches; Pages preview deployments used for review.
- Commit style: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `perf:`, `chore:`), imperative mood, scoped where useful (`feat(ui): add Button primitive`).
- **Every completed task must report:** files modified, reason, architecture impact, performance impact, SEO impact, accessibility impact, suggested commit message. Never skip this.
- Tags: `vX.Y.Z` at each shipped version (Phase 0 ends at `v1.0.0`).
- No secrets in the repository, ever. `.env*` gitignored.

## 9. Testing Strategy

Proportional to phase — quality without ceremony:

- **Phase 0 (static site):** type-checking (`tsc --noEmit`) + lint + Lighthouse/axe gates as the test suite. No unit-test scaffolding for a static landing page (would violate the no-overengineering rule).
- **Phase 1 (product):** testing strategy gets its own ADR before the first line of product code — unit tests for logic, integration tests for AI orchestration boundaries, golden-output tests for analysis formatting. Non-negotiable there.

## 10. Communication Standards (for AI sessions and human reviews alike)

Think before coding. Explain decisions. Explain tradeoffs. Suggest better alternatives. **Challenge bad ideas — do not agree with a request that would make the project worse; recommend the best engineering solution and say why.** Protect code quality, focus, execution, the founder's time, the family time budget, and the brand.

---

*See also: `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `DECISIONS.md`.*
