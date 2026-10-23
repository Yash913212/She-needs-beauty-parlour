"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { X, Calendar, MessageCircle, Send, CheckCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedService
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: preselectedService || "Bridal Makeup",
    date: "",
    time: "11:00 AM",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello She Needs Beauty Parlour!\n\nI would like to book an appointment with you:\n- Name: ${formData.name || "Client"}\n- Phone: ${formData.phone || "Not provided"}\n- Service: ${formData.service}\n- Preferred Date: ${formData.date || "Upcoming"}\n- Preferred Time: ${formData.time}\n${formData.notes ? `- Notes: ${formData.notes}\n` : ""}\nPlease confirm available slots!`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#C6A477", "#C88F82", "#EDE2D5"]
      });
    } catch {
      // Ignore
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#201614]/80 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-[#F5F0E8] rounded-3xl overflow-hidden border border-[#D6BB96]/50 shadow-2xl p-6 sm:p-8 text-[#241713]"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white hover:bg-[#DCCBBC]/40 text-[#241713] flex items-center justify-center border border-[#D6BB96]/30 shadow-sm transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#D6BB96]/20 text-[#241713] flex items-center justify-center mx-auto border border-[#D6BB96]">
              <CheckCircle className="w-8 h-8 text-[#C78E83]" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6D4B3D]">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-3xl text-[#241713] font-light">
                Appointment Requested
              </h3>
            </div>

            <p className="text-sm text-[#6D4B3D] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-medium text-[#241713]">{formData.name}</span>. Your enquiry has been received under reservation reference:
            </p>

            <div className="inline-block px-5 py-2.5 rounded-full bg-white border border-[#D6BB96] font-mono text-base text-[#241713] font-semibold tracking-widest shadow-sm">
              {bookingRef}
            </div>

            <p className="text-xs text-[#6D4B3D]/80">
              Our parlour concierge will reach you shortly at <span className="font-medium text-[#241713]">{formData.phone}</span>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppBooking}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#241713] text-[#F5F0E8] text-xs font-sans tracking-[0.15em] uppercase hover:bg-[#6D4B3D] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D6BB96]" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="py-3 px-5 rounded-full border border-[#241713]/20 text-xs font-sans uppercase tracking-[0.15em] text-[#241713] hover:bg-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[#C78E83] text-[10px] font-sans uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>She Needs Beauty Parlour</span>
              </div>
              <h3 className="font-serif text-3xl text-[#241713] font-light">
                Request an Appointment
              </h3>
              <p className="text-xs text-[#6D4B3D] font-light">
                Select your preferred ritual and time for personalized beauty care.
              </p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#6D4B3D] mb-1 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ananya Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D6BB96]/40 text-sm text-[#241713] placeholder-[#6D4B3D]/40 focus:outline-none focus:border-[#C78E83]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#6D4B3D] mb-1 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D6BB96]/40 text-sm text-[#241713] placeholder-[#6D4B3D]/40 focus:outline-none focus:border-[#C78E83]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#6D4B3D] mb-1 font-medium">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D6BB96]/40 text-sm text-[#241713] focus:outline-none focus:border-[#C78E83]"
                  >
                    {BUSINESS_CONFIG.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Bridal Consultation">Bridal Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#6D4B3D] mb-1 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D6BB96]/40 text-sm text-[#241713] focus:outline-none focus:border-[#C78E83]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#6D4B3D] mb-1 font-medium">
                  Preferred Time Slot
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D6BB96]/40 text-sm text-[#241713] focus:outline-none focus:border-[#C78E83]"
                >
                  <option value="10:00 AM">10:00 AM – 12:00 PM</option>
                  <option value="01:00 PM">01:00 PM – 03:00 PM</option>
                  <option value="04:00 PM">04:00 PM – 06:00 PM</option>
                  <option value="06:30 PM">06:30 PM – 08:30 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#6D4B3D] mb-1 font-medium">
                  Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Share details, occasion, or specific preferences..."
                  className="w-full px-4 py-2 rounded-xl bg-white border border-[#D6BB96]/40 text-sm text-[#241713] placeholder-[#6D4B3D]/40 focus:outline-none focus:border-[#C78E83] resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#241713] hover:bg-[#6D4B3D] text-[#F5F0E8] text-xs font-sans tracking-[0.15em] uppercase shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#D6BB96]" />
                <span>Submit Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#241713]/5 hover:bg-[#241713]/10 text-[#241713] border border-[#241713]/15 text-xs font-sans tracking-[0.15em] uppercase transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#241713]" />
                <span>Via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
