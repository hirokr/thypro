"use client"

import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who trust Thypro for their health and emergency needs. Download now and experience
            the future of healthcare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              <Apple className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </Button>

            <Button size="lg" variant="outline" className="border-black hover:bg-gray-50">
              <Smartphone className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
