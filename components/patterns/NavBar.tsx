import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Inline } from "@/components/ui/Inline";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

export interface NavBarProps {
  sticky?: boolean;
}

/**
 * One-page site: wordmark + one CTA. No menu, no state, no JS.
 * Wordmark is typographic until the logo decision lands (OI-3).
 */
export function NavBar({ sticky = false }: NavBarProps) {
  return (
    <header
      className={cn(
        "w-full border-b border-edge bg-surface",
        sticky && "sticky top-0 z-10",
      )}
    >
      <Container as="div">
        <Inline className="h-(--button-height-lg) justify-between">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-primary"
          >
            {SITE.name}
          </Link>
          <a href="#waitlist" className={buttonClasses("secondary", "sm")}>
            Join the waitlist
          </a>
        </Inline>
      </Container>
    </header>
  );
}
