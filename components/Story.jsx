'use client';
import { useState } from 'react';
import { V2, FP, SPRING } from '@/lib/data';

const HL = "#dbe8f5"; // soft steel highlight (Story view)

// tab icons
const StoryIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="14" y2="12" /><line x1="4" y1="17" x2="18" y2="17" />
  </svg>
);
const TldrIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="5" cy="7" r="1.4" fill="currentColor" stroke="none" /><line x1="10" y1="7" x2="20" y2="7" />
    <circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" /><line x1="10" y1="12" x2="20" y2="12" />
    <circle cx="5" cy="17" r="1.4" fill="currentColor" stroke="none" /><line x1="10" y1="17" x2="20" y2="17" />
  </svg>
);

// Story view shows everything (hl:true segments highlighted).
// TL;DR view strikes the segments marked strike:true, keeping the essentials.
const PARAS = [
  [
    { t: "I wasn't the kid who spent hours sketching or calling myself an artist. What fascinated me was craft, the process of taking an idea and turning it into something useful, thoughtful, and real. " },
    { t: "I loved understanding how things worked, how they were made, and how small decisions could shape the final experience.", strike: true },
  ],
  [
    { t: "That curiosity led me to " },
    { t: "NIFT", hl: true },
    { t: ", where I studied Accessory Design. " },
    { t: "I spent my time designing bags, furniture, and physical products, learning that good design isn't just about aesthetics, it's about balancing user needs, functionality, and constraints.", strike: true },
  ],
  [
    { t: "Everything changed when I picked an elective on " },
    { t: "UI/UX design", hl: true },
    { t: ". For the first time, I found a medium where craft, technology, and human behavior came together. " },
    { t: "I knew almost immediately that this was what I wanted to pursue.", strike: true },
  ],
  [
    { t: "During my graduation project, I joined ", strike: true },
    { t: "STAGE", hl: true, strike: true },
    { t: " as a Product Designer and had the opportunity to work alongside experienced product leaders and engineers. The experience taught me that great products rarely come from assumptions, they come from understanding users, aligning with business goals, and asking better questions.", strike: true },
  ],
  [
    { t: "Today, I'm building products at " },
    { t: "Times Internet", hl: true },
    { t: ", still driven by what first drew me to craft: turning ideas into useful experiences that solve real problems. Along the way, I've learned that impactful design doesn't always come from big breakthroughs; sometimes, the smallest changes create the biggest improvements." },
  ],
];

const PHOTOS = [
  { rot: -3, src: "/images/about/photo-1.jpg", scale: 1.3 },
  { rot: 2, src: "/images/about/photo-2.jpg" },
  { rot: -2, src: "/images/about/photo-3.jpg" },
  { rot: 3, src: "/images/about/photo-4.jpg" },
];

function Tab({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      data-cursor="hover"
      className="flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium"
      style={{
        fontFamily: FP.body,
        background: active ? V2.paper : "transparent",
        color: active ? V2.ink : V2.muted,
        boxShadow: active ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
        transition: `background 0.25s ${SPRING}, color 0.25s ${SPRING}, box-shadow 0.25s`,
      }}
    >
      {icon}{label}
    </button>
  );
}

export default function Story() {
  const [mode, setMode] = useState("story"); // story | tldr
  const [hov, setHov] = useState(-1);

  return (
    <section id="about-story" className="min-h-[100svh] flex flex-col px-5 py-20 md:px-8 md:py-24" style={{ background: V2.bg, borderTop: `1px solid ${V2.rule}` }}>
      <div className="mx-auto w-full max-w-[1180px] flex flex-col flex-1 min-h-0 justify-between gap-8">
        {/* header, label + tab switch */}
        <div className="flex items-center justify-between gap-4">
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: V2.muted }}>ABOUT</div>
          <div className="inline-flex items-center gap-1 rounded-full p-1" style={{ background: V2.bgDeep, border: `1px solid ${V2.ruleSoft}` }}>
            <Tab active={mode === "story"} onClick={() => setMode("story")} icon={<StoryIcon />} label="Story" />
            <Tab active={mode === "tldr"} onClick={() => setMode("tldr")} icon={<TldrIcon />} label="TL;DR" />
          </div>
        </div>

        {/* body, same paragraphs in both views; TL;DR strikes the filler */}
        <div style={{ fontFamily: FP.body, fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.65, color: V2.ink }}>
          {PARAS.map((segs, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : "1.1em 0 0" }}>
              {segs.map((s, j) => {
                if (mode === "tldr" && s.strike) {
                  return <span key={j} style={{ textDecoration: "line-through", color: "rgba(29,47,70,0.38)", transition: "color 0.3s" }}>{s.t}</span>;
                }
                if (mode === "story" && s.hl) {
                  return <span key={j} style={{ background: HL, borderRadius: 4, padding: "1px 6px", color: V2.ink }}>{s.t}</span>;
                }
                return <span key={j}>{s.t}</span>;
              })}
            </p>
          ))}
        </div>

        {/* polaroid gallery, drop real photos into PHOTOS[].src */}
        <div className="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:justify-center md:gap-8">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(-1)}
              data-cursor="hover"
              className="w-full md:w-[168px]"
              style={{
                transform: hov === i ? "rotate(0deg) translateY(-8px)" : `rotate(${p.rot}deg)`,
                transition: `transform 0.45s ${SPRING}`,
              }}
            >
              <div style={{ background: V2.paper, padding: "10px 10px 34px", boxShadow: hov === i ? "0 26px 50px rgba(0,0,0,0.18)" : "0 16px 36px rgba(0,0,0,0.12)", borderRadius: 2, transition: "box-shadow 0.45s" }}>
                {p.src ? (
                  <div style={{ overflow: "hidden", aspectRatio: "4 / 5" }}>
                    <img src={p.src} alt="" loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transform: `scale(${p.scale || 1})` }} />
                  </div>
                ) : (
                  <div style={{ width: "100%", aspectRatio: "4 / 5", background: `linear-gradient(135deg, ${V2.ruleSoft}, ${V2.bgDeep})`, display: "flex", alignItems: "center", justifyContent: "center", color: V2.muted, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em" }}>
                    PHOTO {String(i + 1).padStart(2, "0")}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
