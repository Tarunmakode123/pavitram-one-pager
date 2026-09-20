"use client";

import React, { useState } from "react";
import { submitLead } from "@/lib/leads/leadService";
import { MessageSquare, PhoneCall, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

interface LeadFormProps {
  source?: string;
  defaultRequirement?: string;
  defaultPropertyName?: string;
  compact?: boolean;
  onSuccess?: () => void;
  className?: string;
}

export function LeadForm({
  source = "Hero Lead Form",
  defaultRequirement = "Residential Property",
  defaultPropertyName,
  compact = false,
  onSuccess,
  className = "",
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: defaultRequirement,
    location: "Indore",
    propertyName: defaultPropertyName || "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    const res = await submitLead({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      requirement: formData.requirement,
      location: formData.location,
      propertyName: formData.propertyName,
      source,
    });

    setLoading(false);

    if (res.success) {
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    } else {
      setErrorMsg(res.message);
    }
  };

  const openWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hi Pavitram Properties, I submitted an enquiry for ${formData.requirement}${
        formData.propertyName ? ` (${formData.propertyName})` : ""
      }. My name is ${formData.name}. Please connect with me.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.brand.whatsappNumber}?text=${message}`, "_blank");
  };

  if (isSuccess) {
    return (
      <div className={`bg-pavitram-surface/90 border border-emerald-500/30 p-6 md:p-8 rounded-2xl shadow-luxury text-center space-y-4 ${className}`}>
        <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white">Enquiry Received</h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Thank you <span className="font-semibold text-white">{formData.name}</span>! Our property specialist will get in touch with you shortly.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={openWhatsAppRedirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all shadow-md text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Continue on WhatsApp
          </button>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs font-medium transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {errorMsg && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs md:text-sm font-medium animate-fadeIn">
          {errorMsg}
        </div>
      )}

      {/* Name Input */}
      <div>
        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
          Full Name <span className="text-pavitram-orange">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-pavitram-dark/80 border border-gray-700/80 rounded-xl text-white placeholder-gray-500 text-sm focus:border-pavitram-orange transition-colors"
        />
      </div>

      {/* Mobile Input with +91 indicator */}
      <div>
        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
          Mobile Number <span className="text-pavitram-orange">*</span>
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3.5 text-xs font-bold text-gray-400 border-r border-gray-700 pr-2.5">
            +91
          </span>
          <input
            type="tel"
            required
            maxLength={10}
            placeholder="98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
            className="w-full pl-16 pr-4 py-3 bg-pavitram-dark/80 border border-gray-700/80 rounded-xl text-white placeholder-gray-500 text-sm focus:border-pavitram-orange transition-colors"
          />
        </div>
      </div>

      {/* Requirement Select */}
      <div>
        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
          Interested In
        </label>
        <select
          value={formData.requirement}
          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
          className="w-full px-4 py-3 bg-pavitram-dark/80 border border-gray-700/80 rounded-xl text-white text-sm focus:border-pavitram-orange transition-colors cursor-pointer"
        >
          <option value="Residential Property">Residential Property</option>
          <option value="Plots">Residential Township Plots</option>
          <option value="Villa">Independent Villa</option>
          <option value="Apartment">Modern Apartment (2/3/4 BHK)</option>
          <option value="Commercial Property">Commercial / Office Space</option>
          <option value="Investment">Investment Opportunity</option>
          <option value="Other">Other Requirement</option>
        </select>
      </div>

      {/* Property Name optional tag if passed */}
      {formData.propertyName && (
        <div className="p-2.5 bg-pavitram-orange/10 border border-pavitram-orange/30 rounded-xl text-xs text-pavitram-orange flex items-center justify-between">
          <span>Inquiring about: <strong>{formData.propertyName}</strong></span>
        </div>
      )}

      {/* CTA Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pavitram-orange hover:bg-pavitram-orangeHover text-white font-semibold text-base shadow-glow transition-all duration-300 transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get Property Details
            <ArrowRight className="w-4 h-4 ml-1" />
          </>
        )}
      </button>

      <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-1">
        <PhoneCall className="w-3 h-3 text-pavitram-orange" />
        No spam policy. Complete privacy guaranteed.
      </p>
    </form>
  );
}
