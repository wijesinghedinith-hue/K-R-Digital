import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { TrendingUp, ExternalLink } from "lucide-react";

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
import v22 from "@/assets/2.2.mp4";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

type Item = {
  video: string;
  platform: "Instagram" | "TikTok";
  label: string;
  link: string; // ✅ NEW
  featured?: boolean;
};

const items: Item[] = [
  {
    video: v1,
    platform: "Instagram",
    label: "Reel · Reignite",
    featured: true,
    link: "https://www.instagram.com/reel/DVJRXhaD22E/?igsh=eGo1MnRzdDM3dDk=",
  },

  {
    video: v22,
    platform: "Instagram",
    label: "Reel · Reignite",
    featured: true,
    link: "https://www.instagram.com/reel/DW82mg-D5AT/?igsh=cnNqM2RnYWJlOXAw",
  },

  { video: v2, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PeHLkP/" },
  { video: v3, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9Pek8wY/" },
  { video: v4, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PRNaaf/" },
  { video: v5, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PRDyTL/" },
  { video: v6, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PdXrGh/" },

  {
    video: v22,
    platform: "Instagram",
    label: "Reel · Reignite",
    featured: true,
    link: "https://www.instagram.com/reel/DW82mg-D5AT/?igsh=cnNqM2RnYWJlOXAw",
  },

  { video: v7, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PeBMKx/" },
  { video: v8, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PduEm8/" },
  { video: v9, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PdDqLC/" },
  { video: v10, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PdDkcA/" },
  { video: v11, platform: "TikTok", label: "Edit", link: "https://vt.tiktok.com/ZS9PdPTKR/" },
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
        <div className="mb-14 p-8 rounded-3xl glass border border-gold/40 flex items-center gap-6 shadow-gold">
          <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary-foreground">
            <TrendingUp size={28} />
          </div>
          <h3 className="font-display text-2xl">
            Video reached <span className="text-gradient-gold font-bold">200,000+ views</span>
          </h3>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.video + i}
              onClick={(e) => {
                const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                if (!video) return;
                video.paused ? video.play() : video.pause();
              }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden border hover:border-gold/60 transition cursor-pointer"
            >
              {/* Video */}
              <video
                src={item.video}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                playsInline
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

              {/* Platform */}
              <div className="absolute top-3 left-3 text-xs bg-black/60 px-2 py-1 rounded pointer-events-none">
                {item.platform}
              </div>

              {/* 🔗 BUTTON */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-14 right-3 z-10 flex items-center gap-1 px-3 py-1.5 text-xs rounded-full bg-black/70 text-white hover:bg-gold hover:text-black transition"
              >
                View <ExternalLink size={12} />
              </a>

              {/* Label */}
              <div className="absolute bottom-0 p-4 text-sm pointer-events-none">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}