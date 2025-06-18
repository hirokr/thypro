"use client"

import { useState, useEffect } from "react"

export function useCounterAnimation() {
  const [counters, setCounters] = useState({ users: 0, emergencies: 0, donations: 0 })

  useEffect(() => {
    // Animate counters when component mounts
    const animateCounter = (key: string, target: number) => {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCounters((prev) => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(start) }))
        }
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCounter("users", 10000)
      animateCounter("emergencies", 500)
      animateCounter("donations", 1000)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return counters
}
