"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, TrendingUp, Globe, Ship } from "lucide-react"

const insights = [
  {
    category: "Market Analysis",
    title: "Greek Shipping Market Outlook 2025",
    excerpt:
      "Comprehensive analysis of market trends, fleet expansion, and investment opportunities in the Greek shipping sector.",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/shipping-market-analysis-charts.jpg",
    icon: TrendingUp,
  },
  {
    category: "Industry News",
    title: "New IMO Regulations Impact on Ship Supplies",
    excerpt:
      "Understanding the latest International Maritime Organization regulations and their implications for ship provisioning.",
    date: "December 10, 2024",
    readTime: "5 min read",
    image: "/maritime-regulations-documents.jpg",
    icon: Globe,
  },
  {
    category: "Case Study",
    title: "Optimizing Supply Chain for 200-Vessel Fleet",
    excerpt:
      "How we helped a major Greek shipping company reduce costs by 25% while improving service quality across their global operations.",
    date: "December 5, 2024",
    readTime: "12 min read",
    image: "/container-ship-fleet-optimization.jpg",
    icon: Ship,
  },
]

export function InsightsSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Maritime Insights
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
            Stay informed with the latest trends, regulations, and best practices in the maritime industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <Card
                key={insight.title}
                className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {insight.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/90 p-2 rounded-full">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors font-[family-name:var(--font-poppins)]">
                    {insight.title}
                  </h3>
                  <p className="text-card-foreground/70 mb-4 leading-relaxed font-[family-name:var(--font-inter)]">
                    {insight.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {insight.date}
                    </div>
                    <div>{insight.readTime}</div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Insights
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
