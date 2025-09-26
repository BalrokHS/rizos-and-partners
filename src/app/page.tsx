import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ValuePillars } from "@/components/value-pillars";
import { ServicesSlider } from "@/components/services-slider";
import { WorldMap } from "@/components/world-map";
import { SocialProof } from "@/components/social-proof";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <section id="about">
        <ValuePillars />
      </section> */}
      {/* <section id="services">
        <ServicesSlider />
      </section> */}
      <section id="network">
        <WorldMap />
        {/* <SocialProof /> */}
      </section>
      {/* <section id="insights">
        <InsightsSection />
      </section> */}
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
      <BackToTop />
    </main>
  );
}
