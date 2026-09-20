# Pavitram Properties - Production Landing Page

A production-ready, ultra-premium, mobile-first one-page real estate landing website built for **Pavitram Properties** (a real estate vertical of Pavitram India) targeting paid digital marketing campaigns (Google Ads, Meta Ads, Instagram Ads, WhatsApp campaigns) in Indore, Madhya Pradesh, India.

## 🚀 Key Features

- **Ad Campaign Optimized**: High lead conversion UX focused on Immediate Trust → Property Interest → Lead Capture → WhatsApp / Call / Site Visit.
- **Centralized Configuration**: All dynamic business values (phone numbers, WhatsApp templates, project names, starting prices, RERA placeholders, Indore locations) are easily editable in `src/config/siteConfig.ts`.
- **Decoupled Lead Architecture**: Includes client validation, API intake endpoint (`/api/leads`), fallback client storage, and easy CRM/Supabase integration hooks in `src/lib/leads/leadService.ts`.
- **Ad Analytics Prepared**: Pre-configured event tracking helper `src/lib/analytics/events.ts` ready for Google Tag Manager, GA4, Google Ads, and Meta Pixel.
- **Mobile-First Experience**: Includes a fixed bottom mobile action bar (Call, WhatsApp, Site Visit), responsive glassmorphic sticky header, and quick lead capture.
- **Strict Compliance**: Zero fake reviews, fake numbers, fake countdowns, or fake ROI promises.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tarunmakode123/pavitram-one-pager.git
   cd pavitram-one-pager
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---
*Built with excellence for Pavitram Properties (Pavitram India).*
