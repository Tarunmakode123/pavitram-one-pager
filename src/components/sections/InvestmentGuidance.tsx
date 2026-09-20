"use client";

import React from "react";
import { TrendingUp, Compass, Target, ShieldCheck, ArrowRight } from "lucide-react";

interface InvestmentGuidanceProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function InvestmentGuidance({ onOpenEnquiry }: InvestmentGuidanceProps) {
  const points = [
    {
      icon: Compass,
      title: "Strategic Corridor Analysis",
      desc: "Evaluating infrastructural masterplans, proposed metro corridors, and commercial bypass networks.",
    },
    {
      icon: Target,
      title: "Purpose-Aligned Shortlisting",
      desc: "Distinguishing between rental yield, self-use capital appreciation, and long-term land holding.",
    },
    {
      icon: ShieldCheck,
      title: "Risk-Conscious Evaluation",
      desc: "Thorough verification of builder credentials, approvals, and legal titles prior to shortlisting.",
    },
  ];

  return (
    <section className="py-20 bg-pavitram-surface border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
              INVESTMENT ADVISORY
            </span>
            <h2 className="section-title font-extrabold text-white leading-tight">
              Looking Beyond Today?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Real estate investment in Indore requires objective analysis rather than hype. We help investors make well-timed decisions based on connectivity, surrounding development, and legal clarity.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-pavitram-dark/60 border border-gray-800">
                    <div className="w-10 h-10 rounded-xl bg-pavitram-orange/10 border border-pavitram-orange/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-pavitram-orange" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenEnquiry("Investment Property Consultation")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white font-bold text-sm shadow-glow transition-all cursor-pointer"
              >
                Talk to a Property Expert
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-pavitram-dark to-pavitram-surface border border-gray-700/80 shadow-2xl relative space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-pavitram-orange/20 border border-pavitram-orange/40 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-pavitram-orange" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Balanced Real Estate Guidance
              </h3>

              <blockquote className="text-gray-300 text-sm italic leading-relaxed border-l-2 border-pavitram-orange pl-4">
                "Successful property acquisitions rely on factual market understanding, transparent title verification, and patient long-term planning."
              </blockquote>

              <div className="pt-4 border-t border-gray-800 text-xs text-gray-400 space-y-2">
                <p>✓ No exaggerated percentage returns promised</p>
                <p>✓ Complete clarity on legal approvals & RERA status</p>
                <p>✓ Objective site evaluation reports provided</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
