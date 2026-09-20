"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

interface AboutUsSectionProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function AboutUsSection({ onOpenEnquiry }: AboutUsSectionProps) {
  const { aboutUs } = SITE_CONFIG;

  return (
    <section id="about-us" className="py-20 bg-pavitram-surface border-y border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER & BRAND STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pavitram-orange/15 border border-pavitram-orange/30 text-pavitram-orange text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" />
              OUR HERITAGE
            </div>
            
            <h2 className="section-title font-extrabold text-white leading-tight">
              {aboutUs.title}
            </h2>

            <p className="text-pavitram-orange font-semibold text-sm sm:text-base">
              {aboutUs.subtitle}
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {aboutUs.story}
            </p>

            <div className="p-4 rounded-2xl bg-pavitram-dark/80 border border-gray-800 space-y-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Our Vision</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                {aboutUs.vision}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry("About Us Advisory Call")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white font-bold text-sm shadow-glow transition-all cursor-pointer"
              >
                Connect With Our Team
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT ARCHITECTURAL IMAGE BADGE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-gray-700/80 shadow-2xl h-[380px] sm:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Pavitram Properties Headquarters Indore"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pavitram-dark via-pavitram-dark/40 to-transparent" />

              {/* OVERLAY BADGE */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-modal border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-pavitram-orange font-bold text-xs uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  A Pavitram India Initiative
                </div>
                <h4 className="text-lg font-bold text-white">Ethical Real Estate Guidance in Indore</h4>
                <p className="text-xs text-gray-400">
                  Combining local ground expertise with transparent legal disclosure for every homebuyer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 CORE BRAND VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutUs.values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-pavitram-dark/70 border border-gray-800 space-y-3 hover:border-pavitram-orange/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-pavitram-orange">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white">{val.title}</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
