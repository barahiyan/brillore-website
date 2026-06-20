import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { company, navLinks } from "../../data/content";
import Logo from "../common/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-line bg-ink-800/60">
      <div className="container-xl grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3" aria-label="Brillore Holdings home">
            <Logo className="h-11 w-11" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold text-fog">Brillore Holdings</span>
              <span className="text-[10px] uppercase tracking-label text-gold/80">
                {company.tagline}
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {company.description}
          </p>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-fog/90">Navigate</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-sm text-muted transition-colors hover:text-gold">
                Request Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-fog/90">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-3 text-muted hover:text-gold">
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.6} /> {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="flex items-center gap-3 text-muted hover:text-gold">
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.6} /> {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.websiteHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted hover:text-gold"
              >
                <Globe className="h-4 w-4 text-gold" strokeWidth={1.6} /> {company.website}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <MapPin className="h-4 w-4 text-gold" strokeWidth={1.6} /> {company.office}
            </li>
          </ul>
        </div>
      </div>

      <div className="divider-gold" />
      <div className="container-xl flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted md:flex-row">
        <p>
          © {year} {company.name}. All rights reserved.
        </p>
        <p className="tracking-wide">
          {company.category} · Since {company.since}
        </p>
      </div>
    </footer>
  );
}
