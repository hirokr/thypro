"use client"

import { Separator } from "@/components/ui/separator"
import { Heart } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Features",
      links: ["Health Vault", "Emergency SOS", "Blood Donation", "AI Assistant"],
      href: "#features",
    },
    {
      title: "Support",
      links: ["Help Center", "Privacy Policy", "Terms of Service", "Contact Us"],
      href: "#",
    },
    {
      title: "Connect",
      links: ["Twitter", "Facebook", "LinkedIn", "Instagram"],
      href: "#",
    },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Thypro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing healthcare access in developing regions through innovative technology and unified
              emergency response systems.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-blue-400">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <a key={link} href={section.href} className="block text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center text-gray-400">
          <p>&copy; 2025 Thypro. All rights reserved. | Every record and every second matters.</p>
        </div>
      </div>
    </footer>
  )
}
