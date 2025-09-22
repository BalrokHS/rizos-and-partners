"use client"

import { useEffect, useRef } from "react"
import { Globe, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Deep understanding of Greek maritime culture and business practices, built through decades of relationships with ship-owners and managers.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Extensive network of vetted suppliers and service providers across major shipping hubs worldwide, ensuring comprehensive coverage.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Performance-Based Fees",
    description:
      "Transparent pricing model aligned with your success. We only succeed when you do, ensuring maximum value for your investment.",
    color: "text-accent",
  },
]

export function ValuePillars() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".pillar-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Why Choose Rizos & Partners
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
            Three decades of maritime expertise combined with modern technology and global partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Card
                key={pillar.title}
                className={`pillar-card bg-card border-border hover:border-primary/50 transition-all duration-300 opacity-0 transform translate-y-8`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-muted">
                      <Icon className={`h-8 w-8 ${pillar.color}`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 font-[family-name:var(--font-poppins)]">
                    {pillar.title}
                  </h3>
                  <p className="text-card-foreground/80 leading-relaxed font-[family-name:var(--font-inter)]">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
