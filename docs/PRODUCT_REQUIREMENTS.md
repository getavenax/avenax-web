# AVENAX Insight — Product Requirements (Product One)

> Status: source of truth for Product One. Business definition only — technical architecture follows in the private product repository at Phase 1 start (per `DECISIONS.md` ADR-013).
> Governing constraints: One Product Rule, 90-day objective, educational positioning (ADR-002, ADR-004, ADR-006).
> Sections marked ⚑ contain proposals requiring explicit founder sign-off before Phase 1 begins.

---

## 1. Product Vision

Every trader stares at charts and asks the same question: *what is this market actually doing?* AVENAX Insight answers it — instantly, structurally, and educationally.

A user uploads a chart screenshot. Insight returns a professional-grade structural read: market structure, liquidity, bias, high-probability scenarios, risk-management education, and the reasoning behind every conclusion — the analysis of an experienced structural trader, available in seconds, that *teaches while it analyzes*.

Insight is the proof that AVENAX builds world-class AI software. It is the first expression of the AVENAX Standard: simple, fast, reliable, beautiful, intelligent.

## 2. Target Customer

Priority order for the first 90 days:

1. **Retail traders (primary launch segment)** — actively trading FX, gold, indices, or crypto; familiar with structural/price-action concepts (support-resistance at minimum, smart-money concepts at best); frustrated that quality analysis takes hours or expensive mentorship. This segment is the largest, fastest to convert, and matches the founder's own profile — we have insider knowledge of exactly what they need.
2. **Trading educators** — need consistent, well-explained example analyses for students; a force multiplier because each educator brings an audience.
3. **Professional traders** — highest bar, adopted later; serve as credibility once the product matures.

Explicitly not a target: complete beginners looking for "what should I buy" (wrong expectation, positioning risk) and algorithmic/quant traders (wrong product shape).

## 3. Primary Problem

Reading a chart structurally — identifying structure, liquidity, bias, and scenario probabilities — requires years of practice, and even experienced traders do it inconsistently under time pressure and emotion. Existing options fail:

- **Indicators** output numbers, not understanding.
- **Signal services** say "buy here" without teaching anything — and are frequently wrong, opaque, or scams.
- **Mentorship** is expensive, slow, and unavailable at 2 a.m. when the setup appears.
- **Generic AI chatbots** produce shallow, unstructured, methodology-free chart commentary.

The gap: no product delivers *structured, methodology-grounded, educational* chart analysis on demand.

## 4. Value Proposition

**"Understand any chart in 30 seconds — and learn why."**

- For retail traders: an expert structural second opinion before every decision, at a fraction of mentorship cost.
- For educators: unlimited consistent teaching examples in their workflow.
- Differentiator vs. signal services: we explain, we educate, we show reasoning — we never say "buy" or "sell."
- Differentiator vs. generic AI: purpose-built analysis structure, consistent methodology, output quality a professional recognizes as competent.

## 5. MVP Scope ⚑

The smallest product that a real trader will pay for:

1. **Chart screenshot upload** — drag-and-drop or paste; common formats (PNG, JPG); any platform's chart (TradingView, MetaTrader, broker apps).
2. **Structured analysis output**, fixed sections, always in this shape:
   - Market Structure (trend state, key structural points)
   - Liquidity Map (resting liquidity zones, sweep candidates)
   - Bias (directional read + confidence language, never certainty language)
   - Scenarios (2–3 "if-then" high-probability paths, each with invalidation conditions)
   - Risk Education (position-sizing principles and invalidation logic relevant to this chart — educational framing only)
   - Reasoning (why the analysis reads the chart this way — the teaching layer)
3. **Analysis history** — user's past analyses, viewable.
4. **Accounts + subscription** — email auth, one paid tier, card payment.
5. **Free trial mechanism** — limited free analyses (proposal: 3) so value is felt before payment.

That is all. Five capabilities. Everything else is Section 6.

## 6. Out of Scope (MVP — parked in roadmap, not built)

Live market data feeds · broker/exchange integration · automated trading of any kind · real-time alerts/notifications · multi-timeframe correlated analysis · portfolio tracking · social/community features · mobile apps (responsive web only) · API access · team/educator seats · custom methodology configuration · backtesting · non-English output (i18n later) · Telegram/Discord bots.

Per the Founder Decision Filter: any request for these goes to `ROADMAP.md` Parking Lot.

## 7. Success Metrics

North star (90-day objective): **first paying customer**, then paying-customer count.

| Metric | Definition | MVP target ⚑ |
|---|---|---|
| Activation | Uploads first chart and views full analysis | ≥ 60% of signups |
| Value moment | Runs ≥ 3 analyses | ≥ 30% of signups |
| Conversion | Free → paid | ≥ 3% of activated users |
| Retention | Paying user analyzes ≥ 1 chart/week in month 2 | ≥ 50% of payers |
| Quality | Founder-audited analysis competency (sample review) | ≥ 90% "professionally defensible" |

Explicit non-metrics: views, likes, followers, waitlist size alone. Per the Manifesto — revenue and retained users are success; hype is not.

## 8. First Paying Customer — Definition

A person with no personal or business relationship to the founder, who discovered Insight through the product's own surfaces (site, waitlist, content), completed payment with their own money at the public price, and is still using the product seven days after paying. Friends, family, and courtesy purchases do not count. The 90-day clock is satisfied only by this definition.

## 9. User Journey (MVP)

1. **Discover** — lands on getavenax.com (waitlist from Phase 0 is the seed audience).
2. **Understand** — landing page communicates the value proposition and the educational positioning in the first screen.
3. **Try** — signs up (email), uploads a chart, receives first full analysis in under 60 seconds. No credit card for trial.
4. **Feel the value** — analysis is visibly structured, methodology-grounded, and teaches something; user runs remaining free analyses on their own charts.
5. **Hit the wall** — free quota ends at a moment of real need.
6. **Pay** — single clear tier, card payment, immediate continuation.
7. **Return** — analysis history + consistent quality make Insight part of the pre-trade routine.
8. **Spread** — educators and traders share analyses (each output carries clean branding and the educational disclaimer).

## 10. Functional Requirements

- FR-1: Accept chart image uploads (PNG/JPG, ≤ 10 MB) via drag-drop, file picker, and clipboard paste.
- FR-2: Produce the fixed six-section analysis (§5.2) for any readable chart image.
- FR-3: Detect unreadable/non-chart images and respond with clear guidance (an error is a direction, not an apology).
- FR-4: Persist every analysis to the user's history with timestamp and thumbnail.
- FR-5: Email-based authentication; session management.
- FR-6: Enforce free-quota limits and paid-tier entitlements.
- FR-7: Process card payments and manage subscription lifecycle (subscribe, cancel, lapse).
- FR-8: Every analysis output includes the educational disclaimer and complies with the positioning vocabulary (see `BRAND_GUIDELINES.md` §6) — enforced structurally in the output pipeline, not appended as an afterthought.
- FR-9: Admin visibility for the founder: usage, conversion, and sampled outputs for quality audit.

## 11. Non-Functional Requirements

- NFR-1 **Speed:** analysis delivered < 60 s (target < 30 s); UI interactions instant per design-system motion standards.
- NFR-2 **Reliability:** graceful degradation when an AI provider fails (multi-model orchestration per ADR-010); user never sees a raw provider error.
- NFR-3 **Cost discipline:** per-analysis inference cost measured from day one; pricing must hold ≥ 80% gross margin at target usage ⚑.
- NFR-4 **Privacy & security:** uploaded charts are user data — encrypted at rest, never used for anything beyond the user's own analysis without explicit consent; no secrets in code (private repo regardless, per ADR-013).
- NFR-5 **Quality consistency:** identical chart → structurally consistent analysis; methodology versioned so quality changes are deliberate.
- NFR-6 **Design compliance:** built entirely on the AVENAX Design System (ADR-014); dark-first; WCAG 2.2 AA.
- NFR-7 **Compliance posture:** educational positioning enforced at architecture level (ADR-004); output vocabulary constraints are hard requirements, not copy suggestions.
- NFR-8 **Observability:** every analysis traceable (model, version, latency, cost) for the founder's quality audits.

## 12. Product Constraints

1. **Positioning constraint (permanent):** educational analysis, decision support, market understanding. Never financial advice, signals, or investment recommendations — in output, marketing, UI copy, and architecture.
2. **Repository constraint:** all product code in the private repository; nothing in `avenax-web` (ADR-013).
3. **Effort constraint:** One Product Rule + 80/20 (ADR-002) — Insight owns 80% of engineering effort until product–market fit.
4. **Methodology constraint:** the analysis framework is a core asset; prompts and orchestration logic are trade secrets and never leave the private repo.
5. **Model constraint:** multi-model orchestration; no single-provider dependency (ADR-010).
6. **Brand constraint:** the AVENAX Standard applies — simple, fast, reliable, beautiful (see `BRAND_GUIDELINES.md`).
7. **Founder-time constraint:** development plans must respect the Founder Balance Principle — no plan that assumes sustained night work (ADR-007).

## 13. Future Expansion (post product–market fit only)

Roadmap parking lot, in rough value order: multi-timeframe analysis · educator/team plans · API access · alerting on user-defined structural conditions · live data integration · mobile apps · additional languages (Persian/RTL among the first — the design system is already logical-property-ready) · custom methodology profiles · AVENAX platform integration (one account across products, per the Long-Term Vision).

None of these may begin before Product One has real paying users (Phase 2 lock, ADR-002).

---

*See also: `PROJECT_VISION.md` §7 (phases), `BRAND_GUIDELINES.md` §6 (positioning vocabulary), `DECISIONS.md` (ADR-002/003/004/010/013).*
