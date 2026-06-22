import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Icon from "../common/Icon";
import { useTheme } from "../common/theme";
import type { ServiceCategory as ServiceCategoryType } from "../../data/services";

interface Props {
  category: ServiceCategoryType;
  index: number;
}

/** Alternating-layout service block: media panel on one side, content on the other. */
export default function ServiceCategory({ category, index }: Props) {
  const reversed = index % 2 === 1;
  const { theme } = useTheme();
  // Daytime photo on the light theme so service imagery stays bright on paper.
  const media =
    theme === "light" && category.lightImage ? category.lightImage : category.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass metal-top group relative overflow-hidden"
      id={category.id}
    >
      <div className={`grid items-stretch md:grid-cols-2 ${reversed ? "md:[direction:rtl]" : ""}`}>
        {/* Media panel */}
        <div className="relative min-h-[240px] overflow-hidden md:min-h-[420px] md:[direction:ltr]">
          {media ? (
            <img
              src={media}
              alt={`${category.title} industrial service environment`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-radial-gold opacity-40" />
          )}
          {/* Light gradient: keeps the photo clearly visible, only feathers the edge into the content */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-ink-900"
          />
          {/* Icon badge */}
          <span className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-xl border border-gold/30 bg-ink-900/70 text-gold backdrop-blur-md">
            <Icon name={category.icon} className="h-7 w-7" />
          </span>
          {category.imageCaption && (
            <span className="absolute bottom-5 left-6 text-[10px] uppercase tracking-label text-gold/80">
              {category.imageCaption}
            </span>
          )}
          {/* Index numeral */}
          <span className="absolute right-6 top-4 font-serif text-5xl font-semibold text-white/[0.08]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="p-7 md:p-10 md:[direction:ltr]">
          <h3 className="text-2xl font-semibold text-fog md:text-3xl">{category.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{category.description}</p>

          <ul className="mt-6 grid gap-3">
            {category.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-4 py-3"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-fog/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
