import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/60">
      <div className="gold-divider" />
      <div className="container-narrow px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">
            <span className="text-gradient-gold font-bold">K&amp;R</span> Digital Creations
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Premium video editing for creators and brands who refuse to blend in.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/80">By Sachintha Lakshan</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> 0707733378</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> wijesinghedinith@gmail.com</li>
            
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} K&amp;R Digital Creations (PVT) LTD. All rights reserved.
      </div>
    </footer>
  );
}
