"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // JSON-LD Structured Data for FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_CONFIG.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-20 bg-pavitram-dark">
      {/* Inject FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pavitram-orange/10 border border-pavitram-orange/30 text-pavitram-orange text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            CLEAR ANSWERS
          </div>
          <h2 className="section-title font-bold text-white mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            Everything you need to know about exploring properties with Pavitram Properties.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-pavitram-surface border border-gray-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:text-pavitram-orange transition-colors cursor-pointer"
                >
                  <span className="text-base font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-pavitram-orange shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
