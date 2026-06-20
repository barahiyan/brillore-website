import Hero from "../components/home/Hero";
import Marquee from "../components/common/Marquee";
import AboutPreview from "../components/home/AboutPreview";
import CoreBusinessPreview from "../components/home/CoreBusinessPreview";
import WhyChoosePreview from "../components/home/WhyChoosePreview";
import IndustriesPreview from "../components/home/IndustriesPreview";
import CompliancePreview from "../components/home/CompliancePreview";
import ParallaxBand from "../components/common/ParallaxBand";
import CTASection from "../components/common/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <CoreBusinessPreview />

      <ParallaxBand
        image="./assets/images/pipeline-integrity.webp"
        eyebrow="Operational Environments"
        title="Built for environments where precision is not optional"
        subtitle="From petroleum terminals to pipelines and tanks, our measurement and inspection work supports safe, dependable operations."
        caption="Technical Service Areas"
        cta={{ label: "Explore Services", to: "/services" }}
      />

      <WhyChoosePreview />

      <ParallaxBand
        image="./assets/images/marine.webp"
        eyebrow="Across Land & Sea"
        title="Technical support that follows your operations"
        subtitle="Oil and gas, fire safety, and marine, measured and inspected to the same exacting standard."
        caption="Service Capability Preview"
        align="center"
      />

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
