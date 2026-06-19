import PageHero from "../components/common/PageHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import QuickInquiryCards from "../components/contact/QuickInquiryCards";
import CTASection from "../components/common/CTASection";
import Reveal from "../components/common/Reveal";
import { company } from "../data/content";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's Discuss Your <span className="text-gold-grad">Technical Service Needs</span>
          </>
        }
        subtitle="Contact Brillore Holdings for metrology, inspection, fire safety, and marine technical support services."
      />

      <section className="container-xl pb-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h2 className="text-2xl font-semibold text-fog">Get in touch</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Reach our team directly, or send a detailed inquiry and we'll respond promptly.
            </p>
            <div className="mt-8">
              <ContactInfo />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <QuickInquiryCards />

      <CTASection
        title="Ready to Work with Brillore Holdings?"
        buttons={[
          { label: "Call Now", href: company.phoneHref, variant: "primary" },
          { label: "Send Email", href: company.emailHref, variant: "ghost" },
          { label: "WhatsApp", href: company.whatsapp, variant: "ghost" },
        ]}
      />
    </>
  );
}
