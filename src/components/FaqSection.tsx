import React, { useState } from 'react';
import { Plus, Minus, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

interface FaqSectionProps {
  onBookCall: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onBookCall }) => {
  // Default expanded item index is 2 ("How is payment handled?") exactly as shown in Figma
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Book Call CTA Box */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading">
              Questions?
            </h2>

            {/* CTA Box from Figma */}
            <div className="bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-2xl">
              {/* Warm gradient accent backdrop */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* 3 Circular Avatars representing collaborative creator puzzle */}
              <div className="flex items-center -space-x-3 mb-4">
                <div className="w-11 h-11 rounded-full border-2 border-neutral-900 overflow-hidden bg-amber-500/20 flex items-center justify-center text-sm font-bold text-amber-300">
                  <span className="text-lg">🧑‍💻</span>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-neutral-900 overflow-hidden bg-rose-500/20 flex items-center justify-center text-sm font-bold text-rose-300">
                  <span className="text-lg">🎬</span>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-neutral-900 overflow-hidden bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-300">
                  <span className="text-lg">🎙️</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 font-heading">
                Find your missing puzzle piece
              </h3>

              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>BOOK A CALL</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-neutral-900/70 border-amber-500/30'
                      : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-white pr-4 font-heading">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-neutral-900 text-neutral-400'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
