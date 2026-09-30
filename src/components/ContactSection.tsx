import React, { useState, useEffect } from 'react';
import { MapPin, MessageSquare, Copy, Check } from 'lucide-react';

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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-3 font-heading">
            Let&apos;s Create <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-amber-500">
              Something Cinematic
            </span>
          </h2>

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
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp (+880 1581-928743)</span>
                </a>
                <a
                  href="https://t.me/FarhanAhna1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-400 hover:bg-amber-900/40 hover:border-amber-500/50 transition-all text-xs sm:text-sm font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
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
