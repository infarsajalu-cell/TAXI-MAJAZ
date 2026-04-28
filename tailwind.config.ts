import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAFAF7",
        gold: "#C9A84C",
        "gold-light": "#D4B96A",
        "gold-dark": "#A68A3E",
        charcoal: "#1A1A1A",
        cream: "#F5F0E8",
        "cream-dark": "#E8DFD1",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        "car-move": "carMove 12s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(201, 168, 76, 0)" },
        },
        carMove: {
          "0%": { transform: "translateX(-100%) scaleX(-1)" },
          "50%": { transform: "translateX(100vw) scaleX(-1)" },
          "50.01%": { transform: "translateX(100vw) scaleX(1)" },
          "100%": { transform: "translateX(-100%) scaleX(1)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #D4B96A 50%, #C9A84C 100%)",
        "dark-gradient": "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
        "cream-gradient": "linear-gradient(180deg, #FAFAF7 0%, #F5F0E8 100%)",
      },
      boxShadow: {
        "gold": "0 4px 20px rgba(201, 168, 76, 0.15)",
        "gold-lg": "0 8px 40px rgba(201, 168, 76, 0.25)",
        "soft": "0 4px 30px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 8px 60px rgba(0, 0, 0, 0.08)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
