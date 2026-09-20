"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/siteConfig";
import { LeadForm } from "@/components/ui/LeadForm";
import { CheckCircle2, Calendar, Sparkles, Building, MapPin, ArrowRight } from "lucide-react";
import { trackSiteVisitClick } from "@/lib/analytics/events";

interface HeroSectionProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const featuredOpp = SITE_CONFIG.featuredProperties[0];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-pavitram-dark">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Architecture Indore - Pavitram Properties"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 animate-subtleZoom"
        />
        {/* Dual Gradient Overlay for Optimal Text Readability & Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-pavitram-dark via-pavitram-dark/90 to-pavitram-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-pavitram-dark via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* EYEBROW BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pavitram-orange/15 border border-pavitram-orange/40 text-pavitram-orange text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {SITE_CONFIG.brand.name} • INDORE
            </div>

            {/* MAIN H1 HEADLINE */}
            <h1 className="hero-headline font-extrabold text-white tracking-tight leading-[1.1]">
              Find a Property <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-pavitram-orange">
                That Feels Like Home.
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="subheadline text-gray-300 max-w-xl font-normal leading-relaxed">
              Explore thoughtfully selected residential and investment property opportunities in Indore with transparent, end-to-end guidance from the Pavitram Properties team.
            </p>

            {/* CTA BUTTON GROUP */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  trackSiteVisitClick("Hero Primary CTA");
                  onOpenEnquiry();
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white font-bold text-base shadow-glow transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Book a Site Visit
              </button>

              <a
                href="#properties"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass-card hover:bg-white/10 text-white font-semibold text-base transition-colors border border-gray-700/80"
              >
                Get Property Details
                <ArrowRight className="w-4 h-4 text-pavitram-orange" />
              </a>
            </div>

            {/* TRUST STRIP BELOW CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pavitram-orange shrink-0" />
                <span>Transparent Guidance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pavitram-orange shrink-0" />
                <span>Property Assistance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pavitram-orange shrink-0" />
                <span>Site Visit Support</span>
              </div>
            </div>

            {/* SPECIAL FLOATING PROPERTY BROCHURE CARD */}
            {featuredOpp && (
              <div className="hidden sm:flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 max-w-lg mt-6 shadow-2xl backdrop-blur-md">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={featuredOpp.image}
                    alt={featuredOpp.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-pavitram-orange text-[9px] font-bold text-white uppercase">
                    New
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-pavitram-orange uppercase tracking-wider">
                    <Building className="w-3 h-3" /> FEATURED OPPORTUNITY
                  </div>
                  <h4 className="text-sm font-bold text-white truncate">{featuredOpp.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-400" /> {featuredOpp.location}</span>
                    <span className="font-semibold text-white">{featuredOpp.price}</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenEnquiry(featuredOpp.name)}
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-pavitram-orange text-white text-xs font-semibold transition-colors shrink-0"
                >
                  Explore →
                </button>
              </div>
            )}

          </div>

          {/* RIGHT LEAD FORM COLUMN */}
          <div className="lg:col-span-5">
            <div className="glass-modal p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative">
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pavitram-orange">
                  Quick Requirement Express
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Get Personalized Property Assistance</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Share your contact & requirement. We will connect with verified property options in Indore.
                </p>
              </div>

              <LeadForm source="Hero Section Right Box" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
