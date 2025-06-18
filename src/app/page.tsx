"use client"

import { useState, useEffect, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { navItems } from "@/lib/constants"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const counters = useCounterAnimation()

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
            duration: 0.2,
            ease: "power2.out",
            delay: 0,
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
    <div className="min-h-screen bg-background">
      <Header navItems={navItems} />
      <HeroSection />
      <FeaturesSection />
      <AboutSection counters={counters} />
      <CTASection />
      <Footer />
    </div>
  )
}
