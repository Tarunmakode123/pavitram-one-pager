/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pavitram: {
          dark: '#111111',
          surface: '#1A1A1A',
          border: '#2A2A2A',
          cream: '#FAF8F5',
          sand: '#F3F0EC',
          muted: '#6B7280',
          lightMuted: '#9CA3AF',
          orange: '#F97316',
          orangeHover: '#EA580C',
          orangeDark: '#C2410C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(17, 17, 17, 0.4) 0%, rgba(17, 17, 17, 0.85) 100%)',
        'dark-card': 'linear-gradient(180deg, #1E1E1E 0%, #141414 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 25px rgba(249, 115, 22, 0.25)',
      },
    },
  },
  plugins: [],
};
