"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BridalSection from "@/components/BridalSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingModal from "@/components/BookingModal";
import StoryModal from "@/components/StoryModal";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import EditorialRibbon from "@/components/EditorialRibbon";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>("Bridal Makeup");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#241713] selection:bg-[#C78E83]/30 selection:text-[#241713] relative">
      {/* Luxury Reading Progress Line */}
      <ScrollProgressBar />

      {/* Primary Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Cinematic Hero Viewport */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onDiscoverWorld={() => setStoryModalOpen(true)}
      />

      {/* Infinite Editorial Luxury Marquee Ribbon */}
      <EditorialRibbon />

      {/* Editorial About Section */}
      <About />

      {/* Signature Services Showcase */}
      <Services
        onOpenBookingForService={(service) => handleOpenBooking(service)}
      />

      {/* Bridal Campaign - Visual Peak */}
      <BridalSection onOpenBooking={() => handleOpenBooking("Bridal Makeup")} />

      {/* Curated Portfolio Gallery */}
      <Gallery />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Appointment & Reservation Experience */}
      <AppointmentSection onOpenBookingModal={() => handleOpenBooking()} />

      {/* Agency-Standard Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Channel */}
      <FloatingWhatsApp />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={selectedServiceForBooking}
      />

      {/* Brand Storytelling Modal */}
      <StoryModal
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </main>
  );
}
