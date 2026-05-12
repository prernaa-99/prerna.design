import { useState } from 'react';
import { V2, FP, PRERNA_BIO } from '../data';
import MagneticWord from './MagneticWord';
import DesignerCharacter from './DesignerCharacter';

export default function Hero() {
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
    <section id="hero" style={{ minHeight: "calc(100vh - 70px)", padding: "0 32px 60px", position: "relative" }}>
      {flash && <div style={{ position: "fixed", inset: 0, background: V2.accent, opacity: 0.4, zIndex: 9990, pointerEvents: "none", animation: "v2-flash 0.3s" }} />}

      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)", gap: 48, paddingTop: 60, alignItems: "center" }}>
        <div>
          <h1 style={{ fontFamily: FP.display, fontSize: "clamp(56px,8vw,132px)", fontWeight: 500, lineHeight: 0.9, letterSpacing: -3, margin: 0, color: V2.ink }}>
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
          <div style={{ marginTop: 40, display: "flex", gap: 24, alignItems: "flex-start", borderTop: `1px solid ${V2.rule}`, paddingTop: 16, maxWidth: 560 }}>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: V2.muted, minWidth: 56 }}>BIO ↗</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: V2.ink2 }}>{PRERNA_BIO}</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "1/1", position: "relative" }} onClick={onCharClick} data-cursor="hover">
          <DesignerCharacter size={360} intensity={1} />
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
