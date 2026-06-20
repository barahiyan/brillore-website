import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Persistent cinematic backdrop: stays fixed while content scrolls over it,
          so the industrial imagery is present across the whole page, not just the hero. */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <img
          src="./assets/images/hero-terminal.webp"
          alt=""
          className="h-full w-full object-cover opacity-[0.18]"
          decoding="async"
        />
        {/* Light atmospheric wash so text stays readable while the image shows through */}
        <div className="absolute inset-0 bg-ink-900/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/70" />
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
