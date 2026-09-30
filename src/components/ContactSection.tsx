import React, { useState, useEffect } from 'react';
import { MapPin, Copy, Check } from 'lucide-react';
import { TextReveal } from './TextReveal';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.5 0-2.97-.4-4.26-1.16l-.31-.18-3.16.83.84-3.08-.2-.32a8.21 8.21 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.19-.47-.31z" />
  </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Time in Dhaka (GMT+6)
  useEffect(() => {
    const updateDhakaTime = () => {
      try {
        const now = new Date();
        const dhakaTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTime(dhakaTime);
      } catch {
        setCurrentTime('GMT+6 Active');
      }
    };
    updateDhakaTime();
    const interval = setInterval(updateDhakaTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('farhanframes@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b0b0d] border border-neutral-800 rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle amber gradient ambient glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-xs font-medium text-emerald-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for new projects</span>
          </div>

          {/* Heading */}
          <TextReveal
            as="h2"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-3 font-heading"
            delay={0.1}
            stagger={0.05}
          >
            Let&apos;s Create <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-amber-500">
              Something Cinematic
            </span>
          </TextReveal>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
            Ready to elevate your content? Drop your project specs or reach out directly. I typically respond within 1 hour during active working hours.
          </p>

          {/* Contact Details Card Table */}
          <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950/60 divide-y divide-neutral-800/80">
            {/* Row 1: Direct Email */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-900/40 transition-colors">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                DIRECT EMAIL
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:farhanframes@gmail.com"
                  className="text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors font-mono"
                >
                  farhanframes@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Row 2: Location / Timezone */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-900/40 transition-colors">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                LOCATION / TIMEZONE
              </span>
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-neutral-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dhaka, Bangladesh (GMT+6)</span>
                {currentTime && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                    {currentTime}
                  </span>
                )}
              </div>
            </div>

            {/* Row 3: Direct Chat & Messaging */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-900/40 transition-colors">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                INSTANT MESSAGING
              </span>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a
                  href="https://wa.me/8801581928743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40 hover:border-emerald-500/50 transition-all font-mono text-xs sm:text-sm font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp (+880 1581-928743)</span>
                </a>
                <a
                  href="https://t.me/FarhanAhna1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-400 hover:bg-sky-900/40 hover:border-sky-500/50 transition-all text-xs sm:text-sm font-semibold"
                >
                  <TelegramIcon className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Telegram (@FarhanAhna1)</span>
                </a>
              </div>
            </div>

            {/* Row 4: Social Channels & Handles */}
          </div>
        </div>
      </div>
    </section>
  );
};
