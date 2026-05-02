import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — K&R Digital Creations" },
      {
        name: "description",
        content:
          "Get in touch with Sachintha Lakshan. Phone, WhatsApp, or send a message — replies within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

const PHONE = "0707733378";
const WHATSAPP_INTL = "94707733378"; // Sri Lanka format

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more (min 10 chars)").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(form);

    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }

    setErrors({});

    const message = `
 New Project Enquiry

 Name: ${result.data.name}
 Email: ${result.data.email}

 Message:
${result.data.message}

---
Sent from K&R Digital Creations Website
    `;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${WHATSAPP_INTL}?text=${encodedMessage}`,
      "_blank"
    );

    setSent(true);
  };

  const whatsappQuickMsg = encodeURIComponent(
    "Hi Sachintha! I'd like to discuss a video editing project."
  );

  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Make Something Memorable"
          subtitle="Reach out via WhatsApp, call, or message — fast replies."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4 animate-fade-up">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-gold/60 transition-all hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </p>
                <p className="font-medium">{PHONE}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_INTL}?text=${whatsappQuickMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-gold text-primary-foreground hover-lift shadow-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-80">
                  Fastest reply
                </p>
                <p className="font-semibold">Chat on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-card border border-border space-y-5 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {sent && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gold/10 border border-gold/40 text-sm">
                <CheckCircle2 size={18} className="text-gold" />
                WhatsApp opened with your message. I’ll reply soon 👍
              </div>
            )}

            <Field label="Your Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className="w-full bg-input/60 border border-border focus:border-gold rounded-xl px-4 py-3 outline-none transition-colors"
                placeholder="Jane Creator"
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={160}
                className="w-full bg-input/60 border border-border focus:border-gold rounded-xl px-4 py-3 outline-none transition-colors"
                placeholder="you@email.com"
              />
            </Field>

            <Field label="Project Details" error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={6}
                className="w-full bg-input/60 border border-border focus:border-gold rounded-xl px-4 py-3 outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </Field>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-full font-medium hover-lift shadow-gold"
            >
              Send via WhatsApp <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 inline-block">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-destructive mt-1.5 inline-block">{error}</span>}
    </label>
  );
}