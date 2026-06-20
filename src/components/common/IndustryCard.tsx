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
      className="glass card-hover group flex w-[150px] flex-col items-center gap-3 p-5 text-center sm:w-[172px]"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold transition-colors group-hover:bg-gold/10">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span className="text-[13px] font-medium leading-snug text-fog">{name}</span>
    </motion.div>
  );
}
