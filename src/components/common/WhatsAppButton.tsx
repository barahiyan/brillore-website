import { MessageCircle } from "lucide-react";
import { company } from "../../data/content";

/** Floating WhatsApp quick-contact button (mobile-friendly tap target). */
export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Brillore Holdings on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-ink-800/90 text-gold shadow-card backdrop-blur-md transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold/15 [animation-duration:2.6s]" />
      <MessageCircle className="h-6 w-6" strokeWidth={1.7} />
    </a>
  );
}
