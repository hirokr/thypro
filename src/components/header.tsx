"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

interface NavItem {
  href: string;
  label: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

export function Header({ navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = prevScrollYRef.current;

      // Determine if header should be visible
      if (currentScrollY < prevScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show header
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide header
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }

      setScrollY(currentScrollY);
      prevScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Only run once on mount

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrollY > 100
          ? "bg-background/40 backdrop-blur-md border-b shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between h-16'>
          <Link href='/'>
            <div className='flex items-center space-x-2'>
              <Image
                src={logo || "/placeholder.svg"}
                alt='Logo'
                width={40}
                height={40}
                className='rounded-full'
              />
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrollY > 100 ? "text-blue-600" : "text-white"
                }`}
              >
                Thypro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 relative group ${
                  scrollY > 100
                    ? "text-blue-500 hover:text-blue-600"
                    : "text-white hover:text-white"
                }`}
              >
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
              </a>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <Link href='https://forms.gle/B5uP2hdAkn23v4nGA' target='_blank'>
              <Button className='hidden md:inline-flex bg-blue-600 hover:bg-blue-700 transition-all duration-300'>
                Share your thoughts
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant='ghost'
              size='sm'
              className={`md:hidden transition-colors duration-300 ${
                scrollY > 100 ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className='border-t bg-background/95 backdrop-blur-md'>
            <div className='py-4 space-y-2'>
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 text-muted-foreground hover:text-white transition-all duration-300 hover:bg-blue-600 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div
                className={`px-4 pt-2 transform transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${navItems.length * 50}ms`
                    : "0ms",
                }}
              >
                <Link
                  href='https://forms.gle/B5uP2hdAkn23v4nGA'
                  target='_blank'
                >
                  <Button className='w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300'>
                    Share your thoughts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
