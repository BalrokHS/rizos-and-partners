"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Anchor, Users, Truck } from "lucide-react";
import Image from "next/image";

const ports = [
  {
    id: 1,
    name: "Piraeus",
    country: "Greece",
    x: 52.3,
    y: 38.5,
    type: "headquarters",
    services: ["Agency", "Chandlers", "Repairs"],
  },
  {
    id: 2,
    name: "Singapore",
    country: "Singapore",
    x: 78.5,
    y: 63.8,
    type: "chandlers",
    services: ["Chandlers", "Agencies"],
  },
  {
    id: 3,
    name: "Rotterdam",
    country: "Netherlands",
    x: 48.2,
    y: 31.8,
    type: "chandlers",
    services: ["Chandlers"],
  },
  {
    id: 4,
    name: "Hamburg",
    country: "Germany",
    x: 49.2,
    y: 30.5,
    type: "repairs",
    services: ["Repairs"],
  },
  {
    id: 6,
    name: "Dubai",
    country: "UAE",
    x: 61.8,
    y: 47.2,
    type: "agency",
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 7,
    name: "Hong Kong",
    country: "China",
    x: 80.2,
    y: 48.5,
    type: "chandlers",
    services: ["Agencies"],
  },
  {
    id: 9,
    name: "Los Angeles",
    country: "USA",
    x: 14.5,
    y: 42.8,
    type: "towage",
    services: ["Towage"],
  },
  {
    id: 10,
    name: "Panama",
    country: "Panama",
    x: 22.8,
    y: 56.2,
    type: "agency",
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 11,
    name: "Shanghai",
    country: "China",
    x: 82.5,
    y: 44.2,
    type: "agency",
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 12,
    name: "Busan", // Fixed spelling from "Bushan"
    country: "South Korea",
    x: 84.2,
    y: 41.5,
    type: "chandlers",
    services: ["Chandlers", "Agencies"],
  },
  {
    id: 13,
    name: "Dakar",
    country: "Senegal",
    x: 42.8,
    y: 52.8,
    type: "agency",
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 14,
    name: "Lagos",
    country: "Nigeria",
    x: 47.8,
    y: 58.5,
    type: "agency",
    services: ["Agencies"],
  },
  {
    id: 15,
    name: "Mombasa",
    country: "Kenya",
    x: 58.5,
    y: 65.8,
    type: "agency",
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 16,
    name: "Port Louis",
    country: "Mauritius",
    x: 62.5,
    y: 75.2,
    type: "agency",
    services: ["Agencies"],
  },
  {
    id: 17,
    name: "Cape Town",
    country: "South Africa",
    x: 51.2,
    y: 82.5,
    type: "chandlers",
    services: ["Chandlers"],
  },
  {
    id: 18,
    name: "Santiago",
    country: "Chile",
    x: 26.2,
    y: 82.8,
    type: "towage",
    services: ["Towage"],
  },
  {
    id: 19,
    name: "Buenos Aires",
    country: "Argentina",
    x: 30.8,
    y: 83.5,
    type: "towage",
    services: ["Towage"],
  },
  {
    id: 20,
    name: "Lima",
    country: "Peru",
    x: 23.2,
    y: 68.5,
    type: "towage",
    services: ["Towage"],
  },
  {
    id: 21,
    name: "Guayaquil",
    country: "Ecuador",
    x: 22.5,
    y: 64.2,
    type: "towage",
    services: ["Towage"],
  },
  {
    id: 22,
    name: "Panama City",
    country: "Panama",
    x: 22.8,
    y: 56.2,
    type: "towage",
    services: ["Towage", "Chandlers"],
  },
  {
    id: 23,
    name: "Dos Bocas",
    country: "Mexico",
    x: 19.5,
    y: 50.2,
    type: "towage",
    services: ["Towage"],
  },
  {
    id: 24,
    name: "Houston",
    country: "USA",
    x: 18.8,
    y: 45.2,
    type: "chandlers",
    services: ["Chandlers", "Agencies"],
  },
  {
    id: 25,
    name: "Algeciras",
    country: "Spain",
    x: 46.5,
    y: 40.2,
    type: "agency",
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 26,
    name: "Jakarta",
    country: "Indonesia",
    x: 79.2,
    y: 66.8,
    type: "agencies",
    services: ["Agencies"],
  },
] as const;

const filterTypes = [
  { id: "all", label: "All Partners", icon: MapPin },
  { id: "agencies", label: "Agencies", icon: Users },
  { id: "chandlers", label: "Chandlers", icon: Truck },
  { id: "towage", label: "Towage", icon: Anchor },
];

export function WorldMap() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPorts = ports.filter(
    (port) =>
      activeFilter === "all" ||
      port.type === activeFilter ||
      port.services.some((s) => s.toLowerCase() === activeFilter)
  );

  const getPortColor = (type: string) => {
    switch (type) {
      case "headquarters":
        return "bg-accent";
      case "chandlers":
        return "bg-primary";
      case "towage":
        return "bg-secondary";
      case "agencies":
        return "bg-chart-2";
      default:
        return "bg-primary";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Heading  -------------------------------------------------------- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6  text-balance">
            Global Network
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-[var(--font-inter)]">
            Our extensive partner network spans major shipping hubs worldwide.
          </p>
        </div>

        {/* Filter chips  --------------------------------------------------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterTypes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                ${
                  activeFilter === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Card with dotted-globe background ------------------------------ */}
        <div className="relative">
          <Card className="bg-card border-border border-2 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-96 md:h-[500px]">
                {/* ──────────────────────────────
               OPTION 1 — one-colour tint
               just CSS, keep using next/image
            ────────────────────────────── */}
                <div className="absolute inset-0  mix-blend-multiply pointer-events-none" />
                <Image
                  src="/vecteezy_vector-map-of-the-world-with-square-dots_4997094.svg"
                  alt="world map"
                  fill
                  className="object-cover opacity-70"
                  priority
                />

                {filteredPorts.map((port) => (
                  <div
                    key={port.id}
                    style={{ left: `${port.x}%`, top: `${port.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${getPortColor(
                        port.type
                      )}
                              border-2 border-background shadow-lg
                              group-hover:scale-125 transition-transform`}
                    >
                      <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20" />
                    </div>

                    {/* label on hover */}
                    <div
                      className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0
                                group-hover:opacity-100 transition-opacity"
                    >
                      <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                        <div className="text-sm font-semibold text-foreground">
                          {port.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {port.country}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats  ---------------------------------------------------------- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-foreground/70">Global Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25</div>
            <div className="text-sm text-foreground/70">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4,700</div>
            <div className="text-sm text-foreground/70">Vessels Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
