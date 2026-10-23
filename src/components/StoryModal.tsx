"use client";

import React from "react";
import Image from "next/image";
import { X, Sparkles, Award, Heart } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function StoryModal({ isOpen, onClose, onOpenBooking }: StoryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241713]/85 backdrop-blur-md animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-[#F5F0E8] rounded-3xl overflow-hidden border border-[#D6BB96]/40 shadow-2xl text-[#241713] max-h-[90vh] flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white hover:bg-[#DCCBBC] text-[#241713] flex items-center justify-center shadow-md transition-colors"
          aria-label="Close story modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header */}
        <div className="relative w-full h-56 sm:h-72 shrink-0 bg-[#241713]">
          <Image
            src="/images/salon-interior.jpg"
            alt="Inside She Needs Beauty Parlour"
            fill
            className="object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241713] via-[#241713]/30 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.28em] font-sans font-bold text-[#D6BB96]">
              OUR PHILOSOPHY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-0.5">
              The She Needs World
            </h3>
          </div>
        </div>

        {/* Story Narrative Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-left text-sm text-[#6D4B3D] leading-relaxed">
          <p className="font-serif text-xl text-[#241713] italic leading-snug">
            &ldquo;Beauty is not just a look. It is a feeling.&rdquo;
          </p>

          <p className="font-light">
            Founded with the belief that luxury self-care should be atmospheric, hygienic, and deeply personal, <strong>She Needs Beauty Parlour</strong> provides a welcoming retreat in Hyderabad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-[#D6BB96]/30 text-center space-y-1.5">
              <Sparkles className="w-5 h-5 text-[#D6BB96] mx-auto" />
              <h4 className="font-serif text-sm font-semibold text-[#241713]">Artful Detail</h4>
              <p className="text-[11px] text-[#6D4B3D]">Customized techniques tailored to your bone structure and personal aesthetic.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#D6BB96]/30 text-center space-y-1.5">
              <Award className="w-5 h-5 text-[#D6BB96] mx-auto" />
              <h4 className="font-serif text-sm font-semibold text-[#241713]">Pure Formulations</h4>
              <p className="text-[11px] text-[#6D4B3D]">Dermatologically tested luxury formulations for healthy, radiant skin and hair.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#D6BB96]/30 text-center space-y-1.5">
              <Heart className="w-5 h-5 text-[#D6BB96] mx-auto" />
              <h4 className="font-serif text-sm font-semibold text-[#241713]">Bridal Devotion</h4>
              <p className="text-[11px] text-[#6D4B3D]">Uncompromising care to ensure your wedding morning is joyful and serene.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#DCCBBC]/50 flex items-center justify-between">
            <BrandLogo size="sm" />
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 rounded-full bg-[#C78E83] hover:bg-[#b57a6f] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
