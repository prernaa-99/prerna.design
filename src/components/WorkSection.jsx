import { useRef, useState } from 'react';
import { V2, FP, SPRING, PROJECTS } from '../data';
import Reveal from './Reveal';

function GenerativeVisual({ i, accent }) {
  if (i === 0) return (
    <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
      {[...Array(12)].map((_, k) => (
        <circle key={k} cx="100" cy="100" r={10 + k * 7} fill="none" stroke={k === 0 ? accent : V2.ruleSoft} strokeWidth={k === 0 ? 1.5 : 0.5} />
      ))}
      <text x="100" y="105" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={V2.ink}>R = 0.42</text>
    </svg>
  );
  if (i === 1) return (
    <div style={{ width: "100%", height: "100%", padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: "Georgia,serif", fontSize: 100, fontStyle: "italic", color: accent, lineHeight: 0.9 }}>Aa</div>
    </div>
  );
  if (i === 2) return (
    <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gridTemplateRows: "repeat(6,1fr)" }}>
      {[...Array(36)].map((_, k) => (
        <div key={k} style={{ background: k % 7 === 0 ? accent : k % 3 === 0 ? V2.ink : V2.ruleSoft, opacity: 0.4 + (k % 5) * 0.1 }} />
      ))}
    </div>
  );
  return (
    <div style={{ width: "100%", height: "100%", padding: 16, display: "flex", flexDirection: "column", gap: 4 }}>
      {[...Array(8)].map((_, k) => (
        <div key={k} style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 30, height: 8, background: k === 2 ? accent : V2.ruleSoft }} />
          <div style={{ flex: 1, height: 8, background: V2.ruleSoft, opacity: 0.5 }} />
          <div style={{ width: 16, height: 8, background: V2.ruleSoft, opacity: 0.7 }} />
        </div>
      ))}
    </div>
  );
}

function WorkCard({ p, i }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });
  const [hover, setHover] = useState(false);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    setTilt({ rx: (0.5 - py) * 8, ry: (px - 0.5) * 12, mx: px * 100, my: py * 100 });
  };
  const onLeave = () => { setTilt({ rx: 0, ry: 0, mx: 50, my: 50 }); setHover(false); };

  return (
    <a href={p.href || "#"} onClick={(e) => !p.href && e.preventDefault()}
      ref={ref} onMouseMove={onMove} onMouseEnter={() => setHover(true)} onMouseLeave={onLeave}
      style={{ display: "block", textDecoration: "none", color: "inherit", perspective: 1500, position: "relative" }} data-cursor="hover">
      <div style={{ background: V2.paper, border: `1px solid ${V2.rule}`, display: "grid", gridTemplateColumns: "56px 1.1fr 1fr", minHeight: 280, transformStyle: "preserve-3d", transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)${hover ? " translateY(-6px)" : ""}`, transition: `transform 0.35s ${SPRING}, box-shadow 0.35s`, boxShadow: hover ? "0 24px 48px rgba(0,0,0,0.18)" : "0 2px 4px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, ${p.accent}22, transparent 50%)`, pointerEvents: "none", opacity: hover ? 1 : 0, transition: "opacity 0.3s" }} />
        <div style={{ borderRight: `1px solid ${V2.rule}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "24px 0", fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", color: V2.muted }}>
          <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{p.n} · {p.year}</span>
        </div>
        <div style={{ padding: 32, borderRight: `1px solid ${V2.rule}`, display: "flex", flexDirection: "column", gap: 24, position: "relative", zIndex: 2 }}>
          <div>
            <div style={{ fontFamily: FP.display, fontSize: "clamp(36px,3vw,52px)", fontWeight: 500, lineHeight: 0.95, letterSpacing: -1.5, color: V2.ink }}>{p.title.toUpperCase()}</div>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: p.accent, marginTop: 14 }}>{p.tags.map(t => t.toUpperCase()).join(" · ")}</div>
          </div>
          <div style={{ borderTop: `1px solid ${V2.ruleSoft}`, paddingTop: 16, fontSize: 14, lineHeight: 1.55, color: V2.ink2 }}>{p.subtitle}</div>
          <div style={{ marginTop: "auto", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: V2.muted }}>ROLE — {p.role.toUpperCase()}</div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: V2.bg }}>
          <GenerativeVisual i={i} accent={p.accent} />
        </div>
      </div>
    </a>
  );
}

export default function WorkSection() {
  return (
    <section id="work" style={{ padding: "120px 32px", background: V2.bgDeep, borderTop: `1px solid ${V2.rule}` }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: V2.muted, marginBottom: 32 }}>§01 ──── SELECTED WORK</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}><WorkCard p={p} i={i} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
