import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Play, TrendingUp } from "lucide-react";

// Import videos
import v1 from "@/assets/1.mp4";
import v2 from "@/assets/2.mp4";
import v3 from "@/assets/3.mp4";
import v4 from "@/assets/4.mp4";
import v5 from "@/assets/5.mp4";
import v6 from "@/assets/6.mp4";
import v7 from "@/assets/7.mp4";
import v8 from "@/assets/8.mp4";
import v9 from "@/assets/9.mp4";
import v10 from "@/assets/10.mp4";
import v11 from "@/assets/11.mp4";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

type Item = {
  video: string;
  platform: "Instagram" | "TikTok";
  label: string;
  featured?: boolean;
};

const items: Item[] = [
  { video: v1, platform: "Instagram", label: "Reel · Reignite", featured: true },
  { video: v2, platform: "TikTok", label: "TikTok · Rough clothing edit" },
  { video: v3, platform: "TikTok", label: "TikTok · Rough clothing edit " },
  { video: v4, platform: "TikTok", label: "TikTok ·Reignite "},
  { video: v5, platform: "TikTok", label: "TikTok ·Rough clothing edit " },
  { video: v6, platform: "TikTok", label: "TikTok · Rough clothing edit " },
  { video: v7, platform: "TikTok", label: "TikTok · Rough clothing edit " },
  { video: v8, platform: "TikTok", label: "TikTok · Rough clothing edit " },
  { video: v9, platform: "TikTok", label: "TikTok · Rough clothing edit " },
  { video: v10, platform: "TikTok", label: "Rough clothing edit " },
  { video: v11, platform: "TikTok", label: "Rough clothing edit " },
];

function PortfolioPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A curated reel of your best edits."
        />

        {/* Highlight */}
        <div className="mb-14 p-8 md:p-10 rounded-3xl glass border border-gold/40 flex flex-col md:flex-row items-center gap-6 md:gap-10 animate-fade-up shadow-gold">
          <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary-foreground shrink-0">
            <TrendingUp size={28} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-1">
              Highlight
            </p>
            <h3 className="font-display text-2xl md:text-3xl">
              Video reached{" "}
              <span className="text-gradient-gold font-bold">
                200,000+ views
              </span>
            </h3>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.video}
              onClick={(e) => {
                const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                if (!video) return;

                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              }}
              className={`group relative aspect-[9/16] rounded-2xl overflow-hidden border border-border hover:border-gold/60 transition-all duration-500 hover-lift animate-fade-up cursor-pointer ${
                item.featured ? "ring-1 ring-gold/50" : ""
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Video */}
              <video
                src={item.video}
                className="absolute inset-0 w-full h-full object-cover"
                //muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-30 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

              {/* Platform badge */}
              <div className="absolute top-4 left-4 glass border border-border/60 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/90 pointer-events-none">
                {item.platform}
              </div>

              {/* Featured badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-semibold pointer-events-none">
                  Featured
                </div>
              )}

              

              {/* Bottom text */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none">
                <p className="font-display text-base text-foreground">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}