import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
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

/**
 * Static-hosting-safe contact form.
 *
 * On submit it validates on the frontend, then opens the visitor's email client
 * with a prefilled message (mailto). It does NOT silently "send" anything — the
 * user completes delivery from their mail app. See docs for Formspree / EmailJS /
 * PHP integration options to enable true server-side submission later.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

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

    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm text-fog placeholder:text-muted/60 outline-none transition-colors focus:border-gold/50";
  const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass metal-top relative flex flex-col items-center overflow-hidden p-10 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/10 text-gold">
          <CheckCircle2 className="h-8 w-8" strokeWidth={1.6} />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-fog">Your email is ready to send</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          We've opened your email app with your inquiry pre-filled. Just press send and our team will
          get back to you. Prefer something faster? Reach us on WhatsApp or by phone.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
            WhatsApp
          </a>
          <button onClick={() => { setSent(false); setForm(empty); }} className="btn btn-ghost">
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

      <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
        Send Inquiry
        <Send className="h-4 w-4" strokeWidth={2} />
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted/80">
        Submitting opens your email app with the details pre-filled. You can also reach us directly by
        phone, email, or WhatsApp.
      </p>
    </form>
  );
}
