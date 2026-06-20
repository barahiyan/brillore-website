import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { staggerItem } from "./Reveal";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  to?: string;
  cta?: string;
  /** Editorial index, e.g. "01". */
  index?: string;
}

export default function ServiceCard({ icon, title, description, to, cta, index }: ServiceCardProps) {
  const inner = (
    <motion.div
      variants={staggerItem}
      className="glass card-hover metal-top group relative flex h-full flex-col overflow-hidden p-7"
    >
      {/* Editorial header row: index + icon + rule (no generic square tile) */}
      <div className="flex items-center gap-4">
        {index && (
          <span className="font-serif text-3xl font-semibold leading-none text-white/[0.14]">
            {index}
          </span>
        )}
        <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent" />
        <Icon name={icon} className="h-8 w-8 text-gold transition-transform group-hover:-translate-y-0.5" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-fog">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      {cta && (
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </motion.div>
  );

  return to ? (
    <Link to={to} className="block h-full focus:outline-none">
      {inner}
    </Link>
  ) : (
    inner
  );
}
