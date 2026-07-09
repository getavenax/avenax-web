# AVENAX — Roadmap

> Governing objective: **acquire the first paying customer within 90 days.**
> Governing rules: One Product Rule, 80/20 Rule, Founder Decision Filter (see `PROJECT_VISION.md`).
> Anything in this file beyond the current phase is a **parking lot, not a commitment**. Ideas enter the roadmap; they do not enter development.

---

## Phase 0 — Foundation (ACTIVE — hard cap: 10 working days)

Minimum Brand Principle: enough brand to launch, not enough to be perfect. Perfection is prohibited; shipping is mandatory.

| Day | Deliverable | Gate |
|---|---|---|
| 1 | Font license verification, self-hosting setup, `styles/tokens.css` complete (Layer 1 + Layer 2, dark + light) | Founder reviews token file |
| 2 | Folder restructure per `ARCHITECTURE.md`, base styles, README rewrite, `AGENTS.md` updated with design-system laws | — |
| 3–4 | Layer A primitives: Button, Input, Badge, Card, Icon, Baseline — all states (hover, focus, disabled, reduced-motion, both themes) | Visual review of primitives in isolation |
| 5 | Layer B patterns: Field, NavBar, Footer, WaitlistForm | — |
| 6–7 | Layer C sections (Hero, ManifestoExcerpt, ProductTeaser, CTASection) + landing page assembly | Founder approves copy |
| 8 | SEO: metadata, Open Graph, sitemap, robots.txt; security headers; favicon/logo integration; analytics decision (ADR) | — |
| 9 | Lighthouse 100/100/100/100, axe pass, manual keyboard audit, reduced-motion audit | Scores verified |
| 10 | Buffer + production deploy + tag `v1.0.0` | **Ship** |

**Definition of done:** landing page live on getavenax.com, four Lighthouse 100s, waitlist capturing emails, zero hardcoded design values in any component, documentation (`docs/`) committed.

---

## Website Versions (avenax-web)

> V2+ are titles only. Per the Executive Directive, every hour spent designing V3–V5 today is an hour taken from the 90-day objective.

- **V1 (= Phase 0):** design system + landing page + waitlist + SEO baseline. Static on Cloudflare Pages.
- **V2:** public manifesto page, product page for AVENAX Insight, static blog, motion refinement.
- **V3:** Workers evaluation (only if SSR needed), authentication, dashboard shell.
- **V4:** Product One integration surface — screenshot upload, analysis display.
- **V5:** billing/subscriptions, internationalization (RTL/Persian among first), documentation site, status page.

---

## Phase 1 — Product One: AVENAX Insight

Starts only after Phase 0 ships. First actions when Phase 1 opens:

1. Create **private** repository for product code.
2. Architecture document before any code (approval-gated, consistent with founder's phased workflow).
3. Positioning constraint baked into architecture: educational analysis / decision support — not financial advice, not signals, not investment recommendations. Output format, wording, and system prompts must structurally enforce this.
4. MVP scope: screenshot upload → market structure, liquidity, bias, high-probability scenarios, risk-management education, explanations.
5. Path to first paying customer: waitlist (from Phase 0) → private beta → paid tier.

Success is measured only by: real users, returning users, paying users.

## Phase 2 — Expansion (LOCKED until product–market fit)

Unlocks only after Product One has real paying users. Candidate directions (roadmap parking lot): AI Agents, Workflow Automation, Creative AI, Business AI, Autonomous Systems, AVENAX Chief, AVENAX Media Factory, AVENAX OS.

## Dormant Initiatives (design documents only — zero engineering)

- **AI Animation Initiative / Media Factory:** automated educational animation pipeline. May receive a design document; may not receive code until explicitly re-prioritized by the founder after Product One revenue.
- **Media properties (YouTube etc.):** minimal mode — document the build journey only, no independent content production until first paying customer.

---

## Parking Lot (ideas captured, not scheduled)

Format for new entries: one line, date, and the Founder Decision Filter verdict ("does this help Product One succeed? No → parked").

- (empty — add ideas here instead of building them)

---

*Update rule: this file changes only via founder approval. Every schedule change gets a line in `DECISIONS.md`.*
