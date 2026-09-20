"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Shield, ChevronUp } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800/80 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800/60">
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-pavitram-orange flex items-center justify-center font-bold text-white text-lg shadow-glow">
                P
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                PAVITRAM <span className="font-light text-gray-300">PROPERTIES</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              A specialized real estate vertical of <strong className="text-gray-200">{SITE_CONFIG.brand.parentBrand}</strong>. Delivering transparent property shortlisting and advisory services across Indore.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-gray-800 w-fit">
              <Shield className="w-3.5 h-3.5 text-pavitram-orange" />
              <span>RERA Status: {SITE_CONFIG.brand.reraNumber}</span>
            </div>

            {/* SOCIAL MEDIA LINKS */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2">
                Follow Our Channels
              </span>
              <SocialLinks />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#properties" className="hover:text-pavitram-orange transition-colors">
                  Featured Properties
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-pavitram-orange transition-colors">
                  About Us (Pavitram India)
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-pavitram-orange transition-colors">
                  Indore Real Estate Blogs
                </a>
              </li>
              <li>
                <a href="#why-pavitram" className="hover:text-pavitram-orange transition-colors">
                  Why Pavitram Properties
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-pavitram-orange transition-colors">
                  Property Buying Process
                </a>
              </li>
              <li>
                <a href="#indore-locations" className="hover:text-pavitram-orange transition-colors">
                  Prime Indore Locations
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-pavitram-orange transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contact Advisory</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-pavitram-orange shrink-0 mt-0.5" />
                <a href={`tel:${SITE_CONFIG.brand.contactPhone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.brand.displayPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-pavitram-orange shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.brand.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pavitram-orange shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.brand.officeAddress}</span>
              </li>
            </ul>
          </div>

          {/* AD DISCLAIMER & BACK TO TOP */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Ad Disclaimer</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed bg-pavitram-dark p-3 rounded-xl border border-gray-800">
              Property information, pricing, availability and specifications are subject to change. Please verify all details with the authorized representative before making any decision.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-pavitram-orange transition-colors"
            >
              Back to top <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brand.name}. All Rights Reserved. A {SITE_CONFIG.brand.parentBrand} initiative.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors">Terms of Service</span>
            <span className="hover:text-gray-400 transition-colors">RERA Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
