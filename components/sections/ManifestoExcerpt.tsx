import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Stack } from "@/components/ui/Stack";

const QUOTED_BELIEFS = [
  "AI should not replace people. It should amplify them.",
  "Technology should remove complexity. Automation should create freedom.",
] as const;

/**
 * User-centered belief section (founder-approved copy, 2026-07-11).
 * The heading and supporting sentence are landing-page editorial copy;
 * only the quoted lines are verbatim manifesto excerpts — the attribution
 * is visually scoped to them via the shared quote block.
 */
export function ManifestoExcerpt() {
  return (
    <Container as="section" width="narrow" id="manifesto" className="py-24 md:py-32">
      <Stack gap="8">
        <Divider />
        <h2 className="text-h2 font-bold text-primary">
          The best AI makes people more capable &mdash; not less in control.
        </h2>
        <p className="text-lg text-secondary">
          AVENAX builds AI products that explain their reasoning, strengthen
          human judgment, and keep people in control.
        </p>
        <figure className="border-s border-edge-strong ps-6">
          <blockquote>
            <Stack gap="4">
              {QUOTED_BELIEFS.map((line) => (
                <p key={line} className="text-lg text-secondary">
                  &ldquo;{line}&rdquo;
                </p>
              ))}
            </Stack>
          </blockquote>
          <figcaption className="mt-4 font-mono text-sm text-tertiary">
            &mdash; From the AVENAX Founding Manifesto
          </figcaption>
        </figure>
      </Stack>
    </Container>
  );
}
