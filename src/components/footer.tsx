"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUp,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "./ui/separator";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border" id="contact">
      <div className="container mx-auto max-w-screen px-16 py-16">
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
              Affiliated with the leading ship suppliers, ship agencies &
              harbour tug companies worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/rizos-partners-pc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/rizospartners/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div />

          {/* Contact Info */}
          <div className="mr-2">
            <h3 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)] ">
              Contact Info
            </h3>
            <Separator className="mb-4" />
            <div className="">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/70 text-sm">
                    Christou Lada 2 <br />
                    Syntagma, Athens, Greece 10561
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/70 text-sm">
                    Xanthippou 37 <br />
                    Cholargos, Athens, Greece 15561
                  </span>
                </li>
                <Separator className="my-6" />
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+302103254117"
                    className="text-foreground/70 text-sm hover:text-primary transition-colors"
                  >
                    +30 210 325 4117
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@rizosandpartners.gr"
                    className="text-foreground/70 text-sm hover:text-primary transition-colors"
                  >
                    info@rizosandpartners.gr
                  </a>
                </li>
              </ul>
            </div>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
