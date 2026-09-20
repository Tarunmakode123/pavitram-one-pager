"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { trackSiteVisitClick, trackWhatsAppClick } from "@/lib/analytics/events";

interface FinalCTAProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function FinalCTA({ onOpenEnquiry }: FinalCTAProps) {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.brand.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.defaultMessage
  )}`;

  return (
    <section className="relative py-24 md:py-32 bg-pavitram-dark overflow-hidden">
      {/* BACKGROUND IMAGE & GRADIENT */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1920&auto=format&fit=crop"
          alt="Pavitram Properties Architecture"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pavitram-dark via-pavitram-dark/95 to-pavitram-dark/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pavitram-orange/15 border border-pavitram-orange/30 text-pavitram-orange text-xs font-extrabold uppercase tracking-widest">
          START YOUR PROPERTY JOURNEY TODAY
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Let's Find the Right Property for You.
        </h2>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Tell us what you're looking for in Indore and our property advisory team will help you explore suitable options with complete transparency.
        </p>

        {/* CTA BUTTONS */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              trackSiteVisitClick("Final CTA");
              onOpenEnquiry();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white font-bold text-base shadow-glow transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            Book a Site Visit
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Final CTA")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            Talk on WhatsApp
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
