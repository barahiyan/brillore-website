import type { Config } from "tailwindcss";

/**
 * Brillore Holdings design tokens.
 * Dark industrial base + gold/bronze metallic accents.
 */
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colours are driven by CSS variables (see src/styles/globals.css) so the
        // whole site can flip between dark (default) and light themes without any
        // component changing the classes it uses. Channels are space-separated RGB
        // so Tailwind's /<alpha-value> opacity utilities keep working.
        ink: {
          900: "rgb(var(--ink-900) / <alpha-value>)", // base background
          800: "rgb(var(--ink-800) / <alpha-value>)", // raised surface
          700: "rgb(var(--ink-700) / <alpha-value>)", // card / hover
          600: "rgb(var(--ink-600) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          soft: "rgb(var(--gold-soft) / <alpha-value>)",
          deep: "rgb(var(--gold-deep) / <alpha-value>)",
          bronze: "rgb(var(--gold-bronze) / <alpha-value>)",
        },
        line: "var(--line)",
        silver: "rgb(var(--silver) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)", // secondary text
        cream: "rgb(var(--cream) / <alpha-value>)",
        fog: "rgb(var(--fog) / <alpha-value>)", // primary text
      },
      fontFamily: {
        serif: ['"Clash Display"', "Arial", "sans-serif"],
        sans: ['"Satoshi"', "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#E0BF75 0%,#D6A84F 45%,#B8892F 100%)",
        "radial-gold":
          "radial-gradient(circle at center,rgba(214,168,79,0.16),transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 30px -16px rgba(232,232,232,0.12)",
        card: "0 24px 60px -30px rgba(0,0,0,0.85)",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)", opacity: "0" },
          "40%": { opacity: "0.9" },
          "100%": { transform: "translateX(220%) skewX(-12deg)", opacity: "0" },
        },
        spinslow: {
          to: { transform: "rotate(360deg)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        sweep: "sweep 2.4s ease-in-out infinite",
        spinslow: "spinslow 26s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
