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
        ink: {
          900: "#05070B", // near black
          800: "#0B111A", // dark navy
          700: "#101820", // deep charcoal
          600: "#161F2A",
        },
        gold: {
          DEFAULT: "#D6A84F",
          soft: "#F4E7C5",
          bronze: "#B8892F",
        },
        line: "rgba(214,168,79,0.18)",
        muted: "#8A8F98",
        fog: "#EAEAEA",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#F4E7C5 0%,#D6A84F 45%,#B8892F 100%)",
        "radial-gold":
          "radial-gradient(circle at center,rgba(214,168,79,0.16),transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 40px -12px rgba(214,168,79,0.45)",
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
      },
      animation: {
        sweep: "sweep 2.4s ease-in-out infinite",
        spinslow: "spinslow 26s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
