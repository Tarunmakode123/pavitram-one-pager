"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { RequirementSelector } from "@/components/sections/RequirementSelector";
import { WhyPavitram } from "@/components/sections/WhyPavitram";
import { BuyingProcess } from "@/components/sections/BuyingProcess";
import { IndoreLocationSection } from "@/components/sections/IndoreLocationSection";
import { InvestmentGuidance } from "@/components/sections/InvestmentGuidance";
import { VisualStorytelling } from "@/components/sections/VisualStorytelling";
import { TrustAlternativeSection } from "@/components/sections/TrustAlternativeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { EnquiryModal } from "@/components/ui/EnquiryModal";

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    propertyName?: string;
    requirement?: string;
  }>({
    isOpen: false,
    propertyName: undefined,
    requirement: "Residential Property",
  });

  const handleOpenEnquiry = (propertyName?: string) => {
    setModalState({
      isOpen: true,
      propertyName,
      requirement: propertyName ? `Enquiry for ${propertyName}` : "Residential Property",
    });
  };

  const handleOpenEnquiryWithFilter = (requirement: string, location: string, budget: string) => {
    setModalState({
      isOpen: true,
      propertyName: `Looking for ${requirement} in ${location} (${budget})`,
      requirement,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <main className="min-h-screen bg-pavitram-dark text-pavitram-cream overflow-x-hidden">
      {/* STICKY NAVBAR */}
      <Header onOpenEnquiry={handleOpenEnquiry} />

      {/* 1. HERO SECTION */}
      <HeroSection onOpenEnquiry={handleOpenEnquiry} />

      {/* 2. TRUST SECTION */}
      <TrustSection />

      {/* 3. FEATURED PROPERTIES */}
      <FeaturedProperties onOpenEnquiry={handleOpenEnquiry} />

      {/* 4. REQUIREMENT SELECTOR */}
      <RequirementSelector onOpenEnquiryWithFilter={handleOpenEnquiryWithFilter} />

      {/* 5. WHY PAVITRAM PROPERTIES */}
      <WhyPavitram />

      {/* 6. PROPERTY BUYING PROCESS */}
      <BuyingProcess />

      {/* 7. INDORE LOCATION SECTION */}
      <IndoreLocationSection onOpenEnquiry={handleOpenEnquiry} />

      {/* 8. INVESTMENT GUIDANCE */}
      <InvestmentGuidance onOpenEnquiry={handleOpenEnquiry} />

      {/* 9. VISUAL STORYTELLING */}
      <VisualStorytelling onOpenEnquiry={handleOpenEnquiry} />

      {/* 10. TRUST ALTERNATIVE SECTION */}
      <TrustAlternativeSection />

      {/* 11. FAQ SECTION */}
      <FAQSection />

      {/* 12. FINAL DRAMATIC CTA */}
      <FinalCTA onOpenEnquiry={handleOpenEnquiry} />

      {/* FOOTER */}
      <Footer />

      {/* FLOATING ACTION ELEMENTS */}
      <MobileStickyCTA onOpenEnquiry={handleOpenEnquiry} />
      <FloatingWhatsApp />

      {/* GLOBAL ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        propertyName={modalState.propertyName}
        requirement={modalState.requirement}
      />
    </main>
  );
}
