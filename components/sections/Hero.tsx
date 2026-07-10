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
      <h1 className="animate-hero-rise max-w-4xl text-display-xl font-bold tracking-tight text-primary">
        {SITE.slogan}
      </h1>
      <Baseline delay="sm" className="mt-6 max-w-4xl" />
      <p className="animate-hero-rise mt-8 max-w-2xl text-lg text-secondary delay-(--duration-base)">
        Autonomous AI products that help people think better, work faster, and
        create more.
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
