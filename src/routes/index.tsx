import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K&R Digital Creations — Premium Video Editing" },
      { name: "description", content: "Professional social media & YouTube video editing that captures attention and drives engagement." },
      { property: "og:title", content: "K&R Digital Creations — Premium Video Editing" },
      { property: "og:description", content: "Elevating content through creative video editing." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Cinematic video editing workspace with golden light"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        </div>

        <div className="relative container-narrow px-6 py-32 text-center">
         
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] animate-fade-up">
            Elevating Content <br />
            Through <span className="text-gradient-gold italic">Creative</span> Video Editing
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "120ms" }}>
            Professional Social Media &amp; YouTube video editing that captures attention and drives engagement.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-full font-medium hover-lift shadow-gold"
            >
              <Play size={16} className="fill-current" /> View Portfolio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-gold/50 text-foreground hover:bg-gold/10 px-7 py-3.5 rounded-full font-medium transition-all"
            >
              Contact Me
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-3 max-w-2xl mx-auto gap-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {[
              { v: "200K+", l: "Top Video Views" },
              { v: "100+", l : "Edits Delivered" },
              { v: "1Y+", l: "Experience" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-gradient-gold font-bold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border border-gold/50 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-gold" />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Trend-Aware", text: "Edits built for the algorithm and the scroll." },
              { icon: Zap, title: "Fast Delivery", text: "Quick turnarounds without compromising quality." },
              { icon: Sparkles, title: "Premium Quality", text: "Cinematic polish on every frame, every cut." },
            ].map((f, i) => (
              <div
                key={f.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-500 hover-lift overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--gradient-radial-gold)" }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5">
                    <f.icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
