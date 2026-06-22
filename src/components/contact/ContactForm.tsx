import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { company } from "../../data/content";
import { serviceInterests } from "../../data/services";

interface FormState {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const empty: FormState = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  interest: serviceInterests[0],
  message: "",
};

/** Formspree endpoint (set VITE_FORMSPREE_ENDPOINT in .env). Empty = mailto fallback. */
const FORMSPREE_ENDPOINT = (import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "").trim();

type Status = "idle" | "submitting" | "sent" | "error";

/**
 * Contact form.
 *
 * If VITE_FORMSPREE_ENDPOINT is configured, the form POSTs the inquiry to
 * Formspree (true server-side delivery to the company inbox). If it is not
 * configured, it falls back to opening the visitor's mail client with a
 * prefilled message (mailto), so the form never silently does nothing.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const usesBackend = FORMSPREE_ENDPOINT.length > 0;

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const mailtoHref = () => {
    const subject = `Service Inquiry: ${form.interest} (${form.name})`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.companyName || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service interest: ${form.interest}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    return `${company.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // No backend configured → open the visitor's mail app (still works on desktop).
    if (!usesBackend) {
      window.location.href = mailtoHref();
      setStatus("sent");
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.companyName || "Not provided",
          email: form.email,
          phone: form.phone || "Not provided",
          interest: form.interest,
          message: form.message,
          _subject: `Service Inquiry: ${form.interest} (${form.name})`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm text-fog placeholder:text-muted/60 outline-none transition-colors focus:border-gold/50";
  const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted";

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass metal-top relative flex flex-col items-center overflow-hidden p-10 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/10 text-gold">
          <CheckCircle2 className="h-8 w-8" strokeWidth={1.6} />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-fog">
          {usesBackend ? "Thank you — your inquiry is on its way" : "Your email is ready to send"}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          {usesBackend
            ? "We've received your inquiry and our team will get back to you within one business day. Prefer something faster? Reach us on WhatsApp or by phone."
            : "We've opened your email app with your inquiry pre-filled. Just press send and our team will get back to you. Prefer something faster? Reach us on WhatsApp or by phone."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
            WhatsApp
          </a>
          <button onClick={() => { setStatus("idle"); setForm(empty); }} className="btn btn-ghost">
            Send another
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass metal-top relative overflow-hidden p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Full Name *</label>
          <input id="name" value={form.name} onChange={set("name")} className={field} placeholder="Your name" autoComplete="name" />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="companyName" className={labelCls}>Company Name</label>
          <input id="companyName" value={form.companyName} onChange={set("companyName")} className={field} placeholder="Company (optional)" autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email *</label>
          <input id="email" type="email" value={form.email} onChange={set("email")} className={field} placeholder="you@company.com" autoComplete="email" />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone</label>
          <input id="phone" type="tel" value={form.phone} onChange={set("phone")} className={field} placeholder="+255 ..." autoComplete="tel" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className={labelCls}>Service Interest</label>
          <select id="interest" value={form.interest} onChange={set("interest")} className={`${field} appearance-none`}>
            {serviceInterests.map((s) => (
              <option key={s} value={s} className="bg-ink-800 text-fog">{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>Message *</label>
          <textarea id="message" rows={5} value={form.message} onChange={set("message")} className={`${field} resize-y`} placeholder="Tell us about your operation and what you need." />
          {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
          <span>
            Something went wrong sending your inquiry. Please try again, or email us directly at{" "}
            <a href={mailtoHref()} className="font-semibold underline">{company.email}</a>.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
        <Send className="h-4 w-4" strokeWidth={2} />
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted/80">
        {usesBackend
          ? "We typically respond within one business day. You can also reach us directly by phone, email, or WhatsApp."
          : "Submitting opens your email app with the details pre-filled. You can also reach us directly by phone, email, or WhatsApp."}
      </p>
    </form>
  );
}
