# AVENAX — Decision Log

> Append-only. Every permanent decision gets an entry: context → decision → consequences.
> Reversing a decision requires a new entry referencing the old one, never editing history.
> Format: `ADR-NNN — Title (date, status)`.

---

## ADR-001 — The Manifesto is the constitution (2026-07, accepted)
**Context:** AVENAX needs a highest-level decision framework.
**Decision:** The Founding Manifesto v1.0 governs every branding, product, design, roadmap, marketing, AI-architecture, UI/UX, content, hiring, and business decision. Conflicts must be surfaced explicitly with a faithful alternative.
**Consequences:** All docs in this folder are subordinate to it.

## ADR-002 — One Product Rule (2026-07, accepted)
**Context:** Founder self-identified idea overload (a personal OS, AVENAX, AI Cartoon, Trading AI, agents, YouTube, animation, SaaS, MCP, Discord bots, Finance OS) as the primary execution risk.
**Decision:** "One Product. One Mission. One Revenue Stream." Only one flagship product in active development; every new idea goes to the roadmap parking lot until Product One has revenue. 80/20 effort rule. Founder Decision Filter: "Does this help Product One succeed?"
**Consequences:** Phase 2 expansion locked behind product–market fit.

## ADR-003 — Product One = AI chart analysis platform (2026-07, accepted)
**Context:** Founder is himself the target user with a mature analytical framework (market structure, liquidity, bias, scenarios) — rare founder–problem fit.
**Decision:** Product One is an AI-powered chart analysis platform working from screenshots, for professional traders, retail traders, and trading educators. Working name: AVENAX Insight.
**Consequences:** Proof-of-capability product for the whole company; success metric = paying, returning users.

## ADR-004 — Educational positioning is architectural (2026-07, accepted)
**Context:** Output resembling trading signals enters financial-advice regulatory territory.
**Decision:** Product One is positioned as educational analysis / decision support / market understanding — NOT financial advice, NOT trading signals, NOT investment recommendations. This constraint is enforced in product architecture (output structure, wording, system prompts), not just disclaimers. Every response must reinforce the positioning.
**Consequences:** Phase 1 architecture review includes a positioning-compliance check.

## ADR-005 — Minimum Brand Principle: Phase 0 capped at 10 working days (2026-07, accepted)
**Context:** Branding work is inherently unbounded; "until the brand is complete" risks hidden procrastination.
**Decision:** Phase 0 builds a Minimum Brand — enough identity to launch, not to be perfect. Hard cap: 10 working days. Perfection prohibited; shipping mandatory.
**Consequences:** Day-by-day schedule in `ROADMAP.md`; the real brand is built by the product.

## ADR-006 — 90-day objective: first paying customer (2026-07, accepted)
**Decision:** The single current company objective. Every task is evaluated by whether it materially increases the probability of the first paying customer; otherwise postponed.
**Consequences:** Pillars 3 (Media) and 4 (Growth) run in minimal mode until achieved; V3–V5 website versions remain titles only.

## ADR-007 — Seven-pillar operating system (2026-07, accepted)
**Decision:** Company managed as seven pillars: Company, Product, Media, Growth, Infrastructure, Finance, Founder. Every task belongs to exactly one pillar. Founder pillar (family, health, learning) is measured quarterly alongside business metrics; if the company grows while the founder's life declines, the company is failing.

## ADR-008 — Media as growth engine and independent asset (2026-07, accepted)
**Context:** Founder amendment to the Executive Directive.
**Decision:** YouTube and media properties are brand assets and growth engines for the whole company (ads, sponsorship, partnerships, user acquisition from one ecosystem) — not merely an ad-revenue stream. Content decisions align with long-term brand growth; never content only for views.
**Consequences:** Until first paying customer: minimal mode — document the build journey only.

## ADR-009 — AI Animation Initiative dormant (2026-07, accepted)
**Decision:** Long-term goal (automated educational animation pipeline / Media Factory) receives design documents only — zero engineering effort — until re-prioritized after Product One revenue. Must never distract from Product One.

## ADR-010 — Multi-model AI orchestration (2026-07, accepted)
**Decision:** AVENAX never depends on one AI model; it orchestrates specialized models (Claude, GPT, Gemini, Kling, Veo, Runway, ElevenLabs, Midjourney, OpenRouter, open-source). The company builds systems, not prompts.

## ADR-011 — Stack: Next.js 16 + TypeScript + React 19 + Tailwind 4 on Cloudflare Pages (2026-07, accepted)
**Context:** Repository `getavenax/avenax-web` exists; Git, GitHub, Cloudflare Pages, and auto-deploy already configured; site deployed.
**Decision:** Keep the existing project — never recreate the project or configuration unless necessary. npm as package manager; VS Code on Windows; Claude Code as the development environment with `CLAUDE.md` → `AGENTS.md` as session memory.
**Consequences:** Audit findings (2026-07-09): repo is a near-untouched scaffold (4 commits, default README, zero extra dependencies) — clean slate, no technical debt to remove.

## ADR-012 — Phase 0 stays static on Cloudflare Pages; Workers deferred (2026-07-09, accepted)
**Context:** Cloudflare is steering Next.js workloads toward Workers (OpenNext); Pages' Next support is the legacy path. A landing page needs no SSR.
**Decision (founder):** Phase 0 = static Next.js + Cloudflare Pages. **Do not spend time migrating to Workers now.** Phase 1: evaluate Workers only when SSR or backend functionality is actually required.
**Consequences:** No API routes/middleware in `avenax-web` during Phase 0; waitlist submits to an external/Cloudflare-native endpoint (open item OI-1); architecture keeps migration cost at configuration-level.

## ADR-013 — Repository split: public web, private product (2026-07-09, accepted)
**Decision (founder):** `avenax-web` remains public and contains ONLY the company website. Product code lives in a separate private repository created at Phase 1 start. No product logic, prompts, or AI pipeline code ever enters the public repo.

## ADR-014 — Design System before pages (2026-07-09, accepted, permanent rule)
**Decision (founder):** Before building any page, create the AVENAX Design System. No page-specific design decisions before system decisions. Everything token-driven; no hardcoded values; no one-off styling. The system must define: typography scale, spacing scale, grid, container widths, radius scale, elevation, motion system, color tokens, dark theme + future light compatibility, button/input/card/badge systems, icon sizing, breakpoints, accessibility rules, motion principles. Every future product (Web, Insight, Chief, Media Factory, OS) reuses it.
**Consequences:** Full specification in `DESIGN_SYSTEM.md`; ships as Phase 0 Days 1–5.

## ADR-015 — Design system technical choices (2026-07-09, proposed → pending founder sign-off on details)
**Decision:** Three-layer token architecture (primitives → semantic → component) in Tailwind 4 `@theme` CSS; true-neutral monochrome ramp (no blue cast); dark-first with light theme mapped from day one; elevation via surface lightness + hairline borders (not shadows); typography Cabinet Grotesk / Instrument Sans / Geist Mono (self-hosted, licenses verified Day 1); motion = CSS-only, transform/opacity, one easing family; signature element "The Baseline" (self-drawing 1px hairline embodying "Next Standard").
**Consequences:** Any change to faces/palette is a token-file change, not a component change.

## ADR-016 — Brand DNA ratified: Concept A "The Standard" (2026-07-09, accepted)
**Context:** Before token implementation (Phase 0 Day 1), the founder commissioned a permanent visual constitution. Three complete brand concepts were designed and compared in `BRAND_DNA.md` §15: A "The Standard" (measuring instrument), B "The Institute" (editorial humanism), C "The Signal" (terminal + accent).
**Decision (founder):** Concept A ratified as the official AVENAX Brand DNA. `BRAND_DNA.md` becomes the visual constitution — superior to `DESIGN_SYSTEM.md`, which implements it. The Ten Design Laws (`BRAND_DNA.md` §12) are permanent and amendable only by a founder-signed ADR. Also ratified, per the constitution's challenged assumptions: (1) permanent laws, replaceable parameters; (2) the identity is the measurement language, not the monochrome palette; (3) Media Factory content may use expanded palettes inside a fixed AVENAX frame. **Founder clarification (binding):** the measurement language must feel premium, calm, and architectural — never like a trading terminal; never financial, noisy, or technical for its own sake.
**Consequences:** ADR-015's parameter details proceed under this constitution. Every future design review checks against the Ten Laws and the terminal-clarification. No UI implementation begins until the founder approves the Day 1 token work.

## ADR-017 — Day 1 parameter corrections: Archivo replaces Cabinet Grotesk; gray-450 added (2026-07-09, accepted)
**Context:** Day 1 license verification (mandated by `BRAND_DNA.md` §4.3) found the Fontshare Free Font EULA §02 prohibits distribution of font files, including "uploading them in a public server" — incompatible with the public `avenax-web` repository (ADR-013). Separately, the token-level WCAG audit found the specified dark-theme `text-tertiary` mapping (`gray-500` #6E6E6E) fails AA contrast (4.5:1) on dark surfaces.
**Decision (founder):** (1) Cabinet Grotesk removed from the repository entirely; display face is the pre-approved OFL fallback **Archivo** (secondary: Familjen Grotesk if Archivo shows visual issues). The public repository must remain legally clean; ambiguous licensing risk on a core brand asset is not accepted. (2) Primitive `gray-450` (#7E7E7E) added to the ramp; dark `text-tertiary` remaps to it. Accessibility outranks strict adherence to the original ramp.
**Consequences:** `styles/fonts/` is 100% OFL. ADR-015's typography parameter is amended accordingly (this entry supersedes that detail; ADR-015 otherwise stands). Identity unaffected per the constitution — the measurement language, not the typeface, carries the brand. Token contrast table in `styles/tokens.css` documents the verified pairings.

---

## Open Items

- **OI-1:** Waitlist backend for a static site (options: Cloudflare Pages Function-lite, Formspree-class service, Cloudflare Worker endpoint). Decide Day 5. Constraint: must not compromise the static architecture or Performance 100.
- **OI-2:** Analytics choice (or none for v1). Decide Day 8. Constraint: Performance-100 gate.
- **OI-3:** Logo — wordmark direction to be reviewed within Days 1–2 alongside token review.

---

*Append new decisions below. Never edit accepted entries.*
