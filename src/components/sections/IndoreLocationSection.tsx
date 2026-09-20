"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/siteConfig";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

interface IndoreLocationSectionProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function IndoreLocationSection({ onOpenEnquiry }: IndoreLocationSectionProps) {
  return (
    <section id="indore-locations" className="py-20 bg-pavitram-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
              PRIME INDORE BELTS
            </span>
            <h2 className="section-title font-bold text-white mt-2">
              Find Your Place in Indore
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
              Indore continues to grow as a leading commercial and residential hub in Central India. We guide you through the city's key development corridors.
            </p>
          </div>
        </div>

        {/* LOCATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_CONFIG.locations.map((loc, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden border border-gray-800 bg-pavitram-surface flex flex-col justify-end min-h-[340px] p-8 shadow-luxury hover:border-pavitram-orange/50 transition-all duration-300"
            >
              {/* BACKDROP IMAGE */}
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-30 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pavitram-dark via-pavitram-dark/80 to-transparent" />

              {/* CARD CONTENT */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pavitram-orange">
                  <MapPin className="w-4 h-4" />
                  Key Location Belt
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-pavitram-orange transition-colors">
                  {loc.name}
                </h3>
                
                <p className="text-sm font-medium text-gray-300">
                  {loc.tagline}
                </p>

                {/* HIGHLIGHTS */}
                <div className="space-y-2 pt-2">
                  {loc.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pavitram-orange shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button
                    onClick={() => onOpenEnquiry(`Properties in ${loc.name}`)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-pavitram-orange transition-colors cursor-pointer"
                  >
                    Explore Properties in {loc.name} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
