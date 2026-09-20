"use client";

import React from "react";
import { X, Building2 } from "lucide-react";
import { LeadForm } from "./LeadForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
  requirement?: string;
  source?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  propertyName,
  requirement = "Residential Property",
  source = "Modal Enquiry",
}: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-pavitram-surface border border-gray-700/80 rounded-2xl p-6 md:p-8 shadow-2xl z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pavitram-orange/10 border border-pavitram-orange/30 text-pavitram-orange text-xs font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5" />
            Pavitram Properties
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            {propertyName ? `Enquire About ${propertyName}` : "Book a Site Visit & Get Details"}
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
            Share your contact details. Our property advisor in Indore will call you with verified information.
          </p>
        </div>

        {/* Lead Form */}
        <LeadForm
          source={source}
          defaultRequirement={requirement}
          defaultPropertyName={propertyName}
          onSuccess={() => {
            // keep open brief moment or allow user to interact
          }}
        />
      </div>
    </div>
  );
}
