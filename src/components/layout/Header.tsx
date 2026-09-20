"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, Menu, X, CalendarCheck, ChevronRight } from "lucide-react";
import { trackPhoneClick, trackSiteVisitClick } from "@/lib/analytics/events";

interface HeaderProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function Header({ onOpenEnquiry }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Properties", href: "#properties" },
    { label: "Why Pavitram", href: "#why-pavitram" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Indore Locations", href: "#indore-locations" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-header py-2.5 sm:py-3 shadow-luxury" : "bg-gradient-to-b from-black/90 to-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* BRAND LOGO */}
        <a href="#" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pavitram-orange flex items-center justify-center font-bold text-white text-base sm:text-lg shadow-glow">
              P
            </div>
            <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white group-hover:text-pavitram-orange transition-colors">
              PAVITRAM <span className="font-light text-gray-300">PROPERTIES</span>
            </span>
          </div>
          <span className="hidden sm:block text-[10px] tracking-wider uppercase text-gray-400 font-medium pl-10 -mt-0.5">
            A {SITE_CONFIG.brand.parentBrand} Vertical
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-pavitram-orange transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP RIGHT CTAS */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${SITE_CONFIG.brand.contactPhone}`}
            onClick={() => trackPhoneClick("Header Desktop")}
            className="hidden md:flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-pavitram-orange" />
            {SITE_CONFIG.brand.displayPhone}
          </a>

          <button
            onClick={() => {
              trackSiteVisitClick("Header CTA");
              onOpenEnquiry();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white text-xs md:text-sm font-semibold shadow-glow transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            Book a Site Visit
          </button>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              trackSiteVisitClick("Header Mobile CTA");
              onOpenEnquiry();
            }}
            className="px-3.5 py-1.5 rounded-lg bg-pavitram-orange text-white text-xs font-semibold shadow-glow"
          >
            Site Visit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-modal border-t border-gray-800 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-pavitram-orange py-2 border-b border-gray-800/60"
              >
                {item.label}
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-pavitram-orange text-white font-semibold text-sm shadow-glow"
            >
              <CalendarCheck className="w-4 h-4" />
              Book a Site Visit
            </button>
            <a
              href={`tel:${SITE_CONFIG.brand.contactPhone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-pavitram-orange" />
              Call Advisor ({SITE_CONFIG.brand.displayPhone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
