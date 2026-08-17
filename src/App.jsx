import React, { useState, useEffect } from 'react';
import CoverView from './views/CoverView';
import LandingView from './views/LandingView';
import LanguageToggle from './components/LanguageToggle';

export default function App() {
  const [view, setView] = useState(() => {
    return window.location.pathname === '/landing' ? 'landing' : 'cover';
  });
  
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const handlePopState = () => {
      setView(window.location.pathname === '/landing' ? 'landing' : 'cover');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openLanding = () => {
    window.history.pushState(null, '', '/landing');
    setView('landing');
  };

  return (
    <div className="w-full min-h-screen bg-cream selection:bg-gold/20 selection:text-maroon font-sans relative">
      {/* Persistent Bilingual Toggle Button */}
      <LanguageToggle lang={lang} onToggle={setLang} />

      {view === 'cover' ? (
        <CoverView onOpen={openLanding} lang={lang} />
      ) : (
        <LandingView lang={lang} />
      )}
    </div>
  );
}
