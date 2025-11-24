import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#121826",
        navy: {
          50: "#f2f4fb",
          100: "#e7ebf5",
          200: "#d9deee",
          300: "#b2bedc",
          400: "#6575b5",
          500: "#1f2e57",
          600: "#141f4d",
          700: "#0d132d",
          900: "#030a1b",
        },
        charcoal: "#293340",
        gold: "#d4af37",
        crimson: "#b50000",
        "slate-blue": "#1a3a5f",
      },
      fontFamily: {
        sans: ["var(--font-source-sans-pro)", "Source Sans 3", "sans-serif"],
        serif: ["Instrument Serif", "var(--font-spectral)", "serif"],
        display: ["var(--font-spectral)", "serif"],
      },
      boxShadow: {
        "inset-top": "inset 0 1px 0 rgba(255,255,255,0.3)",
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(180deg, rgba(3,10,27,0.25) 0%, rgba(3,10,27,0.85) 100%)",
        "navy-stripes":
          "linear-gradient(120deg, rgba(255,255,255,0.08) 20%, transparent 20%)",
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        inner: "1200px",
        "content-xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;

