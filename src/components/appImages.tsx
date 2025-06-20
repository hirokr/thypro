"use client"

import type React from "react"

import Image from "next/image"
import assistant from "../../public/appView/Assistant.png"
import blood from "../../public/appView/Blood Donation.png"
import account from "../../public/appView/Create Account.png"
import EHR from "../../public/appView/EHR.png"
import Home from "../../public/appView/Homepage.png"
import splash from "../../public/appView/Splash.png"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function AppImages() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const appScreens = [
    {
      image: splash,
      title: "Welcome Screen",
      description: "Get started with Thypro",
    },
    { image: Home, title: "Dashboard", description: "Your health overview" },
    {
      image: assistant,
      title: "AI Assistant",
      description: "24/7 health support",
    },
    {
      image: EHR,
      title: "Health Records",
      description: "Secure medical history",
    },
    {
      image: blood,
      title: "Blood Tracking",
      description: "Monitor vital signs",
    },
    { image: account, title: "Profile", description: "Manage your account" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreens.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  // Auto-play carousel (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="download" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of users who trust Thypro for their health and emergency needs. Download now and experience
              the future of healthcare.
            </p>
          </div>

          {/* Mobile Carousel (< md) */}
          <div className="md:hidden mb-12">
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {appScreens.map((screen, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="group relative bg-white rounded-2xl p-6 shadow-lg mx-auto max-w-xs">
                      {/* Phone Frame */}
                      <div className="relative mx-auto w-48 h-96 bg-black rounded-[2rem] p-2 shadow-2xl">
                        <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-10"></div>

                          {/* Screen Content */}
                          <div className="w-full h-full relative">
                            <Image
                              src={screen.image || "/placeholder.svg"}
                              alt={screen.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Screen Info */}
                      <div className="text-center mt-6">
                        <h3 className="text-lg font-semibold mb-2">{screen.title}</h3>
                        <p className="text-sm text-muted-foreground">{screen.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {appScreens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid (md+) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {appScreens.map((screen, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Phone Frame */}
                <div className="relative mx-auto w-48 h-96 bg-black rounded-[2rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-10"></div>

                    {/* Screen Content */}
                    <div className="w-full h-full relative">
                      <Image
                        src={screen.image || "/placeholder.svg"}
                        alt={screen.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Screen Info */}
                <div className="text-center mt-6">
                  <h3 className="text-lg font-semibold mb-2">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
