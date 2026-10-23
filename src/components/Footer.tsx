"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import { BUSINESS_CONFIG } from "@/config/business";
import { Phone, MapPin, Clock, MessageCircle, ArrowUp, X } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";

export default function Footer() {
  const { contact, services } = BUSINESS_CONFIG;
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#EDE2D5] text-[#241713] pt-24 pb-14 border-t border-[#D6BB96]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-[#DCCBBC]/70 text-left">
          {/* Brand Wordmark & Philosophy Statement */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo size="lg" />
            <p className="font-serif italic text-2xl text-[#6D4B3D] max-w-sm pt-1 leading-snug">
              &ldquo;Beauty is not just a look. It is a feeling.&rdquo;
            </p>
            <p className="font-sans text-xs text-[#6D4B3D]/80 leading-relaxed max-w-sm">
              She Needs Beauty Parlour is an intimate contemporary sanctuary in Hyderabad offering bespoke bridal styling, restorative facials, and refined hair design.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#241713]">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-[#6D4B3D] font-sans">
              <li>
                <a href="#home" className="hover:text-[#C78E83] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C78E83] transition-colors">
                  About She Needs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C78E83] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-[#C78E83] transition-colors">
                  Bridal Campaign
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C78E83] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#C78E83] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C78E83] transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#241713]">
              Treatments
            </h4>
            <ul className="space-y-3 text-xs text-[#6D4B3D] font-sans">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#C78E83] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#241713]">
              Studio Details
            </h4>
            <ul className="space-y-3 text-xs text-[#6D4B3D] font-sans">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D6BB96] shrink-0 mt-0.5" />
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#C78E83] transition-colors font-semibold text-[#241713]"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6BB96] shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D6BB96] shrink-0 mt-0.5" />
                <span>{contact.hours}</span>
              </li>
            </ul>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#C78E83] hover:text-white text-[#241713] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#C78E83] hover:text-white text-[#241713] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={contact.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#C78E83] hover:text-white text-[#241713] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#25D366] hover:text-white text-[#241713] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Generous Margin around Floating Actions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6D4B3D] gap-4 sm:px-24 text-center sm:text-left">
          <p>© 2026 She Needs Beauty Parlour. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-[#241713] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#D6BB96]">|</span>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-[#241713] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-11 h-11 rounded-full bg-[#C78E83] hover:bg-[#b57a6f] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Legal Modal */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241713]/80 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-[#F5F0E8] p-8 rounded-3xl border border-[#D6BB96]/40 shadow-2xl text-left space-y-4"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-[#241713] flex items-center justify-center shadow"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif text-2xl text-[#241713]">
              {activeModal === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
            </h3>

            <div className="text-xs text-[#6D4B3D] space-y-3 leading-relaxed max-h-60 overflow-y-auto font-light">
              {activeModal === "privacy" ? (
                <>
                  <p>
                    Client confidentiality and comfort are foundational to the She Needs experience.
                  </p>
                  <p>
                    Details provided through appointment inquiries or WhatsApp correspondence are utilized solely for scheduling, consultation, and reservation confirmations.
                  </p>
                  <p>
                    Any photography displayed within our portfolio is presented only with verified, affirmative client consent.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Advance reservations are recommended to guarantee preferred artists and appointment times, especially during bridal seasons.
                  </p>
                  <p>
                    Please inform our estheticians of any allergies or skin sensitivities during your consultation.
                  </p>
                  <p>
                    She Needs Beauty Parlour reserves the right to tailor treatment recommendations based on professional diagnostic assessments.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-[#241713] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
