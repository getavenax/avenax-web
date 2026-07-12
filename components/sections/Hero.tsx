import { Baseline } from "@/components/ui/Baseline";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Inline } from "@/components/ui/Inline";
import { SITE } from "@/constants/site";

/**
 * The nameplate hero (founder-locked copy, 2026-07-11): AVENAX is the primary
 * brand mark and the LCP element — it paints instantly and is never animated.
 * "Next Standard." remains a restrained signature, never a name. The product
 * lockup inherits the Baseline without competing with the company identity.
 */
export function Hero() {
  return (
    <Container as="section" className="pt-24 pb-16">
      <h1 className="text-display-xl font-bold tracking-tight text-primary">
        {SITE.name}
      </h1>
      <p className="animate-hero-rise mt-5 font-display text-h3 font-bold tracking-tight text-primary md:text-h2">
        AI that shows its work.
      </p>
      <p className="animate-hero-rise mt-4 max-w-2xl text-lg text-secondary delay-(--duration-base)">
        AI products that strengthen human judgment.
      </p>
      <p className="animate-hero-rise mt-3 font-mono text-sm text-tertiary delay-(--duration-base)">
        {SITE.slogan}
      </p>
      <div className="animate-hero-rise mt-6 max-w-2xl delay-(--duration-base)">
        <h2>
          <span className="sr-only">{SITE.product.name}</span>
          <span
            aria-hidden="true"
            className="inline-flex flex-col items-start font-display"
          >
            <span className="text-product-label font-medium tracking-wide text-secondary uppercase">
              {SITE.name}
            </span>
            <span className="mt-1 text-product-name font-bold tracking-tight text-primary">
              {SITE.product.displayName}
            </span>
            <Baseline delay="sm" className="mt-1" />
          </span>
        </h2>
        <p className="mt-3 text-lg font-medium text-primary">
          AI chart analysis for forex, crypto, and financial markets.
        </p>
        <p className="mt-3 text-sm text-secondary">
          Upload a chart screenshot.
          <br />
          {SITE.product.shortName}{" "}
          explains market structure, liquidity, scenarios, risk, and reasoning
          &mdash; using the same clear framework every time.
        </p>
      </div>
      <Inline
        gap="4"
        wrap
        className="animate-hero-rise mt-6 delay-(--duration-slow)"
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
