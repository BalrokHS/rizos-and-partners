import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { WorldMap } from "@/components/world-map";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <section id="network">
        <WorldMap />
      </section>
      <Footer />
      <BackToTop />
    </main>
  );
}
