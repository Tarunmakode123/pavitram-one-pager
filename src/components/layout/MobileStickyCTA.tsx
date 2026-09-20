"use client";

import React from "react";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { trackPhoneClick, trackWhatsAppClick, trackSiteVisitClick } from "@/lib/analytics/events";

interface MobileStickyCTAProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function MobileStickyCTA({ onOpenEnquiry }: MobileStickyCTAProps) {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.brand.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.defaultMessage
  )}`;

  return (
    <aside aria-label="Mobile Action Bar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-pavitram-dark/95 border-t border-gray-800/90 backdrop-blur-lg px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL BUTTON */}
        <a
          href={`tel:${SITE_CONFIG.brand.contactPhone}`}
          onClick={() => trackPhoneClick("Mobile Sticky Bar")}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-pavitram-surface border border-gray-700/60 text-gray-200 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-pavitram-orange" />
          <span className="text-[11px] font-semibold tracking-tight">Call Us</span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("Mobile Sticky Bar")}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-emerald-600/90 border border-emerald-500/30 text-white active:scale-95 transition-transform shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* SITE VISIT CTA */}
        <button
          onClick={() => {
            trackSiteVisitClick("Mobile Sticky Bar");
            onOpenEnquiry();
          }}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-pavitram-orange text-white active:scale-95 transition-transform shadow-glow"
        >
          <CalendarCheck className="w-4 h-4" />
          <span className="text-[11px] font-bold tracking-tight">Site Visit</span>
        </button>
      </div>
    </aside>
  );
}
