import React from 'react';

export default function LanguageToggle({ lang, onToggle }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center rounded-full border border-gold/50 bg-white/90 p-1 shadow-md backdrop-blur text-[12px]">
      <button
        type="button"
        onClick={() => onToggle('te')}
        className={`px-3 py-1 rounded-full font-telugu font-semibold transition-all cursor-pointer ${
          lang === 'te'
            ? 'bg-maroon text-white shadow-sm'
            : 'text-maroon hover:bg-gold/15'
        }`}
      >
        తెలుగు
      </button>
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
          lang === 'en'
            ? 'bg-maroon text-white shadow-sm'
            : 'text-maroon hover:bg-gold/15'
        }`}
      >
        English
      </button>
    </div>
  );
}
