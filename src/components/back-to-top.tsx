"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(
        'section[class*="min-h-screen"]'
      ) as HTMLElement;

      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroHeight = heroSection.offsetHeight;

        // Show back to top when hero logo is not visible (similar logic to hero section)
        const scrolledOut = (heroHeight + heroRect.top) / heroHeight;
        setShowBackToTop(scrolledOut <= 0.02); // Show when more than 98% is scrolled out
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 ${
        showBackToTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
