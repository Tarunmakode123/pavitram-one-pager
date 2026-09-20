import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brand.name} | Find Your Ideal Property in Indore`,
  description: SITE_CONFIG.brand.shortDescription,
  keywords: [
    "Pavitram Properties",
    "Real Estate Indore",
    "Plots in Indore",
    "Flats in Vijay Nagar Indore",
    "Super Corridor Indore Plots",
    "Villas in Indore",
    "Real Estate Pavitram India",
    "Commercial Property Indore",
  ],
  authors: [{ name: SITE_CONFIG.brand.name }],
  metadataBase: new URL("https://pavitramproperties.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.brand.name} | Find Your Ideal Property in Indore`,
    description: SITE_CONFIG.brand.shortDescription,
    url: "https://pavitramproperties.com",
    siteName: SITE_CONFIG.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Indore Real Estate`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brand.name} | Find Your Ideal Property in Indore`,
    description: SITE_CONFIG.brand.shortDescription,
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // RealEstateAgent / LocalBusiness Schema
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_CONFIG.brand.name,
    description: SITE_CONFIG.brand.shortDescription,
    url: "https://pavitramproperties.com",
    telephone: SITE_CONFIG.brand.contactPhone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.brand.parentBrand,
    },
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
        />
      </head>
      <body className="bg-pavitram-dark text-pavitram-cream antialiased min-h-screen selection:bg-pavitram-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
