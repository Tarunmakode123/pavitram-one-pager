"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface VisualStorytellingProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function VisualStorytelling({ onOpenEnquiry }: VisualStorytellingProps) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-pavitram-dark">
      {/* BACKGROUND ARCHITECTURAL IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop"
          alt="Modern Architectural Villa - Pavitram Properties"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pavitram-dark/90 via-black/70 to-pavitram-dark/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
          PAVITRAM PROPERTIES
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          "Your next chapter starts with the right address."
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          From modern family residences to strategic township plots, let us guide you home in Indore.
        </p>
        <div className="pt-4">
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white font-bold text-base shadow-glow transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Explore Properties
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
