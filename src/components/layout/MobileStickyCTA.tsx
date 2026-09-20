"use client";

import React from "react";
import { Phone, MessageSquare, CalendarCheck, Sparkles } from "lucide-react";
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
    <aside aria-label="Mobile Sticky Action Bar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-pavitram-dark/95 border-t border-gray-800/90 backdrop-blur-xl px-3 py-2 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* CALL BUTTON */}
        <a
          href={`tel:${SITE_CONFIG.brand.contactPhone}`}
          onClick={() => trackPhoneClick("Mobile Sticky Bar")}
          className="flex flex-col items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-pavitram-surface border border-gray-700/60 text-gray-200 active:scale-95 transition-all min-h-[50px]"
        >
          <Phone className="w-4 h-4 text-pavitram-orange" />
          <span className="text-[11px] font-semibold tracking-tight text-white">Call Advisor</span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("Mobile Sticky Bar")}
          className="flex flex-col items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-emerald-600/95 border border-emerald-500/40 text-white active:scale-95 transition-all shadow-sm min-h-[50px]"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* SITE VISIT CTA WITH PULSE ACCENT */}
        <button
          onClick={() => {
            trackSiteVisitClick("Mobile Sticky Bar");
            onOpenEnquiry();
          }}
          className="relative flex flex-col items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white active:scale-95 transition-all shadow-glow min-h-[50px] overflow-hidden"
        >
          <div className="flex items-center gap-1">
            <CalendarCheck className="w-4 h-4" />
            <Sparkles className="w-2.5 h-2.5 text-yellow-300 animate-pulse" />
          </div>
          <span className="text-[11px] font-black tracking-tight uppercase">Site Visit</span>
        </button>

      </div>
    </aside>
  );
}
