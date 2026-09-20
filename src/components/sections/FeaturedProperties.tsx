"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG, PropertyItem } from "@/config/siteConfig";
import { MapPin, Maximize2, Layers, CheckCircle2, ArrowUpRight, Filter, ArrowRightLeft } from "lucide-react";
import { trackPropertyEnquiry } from "@/lib/analytics/events";

interface FeaturedPropertiesProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function FeaturedProperties({ onOpenEnquiry }: FeaturedPropertiesProps) {
  const [filterType, setFilterType] = useState<string>("All");

  const categories = ["All", "Apartment", "Plot", "Villa", "Commercial"];

  const filteredProperties = filterType === "All"
    ? SITE_CONFIG.featuredProperties
    : SITE_CONFIG.featuredProperties.filter((p) => p.type.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <section id="properties" className="py-16 md:py-20 bg-pavitram-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER & FILTER CHIPS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
              CURATED SELECTION
            </span>
            <h2 className="section-title font-bold text-white mt-1">
              Explore Featured Properties
            </h2>
            <p className="text-gray-400 text-xs md:text-base mt-2 max-w-2xl leading-relaxed">
              Discover verified residential, township, villa, and commercial opportunities selected around your requirements in Indore.
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <Filter className="w-4 h-4 text-pavitram-orange shrink-0 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterType(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer min-h-[40px] flex items-center ${
                  filterType === cat
                    ? "bg-pavitram-orange text-white shadow-glow"
                    : "bg-pavitram-surface text-gray-400 hover:text-white border border-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE SWIPE HINT */}
        <div className="flex md:hidden items-center justify-between text-[11px] text-gray-400 mb-3 px-1">
          <span className="font-semibold text-pavitram-orange">Featured Opportunities</span>
          <span className="flex items-center gap-1 text-gray-400">
            Swipe left/right 👉
          </span>
        </div>

        {/* PROPERTY CARDS CONTAINER: Responsive Flex-scroll on mobile, Grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {filteredProperties.map((property: PropertyItem) => (
            <div
              key={property.id}
              className="w-[88vw] sm:w-[440px] md:w-full shrink-0 snap-center bg-pavitram-surface border border-gray-800/90 rounded-3xl overflow-hidden hover:border-pavitram-orange/50 transition-all duration-300 group shadow-luxury flex flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-gray-900">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pavitram-surface via-transparent to-black/40" />

                {/* BADGE */}
                {property.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-pavitram-orange">
                    {property.badge}
                  </span>
                )}

                {/* PRICE TAG */}
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-pavitram-orange text-white font-extrabold text-xs sm:text-base shadow-glow">
                  {property.price}
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-pavitram-orange shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pavitram-orange transition-colors">
                    {property.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {property.description}
                  </p>

                  {/* SPECIFICATION CHIPS */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-pavitram-dark/70 border border-gray-800 text-[11px] sm:text-xs text-gray-300">
                      <Layers className="w-3.5 h-3.5 text-pavitram-orange shrink-0" />
                      <span className="truncate">{property.configuration}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-pavitram-dark/70 border border-gray-800 text-[11px] sm:text-xs text-gray-300">
                      <Maximize2 className="w-3.5 h-3.5 text-pavitram-orange shrink-0" />
                      <span className="truncate">{property.area}</span>
                    </div>
                  </div>

                  {/* FEATURE BULLETS */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {property.features.map((feat, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3 h-3 text-pavitram-orange" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CARD CTAS */}
                <div className="pt-3 border-t border-gray-800/80 flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      trackPropertyEnquiry(property.name);
                      onOpenEnquiry(property.name);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white text-xs font-semibold shadow-glow transition-all min-h-[44px]"
                  >
                    Enquire Now
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      trackPropertyEnquiry(property.name);
                      onOpenEnquiry(property.name);
                    }}
                    className="px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-gray-700 text-gray-300 text-xs font-semibold transition-colors min-h-[44px]"
                  >
                    Details
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
