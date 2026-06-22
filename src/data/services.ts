/**
 * Service catalogue — derived from the Brillore Holdings company profile.
 * `icon` values map to lucide-react icon names (resolved in src/components/common/Icon.tsx).
 */

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
  /** Optional photographic visual. If absent, a decorative panel is shown. */
  image?: string;
  /** Daytime variant shown on the light theme. */
  lightImage?: string;
  /** Neutral caption shown on the media panel (never a real-project claim). */
  imageCaption?: string;
}

/** Three headline business areas shown on the Home page preview. */
export const coreBusiness = [
  {
    id: "oil-gas",
    title: "Oil & Gas Measurements",
    description:
      "Accurate measurement, verification, and inspection support for petroleum operations and facilities.",
    icon: "Gauge",
  },
  {
    id: "fire-safety",
    title: "Fire Safety Systems",
    description:
      "Technical support that improves safety, protection, and compliance for industrial and commercial environments.",
    icon: "Flame",
  },
  {
    id: "marine",
    title: "Marine Services",
    description:
      "Professional technical support for marine operations, facilities, and service requirements.",
    icon: "Ship",
  },
];

/** Full service categories shown on the Services page. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "oil-gas",
    title: "Oil & Gas Measurements",
    description:
      "Accurate measurement, verification, and inspection support for petroleum-related operations and facilities.",
    icon: "Gauge",
    image: "./assets/images/oil-gas.webp",
    lightImage: "./assets/images/oil-gas-day.webp",
    imageCaption: "Operational Environments",
    items: [
      "Oil flow measurements",
      "Bulk oil flow meter verification",
      "Petroleum measurement support",
      "Inspection and technical reporting",
    ],
  },
  {
    id: "pipeline-integrity",
    title: "Pipeline & Asset Integrity Support",
    description:
      "Practical technical support for pipeline and asset reliability, helping clients maintain safer and more dependable operations.",
    icon: "Workflow",
    image: "./assets/images/pipeline-integrity.webp",
    lightImage: "./assets/images/pipeline-integrity-day.webp",
    imageCaption: "Technical Service Areas",
    items: [
      "Pipeline pigging",
      "Pipeline integrity support",
      "Bulk tank thickness inspection",
      "Cathodic protection support",
    ],
  },
  {
    id: "fire-safety",
    title: "Fire Safety Systems",
    description:
      "Technical support services focused on improving safety, protection, and compliance for industrial and commercial environments.",
    icon: "Flame",
    image: "./assets/images/fire-safety.webp",
    lightImage: "./assets/images/fire-safety-day.webp",
    imageCaption: "Service Capability Preview",
    items: [
      "Fire safety system support",
      "Safety-focused technical assistance",
      "Compliance-oriented service delivery",
    ],
  },
  {
    id: "marine",
    title: "Marine Services",
    description:
      "Professional technical support for marine-related operations, facilities, and service requirements.",
    icon: "Ship",
    image: "./assets/images/marine.webp",
    lightImage: "./assets/images/marine-day.webp",
    imageCaption: "Operational Environments",
    items: [
      "Marine technical support services",
      "Operational support for marine facilities",
      "Service-requirement assistance",
    ],
  },
  {
    id: "reporting",
    title: "Technical Reporting & Inspection Support",
    description:
      "Clear reporting and practical technical documentation to support decision-making, compliance, and operational follow-up.",
    icon: "ClipboardCheck",
    image: "./assets/images/reporting.webp",
    lightImage: "./assets/images/reporting-day.webp",
    imageCaption: "Operational Environments",
    items: [
      "Technical reporting",
      "Inspection support",
      "Documentation for compliance and follow-up",
    ],
  },
];

/** Linear engagement process shown on the Services page. */
export const serviceProcess = [
  { step: "01", title: "Inquiry", text: "You share your operational needs and objectives." },
  { step: "02", title: "Assessment", text: "We review the site, scope, and technical requirements." },
  { step: "03", title: "Execution", text: "Measurement or inspection work is carried out on site." },
  { step: "04", title: "Reporting", text: "Clear technical reports document findings and results." },
  { step: "05", title: "Support", text: "We provide follow-up and ongoing technical support." },
];

/** Service-interest options for the contact form. */
export const serviceInterests = [
  "Oil & Gas Measurements",
  "Fire Safety Systems",
  "Marine Services",
  "Inspection Support",
  "General Inquiry",
];
