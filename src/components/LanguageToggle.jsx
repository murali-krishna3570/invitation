import React from 'react';

export default function LanguageToggle({ lang, onToggle }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center rounded-full border border-gold/40 bg-cream/95 p-1 shadow-md backdrop-blur text-[12px]">
      <button
        type="button"
        onClick={() => onToggle('te')}
        className={`px-3 py-1 rounded-full font-telugu font-semibold transition-colors cursor-pointer ${
          lang === 'te'
            ? 'bg-maroon text-primary-foreground shadow-sm'
            : 'text-cocoa hover:text-maroon'
        }`}
      >
        తెలుగు
      </button>
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
          lang === 'en'
            ? 'bg-maroon text-primary-foreground shadow-sm'
            : 'text-cocoa hover:text-maroon'
        }`}
      >
        English
      </button>
    </div>
  );
}
