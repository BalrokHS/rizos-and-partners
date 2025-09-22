"use client";

import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Rizos & Partners Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-primary font-[family-name:var(--font-poppins)]">
                Rizos & Partners
              </span>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed max-w-md font-[family-name:var(--font-inter)]">
              Your trusted gateway to the Greek shipping market. Connecting
              global suppliers with the world's largest shipping fleet through
              three decades of maritime expertise.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/rizos-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#network"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Global Network
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/70 text-sm">
                  123 Akti Miaouli Street
                  <br />
                  Piraeus 18538, Greece
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground/70 text-sm">
                  +30 210 123 4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground/70 text-sm">
                  info@rizospartners.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-foreground/60">
              <span>&copy; 2024 Rizos & Partners. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* GDPR Cookie Banner */}
      {/* <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50">
        <div className="bg-card border border-primary rounded-lg p-4 shadow-lg">
          <p className="text-sm text-card-foreground mb-3">
            We use cookies to enhance your browsing experience and analyze our
            traffic. By continuing to use our site, you consent to our use of
            cookies.
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Accept
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
