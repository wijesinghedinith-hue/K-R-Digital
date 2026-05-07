import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Sparkles, Clock, Award, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title: "Why Choose Me  K&R Digital Creations" },
      { name: "description", content: "Creative, fast, high-quality, client-focused video editing  here's why creators and brands choose K&R Digital Creations." },
      { property: "og:title", content: "Why Choose K&R Digital Creations" },
      { property: "og:description", content: "Creative, fast, premium, client-first." },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  { icon: Sparkles, title: "Creative & Trend-Aware", text: "Edits that ride the algorithm without losing your brand voice." },
  { icon: Clock, title: "Fast Delivery", text: "Reliable turnarounds so your content never misses its moment." },
  { icon: Award, title: "High-Quality Output", text: "Color, sound, motion  every layer polished to a premium finish." },
  { icon: HeartHandshake, title: "Client-Focused Approach", text: "Clear communication, generous revisions, your vision honored." },
];

function WhyPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Why Me"
          title="Editing Worth Paying For"
          subtitle="What you get when you trust your content to K&R Digital Creations."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-gold/60 transition-all duration-500 hover-lift overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <r.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-full font-medium hover-lift shadow-gold"
          >
            Let's create something great <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
