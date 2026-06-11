'use client';
import { useState, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';

const PL = {
  bg: "#fcfcfc",
  bgDeep: "#f1f4f8",
  paper: "#ffffff",
  ink: "#1d2f46",
  ink2: "#34496a",
  muted: "#6b7a91",
  rule: "#d4dbe5",
  ruleSoft: "#e6ebf1",
  accent: "#2e5c8a",
  good: "#3a9b5c",
  bad: "#c44545",
  highlight: "#fdf3a8",
};
const FP = {
  display: "'Space Grotesk', 'IBM Plex Sans', sans-serif",
  body: "'IBM Plex Sans', sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

const PL_MAX = 1180;
function Container({ children, style = {} }) {
  return <div className="mx-auto w-full px-5 md:px-8" style={{ maxWidth: PL_MAX, ...style }}>{children}</div>;
}

function SectionMark({ num, label, light = false }) {
  const c = light ? "#8595a8" : PL.muted;
  const r = light ? "#2a3a52" : PL.rule;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: c, marginBottom: 24 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: r }} />
      <span>{label.toUpperCase()}</span>
    </div>
  );
}

function CaseNav() {
  return (
    <Container style={{ paddingTop: 28 }}>
      <Link href="/#work" data-cursor="hover" className="group inline-flex items-center gap-2" style={{ color: PL.ink2, fontFamily: FP.body, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
        <svg className="transition-transform group-hover:-translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
        Go back
      </Link>
    </Container>
  );
}

function CaseHero() {
  return (
    <section className="pt-8 pb-10 md:pt-12 md:pb-[60px]" style={{borderBottom: `1px solid ${PL.rule}` }}>
      <Container>
        <div style={{ display: "flex", gap: 16, alignItems: "center", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted, marginBottom: 32 }}>
          <span style={{ width: 24, height: 1, background: PL.rule }} />
          <span>STAGE · OTT PLATFORM</span>
          <span style={{ width: 24, height: 1, background: PL.rule }} />
          <span>2024</span>
        </div>
        <h1 style={{ fontFamily: FP.display, fontSize: "clamp(40px, 6.4vw, 96px)", fontWeight: 500, lineHeight: 0.95, letterSpacing: -2.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          Turning <span style={{ fontStyle: "italic" }}>static</span> into<br />
          <span style={{ color: PL.accent }}>intent.</span>
        </h1>
        <p className="text-base md:text-[19px]" style={{lineHeight: 1.5, color: PL.ink2, maxWidth: 720, marginTop: 32 }}>
          Redesigning STAGE's homepage poster from a passive visual into an interactive preview experience that drives content discovery.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{gap: 0, marginTop: 56, borderTop: `1px solid ${PL.rule}`, borderBottom: `1px solid ${PL.rule}` }}>
          {[
            ["ROLE", "Product Designer"],
            ["TEAM", "2 PM · 1 Eng · Me"],
            ["TIMELINE", "1d design · 7d test"],
            ["IMPACT", "+19.6% preview→content"],
          ].map(([k, v], i) => (
            <div key={k} className={`border-solid border-[#d4dbe5] px-6 py-5 ${["border-r", "md:border-r", "border-r border-t md:border-t-0", "border-t md:border-t-0"][i]}`}>
              <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted, marginBottom: 8 }}>{k}</div>
              <div style={{ fontSize: 15, color: PL.ink, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SplitPhoneHero() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: 288, maxWidth: "100%", aspectRatio: "9 / 19", background: "#000", borderRadius: 36, padding: 7, position: "relative", boxShadow: "0 60px 120px rgba(0,0,0,0.6), 0 20px 40px rgba(0,0,0,0.4)" }}>
        <div style={{ width: "100%", height: "100%", background: "#0c1320", borderRadius: 30, position: "relative", overflow: "hidden", color: "#fff" }}>
          <img src="/platter_image_1.jpg" alt="STAGE app, static poster morphing into motion preview" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{
            position: "absolute", top: "46.5%", left: "50%", transform: "translate(-50%, -50%)",
            width: 46, height: 46, borderRadius: "50%",
            background: "rgba(255,255,255,0.16)",
            border: "1px solid rgba(255,255,255,0.45)",
            backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <section className="py-12 md:py-[72px]" style={{background: "#0c1320", borderBottom: `1px solid ${PL.ink}` }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32, gap: 12, flexWrap: "wrap" }}>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: "#888" }}>BEFORE / AFTER · ONE FRAME, TWO STATES</div>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#666" }}>STATIC ─────→ MOTION</div>
        </div>
        <div className="grid grid-cols-1 gap-9 items-center justify-items-center md:grid-cols-[auto_1fr] md:gap-16 md:justify-items-stretch">
          <SplitPhoneHero />
          <div style={{ display: "flex", flexDirection: "column", gap: 36, color: "#ddd" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: "#777" }}>LEFT · STATE 01</span>
                <span style={{ flex: 1, height: 1, background: "#27323f" }} />
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#555" }}>2:3</span>
              </div>
              <div style={{ fontFamily: FP.display, fontSize: 30, fontWeight: 500, letterSpacing: -0.6, marginBottom: 10, color: "#fff" }}>Static poster</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#999", maxWidth: 460 }}>Wallpaper. Familiar. Earns the first glance, then asks the user to commit blind.</div>
            </div>
            <div style={{ height: 1, background: "#27323f" }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.accent }}>RIGHT · STATE 02</span>
                <span style={{ flex: 1, height: 1, background: "#27323f" }} />
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.accent }}>1:1</span>
              </div>
              <div style={{ fontFamily: FP.display, fontSize: 30, fontWeight: 500, letterSpacing: -0.6, marginBottom: 10, color: "#fff" }}>Motion preview</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#999", maxWidth: 460 }}>The decision cost drops to near zero, a 2-3s clip answers "is this for me?"</div>
            </div>
            <div style={{ marginTop: 8, padding: "16px 20px", border: "1px solid #27323f", background: "#141d2b", fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", color: "#aaa", lineHeight: 1.5 }}>
              <span style={{ color: PL.accent }}>↳</span> ONE SLOT · ONE MORPH · ZERO ADDED TAPS
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AnnotatedPhone() {
  return (
    <div style={{ position: "relative", width: 220 }}>
      <div style={{ width: 220, aspectRatio: "9 / 19", background: "#000", borderRadius: 26, padding: 6 }}>
        <div style={{ width: "100%", height: "100%", background: "#0c1320", borderRadius: 21, position: "relative", overflow: "hidden" }}>
          <img src="/2_home_old.png" alt="STAGE old homepage, static poster with no preview layer" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 60, height: 14, background: "#000", borderRadius: 8 }} />
        </div>
      </div>
    </div>
  );
}

function OldPlatterAnnotated() {
  const annotations = [
    { label: "Generic poster", note: "Same frame for everyone. No personalization signal, taste, history, language all ignored." },
    { label: "Cluttered hierarchy", note: "Poster fights with surrounding chrome. Nothing dominates; the eye has nowhere to land." },
    { label: "Dead-end CTA", note: "Tap and commit. No way to preview the content first, decisions made blind." },
  ];
  return (
    <div style={{ background: PL.paper, border: `1px solid ${PL.rule}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px", borderBottom: `1px solid ${PL.rule}`, background: "#fbeaea" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.bad }}>
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", background: PL.bad, color: "#fff", fontSize: 10, letterSpacing: 0 }}>✕</span>
          <span>DIAGNOSTIC · OLD HOMEPAGE</span>
          <span style={{ color: "#c97c7c" }}>·</span>
          <span style={{ color: "#c97c7c" }}>3 BREAKS · 1 CONSEQUENCE</span>
        </div>
        <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#c97c7c" }}>CAPTURE · STAGE · v3.4</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]" style={{gap: 0 }}>
        <div style={{ padding: "32px 36px", background: "#fafbfc", borderRight: `1px solid ${PL.rule}`, position: "relative" }}>
          <AnnotatedPhone />
        </div>
        <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 0 }}>
          {annotations.map((a, i) => (
            <div key={a.label} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16, alignItems: "flex-start", padding: "16px 0", borderBottom: i < annotations.length - 1 ? `1px solid ${PL.ruleSoft}` : "none" }}>
              <div style={{ width: 32, height: 32, flexShrink: 0, borderRadius: "50%", border: `1.5px solid ${PL.bad}`, color: PL.bad, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FP.mono, fontSize: 13, fontWeight: 500, background: "#fbeaea" }}>{String.fromCharCode(65 + i)}</div>
              <div style={{ paddingTop: 2 }}>
                <div style={{ fontFamily: FP.display, fontSize: 17, fontWeight: 500, letterSpacing: -0.3, color: PL.ink, marginBottom: 4 }}>{a.label}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: PL.ink2 }}>{a.note}</div>
              </div>
              <div style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.bad, padding: "3px 7px", border: `1px solid ${PL.bad}`, background: "#fbeaea", whiteSpace: "nowrap" }}>BREAK {String(i + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3" style={{borderTop: `1px solid ${PL.rule}`, background: "#f7f9fc" }}>
        {[["HOMEPAGE PIXELS", "~38%", PL.ink], ["CONSUMPTION STARTS", "19.6%", PL.bad], ["GAP (PIXELS − STARTS)", "−18.4 pts", PL.bad]].map(([k, v, c], i) => (
          <div key={k} style={{ padding: "16px 24px", borderRight: i < 2 ? `1px solid ${PL.rule}` : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted }}>{k}</span>
            <span style={{ fontFamily: FP.display, fontSize: 22, fontWeight: 500, letterSpacing: -0.5, color: c }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConversionFunnel() {
  const steps = [
    { label: "Saw platter", value: 98, color: PL.ink2 },
    { label: "Tapped poster", value: 19.6, color: PL.bad },
    { label: "Reached content", value: 11.4, color: PL.bad },
  ];
  return (
    <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 36 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
        <div style={{ fontFamily: FP.display, fontSize: 18, fontWeight: 500, color: PL.ink }}>Where users dropped off</div>
        <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted }}>BASELINE · PRE-REDESIGN</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {steps.map((s, i) => (
          <div key={s.label} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 md:grid-cols-[180px_1fr_90px] md:gap-4">
            <div className="col-span-2 md:col-auto" style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", color: PL.ink, textTransform: "uppercase" }}>{String(i + 1).padStart(2, "0")} · {s.label}</div>
            <div style={{ position: "relative", height: 30, background: PL.bg, border: `1px solid ${PL.ruleSoft}` }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${s.value}%`, background: s.color, transition: "width 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
              {i > 0 && <div style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontFamily: FP.mono, fontSize: 10, color: PL.bad, letterSpacing: "0.15em" }}>−{(steps[i - 1].value - s.value).toFixed(1)} pts</div>}
            </div>
            <div style={{ fontFamily: FP.display, fontSize: 22, fontWeight: 500, color: i === 0 ? PL.ink : PL.bad, textAlign: "right", letterSpacing: -0.5 }}>{s.value}%</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px dashed ${PL.rule}`, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.18em", color: PL.muted, display: "flex", justifyContent: "space-between" }}>
        <span>↳ ~78% OF VIEWERS NEVER TAPPED THE HERO SLOT</span>
        <span>SOURCE · INTERNAL ANALYTICS</span>
      </div>
    </div>
  );
}

function ProblemSection() {
  const issues = [
    { n: "A", k: "No personalization", body: "Every user saw the same static frame regardless of taste or history." },
    { n: "B", k: "Poor hierarchy", body: "The poster competed with surrounding UI instead of commanding attention. The eye had nowhere to land." },
    { n: "C", k: "Dead-end experience", body: "No preview layer. Users had to commit to a full page before knowing if content was worth their time." },
  ];
  return (
    <section className="py-16 md:py-[100px]" style={{background: PL.bg }}>
      <Container>
        <SectionMark num="01" label="The problem" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 880 }}>
          The <span style={{ background: PL.highlight, padding: "0 8px" }}>19.6%</span> problem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{gap: 56, marginTop: 40, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>STAGE's homepage poster looked good but wasn't doing its job. Only a fraction of users who saw it actually tapped through to content. The data told a clear story: the poster was <em>wallpaper</em>, not a doorway.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>Three things were broken. None of them flashy on their own, together, they explained the leak.</p>
        </div>
        <div style={{ marginTop: 64 }}>
          <OldPlatterAnnotated />
        </div>
        <div style={{ marginTop: 56 }}>
          <ConversionFunnel />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{gap: 16, marginTop: 56 }}>
          {issues.map((it) => (
            <div key={it.n} style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted, marginBottom: 24 }}>
                <span>ISSUE · {it.n}</span>
              </div>
              <div style={{ fontFamily: FP.display, fontSize: 22, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.4, color: PL.ink, marginBottom: 12 }}>{it.k}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: PL.ink2 }}>{it.body}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PeerCard({ idx, name, src }) {
  return (
    <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>
        <span>0{idx + 1} · {name}</span>
      </div>
      <div style={{ aspectRatio: "9 / 16", background: "#0c1320", borderRadius: 3, position: "relative", overflow: "hidden" }}>
        <img src={src} alt={`${name} homepage, static poster treatment`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );
}

function BenchmarkSection() {
  const peers = [
    { name: "Hotstar", src: "/hotstar.png" },
    { name: "JioCinema", src: "/jiocenima.png" },
    { name: "Netflix", src: "/netflix.png" },
    { name: "SonyLIV", src: "/sonyliv.png" },
  ];
  return (
    <section className="py-16 md:py-[100px]" style={{background: PL.bgDeep, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="02" label="The benchmark" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          What everyone <span style={{ fontStyle: "italic" }}>else</span> missed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{gap: 56, marginTop: 32 }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>I audited four major streaming and content platforms. Every single one treated homepage posters the same way, big image, text overlay, CTA button. The pattern was so universal that nobody was questioning whether it worked.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>The gap wasn't visual quality. It was <strong>interaction cost</strong>. Users were being asked to make a decision with almost no information. The poster gave them a mood, not a reason.</p>
        </div>
        <div style={{ marginTop: 56, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted, marginBottom: 16 }}>COMPETITOR AUDIT · TOP-OF-HOMEPAGE TREATMENT</div>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{gap: 12 }}>
          {peers.map((p, i) => <PeerCard key={i} idx={i} {...p} />)}
        </div>
      </Container>
    </section>
  );
}

function Glyph({ kind, color }) {
  if (kind === "static") {
    return (
      <svg viewBox="0 0 40 40" width="40" height="40">
        <rect x="11" y="6" width="18" height="28" fill="none" stroke={color} strokeWidth="1.6" />
        <circle cx="20" cy="16" r="3.5" fill={color} />
        <line x1="14" y1="26" x2="26" y2="26" stroke={color} strokeWidth="1.6" />
      </svg>
    );
  }
  if (kind === "motion") {
    return (
      <svg viewBox="0 0 40 40" width="40" height="40">
        <rect x="6" y="11" width="28" height="18" fill="none" stroke={color} strokeWidth="1.6" />
        <path d="M17 17 L17 23 L24 20 Z" fill={color} />
        <line x1="6" y1="11" x2="6" y2="29" stroke={color} strokeWidth="1.6" strokeDasharray="2 2" />
        <line x1="34" y1="11" x2="34" y2="29" stroke={color} strokeWidth="1.6" strokeDasharray="2 2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" width="40" height="40">
      <path d="M14 8 L14 26 L10 22 M14 26 L18 22" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="22" y="14" width="12" height="18" rx="2" fill="none" stroke={color} strokeWidth="1.6" />
      <circle cx="28" cy="20" r="1.5" fill={color} />
    </svg>
  );
}

function ChainNode({ label, sub, glyph, highlight }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ width: 96, height: 96, borderRadius: "50%", border: `1.5px solid ${highlight ? PL.accent : PL.ink}`, background: highlight ? PL.accent : "transparent", color: highlight ? "#fff" : PL.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Glyph kind={glyph} color={highlight ? "#fff" : PL.ink} />
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: FP.display, fontSize: 16, fontWeight: 600, letterSpacing: 0.5, color: PL.ink }}>{label}</div>
        <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.18em", color: PL.muted, marginTop: 4 }}>{sub}</div>
      </div>
    </div>
  );
}

function ExposureMini() {
  const path = "M14,90 C40,84 70,72 110,52 C150,34 190,24 230,20";
  return (
    <div>
      <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted, marginBottom: 8 }}>MERE EXPOSURE EFFECT</div>
      <div style={{ background: PL.bg, border: `1px solid ${PL.ruleSoft}`, padding: 16 }}>
        <svg viewBox="0 0 250 110" style={{ width: "100%", height: 110 }}>
          {[30, 50, 70, 90].map((y) => <line key={y} x1="14" x2="240" y1={y} y2={y} stroke={PL.ruleSoft} strokeDasharray="2 3" />)}
          <line x1="14" x2="240" y1="100" y2="100" stroke={PL.rule} />
          <line x1="14" x2="14" y1="14" y2="100" stroke={PL.rule} />
          <path d={path} fill="none" stroke={PL.accent} strokeWidth="2" />
          <path d={path + " L230,100 L14,100 Z"} fill={PL.accent} opacity="0.06" />
          <circle cx="50" cy="84" r="3" fill={PL.bg} stroke={PL.accent} strokeWidth="1.5" />
          <circle cx="110" cy="52" r="3" fill={PL.bg} stroke={PL.accent} strokeWidth="1.5" />
          <circle cx="190" cy="24" r="3" fill={PL.bg} stroke={PL.accent} strokeWidth="1.5" />
          <text x="14" y="110" fontFamily={FP.mono} fontSize="8" fill={PL.muted}>0s</text>
          <text x="220" y="110" fontFamily={FP.mono} fontSize="8" fill={PL.muted}>EXPOSURE</text>
          <text x="14" y="12" fontFamily={FP.mono} fontSize="8" fill={PL.muted}>PREFERENCE ↑</text>
        </svg>
      </div>
      <div style={{ fontSize: 12, color: PL.muted, marginTop: 8, lineHeight: 1.5 }}>Brief, passive exposure builds familiarity → familiarity builds preference.</div>
    </div>
  );
}

function HypothesisSection() {
  const nodes = [
    { label: "STATIC", sub: "Poster · 0s", glyph: "static" },
    { label: "MOTION", sub: "Preview · 2-3s", glyph: "motion" },
    { label: "INTENT", sub: "Tap · commit", glyph: "intent" },
  ];
  return (
    <section className="py-16 md:py-[100px]" style={{background: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="03" label="The hypothesis" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          What if the poster wasn't a <span style={{ fontStyle: "italic" }}>poster</span>, but a <span style={{ color: PL.accent }}>preview?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{gap: 56, marginTop: 32, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>Instead of a static frame, I explored turning the platter into a short, motion-driven preview, giving users a taste of the content before they committed. The goal was to reduce the decision cost to near zero.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>Research on the <strong>Mere Exposure Effect</strong> suggests that even brief, passive exposure increases familiarity and preference. A 2-3 second motion preview could do two things at once: inform the decision <em>and</em> build subconscious interest.</p>
        </div>
        <div style={{ marginTop: 64 }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 40, gap: 56, alignItems: "center" }}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr]" style={{gap: 0, alignItems: "center" }}>
              {nodes.map((n, i) => (
                <Fragment key={n.label}>
                  <ChainNode {...n} highlight={i === 2} />
                  {i < nodes.length - 1 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "0 12px" }}>
                      <span style={{ fontFamily: FP.mono, fontSize: 22, color: PL.accent, lineHeight: 1 }}>→</span>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <ExposureMini />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{gap: 16, marginTop: 48 }}>
          <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 28, borderLeft: `3px solid ${PL.accent}` }}>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.accent, marginBottom: 12 }}>↳ THE BET</div>
            <div style={{ fontFamily: FP.display, fontSize: 22, fontWeight: 500, lineHeight: 1.2, letterSpacing: -0.4, color: PL.ink }}>Static → Motion → Intent.</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.55, color: PL.ink2, marginTop: 10 }}>Lower the decision cost. Let the content sell itself in 2-3 seconds.</div>
          </div>
          <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 28, borderLeft: `3px solid ${PL.ink}` }}>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.ink, marginBottom: 12 }}>↳ THE CONSTRAINT</div>
            <div style={{ fontFamily: FP.display, fontSize: 22, fontWeight: 500, lineHeight: 1.2, letterSpacing: -0.4, color: PL.ink }}>Feel native, not like an ad.</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.55, color: PL.ink2, marginTop: 10 }}>If the motion felt like an interruption, it would backfire on trust.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ConstraintSketch({ kind, dont }) {
  const stroke = PL.ink;
  if (kind === "ratio") {
    return (
      <svg viewBox="0 0 160 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
        <rect x="2" y="2" width="156" height="86" fill="none" stroke={stroke} strokeWidth="1" />
        {dont ? (
          <g>
            <rect x="2" y="2" width="156" height="20" fill="#222" />
            <rect x="2" y="68" width="156" height="20" fill="#222" />
            <rect x="2" y="22" width="156" height="46" fill={PL.accent} opacity="0.35" />
            <text x="80" y="50" textAnchor="middle" fontFamily={FP.mono} fontSize="8" fill={PL.bad}>BLACK BARS</text>
          </g>
        ) : (
          <g>
            <rect x="2" y="2" width="156" height="86" fill={PL.accent} opacity="0.35" />
            <text x="80" y="48" textAnchor="middle" fontFamily={FP.mono} fontSize="8" fill={PL.good}>FILLS FRAME</text>
          </g>
        )}
      </svg>
    );
  }
  if (kind === "face") {
    return (
      <svg viewBox="0 0 160 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
        <rect x="2" y="2" width="156" height="86" fill="#1d2f46" />
        {dont ? (
          <g>
            <circle cx="80" cy="-5" r="42" fill="#c8856a" />
            <line x1="2" y1="14" x2="158" y2="14" stroke={PL.bad} strokeDasharray="3 3" />
            <text x="80" y="50" textAnchor="middle" fontFamily={FP.mono} fontSize="8" fill={PL.bad}>FOREHEAD CUT</text>
          </g>
        ) : (
          <g>
            <circle cx="80" cy="42" r="28" fill="#c8856a" />
            <circle cx="72" cy="38" r="2" fill="#3a2520" />
            <circle cx="88" cy="38" r="2" fill="#3a2520" />
            <path d="M72 50 Q80 54 88 50" stroke="#3a2520" strokeWidth="1.2" fill="none" />
          </g>
        )}
      </svg>
    );
  }
  if (kind === "cta") {
    return (
      <svg viewBox="0 0 160 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
        <rect x="2" y="2" width="156" height="86" fill={PL.accent} opacity="0.55" />
        {dont ? (
          <g>
            <text x="14" y="48" fontFamily={FP.display} fontSize="14" fontWeight="700" fill="#fff">TITLE</text>
            <rect x="14" y="38" width="58" height="20" fill="#fff" opacity="0.85" />
            <text x="43" y="52" textAnchor="middle" fontFamily={FP.body} fontSize="9" fontWeight="600" fill={PL.accent}>Watch</text>
            <text x="80" y="80" textAnchor="middle" fontFamily={FP.mono} fontSize="7" fill={PL.bad}>BUTTON ON TITLE</text>
          </g>
        ) : (
          <g>
            <text x="14" y="38" fontFamily={FP.display} fontSize="13" fontWeight="700" fill="#fff">TITLE</text>
            <rect x="14" y="64" width="58" height="16" fill="#fff" />
            <text x="43" y="76" textAnchor="middle" fontFamily={FP.body} fontSize="8" fontWeight="600" fill={PL.accent}>Watch</text>
          </g>
        )}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 160 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
      <rect x="2" y="2" width="156" height="86" fill="#fff" />
      <line x1="14" y1="58" x2="146" y2="58" stroke={PL.ink} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={i}>
          <line x1={14 + i * 22} y1="54" x2={14 + i * 22} y2="62" stroke={PL.ink} />
          <text x={14 + i * 22} y="74" textAnchor="middle" fontFamily={FP.mono} fontSize="7" fill={PL.muted}>{i}s</text>
        </g>
      ))}
      {dont ? (
        <g>
          <rect x="14" y="32" width={6 * 22} height="14" fill={PL.bad} opacity="0.85" />
          <text x="80" y="22" textAnchor="middle" fontFamily={FP.mono} fontSize="8" fill={PL.bad}>6s · USERS GONE</text>
        </g>
      ) : (
        <g>
          <rect x="14" y="32" width={2 * 22} height="14" fill={PL.good} opacity="0.85" />
          <text x="38" y="22" textAnchor="middle" fontFamily={FP.mono} fontSize="8" fill={PL.good}>2s · LANDS</text>
        </g>
      )}
    </svg>
  );
}

function labelFor(kind, dont) {
  const map = {
    ratio: dont ? "LETTERBOX" : "CLEAN FIT",
    face: dont ? "CROPPED" : "FRAMED",
    cta: dont ? "OVERLAP" : "SEPARATED",
    speed: dont ? "6s · TOO LONG" : "2s · LANDS",
  };
  return map[kind];
}

function DoDontCell({ kind, side }) {
  const dont = side === "dont";
  const c = dont ? PL.bad : PL.good;
  return (
    <div style={{ padding: 14, borderRight: dont ? `1px solid ${PL.ruleSoft}` : "none", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.25em", color: c }}>{dont ? "✕ DON'T" : "✓ DO"}</span>
        <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.15em", color: PL.muted }}>{labelFor(kind, dont)}</span>
      </div>
      <div style={{ aspectRatio: "16 / 9", background: PL.paper, border: `1px solid ${PL.ruleSoft}`, position: "relative", overflow: "hidden" }}>
        <ConstraintSketch kind={kind} dont={dont} />
      </div>
    </div>
  );
}

function ConstraintCard({ n, title, body, vis }) {
  return (
    <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: FP.display, fontSize: 18, fontWeight: 500, letterSpacing: -0.3, color: PL.ink }}>{title}</span>
        </div>
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: PL.ink2, marginBottom: 18, maxWidth: 480 }}>{body}</div>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{gap: 10, border: `1px solid ${PL.ruleSoft}`, background: PL.bg }}>
        <DoDontCell kind={vis} side="dont" />
        <DoDontCell kind={vis} side="do" />
      </div>
    </div>
  );
}

function ConstraintsSection() {
  const constraints = [
    { n: "01", title: "Aspect ratio", body: "The poster lives in a fixed container. Motion content had to fit without letterboxing or crops.", vis: "ratio" },
    { n: "02", title: "Face cropping", body: "Most poster art is face-heavy. A frame cutting an actor at the forehead kills the emotional hook.", vis: "face" },
    { n: "03", title: "CTA collision", body: "Buttons, titles, and metadata sit on top of the poster. Motion underneath can't fight with them.", vis: "cta" },
    { n: "04", title: "Browsing speed", body: "Users scroll fast. A preview has to register in 1-2s or it's wasted effort. Long animations are a liability.", vis: "speed" },
  ];
  return (
    <section className="py-16 md:py-[100px]" style={{background: PL.bgDeep, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="04" label="The constraints" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          Designing around <span style={{ fontStyle: "italic" }}>real</span> constraints
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: PL.ink2, maxWidth: 720, marginTop: 24 }}>This wasn't a blank canvas. The homepage has rules, and the poster has to survive them all.</p>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{gap: 16, marginTop: 56 }}>
          {constraints.map((c) => <ConstraintCard key={c.n} {...c} />)}
        </div>
      </Container>
    </section>
  );
}

function SpecFrame({ ratio, label, dims, detail, src, highlight = false }) {
  return (
    <div style={{ position: "relative", padding: "32px 56px 32px 32px" }}>
      <div style={{ width: "100%", aspectRatio: ratio, background: "#0c1320", borderRadius: 6, position: "relative", overflow: "hidden", border: highlight ? `2px solid ${PL.accent}` : "none" }}>
        <img src={src} alt={`${label}, ${detail}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        {highlight && <div style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: "50%", background: PL.accent }} />}
      </div>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: highlight ? PL.accent : PL.muted }}>{label}</div>
          <div style={{ fontFamily: FP.display, fontSize: 28, fontWeight: 500, color: PL.ink, letterSpacing: -0.5, marginTop: 4 }}>{dims}</div>
        </div>
        <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted, textAlign: "right" }}>{detail}</div>
      </div>
    </div>
  );
}

function SolutionSection() {
  return (
    <section className="py-16 md:py-[100px]" style={{background: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="05" label="The solution" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          A <span style={{ color: PL.accent }}>two-ratio</span> system
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{gap: 56, marginTop: 32, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>I designed a system that adapts the poster into two states, a <strong>static ratio</strong> for the default view and a <strong>motion ratio</strong> for the preview, and transitions between them seamlessly.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>The static state works exactly like the current poster: clean, art-directed, optimized for the hero slot. The motion state activates on pause, expanding the aspect ratio to accommodate a video preview without disrupting layout.</p>
        </div>
        <div style={{ marginTop: 64 }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]" style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 48, gap: 40, alignItems: "center" }}>
            <SpecFrame ratio="2 / 3" label="STATE 01 · STATIC" dims="2 : 3" detail="DEFAULT · POSTER" src="/2_poster_preview.png" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <svg width="32" height="14" viewBox="0 0 32 14" fill="none" stroke={PL.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="7" x2="28" y2="7" />
                <polyline points="23 2 29 7 23 12" />
              </svg>
              <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>ON DWELL</span>
              <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>≈ 2.5s</span>
            </div>
            <SpecFrame ratio="2 / 3" label="STATE 02 · MOTION" dims="1 : 1" detail="ACTIVE · PREVIEW" src="/2_video_preview.png" highlight />
          </div>
        </div>
      </Container>
    </section>
  );
}

function StoryPhone({ src, alt }) {
  return (
    <div style={{ width: 160, aspectRatio: "9 / 18", background: "#000", borderRadius: 20, padding: 6, position: "relative" }}>
      <div style={{ width: "100%", height: "100%", background: "#0c1320", borderRadius: 15, position: "relative", overflow: "hidden" }}>
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 32, height: 8, background: "#000", borderRadius: 4 }} />
      </div>
    </div>
  );
}

function StoryFrame({ frame }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted }}>
        <span>FRAME · {frame.n}</span>
        <span>{frame.title.toUpperCase()}</span>
      </div>
      <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 18, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <StoryPhone src={frame.src} alt={`STAGE platter, ${frame.title.toLowerCase()} state`} />
      </div>
      <div>
        <div style={{ fontFamily: FP.display, fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase", color: PL.accent, marginBottom: 8 }}>{frame.principle}</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.6, color: PL.ink2 }}>{frame.caption}</div>
      </div>
    </div>
  );
}

function PrinciplesSection() {
  const frames = [
    { n: "01", title: "Scrolling", principle: "Poster earns attention first", caption: "The static frame still does the heavy lifting for first impressions. Motion is additive, not a replacement.", src: "/2_default.png" },
    { n: "02", title: "Pause", principle: "Movement becomes the preview", caption: 'A 2-3s clip answers "is this for me?" passively. The content comes to the user, not the other way around.', src: "/2_transition.png" },
    { n: "03", title: "Tap", principle: "Reward, not interruption", caption: "Motion only triggers when behavior suggests interest. It respects the browsing flow instead of hijacking it.", src: "/2_with_video.png" },
  ];
  return (
    <section className="py-16 md:py-[100px]" style={{background: PL.bgDeep, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="06" label="Why this works" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 880 }}>
          Three frames of an interaction
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: PL.ink2, maxWidth: 720, marginTop: 24 }}>The principles guiding the design, read as a storyboard rather than a list.</p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr]" style={{ marginTop: 48, gap: 0, alignItems: "stretch" }}>
          {frames.map((f, i) => (
            <Fragment key={f.n}>
              <StoryFrame frame={f} />
              {i < frames.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px" }}>
                  <div style={{ fontFamily: FP.mono, fontSize: 22, color: PL.accent }}>→</div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MetricCard({ value, label, caption, before, after }) {
  const [v, setV] = useState(0);
  const [bA, setBa] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) setTimeout(() => { setV(value); setBa(1); }, 100);
    }, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  const maxBar = Math.max(before, after);
  const beforeW = (before / maxBar) * 100;
  const afterW = (after / maxBar) * 100;

  return (
    <div ref={ref} style={{ background: "#0e1622", border: "1px solid #27323f", padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontFamily: FP.display, fontSize: 88, fontWeight: 500, lineHeight: 0.85, letterSpacing: -3, color: PL.accent }}>{Math.round(v)}</span>
        <span style={{ fontFamily: FP.display, fontSize: 40, fontWeight: 500, color: PL.accent }}>%</span>
        <span style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: PL.muted, marginLeft: 8 }}>↑</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: "#666", marginBottom: 4 }}>
            <span>BEFORE</span><span>{before}%</span>
          </div>
          <div style={{ height: 6, background: "#1d2f46" }}>
            <div style={{ width: `${bA * beforeW}%`, height: "100%", background: "#555", transition: "width 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.accent, marginBottom: 4 }}>
            <span>AFTER</span><span>{after}%</span>
          </div>
          <div style={{ height: 6, background: "#1d2f46" }}>
            <div style={{ width: `${bA * afterW}%`, height: "100%", background: PL.accent, transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)" }} />
          </div>
        </div>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.55, color: "#999" }}>{caption}</div>
    </div>
  );
}

function ImpactSection() {
  const metrics = [
    { value: 20, label: "PREVIEW ENGAGEMENT", caption: "More users interacted with the poster rather than scrolling past it.", before: 12, after: 32 },
    { value: 60, label: "PREVIEW → TAP", caption: "Of users who saw the motion preview tapped into content, vs a much lower static rate.", before: 22, after: 60 },
    { value: 15, label: "BOUNCE REDUCTION", caption: "Users stayed on the homepage longer and explored more before leaving.", before: 38, after: 23 },
  ];
  return (
    <section className="py-16 md:py-[100px]" style={{background: PL.ink, color: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="07" label="Results" light />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, maxWidth: 880 }}>
          The directional <span style={{ color: PL.accent }}>signal</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#aaa", maxWidth: 720, marginTop: 24 }}>I tested the redesigned poster against the original across a 7-day A/B test on the STAGE platform.</p>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{gap: 16, marginTop: 64 }}>
          {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
        </div>
        <div style={{ marginTop: 32, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#666", textAlign: "right" }}>↳ 7-DAY A/B TEST · ~12K USERS · STAGE PLATFORM</div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]" style={{ marginTop: 56, padding: "32px 0 0", borderTop: "1px solid #27323f", gap: 32 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: "#777" }}>HONEST · NOTE</div>
          <div style={{ fontSize: 15, lineHeight: 1.55, color: "#bbb", maxWidth: 820 }}>
            These are early numbers from a single test cycle. The sample is meaningful but not conclusive, I'd want to run this across content categories and geographies before calling it proven. But the directional signal is strong: <span style={{ color: PL.bg }}>reducing decision cost works.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CaseFooter() {
  return (
    <section className="pt-16 pb-12 md:pt-[100px] md:pb-[60px]" style={{background: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted, marginBottom: 16 }}>END · OF · CASE</div>
            <div style={{ fontFamily: FP.display, fontSize: 36, fontWeight: 500, letterSpacing: -1, color: PL.ink }}>Thanks for reading.</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/" data-cursor="hover" style={{ padding: "12px 20px", border: `1px solid ${PL.ink}`, color: PL.ink, textDecoration: "none", fontFamily: FP.body, fontSize: 13, fontWeight: 500 }}>← All work</Link>
            <Link href="/#contact" data-cursor="hover" style={{ padding: "12px 20px", background: PL.accent, color: PL.paper, textDecoration: "none", fontFamily: FP.body, fontSize: 13, fontWeight: 600 }}>Get in touch →</Link>
          </div>
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: `1px solid ${PL.ruleSoft}`, display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted }}>
          <span>PRERNA · 2024</span>
          <Link href="/case-stage" style={{ color: PL.ink2, textDecoration: "none" }} data-cursor="hover">← PREV · STAGE · DISCOVERY</Link>
        </div>
      </Container>
    </section>
  );
}

export default function PlatterCase() {
  return (
    <div style={{ background: PL.bg, color: PL.ink, fontFamily: FP.body, minHeight: "100vh" }}>
      <CaseNav />
      <CaseHero />
      <HeroVisual />
      <ProblemSection />
      <BenchmarkSection />
      <HypothesisSection />
      <ConstraintsSection />
      <SolutionSection />
      <PrinciplesSection />
      <ImpactSection />
      <CaseFooter />
    </div>
  );
}
