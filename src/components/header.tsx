"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 100
          ? "bg-background/95 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between h-16'>
          <div className='flex items-center space-x-2'>
            <Heart
              className={`h-8 w-8 font-bold ${
                scrollY > 100 ? "text-blue-600 " : "text-white"
              }`}
            />
            <span
              className={`text-2xl font-bold ${
                scrollY > 100 ? "text-blue-600 " : "text-white"
              }`}
            >
              Thypro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='text-muted-foreground hover:text-foreground transition-colors relative group'
              >
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full'></span>
              </a>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <Button className='hidden md:inline-flex bg-blue-600 hover:bg-blue-700'>
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant='ghost'
              size='sm'
              className='md:hidden'
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
        {isMenuOpen && (
          <div className='md:hidden border-t bg-background/95 backdrop-blur-md'>
            <div className='py-4 space-y-2'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className='px-4 pt-2'>
                <Button className='w-full bg-blue-600 hover:bg-blue-700'>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
