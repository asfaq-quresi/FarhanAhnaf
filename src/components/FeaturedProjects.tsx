import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from 'motion/react';
import { Play, Sparkles } from 'lucide-react';
import {
  SHORT_FORM_PROJECTS,
  LONG_FORM_PROJECTS,
  ProjectItem,
} from '../data/portfolioData';
import { useSmoothScroll } from '../context/SmoothScrollContext';

interface VelocityTickerTrackProps {
  items: ProjectItem[];
  direction?: 'left' | 'right';
  baseSpeed?: number; // % per second
  aspectRatio: '9:16' | '16:9';
  cardWidthClass: string;
  onSelectProject: (project: ProjectItem) => void;
}

const VelocityTickerTrack: React.FC<VelocityTickerTrackProps> = ({
  items,
  direction = 'left',
  baseSpeed = 1.4,
  aspectRatio,
  cardWidthClass,
  onSelectProject,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const { lenis } = useSmoothScroll();

  // Monitor window scroll velocity with smooth spring physics
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 300,
  });

  // 1 = default direction (scroll down), -1 = reversed direction (scroll up)
  const targetDirection = useRef<number>(1);
  const currentDirection = useRef<number>(1);
  const currentMultiplier = useRef<number>(1);

  // Hook into Lenis scroll direction for precise gesture tracking
  useEffect(() => {
    if (!lenis) return;
    const handleScroll = (e: { direction: number }) => {
      if (e.direction === 1) {
        targetDirection.current = 1; // Scroll DOWN -> animate default direction
      } else if (e.direction === -1) {
        targetDirection.current = -1; // Scroll UP -> reverse direction
      }
    };
    lenis.on('scroll', handleScroll);
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  useAnimationFrame((_, delta) => {
    // Avoid huge jump on background tab refocus
    const clampedDelta = Math.min(delta, 64);

    // Also detect scroll direction directly from velocity
    const vel = smoothVelocity.get();
    if (vel > 12) {
      targetDirection.current = 1; // Scrolling DOWN -> default direction
    } else if (vel < -12) {
      targetDirection.current = -1; // Scrolling UP -> reverse direction
    }

    // Smooth physics transition for direction reversal (inertia deceleration & flip)
    currentDirection.current += (targetDirection.current - currentDirection.current) * 0.08;

    // Calculate scroll velocity magnitude
    const velocityMagnitude = Math.abs(vel);

    // Target multiplier: 1x baseline up to ~8x accelerated speed when scrolling fast
    // Smoothly drops to 0 when hovered so user can inspect and click easily
    const targetMultiplier = isHovered ? 0 : 1 + Math.min(velocityMagnitude / 140, 7);

    // Smooth inertia interpolation (lerp)
    currentMultiplier.current += (targetMultiplier - currentMultiplier.current) * 0.12;

    if (currentMultiplier.current < 0.001) return;

    // Base direction factor: 'left' -> -1, 'right' -> +1
    const defaultDirFactor = direction === 'left' ? -1 : 1;
    // Multiplied by currentDirection: flips when scrolling up!
    const effectiveDir = defaultDirFactor * currentDirection.current;

    const moveBy = (clampedDelta / 1000) * baseSpeed * currentMultiplier.current * effectiveDir;

    const newX = baseX.get() + moveBy;

    // Wrap seamlessly between -50% and 0%
    const min = -50;
    const max = 0;
    const range = max - min;
    const wrapped = ((((newX - min) % range) + range) % range) + min;

    baseX.set(wrapped);
  });

  const xTransform = useTransform(baseX, (v) => `${v}%`);
  // Quadruple items to ensure endless seamless buffer on any screen width
  const quadrupledItems = [...items, ...items, ...items, ...items];
  const isVertical = aspectRatio === '9:16';

  return (
    <div
      className="relative w-full overflow-hidden py-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Edge Gradient Fade */}
      <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      {/* Right Edge Gradient Fade */}
      <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* GPU Accelerated Motion Track */}
      <motion.div
        className="flex gap-4 sm:gap-5 w-max will-change-transform"
        style={{ x: xTransform }}
      >
        {quadrupledItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onClick={() => onSelectProject(item)}
            className={`group relative flex-none ${cardWidthClass} ${
              isVertical ? 'aspect-[9/16]' : 'aspect-video'
            } rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/70 cursor-pointer select-none`}
          >
            {/* Thumbnail Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              loading="lazy"
            />

            {/* Subtle Scrim Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />

            {/* Centered Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-115 group-hover:bg-amber-500 group-hover:border-amber-400">
                <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase & Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-heading">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Get a glimpse of my craftsmanship — continuous stream of high-retention video edits. Scrolls dynamically with page velocity and direction.
          </p>
        </div>

        {/* ================= 1. SHORT FORM TICKER ================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
              Short Form
            </h3>
            <span className="text-xs text-neutral-400 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
              Reels · TikTok · Shorts
            </span>
          </div>

          <VelocityTickerTrack
            items={SHORT_FORM_PROJECTS}
            direction="left"
            baseSpeed={1.42}
            aspectRatio="9:16"
            cardWidthClass="w-[200px] sm:w-[230px] md:w-[250px]"
            onSelectProject={onSelectProject}
          />
        </div>

        {/* ================= 2. LONG FORM TICKER ================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
              Long Form
            </h3>
            <span className="text-xs text-neutral-400 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
              YouTube · Documentaries · Masterclasses
            </span>
          </div>

          <VelocityTickerTrack
            items={LONG_FORM_PROJECTS}
            direction="right"
            baseSpeed={1.15}
            aspectRatio="16:9"
            cardWidthClass="w-[280px] sm:w-[340px] md:w-[380px]"
            onSelectProject={onSelectProject}
          />
        </div>
      </div>
    </section>
  );
};
