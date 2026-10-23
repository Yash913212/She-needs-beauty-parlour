"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function EditorialRibbon() {
  const items = [
    "SHE NEEDS BEAUTY PARLOUR",
    "CONTEMPORARY LUXURY",
    "BRIDAL EDITORIAL",
    "BOTANICAL SKIN THERAPY",
    "TIMELESS RADIANCE",
    "HIGH-FASHION HAIR STYLING",
    "BESPOKE BEAUTY CARE",
    "HYDERABAD SANCTUARY",
  ];

  return (
    <div className="w-full bg-[#241713] text-[#F5F0E8] border-y border-[#D6BB96]/20 py-4.5 overflow-hidden select-none relative z-20">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Double array to ensure seamless infinite looping */}
        {[...items, ...items].map((phrase, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-6">
            <span className="font-serif text-sm tracking-[0.28em] uppercase text-[#D6BB96]/90 font-light hover:text-white transition-colors">
              {phrase}
            </span>
            <Sparkles className="w-3 h-3 text-[#C78E83] opacity-75 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
