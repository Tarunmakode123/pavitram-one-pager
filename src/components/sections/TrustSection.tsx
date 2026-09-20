"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ShieldCheck, Building2, UserCheck, Navigation } from "lucide-react";

export function TrustSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-pavitram-orange" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-pavitram-orange" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-pavitram-orange" />;
      case "Navigation":
        return <Navigation className="w-6 h-6 text-pavitram-orange" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-pavitram-orange" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-pavitram-surface border-y border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
            OUR COMMITMENT TO BUYERS
          </span>
          <h2 className="section-title font-bold text-white mt-2">
            Property Decisions Start With Trust.
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed">
            Buying property is one of life’s most significant choices. Pavitram Properties ensures complete transparency, objective advisory, and guided site assistance at every step.
          </p>
        </div>

        {/* 4 TRUST BLOCKS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SITE_CONFIG.trustIndicators.map((trust, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-pavitram-dark/60 border border-gray-800/80 hover:border-pavitram-orange/40 transition-all duration-300 group hover:-translate-y-1 shadow-luxury"
            >
              <div className="w-12 h-12 rounded-xl bg-pavitram-orange/10 border border-pavitram-orange/20 flex items-center justify-center mb-5 group-hover:bg-pavitram-orange/20 transition-colors">
                {getIcon(trust.icon)}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-pavitram-orange transition-colors">
                {trust.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
                {trust.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
