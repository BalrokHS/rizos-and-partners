/* ---------------------------------------------------------------------------
   components/WorldMap.tsx   –  dotted-globe version with subtle extras
   --------------------------------------------------------------------------- */

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Anchor, Users, Truck } from "lucide-react";
import Image from "next/image";

/* ---------------------------------------------------------------------------
   DATA
   --------------------------------------------------------------------------- */
const ports = [
  {
    id: 1,
    name: "Piraeus",
    country: "Greece",
    x: 52,
    y: 45,
    type: "headquarters",
    services: ["Agency", "Chandlers", "Repairs"],
  },
  {
    id: 2,
    name: "Singapore",
    country: "Singapore",
    x: 78,
    y: 65,
    type: "chandlers",
    services: ["Chandlers", "Repairs"],
  },
  {
    id: 3,
    name: "Rotterdam",
    country: "Netherlands",
    x: 48,
    y: 35,
    type: "chandlers",
    services: ["Chandlers"],
  },
  {
    id: 4,
    name: "Hamburg",
    country: "Germany",
    x: 50,
    y: 33,
    type: "repairs",
    services: ["Repairs"],
  },
  {
    id: 5,
    name: "Antwerp",
    country: "Belgium",
    x: 47,
    y: 36,
    type: "chandlers",
    services: ["Chandlers"],
  },
  {
    id: 6,
    name: "Dubai",
    country: "UAE",
    x: 62,
    y: 52,
    type: "agency",
    services: ["Agency", "Chandlers"],
  },
  {
    id: 7,
    name: "Hong Kong",
    country: "China",
    x: 82,
    y: 55,
    type: "chandlers",
    services: ["Chandlers", "Repairs"],
  },
  {
    id: 8,
    name: "New York",
    country: "USA",
    x: 25,
    y: 42,
    type: "agency",
    services: ["Agency"],
  },
  {
    id: 9,
    name: "Los Angeles",
    country: "USA",
    x: 15,
    y: 48,
    type: "chandlers",
    services: ["Chandlers"],
  },
  {
    id: 10,
    name: "Panama",
    country: "Panama",
    x: 22,
    y: 58,
    type: "agency",
    services: ["Agency", "Repairs"],
  },
] as const;

const filterTypes = [
  { id: "all", label: "All Partners", icon: MapPin },
  { id: "agency", label: "Agency", icon: Users },
  { id: "chandlers", label: "Chandlers", icon: Truck },
  { id: "repairs", label: "Towage", icon: Anchor },
];

/* ---------------------------------------------------------------------------
   COMPONENT
   --------------------------------------------------------------------------- */
export function WorldMap() {
  const [selectedPort, setSelectedPort] = useState<
    (typeof ports)[number] | null
  >(null);
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
      case "repairs":
        return "bg-secondary";
      case "agency":
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[var(--font-poppins)] text-balance">
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
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src="/world-dots.svg"
                  alt=""
                  fill /* makes it cover the parent */
                  className="object-cover opacity-40 "
                  priority
                />

                {/* Port markers  ---------------------------------------- */}
                {filteredPorts.map((port) => (
                  <div
                    key={port.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${port.x}%`, top: `${port.y}%` }}
                    onClick={() => setSelectedPort(port)}
                  >
                    {/* beige spotlight behind active port */}
                    {selectedPort?.id === port.id && (
                      <span className="absolute inset-0 rounded-full bg-accent/30 blur-sm" />
                    )}

                    <div
                      className={`w-4 h-4 rounded-full ${getPortColor(
                        port.type
                      )} border-2 border-background shadow-lg
                                 group-hover:scale-125 transition-transform`}
                    >
                      <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20" />
                    </div>

                    {/* label on hover */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* Details panel  -------------------------------------------------- */}
        {selectedPort && (
          <div className="mt-8">
            <Card className="border-primary bg-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground font-[var(--font-poppins)]">
                      {selectedPort.name}, {selectedPort.country}
                    </h3>
                    <p className="text-card-foreground/70 capitalize">
                      {selectedPort.type === "headquarters"
                        ? "Headquarters"
                        : `${selectedPort.type} Partner`}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPort(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedPort.services.map((service) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-card-foreground/70">
                    Contact our local representative for detailed service
                    information and pricing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

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
