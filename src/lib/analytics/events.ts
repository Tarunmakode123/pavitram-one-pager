// Analytics Event Dispatcher for Google Tag Manager, GA4, Meta Pixel, and Google Ads

export interface AnalyticsEvent {
  eventName: string;
  category?: string;
  label?: string;
  value?: number;
  params?: Record<string, any>;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export function trackEvent({ eventName, category, label, value, params = {} }: AnalyticsEvent) {
  try {
    const payload = {
      event: eventName,
      category,
      label,
      value,
      timestamp: new Date().toISOString(),
      ...params,
    };

    // Google Tag Manager DataLayer
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }

    // GA4 / Google Ads Gtag
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: category,
        event_label: label,
        value: value,
        ...params,
      });
    }

    // Meta Pixel
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, payload);
    }

    // Development Console Log
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event Tracked]: ${eventName}`, payload);
    }
  } catch (err) {
    console.warn("Analytics event tracking warning:", err);
  }
}

// Helper methods for core conversion actions
export const trackLeadFormStart = (source: string) => trackEvent({ eventName: "lead_form_start", category: "Lead", label: source });
export const trackLeadFormSubmit = (data: { requirement: string; location?: string; propertyName?: string }) =>
  trackEvent({ eventName: "lead_form_submit", category: "Lead", label: "Success", params: data });
export const trackWhatsAppClick = (context: string) => trackEvent({ eventName: "whatsapp_click", category: "Contact", label: context });
export const trackPhoneClick = (context: string) => trackEvent({ eventName: "phone_click", category: "Contact", label: context });
export const trackSiteVisitClick = (propertyName?: string) => trackEvent({ eventName: "site_visit_click", category: "Conversion", label: propertyName || "General" });
export const trackPropertyEnquiry = (propertyName: string) => trackEvent({ eventName: "property_enquiry", category: "Property", label: propertyName });
