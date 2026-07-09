# AVENAX — Design System (v1)

> Status: approved direction; implementation gated per `ROADMAP.md` Phase 0 schedule.
> **Governed by `BRAND_DNA.md` — the AVENAX visual constitution (ratified 2026-07-09, ADR-016).** This document is the constitution's implementation layer: it owns parameters (faces, values, scales); the constitution owns laws. Where the two conflict, `BRAND_DNA.md` wins.
> Scope: foundation for ALL AVENAX surfaces — Web, Insight, Chief, Media Factory, OS. Every future product reuses this system.
>
> **Permanent law (founder directive):** Before building any page, the design system comes first. Do not design pages first — design the system first. Everything token-driven. No random hardcoded values. No one-off styling. No page-specific design decisions before system decisions. The Design System is the foundation of AVENAX.

---

## 1. Design System Philosophy

**"The system is the standard."** The slogan is *Next Standard* — the design system is the first standard AVENAX ships. Pages don't get designed; they get *assembled* from the system.

Five governing laws:

1. **Token before value.** No raw hex, px, or ms appears in component code. Ever. If a value is needed and no token exists, the token is created first, at the system level.
2. **Dark is the brand, light is a theme.** AVENAX is dark-first. Light mode is not an afterthought — every semantic token has a light counterpart from day one, even though only dark ships in v1.
3. **Contrast is the palette.** The brand is black & white. Hierarchy comes from lightness steps and typography weight, never from decorative color. Color is reserved for *meaning* (states, data) — and only inside products, not the brand surface.
4. **Elevation by light, not shadow.** On near-black backgrounds, drop shadows are invisible. Elevation is expressed as surface lightness + hairline borders. (This is the single most common mistake in dark-mode systems; we design around it from the start.)
5. **Motion is physics, not decoration.** Everything that moves obeys one easing family and one duration scale. Reduced motion is a first-class mode, not a fallback.

**Signature element — "The Baseline."** A 1px hairline that draws itself across the viewport — the visual embodiment of "a standard": a line things are measured against. It appears as the hero underline, section dividers, and loading states. It is the *one* memorable motif; everything else stays quiet. One risk, spent in one place.

---

## 2. Token Structure

Three layers. Each layer may only reference the layer below it.

```
Layer 1 — PRIMITIVES      raw values, never used directly in components
  --gray-0 … --gray-1000, --font-size-*, --space-*, --radius-*, --duration-*, --ease-*

Layer 2 — SEMANTIC        meaning, theme-aware (this is what components consume)
  --bg-base, --bg-raised, --bg-overlay
  --text-primary, --text-secondary, --text-tertiary, --text-inverse
  --border-subtle, --border-strong, --border-focus
  --interactive-primary, --interactive-hover, --interactive-active
  --status-positive, --status-warning, --status-negative  (product-only)

Layer 3 — COMPONENT       only when a component needs an override point
  --button-height-md, --card-padding, --input-radius
```

**Implementation vehicle:** Tailwind CSS 4 `@theme` in CSS (Tailwind 4 is CSS-first — tokens live in `styles/tokens.css`, not in a JS config). Theme switching via `[data-theme="light"]` remapping Layer 2 only. Layer 1 never changes between themes.

**Naming convention:** `--{category}-{role}-{state?}` — e.g. `--text-primary`, `--interactive-primary-hover`. No color names in semantic tokens (never `--white-text`).

---

## 3. Folder Structure

```
avenax-web/
├── app/                    # routes only — no design decisions here
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # Layer A: primitives (Button, Input, Badge, Card, Icon)
│   ├── patterns/           # Layer B: compositions (Field, NavBar, Footer, WaitlistForm)
│   └── sections/           # Layer C: page sections (Hero, Manifesto, ProductTeaser, CTA)
├── styles/
│   ├── tokens.css          # ALL Layer 1 + 2 tokens — single source of truth
│   ├── themes.css          # dark (default) + light remaps
│   └── globals.css         # resets, base typography, @theme import
├── lib/                    # utilities (cn, motion helpers)
├── hooks/                  # useReducedMotion, useTheme
├── types/                  # shared TypeScript types
├── constants/              # site config, nav items, metadata
└── styles/fonts/           # self-hosted fonts + licenses, via next/font/local (no third-party requests; not public/ — avoids double-shipping)
```

Rule: `app/` imports from `sections/`, sections from `patterns/`, patterns from `ui/`. Never upward, never sideways-skipping. Future products copy `styles/` + `components/ui/` as the shared kernel (extracted to a package only when a second product actually exists — no premature monorepo).

---

## 4. Component Hierarchy

```
Layer A — Primitives (v1 builds these)
  Button        variants: primary, secondary, ghost | sizes: sm, md, lg
  Input         text, email | states: default, focus, error, disabled
  Badge         variants: neutral, outline | sizes: sm, md
  Card          variants: flat, raised, interactive
  Icon          wrapper enforcing size tokens (16 / 20 / 24)
  Baseline      the signature animated hairline

Layer B — Patterns
  Field         Label + Input + error message (accessibility built-in)
  NavBar        logo + links + CTA
  Footer        minimal, legal links
  WaitlistForm  Field + Button + success state

Layer C — Sections
  Hero, ManifestoExcerpt, ProductTeaser, CTASection

Layer D — Pages
  assembled only from Layer C
```

Every primitive ships with: keyboard support, focus-visible state, disabled state, reduced-motion behavior, and both theme mappings — or it doesn't ship.

---

## 5. Typography System

Typography carries the entire brand (no color to lean on). Three faces, three jobs:

| Role | Face | Rationale |
|---|---|---|
| Display / Headings | **Archivo** (Google Fonts, OFL) | Characterful grotesque with real presence at heavy weights; 100% OFL — the public repository stays legally clean (ADR-017). Replaced Cabinet Grotesk, whose Fontshare EULA prohibits public-server distribution. Secondary fallback: Familjen Grotesk (OFL). |
| Body / UI | **Instrument Sans** (Google Fonts, OFL) | Quiet, highly legible, pairs cleanly under the display face. |
| Data / Mono | **Geist Mono** (OFL) | Tabular numerals — critical for Insight's market data later. |

All self-hosted, `font-display: swap`, subset latin. License verification is step one of implementation.

**Scale** — fluid, clamp-based, majored on 1.25 at desktop:

```
--text-display-xl : clamp(3.5rem, 8vw, 7rem)     hero only
--text-display    : clamp(2.5rem, 5vw, 4.5rem)
--text-h1: 3rem   --text-h2: 2.25rem   --text-h3: 1.5rem
--text-lg: 1.125rem   --text-base: 1rem   --text-sm: 0.875rem   --text-xs: 0.75rem
```

Rules: display faces at weight 700–800 with tracking −2%; body at 400/500, line-height 1.6; headings line-height 1.1; max reading measure 65ch (`--measure`). Persian/RTL support is a v2 concern but the scale uses logical properties (`margin-inline`, `padding-block`) from day one so RTL costs nothing later.

---

## 6. Color System

**Primitive scale** — one *true-neutral* gray ramp (deliberate: no blue cast; blue-gray is the default tell of template dark modes):

```
--gray-0: #FFFFFF   --gray-50: #F5F5F5  --gray-100: #E8E8E8  --gray-200: #D1D1D1
--gray-400: #9A9A9A --gray-500: #6E6E6E --gray-600: #4A4A4A  --gray-700: #2E2E2E
--gray-800: #1C1C1C --gray-850: #141414 --gray-900: #0D0D0D  --gray-1000: #000000
```

**Dark theme (default) semantic mapping:**

```
--bg-base: gray-1000      --bg-raised: gray-900     --bg-overlay: gray-850
--text-primary: gray-0    --text-secondary: gray-400 --text-tertiary: gray-500
--border-subtle: gray-800 --border-strong: gray-600  --border-focus: gray-0
--interactive-primary: gray-0 (white button, black text — highest contrast = primary action)
```

**Light theme:** same semantic names, inverted mapping (`--bg-base: gray-0`, etc.). Ships in tokens now, activated later — zero refactor cost.

**Status colors** (product surfaces only, never the brand site): desaturated, dark-mode-calibrated — `--status-positive: #4ADE80`, `--status-negative: #F87171`, `--status-warning: #FBBF24`, each with AA-checked text pairings. The marketing site remains 100% monochrome.

---

## 7. Layout System

**Spacing:** 4px base unit. Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192` (`--space-1 … --space-48`). Section vertical rhythm: `--space-32` (128px) desktop, `--space-24` mobile. No arbitrary margins.

**Grid:** 12-column, `--gutter: 24px` desktop / `16px` mobile. Implemented with CSS grid utilities, not a Grid component (avoids abstraction tax).

**Containers:** `--container-max: 1200px` (page), `--container-narrow: 720px` (prose), `--container-wide: 1440px` (full-bleed sections). Padding-inline: `--space-6` mobile → `--space-10` desktop.

**Breakpoints** (Tailwind defaults — no reason to deviate): `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`. Design mobile-first.

**Radius scale:** `--radius-sm: 6px` (badges, inputs) / `--radius-md: 10px` (buttons, cards) / `--radius-lg: 16px` (modals, media) / `--radius-full`. Restrained radii = premium; no 24px+ blobs.

**Elevation** (dark-mode law — lightness + border, not shadow):

```
level-0  bg-base,    no border          page
level-1  bg-raised,  border-subtle      cards
level-2  bg-overlay, border-subtle      dropdowns, popovers
level-3  bg-overlay, border-strong + backdrop dim   modals
```

**Icon sizes:** 16 / 20 / 24 px only, stroke 1.5px, enforced by the `Icon` wrapper.

---

## 8. Motion System

**Durations:** `--duration-fast: 150ms` (hover, focus) / `--duration-base: 250ms` (UI transitions) / `--duration-slow: 400ms` (reveals) / `--duration-cinematic: 700ms` (hero, Baseline draw — max, nothing slower).

**Easing:** one family — `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` for enters, `--ease-in: cubic-bezier(0.7, 0, 0.84, 0)` for exits, `--ease-inout` for morphs. No bounces, no springs on the brand site — luxury is restraint.

**Principles:**
1. Enter fast-then-settle (ease-out); exit quick (ease-in), exits shorter than enters.
2. Animate only `transform` and `opacity` (compositor-only; guards the Lighthouse 100 goal).
3. One orchestrated moment per page (hero: headline rise + Baseline draw). Scroll reveals: opacity + 12px translate, once, no re-trigger.
4. Hover: ≤ 2% scale or lightness step — never both.
5. `prefers-reduced-motion`: all transitions collapse to opacity 150ms. Implemented centrally in `useReducedMotion` + CSS media query, not per component.

Stack: CSS transitions/keyframes only for v1. No Framer Motion until a real need exists (bundle-size rule).

---

## 9. Accessibility Rules (non-negotiable)

1. WCAG 2.2 AA minimum: text contrast ≥ 4.5:1, large text ≥ 3:1 — every token pairing verified at system level, so components can't produce failing combinations.
2. Visible focus: `--border-focus` 2px ring, offset 2px, on *every* interactive element. Never `outline: none` without replacement.
3. Full keyboard operability; logical tab order; skip-to-content link.
4. Touch targets ≥ 44×44px (button `md` = 44px height by definition).
5. Semantic HTML first; ARIA only where semantics can't express it. One `h1` per page, no skipped levels.
6. All form inputs labelled via `Field`; errors announced with `aria-describedby` + `aria-invalid`.
7. `prefers-reduced-motion` and `prefers-color-scheme` respected.
8. Images: meaningful `alt` or `alt=""` — decided per image, never omitted.
9. Automated axe checks in CI + manual keyboard pass before every release.

---

## 10. Implementation Plan (inside the 10-day Phase 0 cap)

| Day | Deliverable | Gate |
|---|---|---|
| 1 | Font license verification, self-host setup, `tokens.css` (Layers 1+2 complete, both themes) | Founder reviews token file |
| 2 | Folder restructure, base styles, README rewrite, `AGENTS.md` updated with design-system laws | — |
| 3–4 | Layer A primitives (Button, Input, Badge, Card, Icon, Baseline) + states | Visual review of primitives in isolation |
| 5 | Layer B patterns (Field, NavBar, Footer, WaitlistForm) | — |
| 6–7 | Layer C sections + landing page assembly | Founder content approval (copy) |
| 8 | SEO (metadata, OG, sitemap, robots), analytics decision, favicon/logo integration | — |
| 9 | Lighthouse + axe pass to 100/100/100/100, keyboard audit, reduced-motion audit | Scores verified |
| 10 | Buffer + deploy + tag `v1.0.0` | Ship |

Definition of done for v1: landing page live on getavenax.com, four 100s in Lighthouse, waitlist capturing emails, zero hardcoded design values in any component.

---

*This document is referenced from `AGENTS.md` so every coding session is bound by it. The day-by-day schedule above is mirrored in `ROADMAP.md`; if the two ever diverge, `ROADMAP.md` wins on dates and this document wins on design law.*
