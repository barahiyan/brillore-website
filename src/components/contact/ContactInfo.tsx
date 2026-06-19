import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react";
import { staggerParent, staggerItem } from "../common/Reveal";
import { company } from "../../data/content";

const cards = [
  { icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "Email", value: company.email, href: company.emailHref },
  { icon: Globe, label: "Website", value: company.website, href: company.websiteHref, external: true },
  { icon: MapPin, label: "Office", value: company.office },
];

export default function ContactInfo() {
  return (
    <div>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {cards.map((c) => {
          const body = (
            <>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
                <c.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-label text-gold/70">{c.label}</p>
                <p className="mt-1 break-words text-sm font-medium text-fog">{c.value}</p>
              </div>
            </>
          );
          return (
            <motion.div key={c.label} variants={staggerItem}>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="glass card-hover flex h-full items-center gap-4 p-5"
                >
                  {body}
                </a>
              ) : (
                <div className="glass flex h-full items-center gap-4 p-5">{body}</div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="glass card-hover mt-4 flex items-center justify-between gap-4 p-5"
      >
        <span className="flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-grad text-ink-900">
            <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-fog">Chat on WhatsApp</span>
            <span className="block text-xs text-muted">Fast replies during business hours</span>
          </span>
        </span>
        <span className="text-gold">→</span>
      </motion.a>
    </div>
  );
}
