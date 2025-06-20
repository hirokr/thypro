"use client";

import { useState, useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { navItems } from "@/lib/constants";
import { AppImages } from "@/components/appImages";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const counters = useCounterAnimation();

  const featuresRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <main className='bg-background'>
      {/* <Header navItems={navItems} /> */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection counters={counters} />
      <AppImages />
      {/* <CTASection /> */}
      <Footer />
      
    </main>
  );
}
