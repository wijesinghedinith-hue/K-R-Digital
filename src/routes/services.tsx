import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Smartphone, Youtube, Wand2, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Video Editing for Social & YouTube | K&R Digital" },
      { name: "description", content: "Social media editing, YouTube video editing, and content optimization — built to capture attention and drive engagement." },
      { property: "og:title", content: "Services | K&R Digital Creations" },
      { property: "og:description", content: "Social media, YouTube, and content optimization editing services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Smartphone,
    title: "Social Media Editing",
    desc: "Vertical edits engineered for the scroll — TikTok, Instagram Reels, and YouTube Shorts.",
    points: ["Hook-first storytelling", "Trend-aware transitions", "Captions & sound design", "Vertical 9:16 mastered"],
  },
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    desc: "Long-form edits that retain viewers — vlogs, tutorials, and talking-head content.",
    points: ["Pacing & retention edits", "B-roll integration", "Color & audio polish", "Thumbnails on request"],
  },
  {
    icon: Wand2,
    title: "Content Optimization",
    desc: "The polish layer — captions, hooks, sound effects, and motion that lift performance.",
    points: ["Auto + styled captions", "Custom hook design", "SFX & music curation", "Motion graphics"],
  },
];

function ServicesPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Services"
          title="Built to Captivate. Engineered to Convert."
          subtitle="Three focused offerings — each crafted to move your content from forgettable to unmissable."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-gold/60 transition-all duration-500 hover-lift overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary-foreground mb-6 shadow-gold">
                  <s.icon size={24} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-10 md:p-14 rounded-3xl glass border border-gold/30 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-4xl">Have a project in mind?</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Tell me about your content goals — I'll respond within 24 hours with a tailored plan.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-full font-medium hover-lift shadow-gold"
            >
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
