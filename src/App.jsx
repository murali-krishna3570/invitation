import React, { useState, useEffect } from 'react';
import CoverView from './views/CoverView';
import LandingView from './views/LandingView';
import LanguageToggle from './components/LanguageToggle';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [view, setView] = useState(() => {
    return window.location.hash === '#landing' || window.location.pathname.endsWith('/landing') ? 'landing' : 'cover';
  });
  
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.hash === '#landing' || window.location.pathname.endsWith('/landing')) {
        setView('landing');
      } else {
        setView('cover');
      }
    };

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const openLanding = () => {
    window.location.hash = 'landing';
    setView('landing');
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-screen bg-cream selection:bg-gold/20 selection:text-maroon font-sans relative">
      {/* Background Music Player */}
      <AudioPlayer />

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
