"use client";

import React from "react";
import Link from "next/link";

export type LogoItem = {
  node?: React.ReactNode;
  title?: string;
  href?: string;
  src?: string; // optional image alternative
  alt?: string;
};

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // pixels per second
  direction?: "left" | "right";
  logoHeight?: number; // px
  gap?: number; // px
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = "left",
  logoHeight = 48,
  gap = 40,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = "#0b0b0b",
  ariaLabel = "Partner logos",
}) => {
  // Repeat content to ensure track width >= viewport, avoiding empty gaps on large screens
  const repeat = 2;
  const repeatedLogos = repeat === 2 ? [...logos, ...logos] : Array.from({ length: repeat }).flatMap(() => logos);

  const duration = Math.max(8, Math.round(((repeat * logos.length) * (logoHeight + gap)) / speed));
  // For a left-moving loop, the second row should start at +100% (to the right)
  // For a right-moving loop, it should start at -100% (to the left)
  const dir = direction === "left" ? "100%" : "-100%";
  const animationName = direction === "left" ? "logo-loop-left" : "logo-loop-right";

  return (
    <div
      aria-label={ariaLabel}
      className="relative w-full overflow-hidden"
      style={{ height: logoHeight + 16 }}
    >
      {/* Fade masks with shadows */}
      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
            style={{
              background: `linear-gradient(90deg, ${fadeOutColor}, rgba(0,0,0,0.3) 60%, transparent)`,
              boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.2)'
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
            style={{
              background: `linear-gradient(270deg, ${fadeOutColor}, rgba(0,0,0,0.3) 60%, transparent)`,
              boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.2)'
            }}
          />
        </>
      )}

      <div
        className={"absolute inset-0 flex items-center z-0" + (pauseOnHover ? " hover:[animation-play-state:paused]" : "")}
      >
        {[0, 1].map((row) => (
          <ul
            key={row}
            className="flex items-center"
            style={{
              gap,
              // equal spacing at the seam (no extra padding)
              animation: `${animationName} ${duration}s linear infinite`,
              // ensure seamless repeat
              transform: `translateX(${row === 0 ? 0 : dir})`,
              willChange: "transform",
            }}
          >
            {repeatedLogos.map((l, i) => {
              const content = l.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={l.src} alt={l.alt || l.title || ""} style={{ height: logoHeight }} className="opacity-80" />
              ) : (
                <div style={{ height: logoHeight }} className="flex items-center opacity-80">
                  {l.node}
                </div>
              );
              const item = (
                <div
                  className={scaleOnHover ? "transition-transform hover:scale-[1.06]" : undefined}
                  title={l.title}
                >
                  {content}
                </div>
              );
              const isLast = i === repeatedLogos.length - 1;
              return (
                <li key={`${row}-${i}`} className="shrink-0" style={isLast ? { marginRight: gap } : undefined}>
                  {l.href ? (
                    <Link href={l.href} target="_blank" rel="noreferrer noopener">
                      {item}
                    </Link>
                  ) : (
                    item
                  )}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
};