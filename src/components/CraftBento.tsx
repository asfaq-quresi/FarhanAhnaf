import React, { useState, useEffect, useRef } from 'react';
import cinematicStill from '@/src/assets/images/cinematic_grade_still_1790564806890.jpg';
import {
  Mic,
  Film,
  Smartphone,
  Flame,
  Check,
  Sparkles,
  Sliders,
  Volume2,
  Video,
  Activity,
  Layers,
  Radio,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from 'motion/react';
import { useSmoothScroll } from '../context/SmoothScrollContext';

// ================= HORIZONTAL TICKER TRACK COMPONENT =================
export interface CraftTickerHandle {
  nudgeLeft: () => void;
  nudgeRight: () => void;
}

interface CraftTickerTrackProps {
  children: (instanceId: number) => React.ReactNode;
  direction?: 'left' | 'right';
  baseSpeed?: number;
}

const CraftTickerTrack = React.forwardRef<CraftTickerHandle, CraftTickerTrackProps>(({
  children,
  direction = 'left',
  baseSpeed = 1.25,
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const { lenis } = useSmoothScroll();

  // Monitor window scroll velocity
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

  // Manual interactive offset for controller arrows (12.5% shifts exactly 1 card in a 4-card set)
  const manualOffsetTarget = useRef<number>(0);
  const manualOffsetCurrent = useRef<number>(0);

  const nudgeLeft = () => {
    manualOffsetTarget.current += 12.5;
  };

  const nudgeRight = () => {
    manualOffsetTarget.current -= 12.5;
  };

  React.useImperativeHandle(ref, () => ({
    nudgeLeft,
    nudgeRight,
  }));

  // Hook into Lenis scroll direction
  useEffect(() => {
    if (!lenis) return;
    const handleScroll = (e: { direction: number }) => {
      if (e.direction === 1) {
        targetDirection.current = 1; // Scroll down -> default direction
      } else if (e.direction === -1) {
        targetDirection.current = -1; // Scroll up -> reverse direction
      }
    };
    lenis.on('scroll', handleScroll);
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  useAnimationFrame((_, delta) => {
    const clampedDelta = Math.min(delta, 64);

    // Detect scroll direction directly from velocity as well
    const vel = smoothVelocity.get();
    if (vel > 12) {
      targetDirection.current = 1; // Scrolling DOWN -> default direction
    } else if (vel < -12) {
      targetDirection.current = -1; // Scrolling UP -> reverse direction
    }

    // Smooth inertia interpolation for direction flip
    currentDirection.current += (targetDirection.current - currentDirection.current) * 0.08;

    const velocityMagnitude = Math.abs(vel);
    // Smoothly drops to 0 when hovered so user can interact with the cards!
    const targetMultiplier = isHovered ? 0 : 1 + Math.min(velocityMagnitude / 140, 7);
    currentMultiplier.current += (targetMultiplier - currentMultiplier.current) * 0.12;

    // Smooth manual offset interpolation for arrow controllers
    const offsetDiff = manualOffsetTarget.current - manualOffsetCurrent.current;
    const manualStep = offsetDiff * 0.14;
    manualOffsetCurrent.current += manualStep;

    if (currentMultiplier.current < 0.001 && Math.abs(offsetDiff) < 0.001) return;

    const defaultDirFactor = direction === 'left' ? -1 : 1;
    const effectiveDir = defaultDirFactor * currentDirection.current;

    const moveBy = (clampedDelta / 1000) * baseSpeed * currentMultiplier.current * effectiveDir;
    const newX = baseX.get() + moveBy + manualStep;

    // Wrap seamlessly between -50% and 0%
    const min = -50;
    const max = 0;
    const range = max - min;
    const wrapped = ((((newX - min) % range) + range) % range) + min;

    baseX.set(wrapped);
  });

  const xTransform = useTransform(baseX, (v) => `${v}%`);

  return (
    <div
      className="relative w-full overflow-hidden py-3 select-none group/track"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edge Gradients for seamless bleed */}
      <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Motion Track */}
      <motion.div
        className="flex gap-4 sm:gap-5 w-max will-change-transform"
        style={{ x: xTransform }}
      >
        {/* Render 2 sets for seamless -50% to 0% wrap */}
        <div className="flex gap-4 sm:gap-5 shrink-0">
          {children(0)}
        </div>
        <div className="flex gap-4 sm:gap-5 shrink-0">
          {children(1)}
        </div>
      </motion.div>
    </div>
  );
});

CraftTickerTrack.displayName = 'CraftTickerTrack';

export const CraftBento: React.FC = () => {
  // Ticker Controller Refs
  const whatIEditRef = useRef<CraftTickerHandle>(null);
  const technicalRef = useRef<CraftTickerHandle>(null);

  // Kinetic Captions Style State
  const [captionStyle, setCaptionStyle] = useState<'hormozi' | 'abdaal'>('hormozi');
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  // Caption words animation
  const captionWords = ['NEVER', 'LET', 'THEM', 'SCROLL', 'AWAY', '🔥'];
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % captionWords.length);
    }, 450);
    return () => clearInterval(timer);
  }, [captionWords.length]);

  // Color Grading Slider State (0 to 100%)
  const [gradeSplit, setGradeSplit] = useState(65);

  // Multicam Active Cam State (Host Tight / Guest Angle / Wide Studio)
  const [activeCam, setActiveCam] = useState<'A' | 'B' | 'C'>('A');

  // Audio Equalizer Active Pulse
  const [spectrumPulse, setSpectrumPulse] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSpectrumPulse((prev) => (prev + 1) % 100);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="craft" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-amber-500/5 blur-[150px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery & Pacing Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-heading">
            Craftsmanship That Retains Viewers
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1.5">
            Hand-tuned post-production workflows optimized for watch time, algorithmic reach, and emotional connection. Hover any card to pause and interact.
          </p>
        </div>

        {/* ================= TRACK 1: CORE CONTENT FORMATS ================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5 px-4 sm:px-0">
            <div className="flex items-center gap-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
                What I Edit
              </h3>
              <span className="text-xs text-neutral-400 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
                Content Formats & Video Architectures
              </span>
            </div>

            {/* Controller: Forward & Backward Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => whatIEditRef.current?.nudgeLeft()}
                aria-label="Previous format"
                title="Scroll backward"
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => whatIEditRef.current?.nudgeRight()}
                aria-label="Next format"
                title="Scroll forward"
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <CraftTickerTrack ref={whatIEditRef} direction="left" baseSpeed={1.35}>
            {(id) => (
              <>
                {/* 1. Long-Form YouTube Videos */}
                <div
                  key={`long-form-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Film className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Narrative Architecture
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      Long-Form YouTube Videos
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      Documentary style storytelling, visual essays, strategic b-roll layering, and retention hooks designed for deep viewer immersion.
                    </p>

                    {/* Timeline Preview Widget */}
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-850 space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span>TIMELINE RETENTION PROFILE</span>
                        <span className="text-emerald-400 font-bold">88% Avg Completion</span>
                      </div>

                      {/* Mockup Timeline Tracks */}
                      <div className="space-y-1.5 font-mono text-[9px]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-10 text-neutral-500 text-right">V2 B-Roll</span>
                          <div className="flex-1 h-3 rounded bg-amber-500/20 border border-amber-500/40 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-1/4 w-1/3 bg-amber-500/40" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-10 text-neutral-500 text-right">V1 A-Roll</span>
                          <div className="flex-1 h-3 rounded bg-neutral-800 border border-neutral-700 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-full bg-neutral-700/60" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-10 text-neutral-500 text-right">A1 Foley</span>
                          <div className="flex-1 h-3 rounded bg-orange-500/20 border border-orange-500/30" />
                        </div>
                      </div>

                      <div className="pt-1 flex items-center justify-between text-[10px] text-neutral-400 border-t border-neutral-800">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-emerald-400" /> High Watch Time
                        </span>
                        <span className="text-neutral-500">1080p / 4K Masters</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Visual Essays</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">B-Roll Layering</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Pacing Hooks</span>
                  </div>
                </div>

                {/* 2. Instagram Reels & Shorts */}
                <div
                  key={`reels-shorts-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                        Viral Pacing
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      Instagram Reels & Shorts
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      0.5-second thumb-stopping visual hooks, rapid transitions, speed ramps, and high-energy vertical 9:16 formatting.
                    </p>

                    {/* Vertical Pacing Widget */}
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-850">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                        <span>0:00 - 0:02 HOOK TIMING</span>
                        <span className="text-amber-400 font-bold">92% Retention Target</span>
                      </div>

                      <div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-around px-3 text-center">
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-bold text-amber-400">0.5s Hook</div>
                          <div className="text-[9px] text-neutral-400">Scroll Stopper</div>
                        </div>
                        <div className="w-px h-8 bg-neutral-800" />
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-bold text-white">Dynamic Ramps</div>
                          <div className="text-[9px] text-neutral-400">Audio Sync</div>
                        </div>
                        <div className="w-px h-8 bg-neutral-800" />
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-bold text-emerald-400">Call-To-Action</div>
                          <div className="text-[9px] text-neutral-400">Loop Ending</div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] text-neutral-400">
                        <span>Optimized for TikTok, Reels & YT Shorts</span>
                        <span className="text-amber-400 font-mono">9:16 Vertical</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">0.5s Hook</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Speed Ramps</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Sound Foley</span>
                  </div>
                </div>

                {/* 3. YouTube Talking Head */}
                <div
                  key={`talking-head-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Mic className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Authority & Clarity
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      YouTube Talking Head & Podcasts
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      Authority building, thought leadership podcasts & educational breakdown cuts with dead-air elimination and conversational rhythm.
                    </p>

                    {/* Dialogue Optimization Widget */}
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-850 space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span>DIALOGUE RHYTHM METRICS</span>
                        <span className="text-emerald-400 font-bold">100% Tight Pacing</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                          <div className="text-xs font-bold text-white">Dead-Air Cut</div>
                          <div className="text-[9px] text-neutral-400 mt-0.5">Zero filler pauses</div>
                        </div>
                        <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                          <div className="text-xs font-bold text-amber-400">Punch Zoom</div>
                          <div className="text-[9px] text-neutral-400 mt-0.5">Emphasis framing</div>
                        </div>
                      </div>

                      <div className="text-[10px] text-neutral-400 flex items-center justify-between pt-1 border-t border-neutral-800">
                        <span>Lower Thirds & Screen Graphics</span>
                        <span className="text-neutral-300">Clean Aesthetic</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Dead-Air Elimination</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Punch Zooms</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Lower Thirds</span>
                  </div>
                </div>

                {/* 4. Social Media Ads (Paid UGC) */}
                <div
                  key={`social-ads-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Flame className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/30">
                        High Conversion
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      Social Media Ads (Paid UGC)
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      Direct-response ad creative, split testing hooks, and dynamic CTAs designed for Meta, TikTok & YouTube Ads.
                    </p>

                    {/* Ad Performance Widget */}
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-850 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span>SPLIT-TESTING FRAMEWORK</span>
                        <span className="text-amber-400 font-bold">High CTR</span>
                      </div>

                      <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
                        <span className="text-white font-medium">Hook Variant A (Pattern Interrupt)</span>
                        <span className="text-emerald-400 font-mono text-[10px] font-bold">Primary</span>
                      </div>
                      <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
                        <span className="text-neutral-400">Hook Variant B (Social Proof)</span>
                        <span className="text-neutral-400 font-mono text-[10px]">Variant</span>
                      </div>

                      <div className="text-[10px] text-neutral-400 pt-1 flex justify-between border-t border-neutral-800">
                        <span>Direct Call-to-Action Focus</span>
                        <span className="text-amber-400">ROAS Driven</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Direct-Response</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Split-Testing</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">High CTR</span>
                  </div>
                </div>
              </>
            )}
          </CraftTickerTrack>
        </div>

        {/* ================= TRACK 2: TECHNICAL POST-PRODUCTION ================= */}
        <div>
          <div className="flex items-center justify-between mb-5 px-4 sm:px-0">
            <div className="flex items-center gap-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
                Technical Craftsmanship
              </h3>
              <span className="text-xs text-neutral-400 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
                Interactive Editing Disciplines
              </span>
            </div>

            {/* Controller: Forward & Backward Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => technicalRef.current?.nudgeLeft()}
                aria-label="Previous discipline"
                title="Scroll backward"
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => technicalRef.current?.nudgeRight()}
                aria-label="Next discipline"
                title="Scroll forward"
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <CraftTickerTrack ref={technicalRef} direction="right" baseSpeed={1.2}>
            {(id) => (
              <>
                {/* 1. Color Correction & Grading */}
                <div
                  key={`color-grade-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Color Science
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      Color Correction & Grading
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                      Transforming washed-out flat LOG camera profiles into rich, cinematic visuals with true skin tones and stylized film looks.
                    </p>

                    {/* Interactive Before/After Split Preview with Real Photo */}
                    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 mb-3">
                      <div
                        className="relative aspect-video h-26 sm:h-28 rounded-lg overflow-hidden border border-neutral-800 select-none cursor-ew-resize group"
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const clickX = e.clientX - rect.left;
                          const pct = Math.max(10, Math.min(90, Math.round((clickX / rect.width) * 100)));
                          setGradeSplit(pct);
                        }}
                        onMouseMove={(e) => {
                          if (e.buttons === 1) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const moveX = e.clientX - rect.left;
                            const pct = Math.max(10, Math.min(90, Math.round((moveX / rect.width) * 100)));
                            setGradeSplit(pct);
                          }
                        }}
                      >
                        {/* Layer 1: Base Graded Cinematic Image (Right Side / Full) */}
                        <img
                          src={cinematicStill}
                          alt="Cinematic Color Graded Still"
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          style={{
                            filter: 'contrast(1.18) saturate(1.28) brightness(0.98)',
                          }}
                        />
                        <div className="absolute top-1.5 right-1.5 z-10">
                          <span className="text-[8px] font-bold text-amber-300 uppercase tracking-wider bg-black/75 px-1.5 py-0.5 rounded backdrop-blur-md border border-amber-500/30">
                            Graded
                          </span>
                        </div>

                        {/* Layer 2: Flat LOG / RAW Image with pixel-perfect clipPath */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            clipPath: `inset(0 ${100 - gradeSplit}% 0 0)`,
                          }}
                        >
                          <img
                            src={cinematicStill}
                            alt="Flat LOG RAW Footage Still"
                            className="w-full h-full object-cover"
                            style={{
                              filter: 'saturate(0.28) contrast(0.68) brightness(1.22)',
                            }}
                          />
                          <div className="absolute top-1.5 left-1.5 z-10">
                            <span className="text-[8px] font-bold text-neutral-300 uppercase tracking-wider bg-black/75 px-1.5 py-0.5 rounded backdrop-blur-md border border-white/20 whitespace-nowrap">
                              Flat LOG
                            </span>
                          </div>
                        </div>

                        {/* Divider Line & Handle */}
                        <div
                          className="absolute inset-y-0 pointer-events-none z-20 flex items-center justify-center -translate-x-1/2"
                          style={{ left: `${gradeSplit}%` }}
                        >
                          <div className="w-0.5 h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                          <div className="absolute w-5 h-5 rounded-full bg-white text-neutral-900 border border-neutral-300 flex items-center justify-center text-[9px] font-bold shadow-lg shadow-black/80">
                            ↔
                          </div>
                        </div>
                      </div>

                      {/* Slider Control */}
                      <div className="mt-2.5">
                        <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-1 font-mono">
                          <span>Flat LOG</span>
                          <span className="text-amber-400">Film LUT Graded</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="90"
                          value={gradeSplit}
                          onChange={(e) => setGradeSplit(Number(e.target.value))}
                          className="w-full accent-amber-500 cursor-pointer h-1.5 bg-neutral-800 rounded-lg appearance-none"
                          aria-label="Color grade comparison slider"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">DaVinci Resolve</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">CST Tone Mapping</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Film Grain</span>
                  </div>
                </div>

                {/* 2. Kinetic Captions */}
                <div
                  key={`kinetic-captions-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Viral Subtitles
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      Kinetic Captions
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                      Modern viral subtitles designed to lock viewer eyes onto the screen with word-by-word active highlighting and tracking pop-ins.
                    </p>

                    {/* Interactive Subtitle Box */}
                    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 mb-3 relative overflow-hidden">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                        PREVIEW FRAME &quot;THE SECRET TO GOING VIRAL?&quot;
                      </div>

                      <div className="min-h-[58px] flex items-center justify-center p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/60">
                        {captionStyle === 'hormozi' ? (
                          <div className="flex flex-wrap items-center justify-center gap-1.5">
                            {captionWords.map((word, idx) => {
                              const isActive = idx === activeWordIdx;
                              return (
                                <span
                                  key={idx}
                                  className={`font-black text-sm sm:text-base uppercase tracking-tight transition-all duration-200 transform ${
                                    isActive
                                      ? 'text-amber-400 scale-115 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                                      : 'text-white scale-100'
                                  }`}
                                  style={{ WebkitTextStroke: isActive ? '1px #000' : 'none' }}
                                >
                                  {word}
                                </span>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm font-medium">
                            {captionWords.map((word, idx) => {
                              const isActive = idx === activeWordIdx;
                              return (
                                <span
                                  key={idx}
                                  className={`px-1 rounded transition-colors duration-150 ${
                                    isActive
                                      ? 'bg-amber-400 text-neutral-950 font-bold'
                                      : 'text-neutral-300'
                                  }`}
                                >
                                  {word}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Style Switcher */}
                      <div className="flex items-center justify-center gap-2 mt-3 pt-2.5 border-t border-neutral-900">
                        <button
                          onClick={() => setCaptionStyle('hormozi')}
                          className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-all cursor-pointer ${
                            captionStyle === 'hormozi'
                              ? 'bg-amber-500 text-neutral-950 shadow-sm'
                              : 'bg-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          Alex Hormozi Style
                        </button>
                        <button
                          onClick={() => setCaptionStyle('abdaal')}
                          className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-all cursor-pointer ${
                            captionStyle === 'abdaal'
                              ? 'bg-amber-500 text-neutral-950 shadow-sm'
                              : 'bg-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          Ali Abdaal Clean
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Word-by-Word</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Emoji Pop-ins</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Brand Fonts</span>
                  </div>
                </div>

                {/* 3. Multi-Cam Editing (VFX Removed - Multicam Only!) */}
                <div
                  key={`multi-cam-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Video className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Studio Multicam
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      Multi-Cam Editing
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                      Seamless multi-camera interview switching, perfect angle transitions, and zero audio drift across podcast and studio setups.
                    </p>

                    {/* Multicam Switcher Preview Widget */}
                    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 mb-3">
                      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                        <button
                          onClick={() => setActiveCam('A')}
                          className={`py-2 px-1 text-center rounded text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            activeCam === 'A'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/60 font-bold'
                              : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                          }`}
                        >
                          CAM A {activeCam === 'A' ? '[REC]' : ''}
                          <div className="text-[9px] text-neutral-400 font-normal">Host Tight</div>
                        </button>

                        <button
                          onClick={() => setActiveCam('B')}
                          className={`py-2 px-1 text-center rounded text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            activeCam === 'B'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/60 font-bold'
                              : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                          }`}
                        >
                          CAM B {activeCam === 'B' ? '[REC]' : ''}
                          <div className="text-[9px] text-neutral-400 font-normal">Guest Angle</div>
                        </button>

                        <button
                          onClick={() => setActiveCam('C')}
                          className={`py-2 px-1 text-center rounded text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            activeCam === 'C'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/60 font-bold'
                              : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                          }`}
                        >
                          CAM C {activeCam === 'C' ? '[REC]' : ''}
                          <div className="text-[9px] text-neutral-400 font-normal">Wide Room</div>
                        </button>
                      </div>

                      {/* Active Angle Monitor Status */}
                      <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-[11px] space-y-1.5 font-mono">
                        <div className="flex items-center justify-between text-neutral-300">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {activeCam === 'A' ? 'CAM A: Host Close-Up' : activeCam === 'B' ? 'CAM B: Guest Two-Shot' : 'CAM C: Wide Studio View'}
                          </span>
                          <span className="text-[10px] text-amber-400">TC 01:14:22:08</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-neutral-800/80">
                          <span>Multi-Track Sync</span>
                          <span className="text-emerald-400 font-semibold">Locked</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Zero Sync Drift</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Cut-on-Action</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">3+ Camera Angles</span>
                  </div>
                </div>

                {/* 4. Audio Sync & Sound Design */}
                <div
                  key={`audio-sync-${id}`}
                  className="w-[340px] sm:w-[390px] md:w-[410px] h-[450px] flex-none bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0">
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Audio Mastering
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                      Audio Sync & Sound Design
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                      Layering punchy sound effects, custom whooshes, risers, and crystal-clear voice EQ for 50% of the emotional experience.
                    </p>

                    {/* Interactive Audio Widget */}
                    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 mb-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>L-R MASTER (32-bit Float)</span>
                        </div>
                        <span className="text-amber-400 font-semibold">-3.2 dB Peak</span>
                      </div>

                      {/* Animated Frequency Spectrum Bars */}
                      <div className="h-14 flex items-end justify-between gap-1 px-1 py-1.5 bg-neutral-900/60 rounded-lg border border-neutral-800/70">
                        {[45, 60, 80, 50, 95, 70, 85, 40, 90, 65, 75, 55, 88, 62, 78, 48].map((h, i) => (
                          <div
                            key={i}
                            className="w-full bg-gradient-to-t from-amber-500 via-amber-400 to-orange-400 rounded-xs transition-all duration-150"
                            style={{
                              height: `${Math.max(18, (h + Math.sin(spectrumPulse + i) * 28)) % 100}%`
                            }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-2.5 text-[9px] text-neutral-400 font-mono">
                        <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">SFX Hits</span>
                        <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">Risers</span>
                        <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">Voice Clarity</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Room Noise Isolation</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">100% De-Essed</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Stereo Polish</span>
                  </div>
                </div>
              </>
            )}
          </CraftTickerTrack>
        </div>
      </div>
    </section>
  );
};
