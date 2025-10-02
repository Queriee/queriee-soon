"use client";

import React, { useEffect, useRef } from "react";

// Lightweight canvas-based background inspired by pixel/ripple effects.
// Not a 1:1 port of reactbits' PixelBlast, but supports similar props for API compatibility.
export type PixelBlastProps = {
  variant?: "circle" | "grid";
  pixelSize?: number;
  color?: string; // primary tint
  patternScale?: number;
  patternDensity?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleSpeed?: number;
  rippleThickness?: number;
  rippleIntensityScale?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  liquidWobbleSpeed?: number;
  speed?: number;
  edgeFade?: number; // 0..1
  transparent?: boolean;
  className?: string;
};

export const PixelBlast: React.FC<PixelBlastProps> = ({
  variant = "circle",
  pixelSize = 6,
  color = "#B19EEF",
  patternScale = 3,
  patternDensity = 1.2,
  pixelSizeJitter = 0.5,
  enableRipples = true,
  rippleSpeed = 0.4,
  rippleThickness = 0.12,
  rippleIntensityScale = 1.5,
  liquid = true,
  liquidStrength = 0.12,
  liquidRadius = 1.2,
  liquidWobbleSpeed = 5,
  speed = 0.6,
  edgeFade = 0.25,
  transparent = true,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: transparent });
    if (!ctx) return;

    let w = (canvas.width = canvas.clientWidth * devicePixelRatio);
    let h = (canvas.height = canvas.clientHeight * devicePixelRatio);

    const onResize = () => {
      w = canvas.width = canvas.clientWidth * devicePixelRatio;
      h = canvas.height = canvas.clientHeight * devicePixelRatio;
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    const bg = transparent ? "rgba(0,0,0,0)" : "#0b0b10";
    const tint = color;

    const t0 = performance.now();

    const draw = (t: number) => {
      const time = (t - t0) / 1000;
      // Clear
      ctx.clearRect(0, 0, w, h);
      if (!transparent) {
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);
      }

      // Edge fade mask
      const grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 1.1);
      grd.addColorStop(0, "rgba(255,255,255,1)");
      grd.addColorStop(Math.min(1, 1 - edgeFade), "rgba(255,255,255,1)");
      grd.addColorStop(1, "rgba(255,255,255,0)");

      // Pixel-ish grid params
      const base = pixelSize * devicePixelRatio;
      const step = Math.max(2, base);
      const density = patternDensity;

      ctx.save();
      // Liquid wobble transform
      if (liquid) {
        const kx = Math.sin(time * liquidWobbleSpeed * 0.5) * liquidStrength * 20;
        const ky = Math.cos(time * liquidWobbleSpeed * 0.5) * liquidStrength * 20;
        ctx.transform(1, ky / h, kx / w, 1, 0, 0);
      }

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          // jitter
          const jx = (Math.sin(x * 0.01 + time * speed) + Math.cos(y * 0.01 - time * speed)) * pixelSizeJitter * 2;
          const jy = (Math.cos(x * 0.008 - time * speed) + Math.sin(y * 0.012 + time * speed)) * pixelSizeJitter * 2;

          // ripple ring
          let ripple = 1;
          if (enableRipples) {
            const dx = x - w / 2;
            const dy = y - h / 2;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const wave = Math.sin(dist * rippleThickness * 0.02 - time * rippleSpeed * 6);
            ripple = 0.5 + 0.5 * wave * rippleIntensityScale;
          }

          // density mask
          const mask = (Math.sin((x + jx) * 0.02 * patternScale) + Math.cos((y + jy) * 0.02 * patternScale)) * 0.5 + 0.5;
          if (mask < 1 - density) continue;

          // color with slight alpha noise
          const alpha = 0.05 + 0.15 * ripple * mask;
          ctx.fillStyle = hexToRgba(tint, alpha);

          if (variant === "circle") {
            const r = (step * 0.35) * (0.8 + 0.4 * mask);
            ctx.beginPath();
            ctx.arc(x + jx, y + jy, r, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(x + jx, y + jy, step, step);
          }
        }
      }
      ctx.restore();

      // Apply edge fade via destination-in mask
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [
    transparent,
    color,
    pixelSize,
    patternScale,
    patternDensity,
    pixelSizeJitter,
    enableRipples,
    rippleSpeed,
    rippleThickness,
    rippleIntensityScale,
    liquid,
    liquidStrength,
    liquidRadius,
    liquidWobbleSpeed,
    speed,
    edgeFade,
  ]);

  return (
    <div className={"absolute inset-0 overflow-hidden " + (className ?? "")}
         aria-hidden>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

function hexToRgba(hex: string, a = 1) {
  const c = hex.replace('#', '');
  const bigint = parseInt(c.length === 3 ? c.split('').map((x) => x + x).join('') : c, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}