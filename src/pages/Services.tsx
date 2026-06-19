import { motion } from "framer-motion";
import PageHero from "../components/common/PageHero";
import ServicesOverview from "../components/services/ServicesOverview";
import ServiceCategory from "../components/services/ServiceCategory";
import ServicesPipeline from "../components/services/ServicesPipeline";
import ServiceProcess from "../components/services/ServiceProcess";
import CTASection from "../components/common/CTASection";
import { serviceCategories } from "../data/services";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Technical Services Built for{" "}
            <span className="text-gold-grad">Accuracy, Safety &amp; Compliance</span>
          </>
        }
        subtitle="From petroleum measurement to inspection support, Brillore Holdings helps industrial, oil and gas, fire safety, and marine clients improve operational reliability."
      />

      <ServicesOverview />

      {/* Detailed service categories */}
      <section className="container-xl space-y-6 py-4 md:space-y-8">
        {serviceCategories.map((cat, i) => (
          <ServiceCategory key={cat.id} category={cat} index={i} />
        ))}
      </section>

      <ServicesPipeline />
      <ServiceProcess />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <CTASection
          title="Looking for a Dependable Technical Service Partner?"
          subtitle="Let's discuss how Brillore can support your measurement, inspection, and safety needs."
          buttons={[
            { label: "Request Consultation", to: "/contact", variant: "primary" },
            { label: "Contact Brillore", to: "/contact", variant: "ghost" },
          ]}
        />
      </motion.div>
    </>
  );
}
