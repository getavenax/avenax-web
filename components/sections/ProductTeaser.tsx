import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stack } from "@/components/ui/Stack";

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
    <Container as="section" className="py-24 md:py-32">
      <Stack gap="8" className="max-w-2xl">
        <Badge variant="outline" className="w-fit font-mono uppercase tracking-wide">
          Product One
        </Badge>
        <Stack gap="4">
          <h2 className="text-display font-bold tracking-tight text-primary">
            AVENAX Insight
          </h2>
          <p className="text-lg text-primary">
            Turn a chart screenshot into structured understanding — and learn
            why.
          </p>
          <p className="text-base text-secondary">
            Upload a chart screenshot. Insight returns a structural read — and
            the reasoning behind every conclusion. It teaches while it
            analyzes.
          </p>
        </Stack>
        <Card variant="raised" className="p-6">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 font-mono text-sm text-secondary sm:grid-cols-2">
            {ANALYSIS_SECTIONS.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </Card>
        <p className="text-sm text-tertiary">
          Educational analysis and decision support. Not financial advice. Not
          signals. Not investment recommendations.
        </p>
      </Stack>
    </Container>
  );
}
