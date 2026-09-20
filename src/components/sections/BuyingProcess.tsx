"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/siteConfig";

export function BuyingProcess() {
  return (
    <section id="how-it-works" className="py-20 bg-pavitram-surface border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
            SIMPLE & TRANSPARENT
          </span>
          <h2 className="section-title font-bold text-white mt-2">
            The Property Buying Process
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            A structured four-step path designed to eliminate stress and give you absolute confidence.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.processSteps.map((step, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-pavitram-dark/80 border border-gray-800 hover:border-pavitram-orange/40 transition-all duration-300 flex flex-col justify-between group shadow-luxury"
            >
              <div>
                <span className="text-3xl font-black text-pavitram-orange block mb-4 font-mono">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-pavitram-orange transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
