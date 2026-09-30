import React from 'react';
import { PORTRAIT_IMAGE } from '../data/portfolioData';
import { TextReveal } from './TextReveal';

interface AboutSectionProps {
  onSendMessage?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle orbital dashed lines in background */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] pointer-events-none opacity-20 -z-10"
        viewBox="0 0 1200 700"
        fill="none"
      >
        <path
          d="M 100 550 C 300 680, 800 620, 1050 350 C 1150 240, 1100 100, 950 80 C 800 60, 650 150, 680 320 C 700 450, 850 500, 1050 480"
          stroke="url(#dashedGlow)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient id="dashedGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#71717a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <TextReveal
              as="h2"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] font-heading"
              delay={0.1}
              stagger={0.04}
            >
              Because the right edit doesn&apos;t just show a story —{' '}
              <span className="text-amber-400">it makes you feel it</span>
            </TextReveal>

            <div className="space-y-3.5 text-neutral-300 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                Hi! My name is <strong className="text-white font-semibold">Farhan Ahnaf</strong>. Based in Dhaka, Bangladesh, I&apos;ve spent the last 2+ years collaborating with creators and businesses to transform rough video files into polished, audience-retentive content.
              </p>
              <p>
                From creative passion projects to commercial edits, I bring technical precision and artistic direction to every project. I&apos;m currently available for freelance projects and long-term collaborations—let&apos;s build something great.
              </p>
            </div>

            {/* Bottom Sub-stats from Figma */}
            <div className="pt-5 border-t border-neutral-800/80 flex items-center gap-10">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums font-heading">
                  100+
                </div>
                <div className="text-[11px] text-neutral-400 font-medium capitalize mt-0.5">
                  projects completed
                </div>
              </div>
              <div className="w-px h-8 bg-neutral-800" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums font-heading">
                  20+
                </div>
                <div className="text-[11px] text-neutral-400 font-medium capitalize mt-0.5">
                  Clients Over the world
                </div>
              </div>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Amber ambient backlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl transform -translate-y-4 scale-95 pointer-events-none" />

              {/* Dashed circular frame accent */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-amber-500/30 animate-[spin_60s_linear_infinite] pointer-events-none" />

              {/* Portrait container with arch/rounded styling matching Figma */}
              <div className="relative z-10 rounded-[32px] overflow-hidden bg-gradient-to-b from-neutral-800/60 to-neutral-900 border border-neutral-700/60 shadow-2xl shadow-black/80">
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Farhan Ahnaf - Professional Video Editor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top aspect-[4/5] filter contrast-105"
                  loading="eager"
                />

                {/* Subtle bottom gradient to blend */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent pointer-events-none" />
                
                {/* Status chip on portrait */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl py-2 px-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-neutral-200 font-medium">Farhan Ahnaf</span>
                  </div>
                  <span className="text-neutral-400">Dhaka, BD (GMT+6)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
