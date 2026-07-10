import { Baseline } from "@/components/ui/Baseline";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Inline } from "@/components/ui/Inline";
import { SITE } from "@/constants/site";

/**
 * The one orchestrated moment on the page (BRAND_DNA §7): headline rises,
 * the Baseline draws, supporting copy follows. Pure CSS, staggered with
 * delay tokens; reduced motion collapses it centrally in globals.css.
 */
export function Hero() {
  return (
    <Container as="section" className="pt-24 pb-32 md:pt-32">
      {/* The h1 is the LCP element — it paints instantly, never animated.
          The orchestrated moment lives in the Baseline draw and the rise of
          the supporting lines (Lighthouse-100 is a product requirement). */}
      <h1 className="max-w-4xl text-display-xl font-bold tracking-tight text-primary">
        {SITE.slogan}
      </h1>
      <Baseline delay="sm" className="mt-6 max-w-4xl" />
      <p className="animate-hero-rise mt-8 max-w-2xl text-lg text-secondary delay-(--duration-base)">
        Autonomous AI products that help people think better, work faster, and
        create more.
      </p>
      <p className="animate-hero-rise mt-4 font-mono text-sm text-tertiary delay-(--duration-base)">
        <a
          href="#insight"
          className="transition-colors duration-(--duration-fast) ease-out hover:text-primary"
        >
          Product One: AVENAX Insight — AI chart analysis that teaches while it
          analyzes.
        </a>
      </p>
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
