# AVENAX Trace — Market Research Report (Product Discovery)

| | |
|---|---|
| **Research Date** | 2026-07-09 |
| **Research Version** | 1.0 |
| **Confidence Level** | Medium overall — trust/billing themes High (3+ independent sources); accuracy statistics Medium (vendor-published); tail items Low, individually labeled |
| **Sources / Source Coverage** | Web search + page fetches: Forex Factory, Hacker News, Trustpilot/Capterra/BBB summaries, Google Play & App Store reviews, Upwork, Fiverr, vendor comparison content (ChartSnipe, SnapPChart), scam analyses (Syntium Algo, EA-Coder, Forex Peace Army). Full accessibility table in §0 |
| **Known Limitations** | X/Twitter inaccessible; Reddit search-mediated only; G2 aggregated only; PeoplePerHour unqueried; two key accuracy statistics are competitor-published (bias flagged in §0); no first-party user interviews yet |
| **Next Review Date** | **2026-10-07** (90 days) |

> **Living research document** — not constitutional documentation. Findings decay; re-verify pricing and competitor facts before quoting publicly. Purpose: evidence base for MVP scope decisions; does not modify `ROADMAP.md` or `PRODUCT_REQUIREMENTS.md` — where evidence supports or contradicts them, it says so explicitly.
> Method: live web research (search + page fetches), synthesized per the customer-research framework (frequency × intensity, confidence-labeled).

---

## 0. Source Accessibility — read this first

Honest accounting of what could and could not be collected. Findings below never pretend otherwise.

| Source | Access | Yield |
|---|---|---|
| Reddit (r/Forex, r/Daytrading) | Indirect (search-mediated; direct thread fetch unavailable) | Medium — themes, few verbatims |
| X / Twitter | **Not accessible** (login-walled) | None — gap declared |
| Hacker News | Direct | Medium — sentiment on AI trading claims |
| Product Hunt | Indirect | Low — product listings, no review depth |
| TradingView communities | Indirect | Low |
| Forex Factory | Search-mediated (direct fetch 403) | Medium — key thread themes |
| Myfxbook | Indirect + third-party analyses | Medium — trust-collapse evidence |
| GitHub issues of competitors | **Not fruitful** — competitors are closed-source; no issue trackers exist | None — gap declared |
| G2 | Aggregated via review summaries (direct blocked) | Medium |
| Capterra / Trustpilot / app stores | Mixed (Trustpilot direct 403; summaries + app-store reviews accessible) | Medium-High |
| Upwork / Fiverr | Direct | High — willingness-to-pay anchors |
| PeoplePerHour | **Not queried** (Fiverr/Upwork saturated the freelance signal) | Gap declared |

**Bias warning:** the two most quantified accuracy claims (ChatGPT's ~23% support/resistance accuracy; inconsistency on re-analysis) come from **competitors' own marketing content** (ChartSnipe, SnapPChart). Directionally corroborated by independent community sentiment (Forex Factory, HN), but the numbers themselves are unverified vendor tests. Treated as Medium confidence, never High.

---

## 1. Competitive Landscape (as found, July 2026)

| Product | Price | What it does | Documented weaknesses |
|---|---|---|---|
| **ChatGPT / Claude / Gemini** (generic LLMs) | $0–20/mo | Chart screenshot analysis via prompt | Hallucinated price levels ("~23% S/R accuracy"); inconsistent (same chart → different read "roughly half the time"); no fixed structure; prompt burden per upload; identical confident tone for right and wrong answers |
| **SnapPChart** | 2 free lifetime, $19.99/mo | Purpose-built screenshot grading (A–F, entry/stop/targets) | No live data; manual screenshots; **outputs entries/stops/targets = signal-adjacent positioning** |
| **ChartSnipe** | limited trial, $24/mo | 6 analysis modes incl. liquidity; live data 32 instruments; news dashboard | Restrictive free tier; "generous stop placement" criticized; forex-centric |
| **ChartAnalyst.ai / Chart AI mobile apps** | ~$5/wk mobile tiers | Upload → pattern/trend/S-R output | App-store reviews: generic advice "you already know," stopped recognizing charts, forced ads, forced ratings, fake 5-star reviews, no refunds |
| **TradingView (incumbent platform)** | $14.95+/mo | Charts + AI forecast bolt-on | Output "lacks structure"; probability widget, not analysis |
| **TrendSpider** | from $82/mo | Automated TA platform + AI sidekick | Price; 2–4 week learning curve; AI addon effectively paywalled; hostile refund experience reported |
| **Tickeron** | high, tiered | "AI signals" with confidence scores | Faulty signals *despite* high confidence scores; no-refund policy; billing confusion; cancellation difficulty |
| **Trade Ideas (Holly AI)** | $84–167/mo | Real-time AI scanning | US equities only; Windows-only; no free tier; pro-priced |
| **Signal services (Telegram/Fiverr/Myfxbook)** | $5–50/mo typical | "Buy here" calls | Documented scam taxonomy (doctored screenshots, kickback brokers, group-splitting, black-box "AI" claims); Myfxbook verification itself gamed; trust collapsed |
| **Human analysts (Upwork/Fiverr)** | $36–74/hr; $50+ per analysis gig | Bespoke chart reads, mentorship | Slow, expensive, unavailable at 2 a.m., quality inconsistent |

**Structural read:** the market has (a) untrusted signal-sellers, (b) expensive pro platforms, (c) cheap low-quality AI apps, and (d) generic LLMs that hallucinate levels. **Nobody occupies "trustworthy, structured, educational, methodology-grounded analysis at retail price."** That is precisely the ADR-003/004 position. The gap is real — but the space is crowding fast (at least 5 purpose-built screenshot tools launched recently), so the moat must be quality + trust + education, not existence.

---

## 2. Findings Register

Each finding: pain point, frequency (how often encountered across sources), severity (emotional/financial intensity), existing solutions and their weaknesses, willingness to pay (WTP), opportunity score (freq × severity × gap, 1–10), evidence, source, confidence.

### F1 — LLMs hallucinate price levels on charts
- **Pain:** traders using ChatGPT get confident but fabricated support/resistance ("a level with exactly zero touches at that price").
- **Frequency:** High (every generic-LLM discussion encountered). **Severity:** High (trading on a fake level costs money).
- **Existing solutions:** purpose-built tools with vision preprocessing. **Weakness:** young, unproven, some inherit the same failure.
- **WTP:** $20/mo already paid for ChatGPT Plus by these users. **Opportunity: 9** — *pixel-accurate level reading is the entire ballgame; a tool that misreads the chart is dead on arrival regardless of prose quality.*
- **Evidence:** "Three out of four times the level you are given is not actually on the chart" (vendor test, 100 charts: ~23% S/R accuracy, ~40% pattern ID, ~18% usable entry/stop). **Source:** ChartSnipe blog; corroborated by Forex Factory sentiment ("good at theory, mediocre at trading this specific chart"). **Confidence: Medium** (vendor-run test; independent corroboration directional only).

### F2 — Inconsistency destroys trust in AI analysis
- **Pain:** the same chart re-uploaded minutes later returns a different, sometimes opposite, analysis.
- **Frequency:** Medium-High. **Severity:** High (inconsistent = unusable in a pre-trade routine).
- **Existing solutions:** none solve it; purpose-built tools claim "consistent output" as a differentiator.
- **WTP:** included in tool subscriptions. **Opportunity: 9** — maps directly to NFR-5 (identical chart → structurally consistent analysis, versioned methodology). Almost no one can prove consistency; AVENAX can make it a headline claim *because the methodology is versioned*.
- **Evidence:** "The same chart at 9:30 AM and 9:45 AM produced a different write-up roughly half the time, sometimes with reversed direction." **Source:** SnapPChart comparison. **Confidence: Medium.**

### F3 — Signal services have poisoned trust in the entire category
- **Pain:** retail traders have been burned: doctored Myfxbook screenshots, group-splitting scams, kickback brokers, black-box "AI" win-rate claims, $2,000+ losses reported; even Myfxbook's verification is gamed and moderation distrusted.
- **Frequency:** High (dominant theme wherever signals are discussed). **Severity:** Very High (money lost + emotional).
- **Existing solutions:** review sites (Forex Peace Army) — reactive, post-loss. **Weakness:** nothing prevents; verification theater.
- **WTP:** these users were paying $20–100+/mo for signals before being burned. **Opportunity: 10** — the market explicitly asks for the *opposite* of signals: "They explain the math… logic visibility over magic black boxes." That sentence is AVENAX Trace's positioning (ADR-004) stated verbatim by the market.
- **Evidence:** 7-pattern scam taxonomy; "there are so many ways to trick the system that this verification platform cannot be trusted"; complaints that scam warnings on Myfxbook were never approved. **Sources:** Syntium Algo scam analysis, EA-Coder, Trustpilot Myfxbook summaries, Forex Peace Army. **Confidence: High** (3+ independent sources).

### F4 — Pro platforms price out retail traders and demand weeks of learning
- **Pain:** TrendSpider from $82/mo with a 2–4 week proficiency curve; Trade Ideas $84–167/mo, US-equities/Windows only; AI features paywalled on top.
- **Frequency:** High in reviews. **Severity:** Medium (blocks adoption rather than causing losses).
- **Existing solutions:** cheaper apps. **Weakness:** the cheap ones are the low-quality/scammy tier (F6).
- **WTP:** the complaint itself proves a ceiling: retail wants sub-$30/mo. **Opportunity: 8** — instant value (no learning curve: upload → analysis) at retail price is exactly the wedge.
- **Evidence:** "$82 a month for the most basic option"; "two to four weeks to become proficient"; Sidekick "should be included free… minimum 100 free messages." **Sources:** StockBrokers.com, Capterra/Trustpilot summaries, daytradingz. **Confidence: High.**

### F5 — Dark-pattern billing is the #1 review complaint against AI trading tools
- **Pain:** no-refund policies enforced from the first minute, "free trials" that charge immediately, cancellation mazes, confusing tier changes.
- **Frequency:** High (Tickeron, mobile apps, TrendSpider refund dispute). **Severity:** High (generates the angriest verbatims found anywhere in this research).
- **Existing solutions:** none — it's a business-model choice. **Opportunity: 8** — trust-first commerce (honest trial, one tier, painless cancel) is cheap to build and loudly differentiating in *this* category specifically. Aligns with Non-Negotiable Rule #4 (user trust > short-term growth).
- **Evidence:** "strict 'No Refund' policy the moment a payment is processed"; "charged immediately for services they thought were part of a free trial"; "never sure after making changes if they're going to end up with new charges." **Sources:** WallStreetZen/Trustpilot Tickeron summaries, Capterra TrendSpider reviewer. **Confidence: High.**

### F6 — Cheap mobile "Chart AI" apps burn users and salt the earth
- **Pain:** generic advice ("nothing you can't eyeball"), recognition randomly failing, forced ads, forced ratings before use, fake 5-star reviews, $5/week with no refunds.
- **Frequency:** Medium-High. **Severity:** Medium (small money, large cynicism).
- **Opportunity: 7** — quality bar is on the floor; but these apps also teach the market that "AI chart apps are junk," raising the proof burden for everyone. Differentiate with visible competence and zero dark patterns.
- **Evidence:** "only 5-star reviews are quick incomplete sentences"; "stopped recognizing the same charts it had previously analyzed"; "wasted $5 on a weekly plan… unable to get a refund." **Sources:** Google Play / App Store reviews of Chart AI-class apps. **Confidence: High** for the pattern.

### F7 — AI output is prose, not a trading-usable structure
- **Pain:** LLMs return essays; traders need a fixed, scannable structure they can check against their own read in seconds.
- **Frequency:** Medium-High. **Severity:** Medium.
- **Existing solutions:** SnapPChart's A–F grade + entry/stop/target. **Weakness:** that format *is* a signal — it inherits the trust problem and the regulatory posture AVENAX deliberately avoids.
- **Opportunity: 8** — Trace's fixed six-section structure (Structure/Liquidity/Bias/Scenarios/Risk education/Reasoning) is the differentiated middle: structured like a tool, educational like a mentor, signal-free by design.
- **Evidence:** LLMs "built for description, not structured extraction with a fixed schema"; TradingView AI "setup output lacks structure." **Source:** SnapPChart comparison. **Confidence: Medium.**

### F8 — Prompt burden and workflow friction
- **Pain:** every ChatGPT chart analysis requires re-writing a careful prompt; quality depends on prompt skill.
- **Frequency:** Medium. **Severity:** Low-Medium. **Opportunity: 6** — "no prompt, one action, same methodology every time" is an easy, honest claim.
- **Evidence:** "AI can give solid analysis from just an image *if you prompt well*"; purpose-built tools tout "single-button processing." **Sources:** Forex Factory thread summaries, SnapPChart. **Confidence: High.**

### F9 — Human analysis is expensive, slow, and unavailable when needed
- **Pain:** mentorship/bespoke analysis costs $36–74/hr (Upwork) or $50+/gig (Fiverr); unavailable at the 2 a.m. setup; quality varies.
- **Frequency:** Medium (structural fact more than complaint thread). **Severity:** Medium-High.
- **WTP anchor:** one hour of a human analyst ≈ 2–4 months of a $19–29/mo subscription — the value framing writes itself.
- **Opportunity: 8. Evidence:** Upwork rate cards ($36–74/hr traders; $20–60 analysts); Fiverr gigs $5–50. **Sources:** Upwork hire pages, Fiverr listings. **Confidence: High.**

### F10 — AI as "second set of eyes" is the accepted, wanted framing
- **Pain (inverted — a desire):** traders don't want AI to trade for them; they want a disciplined check on their own read, especially for multi-rule methodologies where they miss conditions.
- **Frequency:** Medium-High in FF/Reddit sentiment. **Severity:** n/a (pull, not pain).
- **Opportunity: 9** — the market's own language ("almost like having a second set of eyes on every chart") is the safest and truest positioning; it perfectly matches decision-support (ADR-004) and sidesteps the signal-scam taint.
- **Evidence:** "surprisingly effective—almost like having a second set of eyes"; "especially useful for strategies that involve many rules… easy to overlook certain conditions." **Source:** Forex Factory thread summaries. **Confidence: Medium-High.**

### F11 — No market context is a known blind spot of screenshot analysis
- **Pain:** a screenshot grader can't see news, central-bank moves, or the risk regime; analyses can be structurally right and contextually blindsided.
- **Frequency:** Medium. **Severity:** Medium.
- **Existing solutions:** ChartSnipe bolts on a news dashboard; TradingView has live data. **Opportunity: 5 for MVP (defer)** — real, but solving it requires live data feeds (explicitly out of MVP scope) and dilutes the educational-structural focus. Mitigation now: *state the boundary honestly in every analysis* (an integrity feature, cheap, on-brand).
- **Evidence:** "None of them reads the news wire." **Sources:** ChartSnipe, SnapPChart. **Confidence: High** that the limitation exists; Medium that it blocks purchases at this price point.

### F12 — HN-grade skepticism: AI trading claims read as scams by default
- **Pain:** technically sophisticated audiences treat "AI + trading" as presumptively "garbage in, garbage out."
- **Frequency:** Medium. **Severity:** Medium (affects credibility, hiring, press).
- **Opportunity: 6** — the educational, no-signals, no-win-rate-claims posture is the only stance this audience respects. Never publish accuracy marketing without methodology.
- **Evidence:** "garbage in, garbage out"; NinjaTrader publishing "AI trading scam red flags." **Sources:** HN threads, NinjaTrader blog. **Confidence: High.**

---

## 3. Top 20 Recurring Pain Points (ranked by frequency × severity)

Confidence: H = 3+ independent sources · M = 2 / prompted · L = single source or inferred.

1. Burned by signal services — scams, fake track records, no accountability (H)
2. AI chart tools hallucinate price levels that aren't on the chart (M)
3. Same chart → different analysis every time; can't build a routine on it (M)
4. Dark-pattern billing: fake trials, no refunds, cancellation mazes (H)
5. Pro-grade tools cost $80–170/mo — priced for professionals, marketed to retail (H)
6. Weeks of learning curve before a tool pays back (H)
7. AI output is generic prose — "nothing you can't eyeball and see right away" (H)
8. Overconfident tone whether right or wrong; no way to tell (M)
9. Quality analysis requires prompt engineering skill the trader doesn't have (H)
10. Human mentorship is expensive ($36–74/hr) and unavailable at the moment of need (H)
11. Signal services teach nothing — dependency instead of skill (M)
12. Can't verify any provider's claimed accuracy; verification platforms themselves gamed (H)
13. Mobile chart-AI apps fail at recognition, then show ads anyway (M)
14. Fake reviews make tool selection itself untrustworthy (M)
15. Structural analysis skill (structure/liquidity/bias) takes years; inconsistent under emotion even when learned (M — core premise, corroborated by mentorship demand)
16. Screenshot analysis is blind to news/context and doesn't say so (H)
17. AI addons paywalled on top of already-expensive platforms (M)
18. US-equities/Windows-only tools exclude forex/crypto/global retail (M)
19. Indicator overload produces numbers, not understanding (M)
20. Fear of regulatory/advice liability keeps honest analysis providers vague and useless (L — inferred from scam-adjacent hedging patterns)

## 4. Top 20 Requested Features (stated or strongly implied by the market)

1. Accurate reading of the *actual* chart in the image — real levels, "pixel-to-price" (M)
2. Consistent, repeatable analysis of the same chart (M)
3. Fixed, scannable output structure — not an essay (M)
4. Explained reasoning — "show the logic, not a black box" (H)
5. A "second set of eyes" before entering a trade (M-H)
6. Invalidation conditions — "what would prove this read wrong" (M)
7. Confidence expressed honestly (probability language, not certainty) (M)
8. One-action workflow: upload → analysis, no prompting (H)
9. Works with any platform's chart (TradingView, MT4/5, broker apps) (H — every tool advertises it)
10. Smart-money/liquidity concepts, not just retail S/R lines (M — ChartSnipe "Liquidity Snipe" mode exists for a reason)
11. Speed — analysis in seconds (M)
12. Free taste before paying — meaningful, not 2-lifetime-uses (M)
13. Risk-management framing with every analysis (M)
14. Analysis history to review past reads (L-M)
15. Honest statement of limits (what the tool can't see) (M — inverse of F11)
16. Multi-timeframe context (M — recurring but heavy; see rejections)
17. Live data / news context (M — same)
18. Educational explanations that build skill over time (M)
19. Fair billing: cancel anytime, real trial, no surprise charges (H)
20. Mobile-friendly access (L-M — apps exist because demand exists; responsive web suffices at MVP)

## 5. Top 20 Complaints About Existing Products

1. "Three out of four times the level you are given is not actually on the chart" — ChatGPT-class tools (M)
2. Same chart re-analyzed → reversed direction "roughly half the time" (M)
3. "Faulty predictions… even despite high confidence scores" — Tickeron (H)
4. "Strict 'No Refund' policy the moment a payment is processed" (H)
5. Charged immediately on a "free trial" (H)
6. "I have not been treated this terrible by a company in a LONG time" — refund dispute, TrendSpider reviewer (M)
7. $82+/mo entry price for basics (H)
8. 2–4 weeks to become proficient (H)
9. AI assistant costs extra on top of subscription (M)
10. "Nothing you can't eyeball and see right away" — generic advice (M)
11. App "stopped recognizing the same charts it had previously analyzed" (M)
12. Forced to watch ads even when recognition fails (M)
13. Forced to rate the app before using it (M)
14. Fake 5-star reviews drowning honest ones (M)
15. Doctored Myfxbook screenshots selling losing signals (H)
16. Scam warnings suppressed by the platform hosting the scammers (M)
17. "Signal hiding / group splitting" — win-rate laundering (M)
18. Windows-only, US-equities-only exclusions (M)
19. Subscription tier changes producing surprise charges (M)
20. Cancellation difficulty / auto-renewal traps (H)

## 6. Top 20 Differentiation Opportunities for AVENAX Trace

1. **Consistency as a product law** — versioned methodology (NFR-5), publicly stated: same chart, same read. No competitor can claim it credibly (9/10)
2. **Level accuracy as the engineering obsession** — win F1 or nothing else matters (9/10)
3. **Anti-signal positioning stated loudly** — "we never say buy or sell" converts the market's deepest wound into identity (ADR-004 is a market advantage, not just compliance) (10/10)
4. **Reasoning layer** — every conclusion explains itself; "logic visibility over magic black boxes" verbatim from the market (9/10)
5. **Fixed six-section structure** — scannable like a tool, deep like a mentor (8/10)
6. **Invalidation conditions in every scenario** — teaches falsification; no consumer tool does this as doctrine (8/10)
7. **Honest-limits statement** — "this analysis cannot see news or fundamentals" printed on every output; integrity as feature (7/10)
8. **Trust-first billing** — real free trial (no card), one tier, one-click cancel; the entire category's angriest complaints, inverted (8/10)
9. **Retail price point ($15–30/mo)** between junk apps and pro platforms (8/10)
10. **Zero learning curve** — upload → analysis in <60s vs 2–4 weeks proficiency (8/10)
11. **Educational framing that compounds** — users get *better at trading*, creating retention no signal service can match (8/10)
12. **Confidence language, never certainty** — visibly different tone from the overconfident failure mode users mock (7/10)
13. **Platform-agnostic screenshots** — any chart, any broker, any market incl. forex/crypto (vs US-equities-only incumbents) (7/10)
14. **Liquidity/structure methodology** (SMC-literate) — matches what the priority segment actually studies (7/10)
15. **No accuracy-percentage marketing** — publish methodology, not win rates; the only stance skeptics respect (7/10)
16. **Design/brand quality** — a calm, precise instrument in a category of glowing dashboards and countdown timers (constitution as moat) (7/10)
17. **Founder-as-user authenticity** — build-in-public journey vs anonymous signal sellers (6/10)
18. **Educator workflow later** — consistent teaching examples; force-multiplier segment (6/10, Phase 2 of GTM)
19. **Analysis history as a learning journal** — review your past reads vs what happened (6/10)
20. **Observability/audit trail** (NFR-8) as future public trust asset — "we audit our own quality" (5/10)

---

## 7. MVP Recommendations

### Confirmed for MVP v1 (evidence-backed, already in `PRODUCT_REQUIREMENTS.md` §5)

| Capability | Evidence verdict |
|---|---|
| Screenshot upload (drag/drop/paste, any platform) | Confirmed — table stakes, universally advertised (F8, feature #9) |
| Fixed six-section structured analysis | Confirmed — direct answer to F7; the structure *is* the product |
| Reasoning/teaching layer | Confirmed — strongest verbatim market demand (F3, F10) |
| Scenarios **with invalidation conditions** | Confirmed — differentiation #6; elevate from sub-bullet to named selling point |
| Risk education section | Confirmed (feature #13) |
| Analysis history | Confirmed, keep minimal (feature #14 is only L-M demand — don't gold-plate) |
| Email auth + ONE paid tier + card payment | Confirmed — single tier is itself an answer to complaint #19 |
| Free trial: 3 analyses, **no credit card** | Confirmed and strengthened — competitors' stingy/fake trials are a top-3 complaint; "no card required" must be explicit |

### Add to MVP v1 (new, evidence-driven, small)

1. **Consistency guarantee, productized** — methodology version stamped on every analysis output. Cost: trivial. Basis: F2/NFR-5; no credible competitor claim exists.
2. **Honest-limits line on every analysis** — "structural analysis of this image only; cannot see news, fundamentals, or live data." Cost: copy. Basis: F11; integrity differentiation #7.
3. **Trust-first billing policy as published copy** (cancel anytime, no surprise charges) — a pricing-page sentence, not an engineering task. Basis: F5.
4. **Unreadable-image handling done well** (already FR-3) — elevated priority: recognition failure is a top mobile-app complaint (#11); our failure mode must be a helpful direction, never a shrug after payment.

### Explicitly REJECTED for MVP v1 (with reasons)

| Rejected | Reason |
|---|---|
| Entry/stop/target price calls, grades like "A+ long" | The competitors doing this (SnapPChart) are re-creating signals with extra steps. Violates ADR-004; inherits the category's trust collapse (F3). **Permanent rejection, not deferral.** |
| Win-rate / accuracy-percentage marketing | Unverifiable claims are scam-pattern #5; skeptics (F12) treat them as fraud markers. Publish methodology instead. **Permanent.** |
| Live market data feeds | Confirms existing out-of-scope: heavy cost, dilutes structural-education focus; mitigated by honest-limits line. Re-evaluate post-PMF. |
| News/fundamental context dashboard | Same as above (ChartSnipe differentiates here — let them own it; our wedge is structure + trust). Parked. |
| Multi-timeframe correlated analysis | Real demand (feature #16) but multiplies inference cost and failure surface; single-chart excellence first. Parked — likely the **first** post-PMF addition. |
| Real-time alerts, broker integration, auto-trading | Auto-trading is scam-adjacent (F3, remote-access scam pattern); alerts need live data. Parked/never (auto-trading: never). |
| Mobile apps | Responsive web only (existing scope confirmed); the mobile-app tier of this market is where trust goes to die (F6) — do not join it at MVP. |
| API access, educator seats, custom methodology, backtesting, bots, i18n | Confirmed out of scope per §6; no evidence overturned any of these. |
| Ads, forced ratings, incentivized reviews | Category-poisoning practices (F6). **Permanent rejection** — also Brand law. |

### Pricing evidence (for the pricing decision when it comes — not decided here)

Anchors found: junk tier $5/week; purpose-built screenshot tools $19.99–24/mo; ChatGPT Plus $20/mo; TradingView from $14.95/mo; pro platforms $82–167/mo; human analyst $36–74/hr. **Viable corridor for Trace: $15–29/mo**, framed against mentorship cost ("one hour of a human analyst pays for months"). Single tier confirmed as correct.

---

## 8. Gaps and Recommended Next Research Steps

1. **X/Twitter and direct Reddit threads were not accessible** — the loudest trader communities are only indirectly represented. Mitigation: founder (who is the target user) validates the Top-20 lists against his own communities; 5–10 waitlist interviews at Phase 1 start.
2. **Accuracy statistics are competitor-published** — before building, run our own baseline test (50–100 charts through GPT/Claude/Gemini vision) to know the real bar. This also produces honest marketing material later.
3. **PeoplePerHour unqueried; G2 paywalled; competitor GitHub issues don't exist** (closed-source) — negligible expected signal loss, recorded for completeness.
4. **Willingness-to-pay is anchored, not proven** — the free→paid conversion assumption (≥3%, PRD §7) still needs live validation; nothing found contradicts it.
5. **Crowding risk is the finding to watch:** at least five purpose-built screenshot-analysis tools now exist. Speed to a *trustworthy* v1 matters more than feature count — which is exactly what the One Product Rule already prescribes.

---

*Sources consulted (accessible ones): ChartSnipe blog (vendor test), SnapPChart comparison (vendor test), Forex Factory threads (search-mediated), Capterra/Trustpilot/StockBrokers/daytradingz TrendSpider reviews, WallStreetZen/Trustpilot/BullishBears Tickeron reviews, Syntium Algo & EA-Coder & Forex Peace Army scam analyses, Myfxbook Trustpilot reviews, Google Play / App Store Chart-AI app reviews, Upwork rate pages, Fiverr gig listings, Hacker News threads, NinjaTrader scam-red-flags blog. Vendor-published statistics flagged as Medium confidence throughout.*
