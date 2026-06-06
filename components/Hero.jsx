'use client';
import { useState } from 'react';
import { V2, FP, PRERNA_BIO } from '@/lib/data';
import MagneticWord from './MagneticWord';
import DesignerCharacter from './DesignerCharacter';
import { useIsMobile } from '@/lib/useMediaQuery';

export default function Hero() {
  const isMobile = useIsMobile();
  const [clicks, setClicks] = useState(0);
  const [waving, setWaving] = useState(false);
  const [flash, setFlash] = useState(false);

  const onCharClick = () => {
    const n = clicks + 1;
    setClicks(n);
    if (n >= 5) {
      setWaving(true); setFlash(true);
      setTimeout(() => setFlash(false), 300);
      setTimeout(() => { setWaving(false); setClicks(0); }, 1600);
    }
  };

  const lines = ["DESIGN", "FOR THE", "EDGES", "OF A", "PRODUCT."];

  return (
    <section
      id="hero"
      className="relative px-5 py-10 md:px-8 md:py-20"
    >
      {flash && <div style={{ position: "fixed", inset: 0, background: V2.accent, opacity: 0.4, zIndex: 9990, pointerEvents: "none", animation: "v2-flash 0.3s" }} />}

      <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-[1.2fr_1fr] md:gap-8 mx-auto max-w-[1320px]">
        <div>
          <h1
            className="text-[clamp(2.5rem,10vw,4rem)] md:text-[clamp(3.5rem,7vw,6rem)] leading-[0.95] font-medium tracking-[-0.03em] m-0"
            style={{
              fontFamily: FP.display,
              color: V2.ink,
            }}
          >
            {lines.map((line, i) => (
              <span key={i}>
                {line.split(" ").map((w, j) => (
                  <span key={j}>
                    <MagneticWord color={line === "EDGES" ? V2.accent : V2.ink}>{w}</MagneticWord>
                    {j < line.split(" ").length - 1 && " "}
                  </span>
                ))}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div
            className="flex flex-col gap-2 mt-6 pt-4 max-w-[560px] md:flex-row md:gap-6 md:items-start"
            style={{
              borderTop: `1px solid ${V2.rule}`,
            }}
          >
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: V2.muted, minWidth: 56, lineHeight: 1.6 }}>BIO ↗</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: V2.ink2 }}>{PRERNA_BIO}</div>
          </div>
        </div>

        <div
          className="flex items-center justify-center relative"
          onClick={onCharClick}
          data-cursor="hover"
        >
          <DesignerCharacter size={isMobile ? 240 : 360} intensity={1} />
          {clicks > 0 && clicks < 5 && (
            <div style={{ position: "absolute", bottom: 0, fontFamily: FP.mono, fontSize: 10, color: V2.muted, letterSpacing: "0.2em" }}>
              {"●".repeat(clicks)}{"○".repeat(5 - clicks)}
            </div>
          )}
          {waving && (
            <div style={{ position: "absolute", top: 8, right: 8, fontFamily: FP.mono, fontSize: 10, color: V2.accent, letterSpacing: "0.2em" }}>↳ HI!</div>
          )}
        </div>
      </div>
    </section>
  );
}
