import React from 'react';

export default function Navigation({ activeView, onViewChange, lang }) {
  const isTelugu = lang === 'te';

  if (activeView === 'cover') return null;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-gold/50 bg-white/90 p-1.5 shadow-[0_4px_20px_rgba(122,28,41,0.12)] backdrop-blur text-[12px] font-telugu max-w-[92vw]">
      <button
        type="button"
        onClick={() => onViewChange('landing')}
        className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
          activeView === 'landing'
            ? 'bg-maroon text-primary-foreground shadow-md scale-105'
            : 'text-cocoa hover:text-maroon'
        }`}
      >
        <span>💌</span>
        <span>{isTelugu ? 'ఆహ్వాన పత్రిక' : 'Invitation'}</span>
      </button>

      <button
        type="button"
        onClick={() => onViewChange('rituals')}
        className={`px-3 py-2 rounded-full font-semibold transition-all cursor-pointer flex items-center gap-1 text-[11.5px] ${
          activeView === 'rituals'
            ? 'bg-maroon text-primary-foreground shadow-md scale-105'
            : 'text-cocoa hover:text-maroon'
        }`}
      >
        <span>🪔</span>
        <span>{isTelugu ? 'పూజా క్రమం' : 'Rituals'}</span>
      </button>

      <button
        type="button"
        onClick={() => onViewChange('menu')}
        className={`px-3 py-2 rounded-full font-semibold transition-all cursor-pointer flex items-center gap-1 text-[11.5px] ${
          activeView === 'menu'
            ? 'bg-maroon text-primary-foreground shadow-md scale-105'
            : 'text-cocoa hover:text-maroon'
        }`}
      >
        <span>🍽️</span>
        <span>{isTelugu ? 'విందు వంటకాలు' : 'Menu'}</span>
      </button>
    </nav>
  );
}
