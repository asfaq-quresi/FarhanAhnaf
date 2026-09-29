import React, { useState, useEffect } from 'react';
import cinematicStill from '@/src/assets/images/cinematic_grade_still_1790564806890.jpg';
import {
  Mic,
  Film,
  Smartphone,
  Flame,
  Briefcase,
  Check,
  Sliders,
  Volume2,
  Video,
  Sparkles,
  Activity
} from 'lucide-react';

export const CraftBento: React.FC = () => {
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

  // Multicam Active Cam State
  const [activeCam, setActiveCam] = useState<'A' | 'B' | 'C'>('A');

  // Audio Equalizer Active Pulse
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  return (
    <section id="craft" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Hand-tuned post-production workflows optimized for watch time, algorithmic reach, and emotional connection.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* ================= CARD 1: Core Content Formats (Wide - 7 cols) ================= */}
          <div className="lg:col-span-7 bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300">
            <div>
              {/* Top Tag */}
              <div className="flex items-center justify-end mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                  High Retention Rate
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2">
                Core Content Formats
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                Specialized video architectures built for algorithm performance and brand authority across premier digital platforms.
              </p>

              {/* 5 Formats List */}
              <div className="space-y-3.5">
                {/* 1 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/70 hover:border-neutral-700 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0 mt-0.5">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">YouTube Talking Head</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                      Authority building, thought leadership podcasts & educational breakdown cuts.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/70 hover:border-neutral-700 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0 mt-0.5">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Long-Form YouTube Videos</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                      Documentary style storytelling, visual essays, b-roll layering, and retention hooks.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/70 hover:border-neutral-700 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0 mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Instagram Reels & Shorts</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                      0.5-second thumb-stopping visual hooks, rapid transitions, and viral vertical formatting.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/70 hover:border-neutral-700 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0 mt-0.5">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Social Media Ads (Paid UGC)</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                      Direct-response ad creative, split testing hooks, dynamic CTAs for FB, TikTok & Meta.
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/70 hover:border-neutral-700 transition-colors flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">LinkedIn Executive & B2B Videos</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                      Clean aesthetic, corporate branding, professional lower thirds, and executive storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: Kinetic Captions (Right - 5 cols) ================= */}
          <div className="lg:col-span-5 bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2">
                Kinetic Captions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                Modern viral subtitles designed to lock viewer eyes onto the screen with word-by-word active highlighting, tracking icons, and animated pop-ins.
              </p>

              {/* Interactive Subtitle Box from Figma */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 mb-5 relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  PREVIEW 0:16 FRAME &quot;THE SECRET TO GOING VIRAL?&quot;
                </div>

                {/* Active Caption Render */}
                <div className="min-h-[70px] flex items-center justify-center p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/60">
                  {captionStyle === 'hormozi' ? (
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {captionWords.map((word, idx) => {
                        const isActive = idx === activeWordIdx;
                        return (
                          <span
                            key={idx}
                            className={`font-black text-base sm:text-lg uppercase tracking-tight transition-all duration-200 transform ${
                              isActive
                                ? 'text-amber-400 scale-120 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]'
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
                    <div className="flex flex-wrap items-center justify-center gap-1.5 text-sm sm:text-base font-medium">
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
                <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-neutral-900">
                  <button
                    onClick={() => setCaptionStyle('hormozi')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      captionStyle === 'hormozi'
                        ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                        : 'bg-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Alex Hormozi Style
                  </button>
                  <button
                    onClick={() => setCaptionStyle('abdaal')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      captionStyle === 'abdaal'
                        ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                        : 'bg-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Ali Abdaal Clean
                  </button>
                </div>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-2 pt-2 border-t border-neutral-800/60 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Dynamic emoji integration & kinetic emphasis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Custom brand font & color matching</span>
              </div>
            </div>
          </div>

          {/* ================= CARD 3: Color Correction & Grading (4 cols) ================= */}
          <div className="lg:col-span-4 bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2">
                Color Correction & Grading
              </h3>
              <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                Transforming washed-out flat LOG camera profiles into rich, cinematic visuals with true skin tones and stylized film looks.
              </p>

              {/* Interactive Before/After Split Preview with Real Photo */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 mb-4">
                <div
                  className="relative aspect-video sm:h-32 rounded-lg overflow-hidden border border-neutral-800 select-none cursor-ew-resize group"
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
                  <div className="absolute top-2 right-2 z-10">
                    <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider bg-black/75 px-2 py-0.5 rounded backdrop-blur-md border border-amber-500/30">
                      Cinematic Graded
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
                    <div className="absolute top-2 left-2 z-10">
                      <span className="text-[9px] font-bold text-neutral-300 uppercase tracking-wider bg-black/75 px-2 py-0.5 rounded backdrop-blur-md border border-white/20 whitespace-nowrap">
                        Flat LOG (RAW)
                      </span>
                    </div>
                  </div>

                  {/* Divider Line & Handle */}
                  <div
                    className="absolute inset-y-0 pointer-events-none z-20 flex items-center justify-center -translate-x-1/2"
                    style={{ left: `${gradeSplit}%` }}
                  >
                    <div className="w-0.5 h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <div className="absolute w-6 h-6 rounded-full bg-white text-neutral-900 border border-neutral-300 flex items-center justify-center text-[10px] font-bold shadow-lg shadow-black/80">
                      ↔
                    </div>
                  </div>
                </div>

                {/* Slider Control */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1 font-mono">
                    <span>Flat LOG (Desaturated)</span>
                    <span className="text-amber-400">Film LUT (Graded)</span>
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

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60 text-[10px] text-neutral-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">DaVinci Resolve</span>
              <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">CST Tone Mapping</span>
              <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Film Grain</span>
            </div>
          </div>

          {/* ================= CARD 4: Audio Sync & Sound Design (4 cols) ================= */}
          <div className="lg:col-span-4 bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2">
                Audio Sync & Sound Design
              </h3>
              <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                Audio is 50% of the video experience. Layering punchy sound effects, custom whooshes, risers, and crystal-clear voice EQ.
              </p>

              {/* Interactive Audio Widget */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 mb-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>L-R MASTER (32-bit Float)</span>
                  </div>
                  <span className="text-amber-400 font-semibold">-3.2 dB Peak</span>
                </div>

                {/* Animated Frequency Spectrum Bars */}
                <div className="h-16 flex items-end justify-between gap-1 px-1 py-2 bg-neutral-900/60 rounded-lg border border-neutral-800/70">
                  {[45, 60, 80, 50, 95, 70, 85, 40, 90, 65, 75, 55, 88, 62, 78, 48].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-gradient-to-t from-amber-500 via-amber-400 to-orange-400 rounded-xs transition-all duration-150"
                      style={{
                        height: isPlayingAudio
                          ? `${Math.max(15, (h + Math.sin(Date.now() / 200 + i) * 30)) % 100}%`
                          : `${h * 0.4}%`
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between mt-3 text-[10px] text-neutral-400">
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">SFX Hits</span>
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Riser Swooshes</span>
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">Voice Clarity</span>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="flex items-center justify-between pt-3 border-t border-neutral-800/60 text-[11px] text-neutral-400">
              <span>Room noise isolation</span>
              <span className="text-amber-400 font-semibold font-mono">100% De-Essed</span>
            </div>
          </div>

          {/* ================= CARD 5: Multi-Cam & VFX Animation (4 cols) ================= */}
          <div className="lg:col-span-4 bg-[#0c0c0e] border border-neutral-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2">
                Multi-Cam & VFX Animation
              </h3>
              <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                Seamless multicam interview switching, clean green-screen keying, and custom 2D/3D motion graphics to visualize abstract concepts.
              </p>

              {/* Multicam Switcher Preview */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 mb-4">
                <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                  <button
                    onClick={() => setActiveCam('A')}
                    className={`py-2 px-1 text-center rounded text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      activeCam === 'A'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/60 font-bold'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                    }`}
                  >
                    CAM A {activeCam === 'A' ? '[ACTIVE]' : ''}
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
                    CAM B {activeCam === 'B' ? '[ACTIVE]' : ''}
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
                    CAM C {activeCam === 'C' ? '[ACTIVE]' : ''}
                    <div className="text-[9px] text-neutral-400 font-normal">Wide Room</div>
                  </button>
                </div>

                <div className="p-2.5 rounded-lg bg-neutral-900/70 border border-neutral-800 text-[11px] text-neutral-300 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Green Screen Clean Extraction
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">UltraKey</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      2D Motion & UI Mockup Elements
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">After Effects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-400 pt-3 border-t border-neutral-800/60">
              Zero sync drift • Seamless multicam cut points
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
