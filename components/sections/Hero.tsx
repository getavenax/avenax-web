import { Baseline } from "@/components/ui/Baseline";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Inline } from "@/components/ui/Inline";
import { SITE } from "@/constants/site";

/**
 * The nameplate hero (founder-locked copy, 2026-07-11): AVENAX is the primary
 * brand mark and the LCP element — it paints instantly and is never animated.
 * "Next Standard." stands on the Baseline as a signature, never as a name.
 * The orchestrated moment lives in the Baseline draw and the supporting rises.
 */
export function Hero() {
  return (
    <Container as="section" className="pt-24 pb-32 md:pt-32">
      <h1 className="text-display-xl font-bold tracking-tight text-primary">
        {SITE.name}
      </h1>
      <div className="relative mt-5 max-w-xl">
        <span className="absolute end-0 bottom-1 font-mono text-sm text-tertiary">
          {SITE.slogan}
        </span>
        <Baseline delay="sm" />
      </div>
      <p className="animate-hero-rise mt-9 font-display text-h3 font-bold tracking-tight text-primary md:text-h2">
        AI that shows its work.
      </p>
      <p className="animate-hero-rise mt-4 max-w-2xl text-lg text-secondary delay-(--duration-base)">
        AI products that strengthen human judgment.
      </p>
      <div className="animate-hero-rise mt-8 max-w-2xl delay-(--duration-base)">
        <p className="font-mono text-xs tracking-wide text-tertiary uppercase">
          <a
            href="#insight"
            className="transition-colors duration-(--duration-fast) ease-out hover:text-secondary"
          >
            Product One &mdash; AVENAX Insight
          </a>
        </p>
        <p className="mt-2 text-sm text-secondary">
          Upload a forex, crypto, or financial-market chart screenshot.
          <br />
          Insight breaks it down into market structure, liquidity, scenarios,
          and risk &mdash; using the same clear framework every time.
        </p>
      </div>
      <Inline
        gap="4"
        wrap
        className="animate-hero-rise mt-10 delay-(--duration-slow)"
      >
        <a href="#waitlist" className={buttonClasses("primary", "lg")}>
          Join the waitlist
        </a>
        <a href="#manifesto" className={buttonClasses("ghost", "lg")}>
          Read the manifesto
        </a>
      </Inline>
    </Container>
  );
}
