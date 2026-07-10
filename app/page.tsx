import { Footer } from "@/components/patterns/Footer";
import { NavBar } from "@/components/patterns/NavBar";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { ManifestoExcerpt } from "@/components/sections/ManifestoExcerpt";
import { ProductTeaser } from "@/components/sections/ProductTeaser";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main id="main" className="flex-1">
        <Hero />
        <ManifestoExcerpt />
        <ProductTeaser />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
