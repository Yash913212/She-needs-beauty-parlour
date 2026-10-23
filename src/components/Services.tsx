"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BUSINESS_CONFIG, ServiceItem } from "@/config/business";
import { ArrowUpRight, Check, Clock, MessageCircle, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ServicesProps {
  onOpenBookingForService: (serviceName: string) => void;
}

export default function Services({ onOpenBookingForService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { servicesHeading, services } = BUSINESS_CONFIG;

  const openWhatsAppForService = (service: ServiceItem) => {
    const text = `Hello She Needs Beauty Parlour! I am interested in inquiring about your "${service.title}" (${service.subtitle}) service. Could you please share consultation slots and package details?`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="services" className="py-28 sm:py-36 bg-[#F5F0E8] border-t border-[#DCCBBC]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4 mb-20 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="w-5 h-[1px] bg-[#D6BB96]" />
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-semibold text-[#6D4B3D]">
                {servicesHeading.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal tracking-tight text-[#241713] leading-[1.06]">
              {servicesHeading.title}
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#6D4B3D] font-light max-w-xl leading-relaxed">
              {servicesHeading.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Art-Directed Asymmetric Service Panels (NOT identical white cards) */}
        <div className="space-y-12">
          {/* Featured Large Hero Panel: Bridal Makeup & Hair (Asymmetric Split) */}
          <ScrollReveal animation="scale">
            <div
              onClick={() => setSelectedService(services[2])}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#241713] text-white border border-[#D6BB96]/30 shadow-xl transition-all duration-700 hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative"
            >
              {/* Luxury Shimmer Light Sweep */}
              <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#D6BB96]/10 to-transparent pointer-events-none animate-shimmer-sweep" />

              {/* Visual Panel */}
              <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto min-h-[380px] overflow-hidden">
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover editorial-img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#241713]/90" />
              </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-[#D6BB96] tracking-widest">
                    {services[2].number} / 06
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-[#D6BB96]/40 text-[#D6BB96]">
                    Signature Highlight
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white group-hover:text-[#D6BB96] transition-colors leading-tight">
                  {services[2].title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-[#D6BB96]">
                  {services[2].subtitle}
                </p>

                <p className="font-sans text-sm text-[#DCCBBC] leading-relaxed font-light">
                  {services[2].description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#D6BB96] font-sans font-semibold group-hover:underline">
                  Discover Offering
                </span>
                <span className="w-9 h-9 rounded-full border border-[#D6BB96]/40 flex items-center justify-center text-[#D6BB96] group-hover:bg-[#C78E83] group-hover:border-[#C78E83] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Staggered Secondary Grid: 2 Asymmetrical Panels */}
          <ScrollReveal delayMs={100}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Skin Care & Facials (5 Cols) */}
              <div
                onClick={() => setSelectedService(services[1])}
                className="group cursor-pointer md:col-span-5 rounded-3xl overflow-hidden bg-white border border-[#D6BB96]/30 shadow-md hover:shadow-xl transition-all duration-700 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={services[1].image}
                    alt={services[1].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover editorial-img-hover"
                  />
                </div>
                <div className="p-7 sm:p-9 text-left space-y-4">
                  <span className="font-serif text-xs text-[#D6BB96] tracking-widest block">
                    {services[1].number} / 06
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#241713] group-hover:text-[#C78E83] transition-colors leading-snug">
                    {services[1].title}
                  </h3>
                  <p className="font-sans text-xs text-[#6D4B3D] leading-relaxed">
                    {services[1].description}
                  </p>
                  <div className="pt-4 border-t border-[#DCCBBC]/40 flex items-center justify-between text-xs text-[#6D4B3D]">
                    <span className="uppercase tracking-widest font-semibold font-sans">
                      View Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#D6BB96] group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Hair Styling (7 Cols) */}
              <div
                onClick={() => setSelectedService(services[0])}
                className="group cursor-pointer md:col-span-7 rounded-3xl overflow-hidden bg-white border border-[#D6BB96]/30 shadow-md hover:shadow-xl transition-all duration-700 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={services[0].image}
                    alt={services[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover editorial-img-hover"
                  />
                </div>
                <div className="p-7 sm:p-9 text-left space-y-4">
                  <span className="font-serif text-xs text-[#D6BB96] tracking-widest block">
                    {services[0].number} / 06
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#241713] group-hover:text-[#C78E83] transition-colors leading-snug">
                    {services[0].title}
                  </h3>
                  <p className="font-sans text-xs text-[#6D4B3D] leading-relaxed">
                    {services[0].description}
                  </p>
                  <div className="pt-4 border-t border-[#DCCBBC]/40 flex items-center justify-between text-xs text-[#6D4B3D]">
                    <span className="uppercase tracking-widest font-semibold font-sans">
                      View Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#D6BB96] group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tertiary Row: 3 Editorial Panels */}
          <ScrollReveal delayMs={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[services[3], services[4], services[5]].map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-[#D6BB96]/30 shadow-md hover:shadow-xl transition-all duration-700 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover editorial-img-hover"
                  />
                </div>
                <div className="p-7 text-left space-y-3">
                  <span className="font-serif text-xs text-[#D6BB96] tracking-widest block">
                    {service.number} / 06
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#241713] group-hover:text-[#C78E83] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-[#6D4B3D] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="pt-3 border-t border-[#DCCBBC]/40 flex items-center justify-between text-xs text-[#6D4B3D]">
                    <span className="uppercase tracking-widest font-semibold font-sans text-[11px]">
                      Explore
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D6BB96] group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241713]/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-xl bg-[#F5F0E8] rounded-3xl overflow-hidden shadow-2xl border border-[#D6BB96]/40 max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#241713] flex items-center justify-center shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative w-full h-56 sm:h-64 shrink-0 bg-[#241713]">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241713] via-[#241713]/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-semibold text-[#D6BB96]">
                  {selectedService.category} · {selectedService.number}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-0.5">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
              <p className="text-sm text-[#6D4B3D] leading-relaxed font-light">
                {selectedService.description}
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#D6BB96]/30 space-y-3">
                <h4 className="font-serif text-base font-semibold text-[#241713]">
                  Included Treatments & Rituals
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#6D4B3D]">
                      <Check className="w-4 h-4 text-[#D6BB96] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-xs text-[#6D4B3D] pt-2 border-t border-[#DCCBBC]/50">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D6BB96]" />
                  <span>Duration: {selectedService.duration || "Varies"}</span>
                </div>
                <span className="italic text-[#C78E83] font-medium">
                  {selectedService.pricingNote}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenBookingForService(title);
                  }}
                  className="flex-1 py-3 px-5 rounded-full bg-[#C78E83] hover:bg-[#b57a6f] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md text-center"
                >
                  Book This Service
                </button>

                <button
                  onClick={() => openWhatsAppForService(selectedService)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#1eb857] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
