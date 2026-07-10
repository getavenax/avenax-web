import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Stack } from "@/components/ui/Stack";
import { WaitlistForm } from "@/components/patterns/WaitlistForm";

/** The page's destination: one heading, one live form, nothing else. */
export function CTASection() {
  return (
    <Container as="section" width="narrow" id="waitlist" className="py-24 md:py-32">
      <Stack gap="8">
        <Divider />
        <Stack gap="4">
          <h2 className="text-h1 font-bold tracking-tight text-primary">
            Join the waitlist.
          </h2>
          <p className="text-base text-secondary">
            The next standard is built with its first users. Early access to
            Insight — and a voice in what it becomes.
          </p>
        </Stack>
        <WaitlistForm source="landing" className="max-w-md" />
      </Stack>
    </Container>
  );
}
