import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

import profileImg from "@/assets/profile.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About  Sachintha Lakshan | K&R Digital Creations" },
      { name: "description", content: "Meet Sachintha Lakshan, founder of K&R Digital Creations  a video editor passionate about storytelling, social media, and YouTube content." },
      { property: "og:title", content: "About  Sachintha Lakshan" },
      { property: "og:description", content: "A storyteller behind the timeline." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="The Storyteller Behind the Timeline"
          subtitle="A young editor on a mission to make every second of your content count."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative animate-fade-up">
            {/* The Image Container */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-gold/30 shadow-elegant relative bg-card">
              <img 
                src={profileImg} 
                alt="Sachintha Lakshan" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* The Floating Name Tag */}
            <div className="absolute -bottom-6 -right-6 glass border border-gold/40 rounded-2xl px-5 py-4 shadow-gold z-10">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Founder</p>
              <p className="font-display text-lg">Sachintha Lakshan</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm <span className="text-gold font-medium">Sachintha Lakshan</span>, founder of K&amp;R Digital Creations.
              For over a year I've been crafting videos that don't just look good  they perform.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My focus lives at the intersection of <span className="text-foreground">social media editing</span> and
              <span className="text-foreground"> long-form YouTube content</span>. Whether it's a 15-second hook for TikTok
              or a 12-minute talking-head episode, I treat every edit as a story waiting to be sharpened.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I believe great editing is invisible  it carries the viewer from the first frame to the last without
              ever giving them a reason to scroll. That's the standard I bring to every project.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { k: "1+", v: "Years editing" },
                { k: "100%", v: "Client-focused" },
                { k: "24h", v: "Avg response" },
                { k: "∞", v: "Revisions to perfect" },
              ].map((s) => (
                <div key={s.v} className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-display text-2xl text-gradient-gold font-bold">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-4 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-medium hover-lift shadow-gold"
            >
              Let's work together <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}