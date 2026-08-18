import React from 'react';

export default function LanguageToggle({ lang, onToggle }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1.5 rounded-full border border-[#D4AF37]/50 bg-white/90 p-1 shadow-md backdrop-blur text-[12px]">
      <button
        type="button"
        onClick={() => onToggle('te')}
        className={`px-3.5 py-1.5 rounded-full font-telugu font-semibold transition-all cursor-pointer ${
          lang === 'te'
            ? 'bg-[#7B2D3B] text-white shadow-sm'
            : 'bg-[#F3E8FF] text-[#7B2D3B] border border-[#D4AF37] hover:bg-[#EBDCFD]'
        }`}
      >
        తెలుగు
      </button>
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
          lang === 'en'
            ? 'bg-[#7B2D3B] text-white shadow-sm'
            : 'bg-[#F3E8FF] text-[#7B2D3B] border border-[#D4AF37] hover:bg-[#EBDCFD]'
        }`}
      >
        English
      </button>
    </div>
  );
}
