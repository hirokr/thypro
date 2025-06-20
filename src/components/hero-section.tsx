"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, LucideArrowDown, Play, Timer } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white'>
      <div className='absolute inset-0 bg-black/20'></div>
      <div className='relative container mx-auto px-4 py-24 md:py-32'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          <Badge
            variant='secondary'
            className='bg-white/10 text-white border-white/20'
          >
            <Timer className='h-4 w-4 mr-2' />
            Every Record and Every Second Matters
          </Badge>

          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            Your Complete
            <span className='block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
              Healthcare Companion
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto'>
            Thypro revolutionizes emergency response and wellness in developing
            regions with unified healthcare solutions, real-time emergency
            services, and AI-powered health support.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='https://forms.gle/B5uP2hdAkn23v4nGA'
              target='_blank'
              className='cursor-pointer'
            >
              <Button
                size='lg'
                className='bg-white text-blue-600 hover:bg-blue-50'
              >
                {/* <LucideArrowDown className='h-5 w-5 mr-2' /> */}
                Share Your Thoughts
              </Button>
            </Link>
            <Link href='#features' className='cursor-pointer'>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-black hover:bg-white/10 hover:text-white'
              >
                <LucideArrowDown className='h-5 w-5 mr-2' />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
