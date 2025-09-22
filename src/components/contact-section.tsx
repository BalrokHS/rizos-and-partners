"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Get in Touch
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
            Ready to optimize your maritime supply chain? Contact us today to
            discuss your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Headquarters
                    </h4>
                    <p className="text-foreground/70">
                      123 Akti Miaouli Street
                      <br />
                      Piraeus 18538, Greece
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Phone
                    </h4>
                    <p className="text-foreground/70">+30 210 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-foreground/70">info@rizospartners.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Business Hours
                    </h4>
                    <p className="text-foreground/70">
                      Monday - Friday: 8:00 AM - 6:00 PM (EET)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Route Visualization
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-6">
                <h4 className="font-semibold text-card-foreground mb-4">
                  Our Global Reach
                </h4>
                <div className="relative h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-4 text-xs text-card-foreground/60">
                    Athens
                  </div>
                  <div className="absolute bottom-2 right-4 text-xs text-card-foreground/60">
                    Global Network
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-foreground"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-card-foreground">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-input border-border text-foreground"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input border-border text-foreground resize-none"
                    placeholder="Tell us about your requirements, fleet size, and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-card-foreground/70 text-center">
                  We typically respond within 24 hours. For urgent matters, please call our 24/7 hotline.
                </p>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
