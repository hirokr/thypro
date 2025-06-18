"use client"

import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: number
}

export function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2">{value.toLocaleString()}+</div>
      <div className="text-blue-200 text-sm uppercase tracking-wider">{label}</div>
    </div>
  )
}
