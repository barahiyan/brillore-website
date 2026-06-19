import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import CoreBusinessPreview from "../components/home/CoreBusinessPreview";
import WhyChoosePreview from "../components/home/WhyChoosePreview";
import IndustriesPreview from "../components/home/IndustriesPreview";
import CompliancePreview from "../components/home/CompliancePreview";
import CTASection from "../components/common/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CoreBusinessPreview />
      <WhyChoosePreview />
      <IndustriesPreview />
      <CompliancePreview />
      <CTASection
        title="Need Reliable Technical Support for Your Operations?"
        subtitle="Talk to Brillore Holdings about metrology, inspection, fire safety, and marine technical services."
        buttons={[
          { label: "View Services", to: "/services", variant: "primary" },
          { label: "Contact Brillore", to: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
