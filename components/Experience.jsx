'use client';
import { useState } from 'react';
import { V2, FP, SPRING, EXPERIENCE } from '@/lib/data';

export default function Experience() {
  const [open, setOpen] = useState(null);
  return (
    <section id="experience" className="px-5 py-[72px] md:px-8 md:py-[120px]" style={{ background: V2.bg, borderTop: `1px solid ${V2.rule}` }}>
      <div className="mx-auto max-w-[1320px]">
        <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: V2.muted, marginBottom: 32 }}>CV LOG</div>
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(48px,6vw,96px)", fontWeight: 500, lineHeight: 0.95, letterSpacing: -2.5, margin: "0 0 64px", color: V2.ink }}>3 years.</h2>
        <div style={{ position: "relative", paddingLeft: 40 }}>
          <div style={{ position: "absolute", left: 12, top: 0, bottom: 0, width: 1, background: V2.rule }} />
          {EXPERIENCE.map((e, i) => {
            const isOpen = open === i;
            return (
              <div key={i} onMouseEnter={() => setOpen(i)} onMouseLeave={() => setOpen(null)}
                style={{ position: "relative", padding: "20px 0", borderBottom: `1px solid ${V2.ruleSoft}`, transform: isOpen ? "translateX(24px)" : "translateX(0)", transition: `transform 0.5s ${SPRING}`, cursor: "pointer" }} data-cursor="hover">
                <div style={{ position: "absolute", left: -34, top: 28, width: 12, height: 12, borderRadius: "50%", background: isOpen ? V2.accent : V2.ink, transform: isOpen ? "scale(1.6)" : "scale(1)", transition: `transform 0.4s ${SPRING}, background 0.3s` }} />
                <div className="grid grid-cols-[1fr_auto] gap-3 items-baseline md:grid-cols-[180px_1fr_80px] md:gap-6">
                  <div className="col-span-2 md:col-auto" style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.1em", color: V2.muted }}>{e.period}</div>
                  <div>
                    <div className="text-xl md:text-2xl" style={{ fontFamily: FP.display, fontWeight: 500, letterSpacing: -0.4, lineHeight: 1.1, textTransform: "uppercase", color: V2.ink }}>{e.role}</div>
                    <div style={{ fontSize: 12, color: V2.muted, marginTop: 4, fontFamily: FP.mono, letterSpacing: "0.1em" }}>↳ {e.org.toUpperCase()}</div>
                  </div>
                  <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", color: V2.muted, textAlign: "right" }}>§0{i + 1}</div>
                </div>
                <div style={{ maxHeight: isOpen ? 120 : 0, overflow: "hidden", transition: `max-height 0.5s ${SPRING}`, marginTop: isOpen ? 12 : 0 }}>
                  <div className="pl-0 md:pl-[204px]" style={{ fontSize: 14, lineHeight: 1.6, color: V2.ink2, maxWidth: 680 }}>{e.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
