"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { gsap } from "gsap"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}

export function FeatureCard({ icon: Icon, title, description, gradient, index, cardRef }: FeatureCardProps) {
  const handleMouseEnter = (element: HTMLDivElement) => {
    gsap.to(element, {
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleMouseLeave = (element: HTMLDivElement) => {
    gsap.to(element, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <Card
      ref={cardRef}
      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
      onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
    >
      <CardHeader className="text-center pb-4">
        <div
          className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
