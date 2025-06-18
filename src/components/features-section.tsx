"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "./feature-card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Ambulance, Droplets, Bot } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Health Vault",
    description:
      "Securely store all your health records, prescriptions, and test reports. Access them instantly or share with doctors with a single tap.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Ambulance,
    title: "Emergency SOS",
    description:
      "Automatic alerts to nearby hospitals and ambulances with real-time location sharing. Get help faster with less panic and delay.",
    gradient: "from-red-500 to-red-700",
  },
  {
    icon: Droplets,
    title: "Blood Donation Network",
    description:
      "Connect blood donors and recipients in real-time. Smart rest period management ensures donor health and availability.",
    gradient: "from-green-500 to-green-700",
  },
  {
    icon: Bot,
    title: "AI Health Assistant",
    description:
      "Smart notifications for medications, appointments, and health recommendations. Get instant answers to health questions 24/7.",
    gradient: "from-purple-500 to-purple-700",
  },
]

export function FeaturesSection() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Continuous jumping animation for feature cards
    const jumpAnimation = () => {
      featureCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -20,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.2,
            yoyo: true,
            repeat: 1,
          })
        }
      })
    }

    // Initial jump animation on scroll
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: "top 80%",
      onEnter: jumpAnimation,
    })

    // Continuous jumping every 4 seconds
    const jumpInterval = setInterval(jumpAnimation, 4000)

    return () => {
      clearInterval(jumpInterval)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="features" className="py-20 bg-gray-50" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Better Health</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed for modern life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
              cardRef={(el) => (featureCardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
