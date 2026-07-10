import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Stack } from "@/components/ui/Stack";

const BELIEFS = [
  "AI should not replace people. It should amplify them.",
  "Technology should remove complexity. Automation should create freedom.",
  "Software should create value even while its creator is sleeping.",
] as const;

/** The belief, set quietly (PROJECT_VISION §2). Static by design. */
export function ManifestoExcerpt() {
  return (
    <Container as="section" width="narrow" id="manifesto" className="py-24 md:py-32">
      <Stack gap="8">
        <Divider />
        <h2 className="text-h2 font-bold text-primary">
          The future belongs to companies that build intelligent systems, not
          just software.
        </h2>
        <Stack gap="4">
          {BELIEFS.map((line) => (
            <p key={line} className="text-lg text-secondary">
              {line}
            </p>
          ))}
        </Stack>
        <p className="font-mono text-sm text-tertiary">
          — From the AVENAX Founding Manifesto
        </p>
      </Stack>
    </Container>
  );
}
