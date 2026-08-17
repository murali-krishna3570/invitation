import React, { useState } from 'react';
import raysImg from '../assets/rays.webp';
import ganeshaImg from '../assets/ganesha.webp';
import coupleImg from '../assets/couple.webp';
import mandalaImg from '../assets/mandala.webp';

export default function CoverView({ onOpen, onOpenRituals, lang }) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent('play-invitation-music'));
    if (isLeaving) return;
    setIsLeaving(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  const isTelugu = lang === 'te';

  return (
    <main
      className={`min-h-screen bg-cream px-6 pb-16 pt-14 transition-all duration-700 ease-out ${
        isLeaving ? 'scale-[1.04] opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0'
      }`}
    >
      <div className="mx-auto w-full max-w-[390px]">
        {/* Blessings Header */}
        <div className="flex items-center justify-between font-serif-italic italic text-[15px] text-gold">
          <span>Srirastu</span>
          <span>Subhamastu</span>
          <span>Avighnamastu</span>
        </div>

        {/* Lord Ganesha & Sun Rays */}
        <div className="relative mt-8 flex flex-col items-center">
          <img
            src={raysImg || "/assets/rays.webp"}
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            className="pointer-events-none absolute -top-8 h-[240px] w-[240px] select-none opacity-90"
          />
          <img
            src={ganeshaImg || "/assets/ganesha.webp"}
            alt="Lord Ganesha"
            fetchpriority="high"
            className="relative h-[130px] w-[130px] object-contain"
          />
          <p className="relative mt-3 font-serif-italic italic text-[19px] tracking-wide text-gold">
            Om Sri Ganeshaya Namaha
          </p>
        </div>

        {/* Header / Title */}
        <div className="mt-10 text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.22em] text-cocoa font-telugu">
            {isTelugu ? "మా వివాహ వేడుకకు సాదర ఆహ్వానం" : "You are invited to the wedding of"}
          </p>
          <h2 className="mt-2 font-display text-[20px] font-semibold text-gold tracking-wide font-telugu">
            {isTelugu ? "వివాహ ఆహ్వాన పత్రిక" : "Wedding Invitation"}
          </h2>
        </div>

        {/* Couple Names */}
        <div className="mt-4 text-center">
          {isTelugu ? (
            <h1 className="font-telugu text-[32px] font-bold leading-[1.3] text-maroon">
              కుప్పాల సంధ్య
              <br />
              <span className="text-gold text-[26px]">&</span>
              <br />
              శింగులూరి సోమశేఖర్
            </h1>
          ) : (
            <h1 className="font-script text-[48px] leading-[1.15] text-maroon">
              Kuppala Sandhya
              <br />
              <span className="text-gold text-[36px]">&</span>
              <br />
              Singuluri Somasekhar
            </h1>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleOpen}
            className="w-full max-w-[280px] rounded-full bg-maroon px-6 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-primary-foreground shadow-md transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer font-telugu text-center"
          >
            {isTelugu ? "ఆహ్వాన పత్రిక చూడండి" : "Open Invitation"}
          </button>

          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('play-invitation-music'));
              if (onOpenRituals) onOpenRituals();
            }}
            className="w-full max-w-[280px] rounded-full border border-maroon/40 bg-cream/90 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-maroon shadow-xs transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer font-telugu flex items-center justify-center gap-2"
          >
            <span>🪔</span>
            <span>{isTelugu ? "పూజా క్రమం & ఆచారాలు" : "Puja Process & Rituals"}</span>
          </button>
        </div>

        {/* Circular Frame with Couple Image and Mandala Overlay */}
        <div className="relative mx-auto mt-10 aspect-square w-full max-w-[346px]">
          <div className="absolute inset-[13%] overflow-hidden rounded-full shadow-inner border-2 border-gold/30">
            <img
              src={coupleImg || "/assets/couple.webp"}
              alt="Kuppala Sandhya and Singuluri Somasekhar"
              fetchpriority="high"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <img
            src={mandalaImg || "/assets/mandala.webp"}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full select-none mix-blend-darken"
          />
        </div>
      </div>
    </main>
  );
}
