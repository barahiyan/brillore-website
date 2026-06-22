import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import { useTheme } from "../common/theme";

export default function Layout() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  // Persistent backdrop that stays fixed while content scrolls over it. Dusk
  // footage on dark, the daytime terminal on light so it sits well on warm paper.
  const backdrop = dark
    ? "./assets/images/hero-terminal.webp"
    : "./assets/images/hero-terminal-day.webp";
  return (
    <div className="flex min-h-screen flex-col">
      {/* Persistent cinematic backdrop carrying the imagery through the whole page. */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <img
          src={backdrop}
          alt=""
          className="bg-photo h-full w-full object-cover opacity-[0.18]"
          decoding="async"
        />
        {/* Atmospheric wash (matte black on dark, warm paper on light) so content
            stays readable while the image shows through as you scroll. */}
        <div className={`absolute inset-0 ${dark ? "bg-ink-900/25" : "bg-[#F5F1E9]/70"}`} />
        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/70"
              : "bg-gradient-to-b from-[#F5F1E9]/65 via-[#F5F1E9]/80 to-[#F5F1E9]"
          }`}
        />
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-ink-900"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
