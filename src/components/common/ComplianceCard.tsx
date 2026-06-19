import { motion } from "framer-motion";
import Icon from "./Icon";
import { staggerItem } from "./Reveal";

interface ComplianceCardProps {
  title: string;
  text: string;
  icon: string;
}

export default function ComplianceCard({ title, text, icon }: ComplianceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="glass card-hover metal-top group relative overflow-hidden p-7 text-center"
    >
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/5 text-gold shadow-gold">
        <Icon name={icon} className="h-8 w-8" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-fog">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      <span className="mt-4 inline-block text-[10px] uppercase tracking-label text-gold/70">
        Verified Credential
      </span>
    </motion.div>
  );
}
