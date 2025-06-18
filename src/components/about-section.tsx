"use client"

import { Badge } from "@/components/ui/badge"
import { StatCard } from "./stat-card"
import { Users, Activity, Droplets } from "lucide-react"

interface AboutSectionProps {
  counters: {
    users: number
    emergencies: number
    donations: number
  }
}

export function AboutSection({ counters }: AboutSectionProps) {
  const stats = [
    { icon: Users, label: "Users Helped", value: counters.users },
    { icon: Activity, label: "Emergency Responses", value: counters.emergencies },
    { icon: Droplets, label: "Blood Donations", value: counters.donations },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
            About Thypro
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Healthcare Access</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Thypro bridges critical gaps in emergency care and promotes a shift from reactive to preventive healthcare.
            Designed specifically for developing regions, our platform empowers users to act faster during health
            emergencies while maintaining comprehensive wellness support.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
