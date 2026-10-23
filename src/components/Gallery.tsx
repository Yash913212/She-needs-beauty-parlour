"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BUSINESS_CONFIG, GalleryItem } from "@/config/business";
import { X, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Gallery() {
  const { gallery, galleryItems } = BUSINESS_CONFIG;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-[#F5F0E8] border-t border-[#DCCBBC]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4 mb-14 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="w-5 h-[1px] bg-[#D6BB96]" />
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-semibold text-[#6D4B3D]">
                {gallery.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-[#241713] leading-[1.08]">
              {gallery.heading}
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#6D4B3D] font-light max-w-xl leading-relaxed">
              {gallery.supporting}
            </p>

            {/* Minimalist Filter Navigation */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              {gallery.categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-[0.16em] transition-all duration-300 ${
                      isSelected
                        ? "bg-[#241713] text-white shadow-sm"
                        : "bg-[#DCCBBC]/40 text-[#6D4B3D] hover:bg-[#DCCBBC]/80 hover:text-[#241713]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Varied Proportion Editorial Gallery Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              animation="scale"
              delayMs={(idx % 3) * 120}
              className={item.aspectClass}
            >
              <div
                onClick={() => setLightboxItem(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#D6BB96]/30 shadow-md hover:shadow-2xl transition-all duration-700 w-full h-full"
              >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover editorial-img-hover"
              />

              {/* Minimal Dark Hover Mask */}
              <div className="absolute inset-0 bg-[#241713]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D6BB96] font-semibold">
                  {item.category}
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-normal mt-1">
                  {item.title}
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs text-[#D6BB96]">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-widest text-[10px] font-sans">
                    View Full Artistry
                  </span>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Ethical Demonstration Disclosure */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-[#6D4B3D]/70 font-sans tracking-wide">
            Curated brand demonstration portfolio · All customer photography presented strictly with verified consent.
          </p>
        </div>
      </div>

      {/* Polished Lightbox Preview */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241713]/90 backdrop-blur-md animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#241713] rounded-3xl overflow-hidden border border-[#D6BB96]/40 shadow-2xl"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] w-full max-h-[75vh]">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-[#1a110e] border-t border-white/10 flex items-center justify-between text-white text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D6BB96] font-semibold">
                  {lightboxItem.category}
                </span>
                <h4 className="font-serif text-2xl text-white mt-0.5">
                  {lightboxItem.title}
                </h4>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#DCCBBC]/60 font-sans">
                She Needs Beauty Parlour
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
