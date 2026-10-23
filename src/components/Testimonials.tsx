"use client";

import React from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/config/business";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Testimonials() {
  const { testimonials } = BUSINESS_CONFIG;

  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-[#F5F0E8] border-t border-[#DCCBBC]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-18 text-left space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-5 h-[1px] bg-[#D6BB96]" />
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-semibold text-[#6D4B3D]">
                TESTIMONIALS
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-[#241713] leading-[1.08]">
              Kind Words, <br />
              <span className="italic text-[#6D4B3D] font-serif">Beautiful Experiences.</span>
            </h2>

            <p className="font-sans text-base text-[#6D4B3D] font-light">
              Reflections from clients who entrusted their special days and self-care moments to our care.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Restrained Editorial Testimonial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-4">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.id} delayMs={index * 150} className="h-full">
              <div
                className="flex flex-col justify-between text-left space-y-8 p-8 rounded-3xl bg-white border border-[#D6BB96]/30 shadow-sm hover:shadow-lg transition-all duration-500 h-full"
              >
                <div className="space-y-4">
                  <span className="font-serif text-sm text-[#D6BB96] tracking-widest block">
                    0{index + 1}
                  </span>

                  <p className="font-serif text-lg sm:text-xl text-[#241713] leading-relaxed italic font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

              <div className="pt-6 border-t border-[#DCCBBC]/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D6BB96]/40 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#241713] leading-tight">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] uppercase tracking-wider text-[#6D4B3D] mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-[#D6BB96]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D6BB96] text-[#D6BB96]" />
                  ))}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[11px] text-[#6D4B3D]/70 font-sans tracking-wide">
            Sample client reflections for demonstration · Verifiable customer reviews integrated upon parlour launch.
          </p>
        </div>
      </div>
    </section>
  );
}
