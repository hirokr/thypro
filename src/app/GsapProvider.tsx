"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface GSAPProviderProps {
  children: React.ReactNode
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    // Initialize ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Smoothness level (0-3, higher = smoother)
      effects: true, // Enable data-speed effects
      smoothTouch: 0.1, // Smooth scrolling on touch devices
      normalizeScroll: true, // Normalize scroll behavior across browsers
      ignoreMobileResize: true, // Ignore mobile resize events
    })

    // Optional: Add some scroll-triggered animations
    gsap.set("[data-speed]", {
      y: (i, el) => -Number.parseFloat(el.getAttribute("data-speed") || "0") * window.innerHeight,
    })

    ScrollTrigger.batch("[data-speed]", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 100,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        })
      },
    })

    // Cleanup function
    return () => {
      smoother?.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
