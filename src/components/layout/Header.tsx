import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, company } from "../../data/content";
import Logo from "../common/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-xl flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        <Link to="/" className="group flex items-center gap-3" aria-label="Brillore Holdings home">
          <Logo className="h-10 w-10 md:h-11 md:w-11" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-fog md:text-xl">
              Brillore
            </span>
            <span className="text-[10px] uppercase tracking-label text-gold/80">Holdings</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive ? "text-gold" : "text-fog/80 hover:text-fog"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-gold-grad"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary !px-5 !py-2.5">
            Request Consultation
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-fog md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-xl flex flex-col gap-1 py-5">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-white/5 text-gold" : "text-fog/85 hover:bg-white/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-3 w-full"
              >
                Request Consultation
              </Link>
              <a href={company.phoneHref} className="mt-2 px-4 py-2 text-sm text-muted">
                {company.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
