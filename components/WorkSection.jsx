'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { V2, FP, SPRING, PROJECTS } from '@/lib/data';
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

function CoverVisual({ src, title, hover, accent }) {
  return (
    <>
      {/* ambient backdrop — same shot, blurred + darkened so the cell glows the app's own colors */}
      <img src={src} alt="" aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(34px) brightness(0.5) saturate(1.2)", transform: "scale(1.25)" }} />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(130% 110% at 50% -10%, ${accent}30, rgba(12,10,9,0.82))` }} />
      {/* the screen as a framed device, anchored high and bleeding off the bottom edge */}
      <img src={src} alt={`${title} — product preview`} loading="lazy"
        style={{
          position: "absolute", left: "50%", top: "8%",
          transform: `translateX(-50%) rotate(-1.5deg)${hover ? " translateY(-8px) scale(1.025)" : ""}`,
          width: "clamp(168px, 36%, 240px)", height: "auto",
          borderRadius: 20, border: "5px solid #0a0a0a",
          boxShadow: "0 34px 70px rgba(0,0,0,0.55), 0 10px 24px rgba(0,0,0,0.4)",
          transition: `transform 0.5s ${SPRING}`,
        }} />
    </>
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
    <Link href={p.href || "#"} onClick={(e) => !p.href && e.preventDefault()}
      ref={ref} onMouseMove={onMove} onMouseEnter={() => setHover(true)} onMouseLeave={onLeave}
      style={{ display: "block", textDecoration: "none", color: "inherit", perspective: 1500, position: "relative" }} data-cursor="hover">
      <div className="grid grid-cols-1 min-h-0 relative overflow-hidden md:grid-cols-[56px_1.1fr_1fr] md:h-[340px]" style={{ background: V2.paper, border: `1px solid ${V2.rule}`, transformStyle: "preserve-3d", transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)${hover ? " translateY(-6px)" : ""}`, transition: `transform 0.35s ${SPRING}, box-shadow 0.35s`, boxShadow: hover ? "0 24px 48px rgba(0,0,0,0.18)" : "0 2px 4px rgba(0,0,0,0.04)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, ${p.accent}22, transparent 50%)`, pointerEvents: "none", opacity: hover ? 1 : 0, transition: "opacity 0.3s" }} />
        <div className="flex items-center justify-start flex-row md:flex-col border-solid border-[#1d2f46] border-b md:border-b-0 md:border-r px-5 py-3.5 md:px-0 md:py-6" style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", color: V2.muted }}>
          <span className="rotate-0 [writing-mode:horizontal-tb] md:rotate-180 md:[writing-mode:vertical-rl]">{p.n} · {p.year}</span>
        </div>
        <div className="flex flex-col gap-6 relative z-[2] px-5 py-6 md:p-8 md:border-r md:border-solid md:border-[#1d2f46]">
          <div>
            <div style={{ fontFamily: FP.display, fontSize: "clamp(36px,3vw,52px)", fontWeight: 500, lineHeight: 0.95, letterSpacing: -1.5, color: V2.ink }}>{p.title.toUpperCase()}</div>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: p.accent, marginTop: 14 }}>{p.tags.map(t => t.toUpperCase()).join(" · ")}</div>
          </div>
          <div style={{ borderTop: `1px solid ${V2.ruleSoft}`, paddingTop: 16, fontSize: 14, lineHeight: 1.55, color: V2.ink2 }}>{p.subtitle}</div>
          <div style={{ marginTop: "auto", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: V2.muted }}>ROLE — {p.role.toUpperCase()}</div>
        </div>
        <div className="relative overflow-hidden min-h-[200px] md:min-h-0 border-t border-solid border-[#1d2f46] md:border-t-0" style={{ background: V2.bg }}>
          {p.cover ? (
            <>
              <CoverVisual src={p.cover} title={p.title} hover={hover} accent={p.accent} />
              {p.href && (
                <div style={{ position: "absolute", left: 16, bottom: 16, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#fff", display: "flex", alignItems: "center", gap: 8, opacity: hover ? 1 : 0.75, transition: "opacity 0.3s", pointerEvents: "none", zIndex: 2 }}>
                  VIEW CASE <span style={{ transition: "transform 0.3s", transform: hover ? "translateX(4px)" : "none" }}>→</span>
                </div>
              )}
            </>
          ) : (
            <GenerativeVisual i={i} accent={p.accent} />
          )}
        </div>
      </div>
    </Link>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="px-5 py-[72px] md:px-8 md:py-[120px]" style={{ background: V2.bgDeep, borderTop: `1px solid ${V2.rule}` }}>
      <div className="mx-auto max-w-[1320px]">
        <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: V2.muted, marginBottom: 32 }}>──── SELECTED WORK</div>
        <div className="flex flex-col gap-12 md:gap-20">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}><WorkCard p={p} i={i} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
