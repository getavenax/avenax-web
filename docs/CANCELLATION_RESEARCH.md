# AVENAX Insight — Cancellation & Churn Research

| | |
|---|---|
| **Research Date** | 2026-07-09 |
| **Research Version** | 1.0 |
| **Confidence Level** | Medium-High for billing/refund classes (multi-source, verbatim-backed); Medium for AI/UX classes; Low-Medium for missing-feature class (inferential) |
| **Source Coverage** | Trustpilot (Tickeron, TradingView, Motley Fool, Investing.com, Myfxbook), Capterra (TrendSpider), BBB (StocksToTrade), Google Play / App Store (Chart-AI class), community sentiment per `MARKET_RESEARCH.md` §0 |
| **Known Limitations** | Review archaeology, not first-party churn data — reviewers skew toward the angriest customers; silent churn (C6-type) is structurally under-represented; no exit-survey data exists until Insight launches with one |
| **Next Review Date** | **2026-10-07** (90 days) |

> **Living research document** — not constitutional documentation.
> Question: why do users cancel AI trading / chart-analysis subscriptions — and how does Insight eliminate every cause before launch?

---

## 1. Why users cancel — eight failure classes, with evidence

### C1 — Trust failures (the deepest, most permanent churn)
**Evidence:** faulty signals "despite high confidence scores" (Tickeron reviews); doctored track records and win-rate laundering across signal services; fake 5-star reviews on Chart-AI apps; Myfxbook verification gamed; scam warnings suppressed.
**Churn shape:** user doesn't just cancel — they leave the *category* and warn others. Unrecoverable.

### C2 — AI failures (the product didn't do the one thing)
**Evidence:** hallucinated price levels ("not actually on the chart"); same chart → different analysis; generic advice "you already know if you have any trading experience"; recognition randomly breaking ("stopped recognizing the same charts it had previously analyzed").
**Churn shape:** cancels within the first sessions. This is activation-killing, not retention-killing — the user never reaches habit.

### C3 — Billing failures (the angriest reviews in the category)
**Evidence:** "charged immediately for services they thought were part of a free trial" (Tickeron); auto-renewal traps — "forgot to cancel… charged 700+ euro for a new 1 year subscription" (TradingView Trustpilot); "cancelled… received email acknowledgement but were then charged their renewal fee" (Motley Fool Trustpilot); "never sure after making changes if they're going to end up with new charges" (Tickeron).
**Churn shape:** cancels + chargeback + public one-star review. Converts a neutral churner into an active detractor.

### C4 — Refund failures
**Evidence:** "strict 'No Refund' policy the moment a payment is processed" (Tickeron); "Zero willingness to find a win win… I have not been treated this terrible by a company in a LONG time" (TrendSpider Capterra reviewer, 72-hour policy dispute); refund refusals (Investing.com Trustpilot); "$5 weekly plan… unable to get a refund" (Chart-AI apps).
**Churn shape:** small money, maximum rage. Refund friction is the cheapest bad review a company can buy.

### C5 — Pricing failures (value never materializes at the price)
**Evidence:** "$82/mo for the most basic option" (TrendSpider); "for smaller accounts, the subscription fees will likely exceed any gains" (Tickeron reviews); AI assistant paywalled on top of subscription (TrendSpider Sidekick complaints).
**Churn shape:** rational cancel at renewal. Also the quiet killer: trading tools get cancelled during *losing weeks* when any subscription feels expensive.

### C6 — UX failures
**Evidence:** 2–4 weeks to proficiency (TrendSpider); confusing tier structures (Tickeron); Windows-only desktop (Trade Ideas); forced ads and forced-rating prompts (mobile apps); prompt burden per analysis (generic LLMs).
**Churn shape:** silent non-adoption → cancel at first renewal. The user never says why.

### C7 — Missing-feature churn
**Evidence (weaker, inferential):** multi-timeframe requests recur; "no visual P&L modeler… you'll need a second tool" (TrendSpider options reviewers); live-data/news blindness of screenshot tools noted by vendors themselves.
**Churn shape:** power users outgrow the tool. Slowest and least dangerous class — and partially *desirable* (an educational product that a user outgrows has done its job; educators replace them).

### C8 — Support failures
**Evidence:** "lackluster tech support" and cancellation-confirmation problems (Tickeron); hostile refund handling (TrendSpider reviewer); scam warnings unanswered (Myfxbook moderation).
**Churn shape:** support is where every other failure class either gets defused or detonated. A billing mistake + good support = saved customer; + bad support = detractor.

---

## 2. The pattern underneath

Reviews show churn in this category is **trust-mediated, not feature-mediated.** Users forgive missing features; they do not forgive feeling deceived — by fake accuracy, by billing surprises, or by refund walls. And the single highest-risk moment is universal: **the losing week**, when the user re-evaluates every trading expense. A tool that only "gives answers" has no defense in that moment; a tool that is visibly making the user *better* does.

---

## 3. Elimination plan — how Insight kills every class before launch

| Class | Pre-launch elimination (all within approved MVP scope) |
|---|---|
| C1 Trust | No win-rate marketing, ever (ADR-004 + `MARKET_RESEARCH.md` rejection list). Methodology version on every output. Honest-limits line on every analysis. No fake scarcity, no testimonials we can't verify, no incentivized reviews. |
| C2 AI | Level-accuracy as the existential engineering priority (`COMPETITOR_MATRIX.md` §5.1); internal accuracy benchmark before launch (50–100 chart baseline); FR-3 unreadable-image handling returns *direction*, not apology; consistency via versioned methodology (NFR-5). |
| C3 Billing | No-card free trial (3 analyses). Renewal reminder email before every charge — the exact courtesy TradingView reviewers begged for. One tier: nothing to "accidentally upgrade." Cancel = one click, immediate written confirmation, honored absolutely. |
| C4 Refunds | Simple public policy (proposal ⚑: 14-day no-questions refund on first subscription). Cost is trivial at our price point; the review-page value is enormous. Founder decision required. |
| C5 Pricing | Single tier inside the $15–29 corridor, framed against mentorship ($36–74/hr). No addon paywalls — the AI *is* the product, never an upsell. Per-analysis cost telemetry (NFR-3) protects margin without surprise price hikes. |
| C6 UX | Upload → analysis < 60s with zero learning curve is the entire UX thesis. No ads, no rating nags, responsive web (no OS exclusions). Design system guarantees calm, accessible surfaces (WCAG 2.2 AA at token level). |
| C7 Features | Out-of-scope list is published honestly (roadmap transparency beats fake "coming soon"). Educator path (Phase 2) captures outgrowers. Multi-timeframe is the recorded first post-PMF candidate. |
| C8 Support | Founder-visible quality audits (FR-9/NFR-8) catch systemic issues before tickets do. Support answers within a stated SLA ⚑; every cancellation gets a one-question exit survey — building the real churn dataset this document currently lacks. |

⚑ = requires founder sign-off; both are policy sentences, not engineering.

## 4. Founder Recommendations

**R1 — Publish a "Fair Billing Charter" on the pricing page (Priority: High).**
*Opportunity:* the category's angriest, most-repeated complaints (C3/C4) are all solved by policy, not code. Naming it turns hygiene into positioning.
*Evidence:* Tickeron no-refund rage, TradingView €700 auto-renew reviews, Motley Fool cancel-then-charged reviews — billing is the most emotionally charged theme in every review source consulted.
*Impact:* differentiation visible at the exact moment of purchase anxiety; converts review-page readers; pre-empts chargebacks.
*Cost:* copywriting + a renewal-reminder email (hours, not days).

**R2 — Renewal reminder email before every charge (Priority: High).**
*Opportunity/Evidence:* the single most common billing complaint verbatim ("forgot to cancel"). *Impact:* eliminates the worst review class entirely; the users it "loses" were already detractors-in-waiting. *Cost:* one transactional email in the billing flow.

**R3 — One-question exit survey in the cancel flow from day one (Priority: Medium).**
*Opportunity:* this document is built on other products' review archaeology; our own churn data starts accumulating only if the instrument exists at launch. *Impact:* replaces proxy evidence with ground truth within the first hundred users. *Cost:* one form field + one table.

**R4 — 14-day first-subscription refund policy (Priority: Medium, founder decision).**
*Opportunity/Evidence:* C4; competitors' refusal is a recurring one-star generator. *Impact:* removes purchase risk at a price point where abuse cost is capped by the analysis quota. *Cost:* a policy sentence + occasional refunds — cheap insurance against detractor reviews.

---

*Sources: Trustpilot (Tickeron, TradingView, Motley Fool, Investing.com, Myfxbook), Capterra (TrendSpider), BBB (StocksToTrade complaints), Google Play/App Store (Chart-AI class apps), community sentiment per `MARKET_RESEARCH.md`. All review-site quotes are as surfaced in search summaries 2026-07-09; verbatims spot-checkable at the cited platforms.*
