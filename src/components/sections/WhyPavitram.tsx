"use client";

import React from "react";

export function WhyPavitram() {
  const steps = [
    {
      num: "01",
      title: "Understand Your Requirement",
      desc: "We analyze your lifestyle preferences, family size, location priority, and budget boundaries first.",
    },
    {
      num: "02",
      title: "Shortlist Suitable Options",
      desc: "Receive only verified, highly relevant property options in Indore—saving you hours of redundant market search.",
    },
    {
      num: "03",
      title: "Arrange Property Visits",
      desc: "We schedule guided, zero-pressure site visits with private transport arrangements matching your calendar.",
    },
    {
      num: "04",
      title: "Guide You Through Next Steps",
      desc: "Complete assistance with price negotiation clarity, documentation verification, and legal transparency.",
    },
  ];

  return (
    <section id="why-pavitram" className="py-20 bg-pavitram-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
            THE PAVITRAM ADVANTAGE
          </span>
          <h2 className="section-title font-extrabold text-white mt-2 leading-tight">
            More Than a Property Search.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-3 leading-relaxed">
            We don't just list properties—we act as your personal property advisors, keeping your interests front and center throughout your Indore property journey.
          </p>
        </div>

        {/* TIMELINE GRID (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative border-l-2 lg:border-l-0 lg:border-t-2 border-gray-800 pl-6 lg:pl-0 lg:pt-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* TIMELINE INDICATOR DOT */}
              <div className="absolute -left-[31px] lg:left-0 -top-[5px] lg:-top-[49px] w-4 h-4 rounded-full bg-pavitram-dark border-2 border-pavitram-orange group-hover:scale-125 transition-transform" />

              <span className="text-4xl lg:text-5xl font-extrabold text-gray-800 group-hover:text-pavitram-orange/40 transition-colors">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-white mt-2 group-hover:text-pavitram-orange transition-colors">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
