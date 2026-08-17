import React, { useRef, useState, useEffect } from 'react';
import invitationMp3 from '../assets/invitation.mp3';

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSource = src || invitationMp3 || "/assets/invitation.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;

    const playMusic = () => {
      if (audio) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    // Listen for custom trigger when "Open Invitation" is clicked
    const handlePlayEvent = () => {
      playMusic();
    };

    // Also fallback to any user pointer interaction
    const handleFirstPointer = () => {
      playMusic();
    };

    window.addEventListener('play-invitation-music', handlePlayEvent);
    window.addEventListener('pointerdown', handleFirstPointer, { once: true });

    return () => {
      window.removeEventListener('play-invitation-music', handlePlayEvent);
      window.removeEventListener('pointerdown', handleFirstPointer);
    };
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
      <audio ref={audioRef} src={audioSource} loop preload="auto" />
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
