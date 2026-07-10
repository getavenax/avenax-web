# Product Psychology — Habit, Delight, Trust, and the Ethical Line

| | |
|---|---|
| **Research Date** | 2026-07-09 |
| **Research Version** | 1.0 |
| **Confidence Level** | Medium-High — canonical behavioral-design frameworks plus their published criticisms |
| **Source Coverage** | Hook Model analyses + ethical critiques (incl. white-hat/black-hat framing), habit-formation and retention-measurement practice, flow/intrinsic-motivation literature (framework level) |
| **Known Limitations** | Framework-level synthesis; AVENAX-specific behavioral data does not exist until Insight ships with its own (consented) telemetry |
| **Next Review Date** | 2026-10-07 |

---

## F1 — The Hook Model works — which is exactly why it must be filtered
**Evidence:** Trigger → Action → Variable Reward → Investment reliably builds usage habits; its stages map onto established persuasion and reinforcement research ([Hook Model analyses](https://dovetail.com/product-development/what-is-the-hook-model/)). The published criticism is equally consistent: the model's reward/investment loop skews toward "Black Hat" motivators (fear of missing out, compulsion), and "without the White Hat vs. Black Hat distinction, designers build addictive products without knowing they are building addiction" ([Yu-kai Chou's critique](https://yukaichou.com/gamification-analysis/hook-model-octalysis-habit-addiction/); [ethical UX analysis](https://www.owlestudio.com/psychology-of-habit-forming-products/18618/)). **Confidence: High** for both efficacy and risk.
**Why it works:** variable reward exploits the dopamine system's response to unpredictable outcomes — the slot-machine circuit.
**Why it fails (for us):** trading already IS a variable-reward slot machine — that's precisely the psychological injury our users carry (see `MARKET_RESEARCH.md` F3). A trading tool that adds engineered compulsion on top is both unethical and positioning suicide.
**AVENAX fit — the filtered version:** keep the loop skeleton, swap the fuel: Trigger = the user's own pre-trade routine (external trigger: the chart they're already looking at). Action = upload, < 60s. Reward = **predictable competence**, not variable jackpot — the analysis is reliably good (NFR-5), and the variable element is the *market*, not our product. Investment = analysis history and growing skill.
**Ethical concerns:** central — this finding exists to draw the line. **Recommended action:** adopt "habit through competence, never through variable reward" as Phase 1 product law (founder sign-off when Phase 1 architecture is written).

## F2 — Retention should be measured as automaticity, not opens
**Evidence:** habit research recommends tracking repeat-use-in-context (same trigger → same action, time-to-habitual-use) rather than raw opens or installs ([habit measurement practice](https://www.owlestudio.com/psychology-of-habit-forming-products/18618/)). **Confidence: Medium.**
**Why it works:** a user who uploads a chart before every trade has a habit; a user who opens the app because a notification poked them has a leash.
**AVENAX fit:** Insight's north-star behavior is already defined this way (PRD retention metric: ≥1 chart/week in month 2 — context-tied). **Action:** when Phase 1 telemetry is designed (NFR-8), instrument "analyses per trading session" not "session count."

## F3 — Flow needs matched challenge; competence needs visible progress
**Evidence:** flow-state and intrinsic-motivation literature (Csikszentmihalyi; self-determination theory's competence/autonomy/relatedness) — framework level, robust across decades. The Blue's Clues mastery arc (`CHILDREN_PSYCHOLOGY.md` F1–F2) is the same curve measured in four-year-olds. **Confidence: High at framework level.**
**Why it works:** people return voluntarily to activities where they feel *themselves improving* under their own control — intrinsic motivation outlasts every external reward schedule.
**Why it fails:** products that do everything for the user destroy the competence loop (dependency without growth = the signal-service model — and its churn).
**AVENAX fit:** the Reasoning section is the competence engine — Insight must make users *better readers of charts*, visibly, or it becomes a dependency product with dependency churn. **Ethics:** teaching-first is the white-hat retention strategy by definition. **Action:** already MVP scope; protect it in every scope negotiation.

## F4 — Perceived quality is mostly consistency + restraint + speed
**Evidence:** aesthetic-usability effect (attractive interfaces are perceived as more usable), peak-end rule (experiences are remembered by peak moment + ending), and the review-archaeology in `CANCELLATION_RESEARCH.md` (billing surprises destroy perceived quality faster than missing features). **Confidence: Medium-High** (established effects + our own category evidence).
**Why it works:** users can't audit our AI directly, so they audit proxies: does the interface waver, does anything feel rushed, does the ending of each session feel resolved? Premium feeling = thousands of small consistencies + the absence of anxiety.
**AVENAX fit:** the design system is the delivery mechanism; the "ending emotion" of every analysis (calm resolution — `ANIMATION.md` F1) is the peak-end application. **Ethics:** clean. **Action:** none — reinforces ratified law.

## F5 — Trust compounds through voluntary vulnerability
**Evidence:** the strongest trust signals in our research corpus are all *costly signals*: publishing limitations ("what this analysis cannot see"), refusing profitable dark patterns, honest failure documentation in build-in-public content (`CREATOR_ECONOMY.md` F2). **Confidence: Medium** (convergent, not experimental).
**Why it works:** anyone can claim quality; only the genuinely confident can afford to advertise their limits. Costly signaling is the oldest honesty protocol there is.
**Why it fails:** vulnerability theater (fake humility, engineered "mistakes") reads as manipulation and detonates on discovery.
**AVENAX fit:** honest-limits line on every analysis, published rejection lists, monochrome no-hype surfaces. **Action:** already in MVP scope via ADR-019/MARKET_RESEARCH; keep.
