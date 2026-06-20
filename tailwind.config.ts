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
        // Matte black / charcoal base (per Brillore identity system).
        ink: {
          900: "#050505", // matte black
          800: "#090A0A", // near black
          700: "#111315", // charcoal
          600: "#181A1C", // raised charcoal
        },
        gold: {
          DEFAULT: "#D6A84F",
          soft: "#E0BF75", // light gold (text on dark buttons)
          deep: "#C99A3D",
          bronze: "#B8892F",
        },
        line: "rgba(214,168,79,0.18)",
        silver: "#E8E8E8",
        muted: "#9A9A9A", // neutral grey (no blue cast)
        cream: "#F4F0E8", // warm white
        fog: "#E8E8E8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Archivo"', "system-ui", "-apple-system", "sans-serif"],
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
        gold: "0 0 34px -16px rgba(214,168,79,0.24)",
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
