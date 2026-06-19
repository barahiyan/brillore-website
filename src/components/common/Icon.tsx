import {
  Gauge,
  Flame,
  Ship,
  Workflow,
  ClipboardCheck,
  BadgeCheck,
  ScrollText,
  ReceiptText,
  Fuel,
  Warehouse,
  Factory,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

/** Maps the string icon names used in data files to lucide-react components. */
const map: Record<string, LucideIcon> = {
  Gauge,
  Flame,
  Ship,
  Workflow,
  ClipboardCheck,
  BadgeCheck,
  ScrollText,
  ReceiptText,
  Fuel,
  Warehouse,
  Factory,
  ShieldCheck,
  Target,
};

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ name, className, strokeWidth = 1.6 }: IconProps) {
  const Cmp = map[name] ?? Target;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
