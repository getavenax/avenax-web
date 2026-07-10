import type { Metadata } from "next";
import { Footer } from "@/components/patterns/Footer";
import { NavBar } from "@/components/patterns/NavBar";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Stack } from "@/components/ui/Stack";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Building AVENAX",
  description:
    "The AVENAX engineering journal: what changed, why it changed, what we learned, and what happens next. Built in public.",
};

/*
 * Engineering journal, not a blog (founder directive): every entry answers
 * what changed / why / what we learned / what happens next. Factual only.
 */
interface JournalEntry {
  date: string;
  title: string;
  what: string;
  why: string;
  learned: string;
  next: string;
}

const JOURNAL: readonly JournalEntry[] = [
  {
    date: "2026-07",
    title: "Company documentation system",
    what: "Vision, engineering rules, append-only decision log (ADRs), product requirements, brand constitution.",
    why: "Decisions must outlive work sessions. Code without recorded reasoning becomes archaeology.",
    learned:
      "An append-only ADR log ends re-litigation: a decision is either accepted, or superseded by a new entry — never quietly edited.",
    next: "Documentation only when implementation demands it. Execution first.",
  },
  {
    date: "2026-07",
    title: "Design system before pages",
    what: "Token architecture (primitives → semantic → component), self-hosted 100% OFL font stack, twelve UI primitives, dark-first dual theme.",
    why: "Every future AVENAX product reuses this system. Pages are assembled, not designed.",
    learned:
      "License verification is engineering, not paperwork: it caught a font EULA that forbids public-repo distribution, and the display face was replaced before a single component used it.",
    next: "Sections, then pages — strictly inside the token system.",
  },
  {
    date: "2026-07",
    title: "Waitlist infrastructure",
    what: "Cloudflare Worker + D1. Stores an email, a timestamp, a source tag. Nothing else — no IP, no fingerprinting, no tracking.",
    why: "A static site needs no server, and trust is the product: collect the minimum, state it plainly.",
    learned:
      "CORS protects browsers, not servers — real protection is validation, rate limiting, and a honeypot. Duplicate signups are deliberately indistinguishable from new ones, so the endpoint leaks nothing.",
    next: "Analytics only behind a hard Performance-100 gate. If performance drops, analytics does not ship.",
  },
  {
    date: "2026-07",
    title: "Landing page shipped, scaffold removed",
    what: "The real site: hero, manifesto, Insight introduction, live waitlist. Every framework placeholder deleted.",
    why: "Visible progress every cycle, and the waitlist is our first validation instrument.",
    learned:
      "Our hero entrance animation was delaying the largest paint on slow connections. Brand motion is never allowed to cost performance — the headline now paints instantly and the signature line animates after it. Lighthouse 100 is treated as a product requirement.",
    next: "AVENAX Insight — Product One: educational AI chart analysis. Private beta follows the waitlist.",
  },
] as const;

export default function BuildingPage() {
  return (
    <>
      <NavBar />
      <main id="main" className="flex-1">
        <Container as="section" width="narrow" className="py-24 md:py-32">
          <Stack gap="8">
            <h1 className="text-h1 font-bold tracking-tight text-primary">
              Building AVENAX.
            </h1>
            <p className="text-lg text-secondary">
              This is an engineering journal, not a blog. Every entry answers
              four questions: what changed, why, what we learned, and what
              happens next.
            </p>
            <Divider />
            <Stack gap="12">
              {JOURNAL.map((entry) => (
                <article key={entry.title}>
                  <Stack gap="3">
                    <p className="font-mono text-sm text-tertiary">
                      {entry.date}
                    </p>
                    <h2 className="text-h3 font-bold text-primary">
                      {entry.title}
                    </h2>
                    <dl className="grid grid-cols-[6rem_1fr] gap-x-4 gap-y-2">
                      <dt className="font-mono text-sm text-tertiary">What</dt>
                      <dd className="text-base text-secondary">{entry.what}</dd>
                      <dt className="font-mono text-sm text-tertiary">Why</dt>
                      <dd className="text-base text-secondary">{entry.why}</dd>
                      <dt className="font-mono text-sm text-tertiary">
                        Learned
                      </dt>
                      <dd className="text-base text-secondary">
                        {entry.learned}
                      </dd>
                      <dt className="font-mono text-sm text-tertiary">Next</dt>
                      <dd className="text-base text-secondary">{entry.next}</dd>
                    </dl>
                  </Stack>
                </article>
              ))}
            </Stack>
            <Divider />
            <Stack gap="4">
              <p className="text-base text-secondary">
                The website code is public:{" "}
                <a
                  href={SITE.repository}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary underline underline-offset-4 transition-colors duration-(--duration-fast) ease-out hover:text-secondary"
                >
                  github.com/getavenax/avenax-web
                </a>
                . Product code stays private; decisions and progress are
                published here.
              </p>
              <p className="text-sm text-tertiary">
                AVENAX Insight provides educational analysis and decision
                support — never financial advice, signals, or investment
                recommendations.
              </p>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
