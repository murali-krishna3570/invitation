import React, { useRef, useState, useEffect } from 'react';

export default function AudioPlayer({ src = "/assets/invitation.mp3" }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;

    // Attempt auto play
    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));

    // Fallback: start audio on user's first pointer interaction
    const handleFirstUserInteraction = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    window.addEventListener('pointerdown', handleFirstUserInteraction, { once: true });
    return () => window.removeEventListener('pointerdown', handleFirstUserInteraction);
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream/90 text-maroon shadow-lg backdrop-blur transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="3" y="2" width="3.5" height="12" rx="1" />
            <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 2.5v11l9-5.5-9-5.5z" />
          </svg>
        )}
      </button>
    </>
  );
}
