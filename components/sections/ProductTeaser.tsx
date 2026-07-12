import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stack } from "@/components/ui/Stack";
import { SITE } from "@/constants/site";

const ANALYSIS_SECTIONS = [
  "01 Market Structure",
  "02 Liquidity Map",
  "03 Bias",
  "04 Scenarios",
  "05 Risk Education",
  "06 Reasoning",
] as const;

/**
 * Product One, introduced with ADR-004 vocabulary only. The instrument card
 * shows the product's real fixed output shape — evidence, not marketing.
 */
export function ProductTeaser() {
  return (
    <Container as="section" id={SITE.product.slug} className="py-24 md:py-32">
      <Stack gap="8" className="max-w-2xl">
        <Stack gap="4">
          <h2 className="text-display font-bold tracking-tight text-primary">
            {SITE.product.name}
          </h2>
          <p className="text-lg text-primary">AI that shows its work.</p>
          <p className="text-base text-secondary">
            Human judgment comes first. AVENAX builds AI that strengthens it
            — never replaces it.
          </p>
          <p className="text-base text-secondary">
            {SITE.product.shortName}{" "}
            turns a chart screenshot into structured understanding. Every
            important conclusion must be explainable or explicitly uncertain.
            Every chart follows the same methodology.
          </p>
          <p className="text-base text-primary">
            Confidence begins with understanding.
          </p>
        </Stack>
        <Card variant="raised" className="p-6">
          <p className="mb-4 font-mono text-xs tracking-wide text-tertiary uppercase">
            Every analysis. Same structure.
          </p>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 font-mono text-sm text-secondary sm:grid-cols-2">
            {ANALYSIS_SECTIONS.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </Card>
        <p className="font-mono text-sm text-secondary">
          No signals. No &ldquo;buy here.&rdquo; No black boxes. We explain.
          You decide.
        </p>
        <p className="text-sm text-secondary">
          <Link
            href="/building"
            className="transition-colors duration-(--duration-fast) ease-out hover:text-primary"
          >
            In development. Building in public &rarr;
          </Link>
        </p>
      </Stack>
    </Container>
  );
}
