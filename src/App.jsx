import React, { useState, useEffect } from 'react';
import CoverView from './views/CoverView';
import LandingView from './views/LandingView';
import RitualsView from './views/RitualsView';
import LanguageToggle from './components/LanguageToggle';
import Navigation from './components/Navigation';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [view, setView] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#rituals') return 'rituals';
    if (hash === '#landing' || window.location.pathname.endsWith('/landing')) return 'landing';
    return 'cover';
  });
  
  const [lang, setLang] = useState('te');

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#rituals') {
        setView('rituals');
      } else if (hash === '#landing' || window.location.pathname.endsWith('/landing')) {
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

  const changeView = (newView) => {
    window.location.hash = newView;
    setView(newView);
    window.scrollTo(0, 0);
  };

  const openLanding = () => {
    changeView('landing');
  };

  return (
    <div className="w-full min-h-screen bg-cream selection:bg-gold/20 selection:text-maroon font-sans relative">
      {/* Background Music Player */}
      <AudioPlayer />

      {/* Persistent Bilingual Toggle Button */}
      <LanguageToggle lang={lang} onToggle={setLang} />

      {/* Main Views */}
      {view === 'cover' && <CoverView onOpen={openLanding} lang={lang} />}
      {view === 'landing' && <LandingView lang={lang} onViewChange={changeView} />}
      {view === 'rituals' && <RitualsView lang={lang} />}

      {/* View Switcher Navigation Bar (visible on landing and rituals pages) */}
      <Navigation activeView={view} onViewChange={changeView} lang={lang} />
    </div>
  );
}
