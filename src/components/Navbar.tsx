"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";
import { BUSINESS_CONFIG } from "@/config/business";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "bridal", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Bridal", href: "#bridal", id: "bridal" },
    { name: "Portfolio", href: "#gallery", id: "gallery" },
    { name: "Reviews", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#D6BB96]/30 py-3.5 shadow-[0_4px_30px_rgba(36,23,19,0.04)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Typographic Wordmark on Left */}
          <a
            href="#home"
            className="group outline-none focus-visible:ring-1 focus-visible:ring-[#D6BB96]"
            aria-label="She Needs Beauty Parlour Home"
          >
            <BrandLogo light={!isScrolled} />
          </a>

          {/* Minimal Navigation Links in Center */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-sans transition-all duration-300 relative py-1 ${
                    isScrolled
                      ? isActive
                        ? "text-[#241713] font-semibold"
                        : "text-[#6D4B3D] hover:text-[#241713]"
                      : isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Subtle underline transition */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#D6BB96] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Refined Appointment CTA on Right */}
          <div className="hidden sm:flex items-center space-x-5">
            <button
              onClick={onOpenBooking}
              className={`group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans uppercase tracking-[0.18em] transition-all duration-500 ${
                isScrolled
                  ? "bg-[#C78E83] text-white hover:bg-[#b67a6f] shadow-sm hover:shadow-md"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 hover:border-[#D6BB96]/70 shadow-lg"
              }`}
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full text-[10px] font-sans uppercase tracking-widest bg-[#C78E83] text-white"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? "text-[#241713]" : "text-white"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#F5F0E8] border-b border-[#D6BB96]/30 shadow-2xl px-6 py-8 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#241713] text-lg font-serif tracking-wide py-2 border-b border-[#DCCBBC]/40 hover:text-[#C78E83] transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs uppercase tracking-widest text-[#D6BB96] font-sans">
                  Explore
                </span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-5 rounded-full bg-[#C78E83] hover:bg-[#b67a6f] text-white font-sans text-xs uppercase tracking-widest shadow-md transition-all"
              >
                Book an Appointment
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                className="w-full text-center py-2.5 rounded-full border border-[#241713]/20 text-[#241713] font-sans text-[11px] uppercase tracking-wider"
              >
                Call: {BUSINESS_CONFIG.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
