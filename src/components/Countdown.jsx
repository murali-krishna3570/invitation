import React, { useState, useEffect } from 'react';

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

function getTimeRemaining(targetTime) {
  const total = Math.max(0, targetTime - Date.now());
  const seconds = Math.floor(total / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export default function Countdown({ target = "2026-08-30T23:29:00+05:30", lang = 'te' }) {
  const targetTime = new Date(target).getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetTime));

  const isTelugu = lang === 'te';
  const units = [
    { key: 'days', label: isTelugu ? 'రోజులు' : 'Days' },
    { key: 'hours', label: isTelugu ? 'గంటలు' : 'Hours' },
    { key: 'minutes', label: isTelugu ? 'నిమిషాలు' : 'Minutes' },
    { key: 'seconds', label: isTelugu ? 'సెకన్లు' : 'Seconds' },
  ];

  useEffect(() => {
    setTimeLeft(getTimeRemaining(targetTime));
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="grid grid-cols-4 gap-2.5 font-telugu">
      {units.map((unit) => (
        <div
          key={unit.key}
          className="rounded-2xl border border-gold/40 bg-cream/70 px-1 py-4 text-center shadow-[0_2px_10px_rgba(120,100,91,0.08)]"
        >
          <div className="font-display text-[26px] font-bold leading-none text-maroon tabular-nums">
            {String(timeLeft[unit.key] || 0).padStart(2, '0')}
          </div>
          <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-cocoa">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
