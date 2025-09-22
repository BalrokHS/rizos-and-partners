"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Package, Wrench, Shield, Anchor, MapPin } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Deck & Engine Stores",
    description:
      "Complete provisioning of deck and engine room supplies, from routine maintenance items to specialized equipment.",
    features: ["Marine paints & coatings", "Deck equipment", "Engine room supplies", "Safety equipment"],
  },
  {
    icon: Wrench,
    title: "Technical Spares",
    description: "Comprehensive inventory of technical spare parts for all major engine and equipment manufacturers.",
    features: ["OEM spare parts", "Emergency deliveries", "Technical support", "Inventory management"],
  },
  {
    icon: Shield,
    title: "Safety & LSA",
    description:
      "Life-saving appliances and safety equipment to ensure full compliance with international maritime regulations.",
    features: ["Life rafts & boats", "Fire fighting equipment", "Personal protective equipment", "Safety inspections"],
  },
  {
    icon: Anchor,
    title: "Underwater Repairs",
    description: "Professional underwater hull cleaning, propeller polishing, and emergency underwater repairs.",
    features: ["Hull cleaning", "Propeller repairs", "Underwater welding", "Damage assessments"],
  },
  {
    icon: MapPin,
    title: "Port Agency",
    description: "Complete port agency services including documentation, customs clearance, and crew changes.",
    features: ["Port clearance", "Crew changes", "Bunker arrangements", "Cargo operations"],
  },
]

export function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320 // Approximate card width + gap
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Our Services
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
            Comprehensive maritime solutions tailored to meet the diverse needs of the global shipping industry
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedService === index ? "border-primary bg-card" : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 font-[family-name:var(--font-poppins)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-card-foreground/70 font-[family-name:var(--font-inter)]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile Slider View */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="flex-shrink-0 w-80 snap-center border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3 text-center font-[family-name:var(--font-poppins)]">
                      {service.title}
                    </h3>
                    <p className="text-card-foreground/80 mb-4 text-center font-[family-name:var(--font-inter)]">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-card-foreground/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Service Details Drawer (Desktop) */}
        {selectedService !== null && (
          <div className="hidden lg:block mt-8">
            <Card className="border-primary bg-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-card-foreground mb-4 font-[family-name:var(--font-poppins)]">
                      {services[selectedService].title}
                    </h3>
                    <p className="text-card-foreground/80 mb-6 leading-relaxed font-[family-name:var(--font-inter)]">
                      {services[selectedService].description}
                    </p>
                    <ul className="space-y-3">
                      {services[selectedService].features.map((feature, index) => (
                        <li key={index} className="text-card-foreground/70 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-8 rounded-full bg-primary/10">
                      {(() => {
                        const Icon = services[selectedService].icon
                        return <Icon className="h-24 w-24 text-primary" />
                      })()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
