"use client";

import React from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/config/business";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onDiscoverWorld: () => void;
}

export default function Hero({ onOpenBooking, onDiscoverWorld }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92svh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#241713]"
    >
      {/* Edge-to-Edge Cinematic Photographic Composition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="She Needs Beauty Parlour Campaign - Editorial Beauty Portrait"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_30%] sm:object-[68%_28%] lg:object-[60%_35%] brightness-[0.85] contrast-[1.08] animate-hero-zoom select-none"
        />

        {/* Carefully graded directional espresso shadow for headline legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#241713]/95 via-[#241713]/65 to-transparent sm:w-4/5 lg:w-[62%] pointer-events-none" />
        
        {/* Soft bottom vignette for seamless transition into light ivory section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#241713] via-[#241713]/40 to-transparent pointer-events-none" />
        
        {/* Subtle top vignette for nav contrast */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#241713]/70 to-transparent pointer-events-none" />

        {/* Ambient Warm Golden Highlight */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D6BB96]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Editorial Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16 lg:pt-36 lg:pb-16 min-h-[92svh] lg:min-h-screen flex flex-col justify-between">
        {/* Editorial Text Area positioned on the left */}
        <div className="max-w-2xl text-left my-auto space-y-7">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#D6BB96]" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-semibold text-[#D6BB96]">
              {BUSINESS_CONFIG.eyebrow}
            </span>
          </div>

          {/* Large Expressive Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal tracking-tight text-white leading-[1.03] space-y-1">
            <span className="block opacity-95">{BUSINESS_CONFIG.hero.line1}</span>
            <span className="block opacity-95">{BUSINESS_CONFIG.hero.line2}</span>
            <span className="block text-[#F5F0E8] italic font-serif">{BUSINESS_CONFIG.hero.line3}</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-[#DCCBBC] max-w-lg font-light leading-relaxed">
            {BUSINESS_CONFIG.hero.supporting}
          </p>

          {/* Dual Call-to-Actions */}
          <div className="flex flex-wrap items-center gap-5 pt-3">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C78E83] hover:bg-[#b57a6f] text-white font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_10px_35px_rgba(199,142,131,0.35)] hover:shadow-[0_14px_45px_rgba(199,142,131,0.5)] active:scale-95"
            >
              <span>{BUSINESS_CONFIG.hero.primaryCta}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onDiscoverWorld}
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-sans text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md border border-white/20 hover:border-[#D6BB96]/70 transition-all duration-500"
            >
              <span>{BUSINESS_CONFIG.hero.secondaryCta}</span>
            </button>
          </div>
        </div>

        {/* Cinematic Editorial Bottom Bar & Luxury Smooth Scroll-Down Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#DCCBBC]/70 border-t border-white/10 sm:pr-20">
          <div className="flex items-center gap-3">
            <span className="w-3 h-[1px] bg-[#D6BB96]" />
            <span className="font-sans uppercase tracking-[0.22em] text-[10px] text-[#DCCBBC]/80">
              She Needs Beauty Parlour · Hyderabad
            </span>
          </div>

          {/* Cinematic Smooth Scroll Down Animation */}
          <button
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("about");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex flex-col sm:flex-row items-center gap-3.5 cursor-pointer text-[#DCCBBC]/80 hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Scroll down to explore She Needs beauty parlour"
          >
            <span className="font-sans uppercase tracking-[0.25em] text-[10px] font-medium group-hover:text-[#D6BB96] transition-colors">
              Scroll to Explore
            </span>

            {/* Luxury Animated Mouse Glider Pill */}
            <div className="relative flex flex-col items-center">
              <div className="w-[22px] h-[36px] rounded-full border border-[#D6BB96]/70 group-hover:border-[#D6BB96] flex items-start justify-center pt-1.5 transition-all duration-300 shadow-[0_0_12px_rgba(214,187,150,0.15)] group-hover:shadow-[0_0_18px_rgba(214,187,150,0.35)]">
                <span className="w-1 h-2 rounded-full bg-[#D6BB96] animate-scroll-dot" />
              </div>
              <span className="w-[1px] h-3 bg-gradient-to-b from-[#D6BB96] to-transparent mt-1 animate-scroll-line" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
