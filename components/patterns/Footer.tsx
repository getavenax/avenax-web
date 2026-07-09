import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Inline } from "@/components/ui/Inline";
import { Stack } from "@/components/ui/Stack";
import { SITE } from "@/constants/site";

/** Minimal by law (DESIGN_SYSTEM §4): identity, one outbound link, copyright. */
export function Footer() {
  return (
    <footer className="w-full">
      <Container>
        <Stack gap="6" className="py-12">
          <Divider />
          <Inline className="justify-between" wrap gap="4">
            <span className="font-display text-sm font-bold text-primary">
              {SITE.name}
              <span className="ms-3 font-sans font-normal text-tertiary">
                {SITE.slogan}
              </span>
            </span>
            <Inline gap="6">
              <a
                href={SITE.repository}
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm text-secondary transition-colors duration-(--duration-fast) ease-out hover:text-primary"
              >
                GitHub
              </a>
              <span className="text-sm text-tertiary">
                © {new Date().getFullYear()} {SITE.name}
              </span>
            </Inline>
          </Inline>
        </Stack>
      </Container>
    </footer>
  );
}
