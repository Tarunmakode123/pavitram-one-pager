"use client";

import React from "react";
import { UserCheck, ShieldCheck, MailCheck, Clock } from "lucide-react";

export function TrustAlternativeSection() {
  const commitments = [
    {
      icon: UserCheck,
      title: "Personalized Advisory",
      desc: "Every buyer receives 1-on-1 assistance from an experienced property specialist, not an automated bot.",
    },
    {
      icon: MailCheck,
      title: "Zero Unsolicited Spam",
      desc: "We respect your contact privacy. You only receive property details relevant to your specified requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Verification First",
      desc: "We verify developer history, layout approvals, and RERA registration before presenting property options.",
    },
    {
      icon: Clock,
      title: "Flexible Site Visit Schedules",
      desc: "We arrange site visits at your convenience, including weekends, with doorstep pickup support if needed.",
    },
  ];

  return (
    <section className="py-20 bg-pavitram-surface border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pavitram-orange">
            OUR ETHICAL STANDARD
          </span>
          <h2 className="section-title font-bold text-white mt-2">
            Your Property Journey, Guided Personally.
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            Built around your requirements, with full transparency and zero high-pressure tactics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-pavitram-dark/80 border border-gray-800 space-y-4 hover:border-pavitram-orange/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-pavitram-orange/10 border border-pavitram-orange/30 flex items-center justify-center text-pavitram-orange">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
