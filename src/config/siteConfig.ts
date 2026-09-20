export interface PropertyItem {
  id: string;
  name: string;
  type: string; // "Apartment" | "Plot" | "Villa" | "Commercial" | "Township"
  location: string;
  price: string;
  configuration: string;
  area: string;
  image: string;
  badge?: string;
  description: string;
  features: string[];
}

export interface LocationItem {
  name: string;
  tagline: string;
  highlights: string[];
  image: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Pavitram Properties",
    parentBrand: "Pavitram India",
    tagline: "Find a Property That Feels Like Home",
    shortDescription: "A trusted real estate vertical of Pavitram India providing curated residential, commercial, and investment property guidance in Indore.",
    marketLocation: "Indore, Madhya Pradesh, India",
    contactPhone: "+91 98765 43210", // Placeholder - easily replaceable
    displayPhone: "+91 98765 43210",
    whatsappNumber: "919876543210", // Placeholder with country code without '+'
    email: "enquiry@pavitramproperties.com", // Placeholder
    officeAddress: "[OFFICE ADDRESS], Indore, Madhya Pradesh",
    reraNumber: "[RERA REGISTERED - NUMBER PENDING VERIFICATION]",
  },
  
  // Analytics tracking placeholders (Replace via env variables in production)
  analytics: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    ga4Id: process.env.NEXT_PUBLIC_GA_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },

  // WhatsApp Default Message Builder
  whatsapp: {
    defaultMessage: "Hi Pavitram Properties, I found your website and would like to receive details on available property options in Indore.",
    getPropertyMessage: (propertyName: string) =>
      `Hi Pavitram Properties, I am interested in ${propertyName}. Please share complete details and pricing.`,
    siteVisitMessage: (propertyName?: string) =>
      propertyName
        ? `Hi Pavitram Properties, I want to book a site visit for ${propertyName}. Please coordinate.`
        : `Hi Pavitram Properties, I would like to schedule a property site visit in Indore.`,
  },

  // Trust Indicators
  trustIndicators: [
    {
      title: "Transparent Guidance",
      description: "Direct, objective property consultation with complete clarity on documentation and specifications.",
      icon: "ShieldCheck",
    },
    {
      title: "Curated Opportunities",
      description: "Selective residential plots, luxury villas, and modern apartments evaluated for lifestyle & growth.",
      icon: "Building2",
    },
    {
      title: "Personalized Shortlisting",
      description: "Tailored property recommendations based strictly on your space requirements and budget parameters.",
      icon: "UserCheck",
    },
    {
      title: "Guided Site Visits",
      description: "End-to-end site visit arrangements with dedicated property specialists at your convenience.",
      icon: "Navigation",
    },
  ],

  // Featured Properties Showcase (Using clear, editable placeholders)
  featuredProperties: [
    {
      id: "pavitram-residences-1",
      name: "[PROJECT NAME - LUXURY RESIDENCES]",
      type: "Apartment / Penthouse",
      location: "Vijay Nagar, Indore",
      price: "₹ 75 Lakh onwards*",
      configuration: "2 BHK & 3 BHK Premium Units",
      area: "1,250 - 1,850 sq.ft.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      badge: "Featured Residential",
      description: "Thoughtfully built modern apartments featuring green living spaces, covered parking, and prime connectivity in Vijay Nagar.",
      features: ["Prime Location", "Modular Kitchen Layouts", "24/7 Security", "Clubhouse Access"],
    },
    {
      id: "pavitram-township-plots",
      name: "[PROJECT NAME - TOWNSHIP PLOTS]",
      type: "Plotted Development",
      location: "Super Corridor, Indore",
      price: "₹ 45 Lakh onwards*",
      configuration: "Residential Plots",
      area: "1,000 - 2,400 sq.ft.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      badge: "High Growth Area",
      description: "RERA approved planned plotted development along Super Corridor with wide concrete roads, underground utilities, and landscaped gardens.",
      features: ["Wide Internal Roads", "Underground Electricity", "Parks & Play Area", "Gated Township"],
    },
    {
      id: "pavitram-luxury-villas",
      name: "[PROJECT NAME - INDEPENDENT VILLAS]",
      type: "Luxury Villa",
      location: "AB Road / Rau Highway, Indore",
      price: "₹ 1.25 Cr onwards*",
      configuration: "3 BHK & 4 BHK Duplex Villas",
      area: "2,200 - 3,500 sq.ft.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
      badge: "Exclusive Community",
      description: "Private contemporary villas featuring personal terraces, landscaped courtyards, high ceilings, and double-height living rooms.",
      features: ["Private Garden Space", "Custom Architecture", "Double Car Parking", "Club Access"],
    },
    {
      id: "pavitram-commercial-spaces",
      name: "[PROJECT NAME - COMMERCIAL HUB]",
      type: "Commercial / Office",
      location: "MR-10 Main Road, Indore",
      price: "₹ 60 Lakh onwards*",
      configuration: "Office Suites & Retail Outlets",
      area: "650 - 2,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      badge: "Commercial Opportunity",
      description: "Modern commercial complex designed for high visibility retail showrooms and high-efficiency office suites on arterial MR-10 Corridor.",
      features: ["Main Road Frontage", "High Speed Elevators", "Ample Visitor Parking", "100% Power Backup"],
    },
  ] as PropertyItem[],

  // Indore Prime Locations
  locations: [
    {
      name: "Vijay Nagar",
      tagline: "Indore's Premier Commercial & Residential Hub",
      highlights: ["Established infrastructure", "Top educational institutions nearby", "High connectivity & metro route"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Super Corridor",
      tagline: "Rapidly Expanding IT & Commercial Zone",
      highlights: ["TCS & Infosys IT Hubs", "New International Airport access", "Wide 8-lane expressway"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "AB Road & Rau Corridor",
      tagline: "Prime Residential & Educational Belt",
      highlights: ["IIM & Engineering Colleges", "Smooth arterial road network", "Peaceful green residential surroundings"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "MR-10 & Airport Road",
      tagline: "Direct Highway & Airport Access",
      highlights: ["Strategic bypass connectivity", "Commercial developments", "Rapid urbanization"],
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    },
  ] as LocationItem[],

  // Process Steps
  processSteps: [
    {
      number: "01",
      title: "Share Your Requirement",
      description: "Fill our quick form or message us on WhatsApp with your preferred property type, budget, and desired location in Indore.",
    },
    {
      number: "02",
      title: "Explore Curated Options",
      description: "Our dedicated property advisors will send you verified options matching your exact criteria—without spamming.",
    },
    {
      number: "03",
      title: "Visit & Evaluate",
      description: "We coordinate hassle-free physical site visits with private transportation arrangements at your convenient time.",
    },
    {
      number: "04",
      title: "Move Forward With Clarity",
      description: "Receive complete document support, transparent pricing breakdowns, and guided assistance every step of the way.",
    },
  ],

  // FAQs for Accordion & Schema
  faqs: [
    {
      question: "What types of properties are available through Pavitram Properties?",
      answer: "Pavitram Properties assists buyers with residential plots, luxury independent villas, modern apartments (2 BHK, 3 BHK, 4 BHK), and prime commercial spaces across key development zones in Indore.",
    },
    {
      question: "Which locations in Indore do you currently cover?",
      answer: "We focus on prime growth corridors in Indore including Vijay Nagar, Super Corridor, AB Road, Rau, MR-10, Scheme 140, Airport Road, and surrounding township areas.",
    },
    {
      question: "How do I schedule a property site visit?",
      answer: "You can book a site visit instantly by clicking the 'Book a Site Visit' button, submitting your contact details in the lead form, or reaching out directly via WhatsApp. Our team will coordinate timing and pickup if required.",
    },
    {
      question: "Can I get complete pricing breakdowns and floor plans before visiting?",
      answer: "Yes! Once you share your requirement, our team can send detailed brochures, floor plans, specifications, and current pricing estimates directly to your WhatsApp or email.",
    },
    {
      question: "Is Pavitram Properties a part of Pavitram India?",
      answer: "Yes, Pavitram Properties operates as the specialized real estate vertical of Pavitram India, upholding strict standards of transparency, buyer trust, and professionalism.",
    },
    {
      question: "Can I enquire directly through WhatsApp?",
      answer: "Absolutely. Click the floating WhatsApp button anywhere on the website to start an instant conversation with our property advisory team.",
    },
  ],
};
