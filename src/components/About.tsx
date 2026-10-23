"use client";

import React from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/config/business";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  const { about } = BUSINESS_CONFIG;

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#F5F0E8] text-[#241713] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Grid with Asymmetric Proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Asymmetrical Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="scale">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Dominant Visual: Arched Boutique Salon Interior */}
                <div className="relative w-[86%] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(36,23,19,0.09)] border border-[#D6BB96]/30 bg-white">
                  <Image
                    src="/images/salon-interior.jpg"
                    alt="She Needs Boutique Salon Ambiance"
                    fill
                    sizes="(max-width: 1024px) 85vw, 42vw"
                    className="object-cover editorial-img-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241713]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Secondary Overlapping Visual: Makeup & Skin Radiance with gentle floating parallax */}
                <div className="absolute -bottom-8 right-0 w-[58%] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(36,23,19,0.16)] border-4 border-[#F5F0E8] z-20 hover:scale-105 transition-transform duration-700">
                  <Image
                    src="/images/makeup-glow.jpg"
                    alt="Delicate Makeup Artistry"
                    fill
                    sizes="320px"
                    className="object-cover editorial-img-hover"
                  />
                </div>

                {/* Fine Champagne Geometric Accent */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-[#D6BB96]/60 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Typography & Intentional Spacing */}
          <div className="lg:col-span-6 space-y-9 text-left">
            <ScrollReveal delayMs={100}>
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-5 h-[1px] bg-[#D6BB96]" />
                <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-semibold text-[#6D4B3D]">
                  {about.eyebrow}
                </span>
              </div>

              {/* Editorial Headline */}
              <div className="space-y-1">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-[#241713] leading-[1.08]">
                  <span>{about.headingLine1}</span>
                  <span className="block italic text-[#6D4B3D] font-serif">{about.headingLine2}</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Supporting Copy */}
            <ScrollReveal delayMs={200}>
              <p className="font-sans text-base sm:text-lg text-[#6D4B3D] font-light leading-relaxed">
                {about.supporting}
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={300}>
              <p className="font-sans text-sm sm:text-[15px] text-[#241713]/80 leading-relaxed font-light border-l-2 border-[#D6BB96] pl-5 italic">
                {about.narrative}
              </p>
            </ScrollReveal>

            {/* 3 Editorial Value Lines with Refined Dividers */}
            <ScrollReveal delayMs={400}>
              <div className="pt-4 space-y-6 border-t border-[#DCCBBC]/50">
                {about.values.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-baseline group">
                    <span className="col-span-2 font-serif text-sm text-[#D6BB96] font-medium tracking-widest group-hover:text-[#C78E83] transition-colors">
                      0{index + 1}
                    </span>
                    <div className="col-span-10 space-y-1">
                      <h3 className="font-serif text-base font-semibold text-[#241713] group-hover:translate-x-1 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-[#6D4B3D] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
