"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/config/business";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface BridalSectionProps {
  onOpenBooking: () => void;
}

export default function BridalSection({ onOpenBooking }: BridalSectionProps) {
  const { bridal } = BUSINESS_CONFIG;
  const [activeOffering, setActiveOffering] = useState<string>("b1");

  const handleWhatsAppConsult = () => {
    const text = `Hello She Needs Beauty Parlour! I am interested in inquiring about your Bridal Beauty & Wedding Styling packages. Could you share details regarding consultations and wedding dates?`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="bridal" className="relative py-28 sm:py-36 bg-[#241713] text-white overflow-hidden">
      {/* Subtle Warm Atmospheric Bokeh & Breathing Candlelight Glow */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-[#D6BB96]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#C78E83]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#D6BB96]/15 rounded-full blur-[130px] pointer-events-none animate-candlelight" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Column: Dramatic Editorial Headlines & Offerings */}
          <div className="lg:col-span-6 space-y-9 text-left">
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-5 h-[1px] bg-[#D6BB96]" />
                <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-semibold text-[#D6BB96]">
                  {bridal.eyebrow}
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-normal tracking-tight text-white leading-[1.05]">
                  <span>{bridal.headingLine1}</span>
                  <span className="block text-[#D6BB96] italic font-serif">{bridal.headingLine2}</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={150}>
              <p className="font-sans text-base sm:text-lg text-[#DCCBBC] font-light leading-relaxed max-w-lg">
                {bridal.supporting}
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={250}>
              <p className="font-sans text-sm text-[#DCCBBC]/80 font-light leading-relaxed border-l-2 border-[#D6BB96]/70 pl-5 italic max-w-lg">
                {bridal.narrative}
              </p>
            </ScrollReveal>

            {/* 4 Editorial Offerings List with Refined Understated Borders */}
            <ScrollReveal delayMs={350}>
              <div className="space-y-4 pt-2">
                {bridal.offerings.map((offering) => {
                  const isActive = activeOffering === offering.id;
                  return (
                    <div
                      key={offering.id}
                      onClick={() => setActiveOffering(offering.id)}
                      className={`group cursor-pointer p-5 rounded-2xl transition-all duration-500 border ${
                        isActive
                          ? "bg-white/10 border-[#D6BB96] shadow-[0_8px_30px_rgba(214,187,150,0.15)]"
                          : "bg-white/5 hover:bg-white/8 border-white/10 hover:border-[#D6BB96]/40"
                      }`}
                    >
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-4">
                        <span className="font-serif text-xs text-[#D6BB96] tracking-widest">
                          {offering.number}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                          {offering.title}
                        </h3>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-sans px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[#D6BB96]">
                        {offering.badge}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#DCCBBC]/80 mt-2 pl-8 leading-relaxed font-light">
                      {offering.description}
                    </p>
                  </div>
                );
              })}
            </div>
            </ScrollReveal>

            {/* Restrained CTAs */}
            <ScrollReveal delayMs={450}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C78E83] hover:bg-[#b57a6f] text-white font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 shadow-lg"
                >
                  <span>{bridal.cta}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={handleWhatsAppConsult}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F5F0E8] border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Consult On WhatsApp</span>
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Full-Bleed Luxury Bridal Portrait */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="scale" delayMs={200}>
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border border-[#D6BB96]/40 shadow-[0_24px_80px_rgba(0,0,0,0.7)] bg-[#1a110e]">
                <Image
                  src="/images/bridal-campaign.jpg"
                  alt="Indian Bridal Artistry Campaign"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover editorial-img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241713] via-transparent to-transparent opacity-50" />

                {/* Bottom Subtle Editorial Stamp */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#241713]/85 backdrop-blur-md border border-[#D6BB96]/30 text-left">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#D6BB96] font-semibold">
                    She Needs Signature
                  </p>
                  <p className="font-serif text-base text-[#F5F0E8] mt-0.5">
                    High-Definition Airbrush Artistry & Kundan Styling
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
