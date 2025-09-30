"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Anchor, Users, Truck, Loader2 } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Types
type ServiceType = "Headquarters" | "Agencies" | "Chandlers" | "Towage";

interface Port {
  id: number;
  name: string;
  country: string;
  coordinates: [number, number];
  services: ServiceType[];
}

// Constants
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const SERVICE_COLORS: Record<ServiceType, string> = {
  Headquarters: "#ef4444",
  Chandlers: "#3b82f6",
  Towage: "#10b981",
  Agencies: "#a855f7",
};

const FILTER_TYPES = [
  { id: "all", label: "All Partners", icon: MapPin },
  { id: "Agencies", label: "Agencies", icon: Users },
  { id: "Chandlers", label: "Chandlers", icon: Truck },
  { id: "Towage", label: "Towage", icon: Anchor },
  // { id: "Headquarters", label: "Headquarters", icon: MapPin },
];

// Data
const PORTS_DATA: Port[] = [
  {
    id: 1,
    name: "Piraeus",
    country: "Greece",
    coordinates: [23.6469, 37.9415],
    services: ["Headquarters", "Agencies", "Chandlers"],
  },
  {
    id: 2,
    name: "Singapore",
    country: "Singapore",
    coordinates: [103.8198, 1.3521],
    services: ["Chandlers", "Agencies"],
  },
  {
    id: 3,
    name: "Rotterdam",
    country: "Netherlands",
    coordinates: [4.4777, 51.9244],
    services: ["Chandlers"],
  },
  {
    id: 4,
    name: "Hamburg",
    country: "Germany",
    coordinates: [9.9937, 53.5511],
    services: ["Chandlers"],
  },
  {
    id: 6,
    name: "Dubai",
    country: "UAE",
    coordinates: [55.2708, 25.2048],
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 7,
    name: "Hong Kong",
    country: "China",
    coordinates: [114.1694, 22.3193],
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 9,
    name: "Los Angeles",
    country: "USA",
    coordinates: [-118.2437, 34.0522],
    services: ["Towage"],
  },
  {
    id: 10,
    name: "Panama",
    country: "Panama",
    coordinates: [-79.5199, 8.9824],
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 11,
    name: "Shanghai",
    country: "China",
    coordinates: [121.4737, 31.2304],
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 12,
    name: "Busan",
    country: "South Korea",
    coordinates: [129.0756, 35.1796],
    services: ["Chandlers", "Agencies"],
  },
  {
    id: 13,
    name: "Dakar",
    country: "Senegal",
    coordinates: [-17.4467, 14.6928],
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 14,
    name: "Lagos",
    country: "Nigeria",
    coordinates: [3.3792, 6.5244],
    services: ["Agencies"],
  },
  {
    id: 15,
    name: "Mombasa",
    country: "Kenya",
    coordinates: [39.6682, -4.0435],
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 16,
    name: "Port Louis",
    country: "Mauritius",
    coordinates: [57.5012, -20.1609],
    services: ["Agencies"],
  },
  {
    id: 17,
    name: "Cape Town",
    country: "South Africa",
    coordinates: [18.4241, -33.9249],
    services: ["Chandlers"],
  },
  {
    id: 18,
    name: "Santiago",
    country: "Chile",
    coordinates: [-70.6693, -33.4489],
    services: ["Towage"],
  },
  {
    id: 19,
    name: "Buenos Aires",
    country: "Argentina",
    coordinates: [-58.3816, -34.6037],
    services: ["Towage"],
  },
  {
    id: 20,
    name: "Lima",
    country: "Peru",
    coordinates: [-77.0428, -12.0464],
    services: ["Towage"],
  },
  {
    id: 21,
    name: "Guayaquil",
    country: "Ecuador",
    coordinates: [-79.8862, -2.171],
    services: ["Towage"],
  },
  {
    id: 23,
    name: "Veracruz",
    country: "Mexico",
    coordinates: [-96.1342, 19.1738],
    services: ["Towage"],
  },
  {
    id: 24,
    name: "Houston",
    country: "USA",
    coordinates: [-95.3698, 29.7604],
    services: ["Chandlers", "Agencies"],
  },
  {
    id: 25,
    name: "Algeciras",
    country: "Spain",
    coordinates: [-5.454, 36.1408],
    services: ["Agencies", "Chandlers"],
  },
  {
    id: 26,
    name: "Jakarta",
    country: "Indonesia",
    coordinates: [106.8456, -6.2088],
    services: ["Agencies"],
  },
];

// Sub-components
const MapPatterns = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <pattern
        id="dots"
        x="0"
        y="0"
        width="8"
        height="8"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="4" cy="4" r="2" fill="#9ca3af" />
      </pattern>
    </defs>
  </svg>
);

const getPortColor = (services: ServiceType[]) => {
  // Priority: Headquarters > Agencies > Chandlers > Towage
  if (services.includes("Headquarters")) return SERVICE_COLORS.Headquarters;
  if (services.includes("Agencies")) return SERVICE_COLORS.Agencies;
  if (services.includes("Chandlers")) return SERVICE_COLORS.Chandlers;
  if (services.includes("Towage")) return SERVICE_COLORS.Towage;
  return SERVICE_COLORS.Agencies;
};

const FilterButton = ({
  filter,
  isActive,
  onClick,
}: {
  filter: (typeof FILTER_TYPES)[0];
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = filter.icon;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 
        text-sm sm:text-base rounded-full transition-all
        ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-primary/20"
        }`}
    >
      <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
      <span>{filter.label}</span>
    </button>
  );
};

const Stats = ({
  portsCount,
  countriesCount,
}: {
  portsCount: number;
  countriesCount: number;
}) => (
  <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16">
    <div className="text-center">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
        {portsCount}+
      </div>
      <div className="text-sm sm:text-base text-foreground/70">
        Global Partners
      </div>
    </div>
    <div className="text-center">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
        {countriesCount}+
      </div>
      <div className="text-sm sm:text-base text-foreground/70">Countries</div>
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Loading map...</p>
    </div>
  </div>
);

// Main Component
export function WorldMap() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredPort, setHoveredPort] = useState<number | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const filteredPorts = useMemo(
    () =>
      PORTS_DATA.filter(
        (port) =>
          activeFilter === "all" ||
          port.services.includes(activeFilter as ServiceType)
      ),
    [activeFilter]
  );

  const uniqueCountries = new Set(PORTS_DATA.map((p) => p.country)).size;

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 text-balance">
            Global Network
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Our extensive partner network spans major shipping hubs worldwide.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
          {FILTER_TYPES.map((filter) => (
            <FilterButton
              key={filter.id}
              filter={filter}
              isActive={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            />
          ))}
        </div>

        {/* Map */}
        <Card className="bg-card border-border border-2 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="relative w-full aspect-[2/1] sm:aspect-[16/9] lg:aspect-[16/10] bg-background">
              {/* Loading Spinner */}
              {!isMapLoaded && <LoadingSpinner />}

              <MapPatterns />

              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 130, center: [11, 39] }}
              >
                <g>
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) => {
                      // Set loaded state when geographies are ready
                      if (geographies.length > 0 && !isMapLoaded) {
                        setTimeout(() => setIsMapLoaded(true), 100);
                      }

                      return geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="url(#dots)"
                          stroke="none"
                          strokeWidth={0}
                          style={{
                            default: { outline: "none" },
                            hover: {
                              outline: "none",
                              fill: "url(#dots)",
                              cursor: "default",
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      ));
                    }}
                  </Geographies>

                  {/* Render all pins first */}
                  {isMapLoaded &&
                    filteredPorts.map((port) => (
                      <Marker
                        key={port.id}
                        coordinates={port.coordinates}
                        onMouseEnter={() => setHoveredPort(port.id)}
                        onMouseLeave={() => setHoveredPort(null)}
                      >
                        <g>
                          {/* Ping animation for headquarters */}
                          {port.services.includes("Headquarters") && (
                            <circle
                              r={8}
                              className="animate-ping"
                              fill={getPortColor(port.services)}
                              opacity={0.2}
                              style={{ pointerEvents: "none" }}
                            />
                          )}

                          {/* Pin dot with border */}
                          <circle
                            r={port.services.includes("Headquarters") ? 6 : 4}
                            className="cursor-pointer"
                            fill={getPortColor(port.services)}
                            stroke="#fff"
                            strokeWidth={1}
                            style={{
                              filter:
                                "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </g>
                      </Marker>
                    ))}

                  {/* Render tooltips last so they're on top */}
                  {isMapLoaded &&
                    filteredPorts.map(
                      (port) =>
                        hoveredPort === port.id && (
                          <Marker
                            key={`tooltip-${port.id}`}
                            coordinates={port.coordinates}
                          >
                            <g
                              transform="translate(0, 15)"
                              style={{ pointerEvents: "none" }}
                            >
                              <foreignObject
                                x="-75"
                                y="0"
                                width="150"
                                height="60"
                              >
                                <div
                                  className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                                    {port.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {port.country}
                                  </div>
                                </div>
                              </foreignObject>
                            </g>
                          </Marker>
                        )
                    )}
                </g>
              </ComposableMap>
            </div>
          </CardContent>
        </Card>

        <Stats
          portsCount={PORTS_DATA.length}
          countriesCount={uniqueCountries}
        />
      </div>
    </section>
  );
}
