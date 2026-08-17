import React, { useMemo } from 'react';

export default function FallingPetals({ count = 14 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const basePos = (i + 0.5) / count;
      const jitter = (i * 37 % 11 - 5) / (count * 2.2);
      return {
        id: i,
        left: Math.min(97, Math.max(1, (basePos + jitter) * 100)),
        size: 10 + (i * 7 % 12),
        delay: -(i * 3.1 % 14),
        duration: 12 + (i * 5 % 9),
        drift: i % 2 === 0 ? 40 : -40,
        opacity: 0.35 + (i * 13 % 40) / 100,
      };
    });
  }, [count]);

  return (
    <>
      <style>{`
        @keyframes petal-fall {
          0% { transform: translate3d(0, -8vh, 0) rotate(0deg); }
          100% { transform: translate3d(var(--drift), 108vh, 0) rotate(540deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .petal { display: none; }
        }
      `}</style>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal absolute top-0"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              '--drift': `${p.drift}px`,
              animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            }}
          >
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <path
                d="M12 2c3.5 3.2 5.5 6.4 5.5 9.6 0 4-2.6 6.9-5.5 10.4-2.9-3.5-5.5-6.4-5.5-10.4C6.5 8.4 8.5 5.2 12 2z"
                fill="#C49A45"
              />
            </svg>
          </span>
        ))}
      </div>
    </>
  );
}
