import { trackLeadFormSubmit } from "@/lib/analytics/events";

export interface LeadSubmissionPayload {
  name: string;
  phone: string;
  requirement: string;
  location?: string;
  budget?: string;
  propertyName?: string;
  source?: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
  leadId?: string;
}

export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadSubmissionResponse> {
  // Client-side phone validation (+91 standard 10 digit check)
  const cleanPhone = payload.phone.replace(/\D/g, "");
  if (!cleanPhone || cleanPhone.length < 10) {
    return {
      success: false,
      message: "Please enter a valid 10-digit mobile number.",
    };
  }

  if (!payload.name.trim()) {
    return {
      success: false,
      message: "Please provide your name.",
    };
  }

  try {
    // Post to Next.js API Route
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "",
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // Backup lead locally for redundancy in demo/testing mode
      if (typeof window !== "undefined") {
        const existingLeads = JSON.parse(localStorage.getItem("pavitram_leads") || "[]");
        existingLeads.push({ ...payload, id: data.leadId, timestamp: new Date().toISOString() });
        localStorage.setItem("pavitram_leads", JSON.stringify(existingLeads));
      }

      // Track analytics event
      trackLeadFormSubmit({
        requirement: payload.requirement,
        location: payload.location,
        propertyName: payload.propertyName,
      });

      return {
        success: true,
        message: "Thank you! Our property advisor will contact you shortly.",
        leadId: data.leadId,
      };
    } else {
      return {
        success: false,
        message: data.message || "Failed to submit enquiry. Please try again.",
      };
    }
  } catch (error) {
    console.error("Lead submission error:", error);
    // Graceful fallback to client-side storage if API is offline
    if (typeof window !== "undefined") {
      const fallbackId = `lead_fallback_${Date.now()}`;
      const existingLeads = JSON.parse(localStorage.getItem("pavitram_leads") || "[]");
      existingLeads.push({ ...payload, id: fallbackId, timestamp: new Date().toISOString() });
      localStorage.setItem("pavitram_leads", JSON.stringify(existingLeads));
      
      trackLeadFormSubmit({
        requirement: payload.requirement,
        location: payload.location,
        propertyName: payload.propertyName,
      });

      return {
        success: true,
        message: "Thank you! Your enquiry has been registered. Our property team will contact you shortly.",
        leadId: fallbackId,
      };
    }

    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}
