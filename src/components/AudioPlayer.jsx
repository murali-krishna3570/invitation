import React, { useRef, useState, useEffect } from 'react';
import invitationMp3 from '../assets/audio_test_2.mp3';

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const wasPlayingRef = useRef(false);
  const userHasStartedMusicRef = useRef(false);
  const audioSource = src || invitationMp3;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;

    const playMusic = () => {
      if (!audioRef.current) return;
      userHasStartedMusicRef.current = true;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    const pauseMusic = (saveState = true) => {
      if (!audioRef.current) return;
      if (saveState && !audioRef.current.paused) {
        wasPlayingRef.current = true;
      }
      audioRef.current.pause();
      setIsPlaying(false);
    };

    // Listen for custom trigger when "Open Invitation" or CTA is clicked
    const handlePlayEvent = () => {
      playMusic();
    };

    // Handle Tab Switch / Minimize / App Backgrounding / Window Blur
    const handleHide = () => {
      pauseMusic(true);
    };

    const handleShow = () => {
      if (wasPlayingRef.current && userHasStartedMusicRef.current && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            wasPlayingRef.current = false;
          })
          .catch(() => {});
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        handleHide();
      } else {
        handleShow();
      }
    };

    window.addEventListener('play-invitation-music', handlePlayEvent);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', handleHide);
    window.addEventListener('blur', handleHide);
    window.addEventListener('focus', handleShow);

    return () => {
      window.removeEventListener('play-invitation-music', handlePlayEvent);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', handleHide);
      window.removeEventListener('blur', handleHide);
      window.removeEventListener('focus', handleShow);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      userHasStartedMusicRef.current = true;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      wasPlayingRef.current = false;
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
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold/60 bg-white/95 text-maroon shadow-[0_4px_15px_rgba(122,28,41,0.15)] backdrop-blur transition-all hover:scale-110 active:scale-95 cursor-pointer"
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
