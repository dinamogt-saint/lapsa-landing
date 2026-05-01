"use client";

import { AnimatedHero } from "@/components/ui/animated-hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Radial gradient background with orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, rgba(10,10,10,0) 70%)",
        }}
      />
      <div className="relative z-10">
        <AnimatedHero />
      </div>

      {/* Early-access status */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-bold text-base">Beta</span>
            <span>early stores onboarding</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-bold text-base">Shopify</span>
            <span>first data source</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-bold text-base">Telegram</span>
            <span>daily brief MVP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
