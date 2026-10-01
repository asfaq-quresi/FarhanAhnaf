import React from 'react';
import { Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-neutral-900/90 border border-neutral-800 rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle warm corner glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
                <span>Handling Revisions & Collaborative Workflow</span>
              </div>

              <TextReveal
                as="h2"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug font-heading"
                delay={0.1}
                stagger={0.04}
              >
                Story-Driven Pacing + Stress-Free Collaborative Revision
              </TextReveal>

              <p className="text-neutral-300 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-2xl">
                I cut out dead air, filler words, and awkward pauses to craft a gripping emotional arc. Every video draft is reviewed via Frame.io or timestamped markers, ensuring rapid turnaround on feedback until the final render is 100% flawless.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Frame.io timestamped comments
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Unlimited minor tweaks on rough cuts
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  4K Master exports + platform vertical crops
                </span>
              </div>
            </div>

            {/* Right Metrics Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl p-4 sm:p-5 text-center flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight font-heading tabular-nums whitespace-nowrap">
                  24–48h
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mt-1 whitespace-nowrap">
                  Draft Turnaround
                </div>
              </div>

              <div className="bg-neutral-950/80 border border-amber-500/30 rounded-2xl p-4 sm:p-5 text-center flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-amber-400 tracking-tight font-heading tabular-nums whitespace-nowrap">
                  100%
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-300 font-semibold mt-1 whitespace-nowrap">
                  Satisfaction Target
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
