"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Anchor } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [showLanding, setShowLanding] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroHeight = heroRef.current.offsetHeight;

        const scrolledOut = (heroHeight + heroRect.top) / heroHeight;
        setShowLanding(scrolledOut > 0.1); // Show landing when less than 90% is scrolled out
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      <div
        className={`absolute inset-0 z-30 flex flex-col items-center justify-start transition-all duration-700 ${
          showLanding
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-20 pointer-events-none"
        }`}
      >
        <div className="text-center animate-fade-in-up mt-20">
          <div className="">
            <Image
              src="/logo.png"
              alt="Rizos & Partners Logo"
              width={500}
              height={500}
              className="mx-auto rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary  font-[family-name:var(--font-poppins)] pt-20">
            Rizos & Partners
          </h1>
          <p className="text-lg md:text-xl pt-5 text-foreground/80 font-[family-name:var(--font-inter)] italic">
            Connecting the Dots in an Ever-Changing World
          </p>
        </div>
      </div>

      <div
        className={`relative z-20 text-center px-6 max-w-4xl mx-auto transition-all duration-700 ${
          showLanding
            ? "opacity-0 translate-y-20 pointer-events-none"
            : "opacity-100 translate-y-0 pt-24"
        }`}
      >
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Your One-Stop Gateway to the Greek Shipping Market
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
            Connecting global ship suppliers with the world's largest shipping
            fleet through local expertise and performance-based partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
            >
              Explore Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${
          showLanding ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-bounce">
          <ChevronRight className="h-6 w-6 text-primary rotate-90" />
        </div>
      </div>
    </section>
  );
}
