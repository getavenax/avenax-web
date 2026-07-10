# AVENAX — The Three Laws

> Status: **PROPOSAL — refined per founder review 2026-07-10; awaiting final ratification.** Upon acceptance: permanent company philosophy, subordinate only to the Founding Manifesto, sibling to `BRAND_DNA.md` (which governs how AVENAX looks; this document governs how AVENAX products behave). Amendable only through `DECISIONS.md`.
> Every AVENAX product — present and future — is evaluated against these laws before it ships.

---

## Purpose

AVENAX exists because intelligent systems will shape how people think, work, and decide — and someone must build them so that people come out stronger. We build autonomous AI products that amplify human capability: systems that save time, remove complexity, and create measurable value, so the people who use them think better, work faster, create more, and live freer. The laws below exist to keep every product true to this purpose. They support it; they never replace it.

---

AVENAX builds intelligent systems. Systems hold power over the people who use them. These laws exist so that the power always points the right way.

They are laws, not values. Values are aspirations; laws are tests. A product either passes or it does not ship.

---

## Law 1 — Human judgment comes first.

**Meaning:** wherever an outcome matters to a person — their money, their decisions, their work, their time — the decision belongs to the person. AVENAX AI strengthens human judgment. It never replaces it, never pressures it, never routes around it.

**It forbids:** systems that decide for the user; outputs that instruct rather than inform; automation of choices whose consequences the user must live with; any interface that makes the machine's conclusion feel like a command.

**It demands:** outputs framed as understanding, scenarios, and reasoning; interfaces where the user's own judgment is the final step by design, not by disclaimer.

**Review question:** *Who makes the decision that matters — the person, or the product?* If the answer is not clearly the person, redesign.

**Product implications:** Insight outputs structure, scenarios, and invalidation conditions — never entry or exit instructions. Any future agentic product places a human confirmation gate before every consequential action. No AVENAX product ever auto-executes a decision the user must live with.

## Law 2 — Every important conclusion must be explainable or explicitly uncertain.

**Public expression (today):** *"AI that shows its work."* The slogan may evolve. The law does not.

**Meaning:** every AVENAX AI product explains its reasoning whenever possible. Explanation is not documentation added after the fact — it is the product's spine. Where reasoning cannot be shown, the system either declares its uncertainty explicitly or does not present the conclusion at all. Unexplainable, unqualified output is a design defect, not a shipping default.

**It forbids:** black boxes; confidence theater (identical certainty for strong and weak conclusions); accuracy claims without visible method; the slogan becoming marketing detached from behavior.

**It demands:** reasoning as load-bearing scope in every AI surface; honest uncertainty as a first-class output state, not a failure state; versioned methodology, so consistency is a promise and change is deliberate; architecture reviews that check explainability the way they check security.

**Review question:** *Can the user understand why?* Visibility is not enough — comprehension is the goal. If understanding cannot be produced: is the uncertainty stated plainly — or should the system stay silent?

**Product implications:** Insight's Reasoning section is undescopeable scope; uncertainty states are designed UI, not error fallbacks; the methodology is versioned and stamped on every output; the pre-launch accuracy benchmark (roadmapped) is this law's first measurement instrument.

## Law 3 — Confidence begins with understanding.

**Meaning:** the outcome AVENAX sells is justified confidence — and it can only begin in the user's own understanding. Confidence handed to a user without understanding is false confidence, and false confidence harms the people who trust us. Products must make users more capable, not more dependent.

**It forbids:** dependency by design; retention through compulsion; outputs that give answers while withholding the ability to reach them; engagement mechanics that substitute stimulation for comprehension.

**It demands:** teaching as product behavior — every use leaves the user slightly better at the craft; retention through competence; success measured by what users *become*, not just what they consume.

**Review question:** *After a month of use, does the user understand more — or merely depend more?*

**Product implications:** every Insight analysis carries its teaching layer; retention is measured as competence-in-context (analyses per trading routine), never as raw opens; no engagement mechanics that substitute stimulation for comprehension; the cancel flow asks what the user learned — churn data doubles as a comprehension measure.

---

## The proof

The laws compress into the sentence AVENAX says in public, and must be able to say truthfully forever:

**We explain. You decide.**

## Application

- Every product architecture review verifies all three laws (with ADR-004's positioning check and ADR-021's explainability check as the first instruments).
- Every new product idea is asked the three tests before the Founder Decision Filter.
- Where a law conflicts with growth, revenue, or convenience: the law wins. That is what makes it a law.

*First application: AVENAX Insight — structured, explained chart analysis; the Reasoning section is undescopeable; the landing page carries Law 2's public expression and Law 3 verbatim.*

*Lineage: Founding Manifesto ("AI should amplify people"), ADR-004 (educational positioning), ADR-021 (Product Law: AI that shows its work).*
