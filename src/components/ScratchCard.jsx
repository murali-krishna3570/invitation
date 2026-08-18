import React, { useRef, useState, useEffect } from 'react';

export default function ScratchCard({ children, label = "Scratch to reveal the date" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isDragging = useRef(false);
  const lastPos = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const initCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Gold Shimmer Gradient
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#e8d4a2');
      grad.addColorStop(0.45, '#c9a227');
      grad.addColorStop(0.7, '#f2e3ba');
      grad.addColorStop(1, '#c9a227');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Add subtle noise pattern
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = '#7a5c1e';
      for (let i = 0; i < 140; i++) {
        const rx = (i * 97) % width;
        const ry = (i * 53) % height;
        ctx.fillRect(rx, ry, 2, 2);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'destination-out';
    };

    initCanvas();

    const ro = new ResizeObserver(() => {
      if (!isRevealed) initCanvas();
    });
    ro.observe(container);

    return () => ro.disconnect();
  }, [isRevealed]);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const drawScratch = (x, y) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = 34;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    const prev = lastPos.current ?? { x, y };
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastPos.current = { x, y };
  };

  const checkRevealedRatio = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clearedCount = 0;
    let totalSampled = 0;

    for (let i = 3; i < imgData.length; i += 32) {
      totalSampled++;
      if ((imgData[i] ?? 255) < 40) {
        clearedCount++;
      }
    }

    if (totalSampled > 0 && clearedCount / totalSampled > 0.08) {
      setIsRevealed(true);
    }
  };

  return (
    <div ref={containerRef} className="relative select-none">
      {children}
      {!isRevealed && (
        <>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full cursor-pointer touch-none rounded-[15px] transition-opacity duration-500"
            onClick={() => setIsRevealed(true)}
            onPointerDown={(e) => {
              isDragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              const pos = getPos(e);
              lastPos.current = pos;
              drawScratch(pos.x, pos.y);
            }}
            onPointerMove={(e) => {
              if (!isDragging.current) return;
              const pos = getPos(e);
              drawScratch(pos.x, pos.y);
              checkRevealedRatio();
            }}
            onPointerUp={() => {
              isDragging.current = false;
              lastPos.current = null;
              setIsRevealed(true);
            }}
            onPointerLeave={() => {
              isDragging.current = false;
              lastPos.current = null;
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-maroon/80 font-telugu">
            ✨ {label}
          </div>
        </>
      )}
    </div>
  );
}
