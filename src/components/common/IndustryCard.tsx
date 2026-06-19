import { motion } from "framer-motion";
import Icon from "./Icon";
import { staggerItem } from "./Reveal";

interface IndustryCardProps {
  name: string;
  icon: string;
}

export default function IndustryCard({ name, icon }: IndustryCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="glass card-hover group flex items-center gap-4 p-5"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-gold/25 bg-gold/5 text-gold">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span className="text-sm font-medium leading-snug text-fog">{name}</span>
    </motion.div>
  );
}
