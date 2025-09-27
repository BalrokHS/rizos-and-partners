"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowNavigation(scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavigation
          ? `translate-y-0 opacity-100 ${
              isScrolled
                ? "bg-background/95 backdrop-blur-sm border-b border-border"
                : "bg-transparent"
            }`
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Rizos & Partners Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-primary font-[family-name:var(--font-poppins)]">
              Rizos & Partners
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("network")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Network
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
