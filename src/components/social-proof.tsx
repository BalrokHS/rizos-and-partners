"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  { name: "Maersk", logo: "/maersk-shipping-logo.jpg" },
  { name: "MSC", logo: "/msc-shipping-logo.jpg" },
  { name: "CMA CGM", logo: "/cma-cgm-shipping-logo.jpg" },
  { name: "COSCO", logo: "/cosco-shipping-logo.jpg" },
  { name: "Hapag-Lloyd", logo: "/hapag-lloyd-shipping-logo.jpg" },
  { name: "ONE", logo: "/ocean-network-express-logo.jpg" },
  { name: "Evergreen", logo: "/evergreen-shipping-logo.jpg" },
  { name: "Yang Ming", logo: "/yang-ming-shipping-logo.png" },
]

const kpis = [
  { value: 4700, label: "Vessels Served", suffix: "" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 30, label: "Years Experience", suffix: "+" },
  { value: 24, label: "Hour Support", suffix: "/7" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-4xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function SocialProof() {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Partner Logos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-foreground/80 mb-12 font-[family-name:var(--font-inter)]">
            We proudly serve the world's leading shipping companies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-70"
                />
              </div>
            ))}
          </div>
        </div>

        {/* KPI Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <Card key={kpi.label} className="text-center border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-2">
                  <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
                </div>
                <div className="text-sm text-card-foreground/70 font-[family-name:var(--font-inter)]">{kpi.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
