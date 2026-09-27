import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import VenturesSection from "@/components/VenturesSection";
import AboutSection from "@/components/AboutSection";
import LegacyJourneyBanner from "@/components/LegacyJourneyBanner";
import GlobalReach from "@/components/GlobalReach";
import ProductGallery from "@/components/ProductGallery";
import SustainabilitySection from "@/components/SustainabilitySection";
import GallerySection from "@/components/GallerySection";
import ContactCTA from "@/components/ContactCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#fbfbf8] text-[#121c17] flex flex-col overflow-x-hidden">
      {/* 1. Navbar / Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. Our Businesses / Group Ventures (Subh Greenz, Shiva Exporting, Subhashini Tower) */}
      <VenturesSection />

      {/* 5. About Us */}
      <AboutSection />

      {/* 6. Our Journey (Foundational Leader / Regional Trade Banner) */}
      <LegacyJourneyBanner />

      {/* 7. Global Reach (Exporting Freshness to the World - Maldives Map) */}
      <GlobalReach />

      {/* 8. Our Products (Quality Produce from India to the World) */}
      <ProductGallery />

      {/* 9. Sustainability */}
      <SustainabilitySection />

      {/* 10. Gallery & News Updates */}
      <GallerySection />

      {/* 11. Contact CTA Banner */}
      <ContactCTA />

      {/* 12. Contact Section */}
      <ContactSection />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
