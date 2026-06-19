import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Icon from "../common/Icon";
import type { ServiceCategory as ServiceCategoryType } from "../../data/services";

interface Props {
  category: ServiceCategoryType;
  index: number;
}

/** Alternating-layout detailed service block for the Services page. */
export default function ServiceCategory({ category, index }: Props) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass metal-top relative overflow-hidden p-7 md:p-10"
      id={category.id}
    >
      <div className={`grid items-center gap-8 md:grid-cols-2 ${reversed ? "md:[direction:rtl]" : ""}`}>
        {/* Text */}
        <div className="md:[direction:ltr]">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
              <Icon name={category.icon} className="h-7 w-7" />
            </span>
            <span className="font-serif text-5xl font-semibold text-white/[0.06]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-fog md:text-3xl">{category.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{category.description}</p>
        </div>

        {/* Item list */}
        <ul className="grid gap-3 md:[direction:ltr]">
          {category.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-4 py-3.5"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-fog/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
