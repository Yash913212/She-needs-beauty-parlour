"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Send
} from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import ScrollReveal from "@/components/ScrollReveal";

interface AppointmentSectionProps {
  onOpenBookingModal: () => void;
}

export default function AppointmentSection({ onOpenBookingModal }: AppointmentSectionProps) {
  const { appointment, contact, services } = BUSINESS_CONFIG;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Bridal Makeup",
    date: "",
    time: "Morning (10:00 AM – 1:00 PM)",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppEnquiry = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = `Hello She Needs Beauty Parlour!\n\nI would like to enquire about an appointment:\n- Name: ${formData.name || "Client"}\n- Phone: ${formData.phone || "Not provided"}\n- Service: ${formData.service}\n- Preferred Date: ${formData.date || "Upcoming"}\n- Time Slot: ${formData.time}\n${formData.notes ? `- Notes: ${formData.notes}\n` : ""}\nPlease let me know available slots!`;
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    const ref = "SN-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D6BB96", "#C78E83", "#F5F0E8"]
      });
    } catch {
      // Ignore
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#241713] text-white overflow-hidden">
      {/* Background Wellness Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/appointment-spa.jpg"
          alt="She Needs Spa Ambiance"
          fill
          className="object-cover brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#241713] via-[#241713]/90 to-[#241713]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Headline & Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-[#D6BB96]" />
                  <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-semibold text-[#D6BB96]">
                    {appointment.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-white leading-[1.08]">
                  {appointment.headline}
                </h2>

                <p className="font-sans text-base text-[#DCCBBC] font-light leading-relaxed max-w-md">
                  {appointment.supporting}
                </p>
              </div>
            </ScrollReveal>

            {/* Direct Contact Cards */}
            <div className="space-y-5 pt-2">
              {/* Call Channel */}
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D6BB96]/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#D6BB96]/20 text-[#D6BB96] flex items-center justify-center shrink-0 group-hover:bg-[#D6BB96] group-hover:text-[#241713] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#DCCBBC]/70 font-sans font-semibold">
                    Direct Phone Line
                  </p>
                  <p className="font-serif text-lg text-white font-medium">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-[#D6BB96]/20 text-[#D6BB96] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#DCCBBC]/70 font-sans font-semibold">
                    Studio Location
                  </p>
                  <p className="font-sans text-xs text-[#F5F0E8] leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-[#D6BB96]/20 text-[#D6BB96] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#DCCBBC]/70 font-sans font-semibold">
                    Parlour Hours
                  </p>
                  <p className="font-sans text-xs text-[#F5F0E8]">
                    {contact.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-[#DCCBBC] text-xs font-semibold uppercase tracking-wider hover:bg-white/15 hover:text-white transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{contact.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Refined Booking Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="scale" delayMs={200}>
              <div className="rounded-3xl bg-[#1d120f]/90 border border-[#D6BB96]/30 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]/40">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white">
                    Enquiry Logged Successfully
                  </h3>

                  <p className="text-sm text-[#DCCBBC] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your enquiry for <span className="text-[#D6BB96] font-semibold">{formData.service}</span> has been logged under reference:
                  </p>

                  <div className="inline-block px-6 py-2.5 rounded-xl bg-white/10 border border-[#D6BB96] font-mono text-xl text-[#F5F0E8] tracking-widest font-bold">
                    {bookingRef}
                  </div>

                  <p className="text-xs text-[#DCCBBC]/70">
                    Our coordinator will confirm slot availability with you via WhatsApp or call at <span className="text-white font-semibold">{formData.phone}</span>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={() => handleWhatsAppEnquiry()}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#1eb857] text-white text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to Parlour on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#DCCBBC] hover:text-white"
                    >
                      Make Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="space-y-1 pb-2">
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-semibold text-[#D6BB96]">
                      RESERVATION ENQUIRY
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                      Reserve Your Beauty Experience
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-sans uppercase tracking-widest text-[#DCCBBC] block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D6BB96] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-sans uppercase tracking-widest text-[#DCCBBC] block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 00000"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D6BB96] transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-sans uppercase tracking-widest text-[#DCCBBC] block">
                        Select Treatment *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#241713] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D6BB96] transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#241713] text-white">
                            {s.title} ({s.subtitle})
                          </option>
                        ))}
                        <option value="Bridal Consultation" className="bg-[#241713] text-white">
                          Bespoke Bridal Consultation
                        </option>
                      </select>
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-sans uppercase tracking-widest text-[#DCCBBC] block">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D6BB96] transition-colors"
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-[11px] font-sans uppercase tracking-widest text-[#DCCBBC] block">
                        Preferred Time of Day
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#241713] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D6BB96] transition-colors"
                      >
                        <option value="Morning (10:00 AM – 1:00 PM)">Morning Session (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon Session (1:00 PM – 4:00 PM)</option>
                        <option value="Evening (4:00 PM – 7:00 PM)">Evening Session (4:00 PM – 7:00 PM)</option>
                        <option value="Late Evening (7:00 PM – 8:00 PM)">Late Evening (7:00 PM – 8:00 PM)</option>
                      </select>
                    </div>

                    {/* Notes */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-[11px] font-sans uppercase tracking-widest text-[#DCCBBC] block">
                        Special Requests or Queries (Optional)
                      </label>
                      <textarea
                        rows={2}
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="e.g. Inquiring for bridal makeup on December 12th, or sensitive skin consultation..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D6BB96] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#C78E83] hover:bg-[#b57a6f] text-white font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-lg active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Booking Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppEnquiry}
                      className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#1eb857] text-white font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-lg active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#DCCBBC]/60 font-sans">
                    * All appointment requests are confirmed with you directly. No advance payment required for initial inquiry.
                  </p>
                </form>
              )}
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
