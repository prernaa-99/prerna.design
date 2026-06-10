'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { V2, FP, SPRING, PROJECTS } from '@/lib/data';
import Reveal from './Reveal';

// Fallback visual for any project without a cover image.
function GenerativeVisual({ i, accent }) {
  if (i === 0) return (
    <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
      {[...Array(12)].map((_, k) => (
        <circle key={k} cx="100" cy="100" r={10 + k * 7} fill="none" stroke={k === 0 ? accent : V2.ruleSoft} strokeWidth={k === 0 ? 1.5 : 0.5} />
      ))}
    </svg>
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

// Renders the headline with its trailing phrase tinted in the accent color.
function Headline({ headline, highlight, accent }) {
  if (highlight && headline.includes(highlight)) {
    const idx = headline.lastIndexOf(highlight);
    return (
      <>
        {headline.slice(0, idx)}
        <span style={{ color: accent }}>{highlight}</span>
        {headline.slice(idx + highlight.length)}
      </>
    );
  }
  return headline;
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
      <div className="grid grid-cols-1 min-h-0 relative overflow-hidden md:grid-cols-[56px_1.1fr_1fr] md:h-[340px]" style={{ background: V2.paper, border: `1px solid ${V2.ruleSoft}`, transformStyle: "preserve-3d", transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)${hover ? " translateY(-6px)" : ""}`, transition: `transform 0.35s ${SPRING}, box-shadow 0.35s`, boxShadow: hover ? "0 24px 48px rgba(0,0,0,0.12)" : "0 2px 4px rgba(0,0,0,0.03)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, ${p.accent}18, transparent 50%)`, pointerEvents: "none", opacity: hover ? 1 : 0, transition: "opacity 0.3s" }} />

        {/* LEFT RAIL — role, rotated up the side */}
        <div className="flex items-center justify-center flex-row md:flex-col md:justify-center border-solid border-[#d4dbe5] border-b md:border-b-0 md:border-r px-5 py-3.5 md:px-0 md:py-7" style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: V2.muted }}>
          <span className="rotate-0 [writing-mode:horizontal-tb] md:rotate-180 md:[writing-mode:vertical-rl] whitespace-nowrap">ROLE — {p.role.toUpperCase()}</span>
        </div>

        {/* CONTENT — headline, rule, body, view link */}
        <div className="flex flex-col relative z-[2] px-5 py-6 md:px-10 md:py-9">
          <div>
            <h3 style={{ fontFamily: FP.display, fontSize: "clamp(30px,3.4vw,48px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: -1, color: V2.ink, margin: 0 }}>
              <Headline headline={p.headline} highlight={p.highlight} accent={p.accent} />
            </h3>
            <div style={{ borderTop: `1px solid ${V2.ruleSoft}`, margin: "22px 0 0" }} />
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.55, color: V2.ink2, maxWidth: 560 }}>{p.body}</p>
          </div>
          <div style={{ marginTop: "auto", paddingTop: 20, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: V2.muted, display: "flex", alignItems: "center", gap: 8 }}>
            VIEW CASE STUDY
            <span style={{ transition: "transform 0.3s", transform: hover ? "translateX(4px)" : "none", color: p.accent }}>→</span>
          </div>
        </div>

        {/* PREVIEW — full product composite */}
        <div className="relative overflow-hidden min-h-[220px] md:min-h-0 border-t border-solid border-[#d4dbe5] md:border-t-0" style={{ background: "#efeeec" }}>
          {p.cover ? (
            <img
              src={p.cover}
              alt={`${p.title} — product preview`}
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                transform: hover ? "scale(1.03)" : "scale(1)",
                transition: `transform 0.6s ${SPRING}`,
              }}
            />
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
        <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: V2.muted, marginBottom: 32 }}>SELECTED WORK</div>
        <div className="flex flex-col gap-12 md:gap-20">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}><WorkCard p={p} i={i} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
