import React from 'react';

export const InfinityHaloBackground: React.FC = () => {
  // Mathematical lemniscate path (Infinity Symbol ∞)
  // Symmetrical around (500, 250)
  const infinityPath =
    'M 500 250 C 410 110, 160 110, 160 250 C 160 390, 410 390, 500 250 C 590 110, 840 110, 840 250 C 840 390, 590 390, 500 250 Z';

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none flex items-center justify-center"
    >
      {/* ================= 1. AMBIENT CIRCULAR HALO (LEFT & RIGHT HALF ARCS) ================= */}
      {/* Left Crescent Halo Arc matching image.png */}
      <div className="absolute top-1/2 -left-20 sm:-left-32 md:-left-44 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[580px] lg:w-[680px] h-[550px] sm:h-[750px] md:h-[900px] lg:h-[1050px] rounded-full animate-halo-glow">
        {/* Soft wide diffuse amber glow */}
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 25% 50%, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.16) 42%, rgba(180, 83, 9, 0.05) 65%, transparent 78%)',
            filter: 'blur(55px)',
          }}
        />
        {/* Focused inner luminous rim arc */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 35% 50%, transparent 58%, rgba(251, 146, 60, 0.35) 68%, rgba(245, 158, 11, 0.15) 75%, transparent 82%)',
            filter: 'blur(28px)',
          }}
        />
      </div>

      {/* Right Crescent Halo Arc matching image.png */}
      <div
        className="absolute top-1/2 -right-20 sm:-right-32 md:-right-44 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[580px] lg:w-[680px] h-[550px] sm:h-[750px] md:h-[900px] lg:h-[1050px] rounded-full animate-halo-glow"
        style={{ animationDelay: '3.5s' }}
      >
        {/* Soft wide diffuse amber glow */}
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 75% 50%, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.16) 42%, rgba(180, 83, 9, 0.05) 65%, transparent 78%)',
            filter: 'blur(55px)',
          }}
        />
        {/* Focused inner luminous rim arc */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 65% 50%, transparent 58%, rgba(251, 146, 60, 0.35) 68%, rgba(245, 158, 11, 0.15) 75%, transparent 82%)',
            filter: 'blur(28px)',
          }}
        />
      </div>

      {/* Ambient center spotlight subtle fill */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[350px] sm:h-[450px] rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.06) 0%, rgba(234, 88, 12, 0.03) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ================= 2. ANIMATED INFINITY (∞) SYMBOL IN BACKGROUND ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] sm:w-[1100px] md:w-[1300px] h-[400px] sm:h-[500px] md:h-[580px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Linear Gradient for base infinity stroke */}
            <linearGradient id="infinityGlowGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#fb923c" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#fb923c" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="infinityBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* High-intensity particle glow */}
            <radialGradient id="cometGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="30%" stopColor="#fef08a" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Layer 1: Diffuse ambient blur stroke along infinity */}
          <path
            d={infinityPath}
            stroke="url(#infinityGlowGrad)"
            strokeWidth="8"
            opacity="0.25"
            filter="url(#infinityBlur)"
          />

          {/* Layer 2: Subtle continuous baseline curve */}
          <path
            d={infinityPath}
            stroke="#fb923c"
            strokeWidth="1.2"
            opacity="0.2"
          />

          {/* Layer 3: Animated flowing dashed particles stream */}
          <path
            d={infinityPath}
            stroke="url(#infinityGlowGrad)"
            strokeWidth="2.5"
            strokeDasharray="10 18"
            strokeLinecap="round"
            className="animate-infinity-flow"
            filter="drop-shadow(0 0 10px rgba(245, 158, 11, 0.75))"
          />

          {/* Layer 4: Luminous comet / orb moving endlessly along the infinity path */}
          <g>
            {/* Main Glowing Orb */}
            <circle r="6" fill="url(#cometGlow)">
              <animateMotion
                path={infinityPath}
                dur="12s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>

            {/* Trailing Soft Halo */}
            <circle r="14" fill="#f59e0b" opacity="0.35">
              <animateMotion
                path={infinityPath}
                dur="12s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>
          </g>

          {/* Layer 5: Second counter-comet with phase offset for continuous cinematic rhythm */}
          <g>
            <circle r="5" fill="url(#cometGlow)" opacity="0.85">
              <animateMotion
                path={infinityPath}
                dur="12s"
                begin="-6s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>
            <circle r="12" fill="#fb923c" opacity="0.25">
              <animateMotion
                path={infinityPath}
                dur="12s"
                begin="-6s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>
          </g>
        </svg>
      </div>
    </div>
  );
};
