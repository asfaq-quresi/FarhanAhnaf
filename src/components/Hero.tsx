import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from './TextReveal';

interface HeroProps {
  onExploreProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* ================= AMBIENT LIGHT & ANIMATED BEAM BACKGROUND ================= */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        {/* 1. Ambient Overhead Spotlight (Warm Golden Amber Radiance) */}
        <motion.div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] lg:w-[1150px] h-[480px] sm:h-[600px] rounded-full pointer-events-none"
          animate={{
            opacity: [0.75, 0.95, 0.75],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(245, 158, 11, 0.28) 0%, rgba(234, 88, 12, 0.16) 38%, rgba(180, 83, 9, 0.05) 65%, transparent 80%)',
            filter: 'blur(65px)',
          }}
        />

        {/* 2. Soft Ambient Center Glow (Breathes gently behind content) */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[320px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* 3. Deep Bronze / Earthy Counter-Orbiting Flow */}
        <motion.div
          className="absolute top-20 left-[18%] sm:left-[24%] w-[380px] sm:w-[540px] h-[340px] sm:h-[450px] rounded-full opacity-40 pointer-events-none"
          animate={{
            x: [0, 50, -40, 0],
            y: [0, 30, -20, 0],
            scale: [0.95, 1.08, 0.92, 0.95],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(234, 88, 12, 0.14) 0%, rgba(180, 83, 9, 0.05) 45%, transparent 70%)',
            filter: 'blur(85px)',
          }}
        />

        {/* 4. Volumetric Sweeping Conic Light Beam (Sweeps gently from top apex) */}
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] sm:w-[950px] h-[650px] pointer-events-none"
          animate={{
            rotate: [-6, 6, -6],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'conic-gradient(from 180deg at 50% 0%, transparent 42%, rgba(245, 158, 11, 0.12) 47%, rgba(254, 240, 138, 0.22) 50%, rgba(245, 158, 11, 0.12) 53%, transparent 58%)',
            filter: 'blur(36px)',
            transformOrigin: 'top center',
          }}
        />

        {/* 5. Illuminated Tech Grid Texture Pattern */}
        {/* Layer 5A: Clean architectural grid, now subtly illuminated by the ambient light */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.065) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 95% 75% at 50% 32%, black 35%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 75% at 50% 32%, black 35%, transparent 85%)',
          }}
        />

        {/* Layer 5B: Amber-tinted grid glow directly under the ambient light center */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(245, 158, 11, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 158, 11, 0.16) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 650px 400px at 50% 28%, black 25%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 650px 400px at 50% 28%, black 25%, transparent 80%)',
          }}
        />

        {/* 6. Animated Light Beams ("beem animation") traversing the Grid Pattern */}
        {/* Beam 6A: Horizontal travelling light beam along grid line at top 192px */}
        <div className="absolute top-[192px] inset-x-0 h-px overflow-hidden pointer-events-none">
          <motion.div
            className="w-44 sm:w-64 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_14px_#f59e0b]"
            animate={{
              x: ['-250px', 'calc(100vw + 250px)'],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
              delay: 0.5,
            }}
          />
        </div>

        {/* Beam 6B: Horizontal travelling light beam (reverse direction) along grid line at top 336px */}
        <div className="absolute top-[336px] inset-x-0 h-px overflow-hidden pointer-events-none">
          <motion.div
            className="w-48 sm:w-72 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent shadow-[0_0_14px_#ea580c]"
            animate={{
              x: ['calc(100vw + 250px)', '-280px'],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: 'linear',
              delay: 2.5,
            }}
          />
        </div>

        {/* Beam 6C: Vertical travelling light beam along vertical grid line (left of center) */}
        <div className="absolute left-[calc(50%-192px)] inset-y-0 w-px overflow-hidden pointer-events-none hidden sm:block">
          <motion.div
            className="w-px h-40 bg-gradient-to-b from-transparent via-amber-300 to-transparent shadow-[0_0_12px_#f59e0b]"
            animate={{
              y: ['-160px', '100%'],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'linear',
              delay: 1.2,
            }}
          />
        </div>

        {/* Beam 6D: Vertical travelling light beam along vertical grid line (right of center) */}
        <div className="absolute left-[calc(50%+192px)] inset-y-0 w-px overflow-hidden pointer-events-none hidden sm:block">
          <motion.div
            className="w-px h-44 bg-gradient-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#f59e0b]"
            animate={{
              y: ['-180px', '100%'],
            }}
            transition={{
              duration: 7.2,
              repeat: Infinity,
              ease: 'linear',
              delay: 4,
            }}
          />
        </div>

        {/* 7. Grid Intersection Luminous Pulse Nodes */}
        <div 
          className="absolute top-[192px] left-[calc(50%-192px)] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_#f59e0b] opacity-75 hidden sm:block" 
        />
        <div 
          className="absolute top-[192px] left-[calc(50%+192px)] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_#f59e0b] opacity-75 hidden sm:block" 
        />
        <div 
          className="absolute top-[336px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_#ea580c] opacity-70" 
        />

        {/* 8. Text Readability Shield: Gentle vignette to ensure pristine contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 45%, rgba(8, 8, 8, 0.45) 0%, rgba(8, 8, 8, 0.78) 68%, #080808 92%)',
          }}
        />
      </div>

      {/* ================= HERO CONTENT (HIGH-CONTRAST READABILITY - UNCHANGED) ================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Headline with Animated Gradient Accent on Key Phrase */}
        <TextReveal
          as="h1"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.15] mb-5 font-heading drop-shadow-sm"
          delay={0.15}
          stagger={0.05}
        >
          I Turn Raw Footage Into <br className="hidden sm:inline" />
          <motion.span
            className="inline-block bg-gradient-to-r from-amber-200 via-orange-400 to-amber-300 text-transparent bg-clip-text"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Stories Worth Watching
          </motion.span>
        </TextReveal>

        {/* Subtitle */}
        <p
          className="max-w-xl mx-auto text-xs sm:text-sm md:text-[15px] text-neutral-300 font-normal leading-relaxed mb-10 drop-shadow-sm"
          style={{ textWrap: 'balance' }}
        >
          From the first cut to the final frame, I craft every detail with purpose — creating videos that capture attention, tell your story, and keep your audience watching.
        </p>

        {/* Delicate Hairline Divider */}
        <div className="w-full max-w-lg mx-auto h-px bg-white/[0.08] mb-9" />

        {/* 3 Inline Stats with Vertical Hairline Dividers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 max-w-xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center min-w-[130px]">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums mb-1 font-heading">
              100+
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Projects Delivered
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block w-px h-7 bg-white/10" />

          {/* Stat 2 - Vibrant Orange Accent */}
          <div className="text-center min-w-[130px]">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 tracking-tight tabular-nums mb-1 font-heading drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              20+
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Global Clients
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block w-px h-7 bg-white/10" />

          {/* Stat 3 */}
          <div className="text-center min-w-[130px]">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums mb-1 font-heading">
              3+ Yrs
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Proven Experience
            </div>
          </div>
        </div>

        {/* Subtle Social Handles Quick Bar */}
      </div>
    </section>
  );
};
