"use client";

import React, { useState } from "react";
import { Building2, Trees, Home, Landmark, Briefcase, MapPin, Search } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

interface RequirementSelectorProps {
  onOpenEnquiryWithFilter: (requirement: string, location: string, budget: string) => void;
}

export function RequirementSelector({ onOpenEnquiryWithFilter }: RequirementSelectorProps) {
  const [selectedType, setSelectedType] = useState<string>("Apartment");
  const [selectedLocation, setSelectedLocation] = useState<string>("Vijay Nagar");
  const [selectedBudget, setSelectedBudget] = useState<string>("₹50 Lakh - ₹1 Cr");

  const propertyTypes = [
    { label: "Apartment", icon: Home },
    { label: "Plotted Development", icon: Trees },
    { label: "Independent Villa", icon: Building2 },
    { label: "Commercial Space", icon: Landmark },
    { label: "Investment Opportunity", icon: Briefcase },
  ];

  const locations = ["Vijay Nagar", "Super Corridor", "AB Road & Rau", "MR-10 Highway", "Airport Road", "Any Prime Indore Zone"];

  const budgetRanges = ["Under ₹45 Lakh", "₹45 Lakh - ₹75 Lakh", "₹75 Lakh - ₹1.5 Cr", "Above ₹1.5 Cr"];

  const handleSearchClick = () => {
    onOpenEnquiryWithFilter(selectedType, selectedLocation, selectedBudget);
  };

  return (
    <section className="py-20 bg-pavitram-surface border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-modal p-8 md:p-12 rounded-3xl border border-gray-700/80 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
              CUSTOM SHORTLISTING
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
              Tell Us What You're Looking For
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Select your parameters below to receive hand-picked property options directly on WhatsApp or call.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* 1. PROPERTY TYPE CHIPS */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {propertyTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.label;
                  return (
                    <button
                      key={type.label}
                      onClick={() => setSelectedType(type.label)}
                      className={`p-4 rounded-2xl border text-left flex flex-col items-start gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-pavitram-orange text-white border-pavitram-orange shadow-glow"
                          : "bg-pavitram-dark/80 border-gray-800 text-gray-300 hover:border-gray-600"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-pavitram-orange"}`} />
                      <span className="text-xs font-bold">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. PREFERRED LOCATION CHIPS */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
                2. Preferred Location in Indore
              </label>
              <div className="flex flex-wrap gap-2.5">
                {locations.map((loc) => {
                  const isSelected = selectedLocation === loc;
                  return (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? "bg-white text-black border-white shadow-md font-bold"
                          : "bg-pavitram-dark/80 border-gray-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-pavitram-orange" : "text-gray-500"}`} />
                      {loc}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. BUDGET RANGE */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
                3. Budget Range
              </label>
              <div className="flex flex-wrap gap-2.5">
                {budgetRanges.map((b) => {
                  const isSelected = selectedBudget === b;
                  return (
                    <button
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-pavitram-orange text-white border-pavitram-orange shadow-glow"
                          : "bg-pavitram-dark/80 border-gray-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-4">
              <button
                onClick={handleSearchClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white font-bold text-base shadow-glow transition-all duration-300 cursor-pointer"
              >
                <Search className="w-5 h-5" />
                Show Me Suitable Properties
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
