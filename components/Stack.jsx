'use client';
import { useState, useEffect, useRef } from 'react';
import { V2, FP, SPRING } from '@/lib/data';

const PAIRS = [
  { action: "validate ideas",            method: "research & experimentation" },
  { action: "reduce uncertainty",        method: "insights & evidence" },
  { action: "shape product direction",   method: "strategy & research" },
  { action: "turn insights into action", method: "product design" },
];

const ACCENT = "#2e5c8a"; // steel blue, the changing phrases (on light bg)
const STATIC_COLOR = V2.ink; // navy, the static sentence text
const SYNE = "'Syne', 'Space Grotesk', sans-serif";

export default function Stack() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const arm = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % PAIRS.length);
    }, 5000);
  };

  useEffect(() => {
    arm();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Click to advance, and restart the timer so it doesn't double-fire.
  const cycleManual = () => {
    setIndex((i) => (i + 1) % PAIRS.length);
    arm();
  };

  return (
    <section
      id="skills"
      className="flex items-center justify-center px-5 py-16 md:min-h-screen md:px-8 md:py-40"
      style={{ background: V2.bgDeep, color: V2.ink, borderTop: `1px solid ${V2.ruleSoft}` }}
    >
      <div className="mx-auto w-full max-w-[1320px] text-center">
        <div className="mb-12 md:mb-20" style={{
          fontFamily: FP.mono,
          fontSize: 11,
          letterSpacing: "0.25em",
          color: V2.muted,
          textTransform: "uppercase",
        }}>
          How I work
        </div>

        {/* Every sentence is stacked in ONE grid cell, so the area is fixed to
            the tallest sentence and never reflows the page. We only animate
            opacity/translate, so the whole sentence cross-fades as a unit, 
            no per-word width changes, no layout shift. */}
        <div className="mx-auto" style={{ display: "grid", maxWidth: 1240 }}>
          {PAIRS.map((p, i) => {
            const active = i === index;
            return (
              <h2
                key={i}
                onClick={cycleManual}
                data-cursor="hover"
                aria-hidden={!active}
                style={{
                  gridArea: "1 / 1",
                  fontFamily: SYNE,
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4.6vw, 3.5rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  color: STATIC_COLOR,
                  cursor: "pointer",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.55s ease, transform 0.7s ${SPRING}`,
                  pointerEvents: active ? "auto" : "none",
                }}
              >
                I help teams <span style={{ color: ACCENT }}>{p.action}</span> through <span style={{ color: ACCENT }}>{p.method}</span>.
              </h2>
            );
          })}
        </div>
      </div>
    </section>
  );
}
