import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800/80 bg-[#050505] text-neutral-400 text-xs py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-base sm:text-lg font-bold text-white tracking-tight font-heading">
              Farhan Ahnaf
            </span>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-md">
              Crafting audience-retentive video edits for creators and agencies worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-neutral-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-neutral-300 hover:text-white transition-colors">
              Work
            </a>
            <a href="#workflow" className="text-neutral-300 hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800/70" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-neutral-400 text-[11px] sm:text-xs">
          <div>
            © 2025 Farhan Ahnaf. All rights reserved. Built for high-impact visual storytelling.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
