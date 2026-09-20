"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { trackWhatsAppClick } from "@/lib/analytics/events";

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.brand.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.defaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("Desktop Floating Badge")}
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-emerald-400/30"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out">
        Chat with Property Expert
      </span>
      <span className="block group-hover:hidden">WhatsApp</span>
    </a>
  );
}
