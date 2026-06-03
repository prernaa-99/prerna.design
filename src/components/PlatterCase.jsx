import { useState, useEffect, useRef, Fragment } from 'react';

const PL = {
  bg: "#f0eee9",
  bgDeep: "#e8e6e0",
  paper: "#ffffff",
  ink: "#1a1a1a",
  ink2: "#3d3d3d",
  muted: "#8a8a85",
  rule: "#d4d2cc",
  ruleSoft: "#e0ddd6",
  accent: "#C8553D",
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
  return <div style={{ maxWidth: PL_MAX, margin: "0 auto", padding: "0 32px", width: "100%", ...style }}>{children}</div>;
}

function SectionMark({ num, label, light = false }) {
  const c = light ? "#9c9c97" : PL.muted;
  const r = light ? "#3a3a38" : PL.rule;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: c, marginBottom: 24 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: r }} />
      <span>§{num}</span>
      <span>·</span>
      <span>{label.toUpperCase()}</span>
    </div>
  );
}

function CaseNav() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10, background: `${PL.bg}ee`, backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: `1px solid ${PL.ruleSoft}` }}>
      <Container style={{ padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: PL.ink, fontFamily: "inherit" }} data-cursor="hover">
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, background: PL.ink, color: PL.bg, fontFamily: FP.display, fontSize: 16, fontWeight: 600, borderRadius: 4 }}>P</span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1, alignItems: "flex-start" }}>
            <span style={{ fontFamily: FP.display, fontSize: 15, fontWeight: 600 }}>Prerna</span>
            <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.18em", color: PL.muted, marginTop: 3 }}>PRODUCT DESIGNER</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.18em" }}>
          <a href="#case-stage" style={{ color: PL.muted, textDecoration: "none" }} data-cursor="hover">← PREV · DISCOVERY</a>
          <span style={{ color: PL.rule }}>|</span>
          <a href="#" style={{ color: PL.ink2, textDecoration: "none" }} data-cursor="hover">INDEX</a>
        </div>
      </Container>
    </div>
  );
}

function CaseHero() {
  return (
    <section style={{ padding: "80px 0 60px", borderBottom: `1px solid ${PL.rule}` }}>
      <Container>
        <div style={{ display: "flex", gap: 16, alignItems: "center", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted, marginBottom: 32 }}>
          <span style={{ width: 24, height: 1, background: PL.rule }} />
          <span>STAGE · OTT PLATFORM</span>
          <span style={{ width: 24, height: 1, background: PL.rule }} />
          <span>2024 · CASE 02</span>
        </div>
        <h1 style={{ fontFamily: FP.display, fontSize: "clamp(44px, 6.4vw, 96px)", fontWeight: 500, lineHeight: 0.95, letterSpacing: -2.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          Turning <span style={{ fontStyle: "italic" }}>static</span> into<br />
          <span style={{ color: PL.accent }}>intent.</span>
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: PL.ink2, maxWidth: 720, marginTop: 32 }}>
          Redesigning STAGE's homepage poster from a passive visual into an interactive preview experience that drives content discovery.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 56, borderTop: `1px solid ${PL.rule}`, borderBottom: `1px solid ${PL.rule}` }}>
          {[
            ["ROLE", "Product Designer"],
            ["TEAM", "2 PM · 1 Eng · Me"],
            ["TIMELINE", "1d design · 7d test"],
            ["IMPACT", "+19.6% preview→content"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: "20px 24px", borderRight: i < 3 ? `1px solid ${PL.rule}` : "none" }}>
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
      <div style={{ width: 288, aspectRatio: "9 / 19", background: "#000", borderRadius: 36, padding: 7, position: "relative", boxShadow: "0 60px 120px rgba(0,0,0,0.6), 0 20px 40px rgba(0,0,0,0.4)" }}>
        <div style={{ width: "100%", height: "100%", background: "#0c0a09", borderRadius: 30, position: "relative", overflow: "hidden", color: "#fff" }}>
          <img src="/platter_image_1.jpg" alt="STAGE app — static poster morphing into motion preview" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
    <section style={{ padding: "72px 0", background: "#0c0a09", borderBottom: `1px solid ${PL.ink}` }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: "#888" }}>FIG. 00 · BEFORE / AFTER · ONE FRAME, TWO STATES</div>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#666" }}>STATIC ─────→ MOTION</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 64, alignItems: "center" }}>
          <SplitPhoneHero />
          <div style={{ display: "flex", flexDirection: "column", gap: 36, color: "#ddd" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: "#777" }}>LEFT · STATE 01</span>
                <span style={{ flex: 1, height: 1, background: "#2a2a2a" }} />
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#555" }}>2:3</span>
              </div>
              <div style={{ fontFamily: FP.display, fontSize: 30, fontWeight: 500, letterSpacing: -0.6, marginBottom: 10, color: "#fff" }}>Static poster</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#999", maxWidth: 460 }}>Wallpaper. Familiar. Earns the first glance, then asks the user to commit blind.</div>
            </div>
            <div style={{ height: 1, background: "#2a2a2a" }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.accent }}>RIGHT · STATE 02</span>
                <span style={{ flex: 1, height: 1, background: "#2a2a2a" }} />
                <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.accent }}>1:1</span>
              </div>
              <div style={{ fontFamily: FP.display, fontSize: 30, fontWeight: 500, letterSpacing: -0.6, marginBottom: 10, color: "#fff" }}>Motion preview</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#999", maxWidth: 460 }}>The decision cost drops to near zero — a 2-3s clip answers "is this for me?"</div>
            </div>
            <div style={{ marginTop: 8, padding: "16px 20px", border: "1px solid #2a2a2a", background: "#161311", fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", color: "#aaa", lineHeight: 1.5 }}>
              <span style={{ color: PL.accent }}>↳</span> ONE SLOT · ONE MORPH · ZERO ADDED TAPS
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Marker({ letter, top, left }) {
  return (
    <div style={{ position: "absolute", top, left, transform: "translate(-50%, -50%)", zIndex: 3 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: PL.bad, color: "#fff", fontFamily: FP.mono, fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(196,69,69,0.4)" }}>{letter}</div>
    </div>
  );
}

function AnnotatedPhone() {
  return (
    <div style={{ position: "relative", width: 220 }}>
      <div style={{ width: 220, aspectRatio: "9 / 19", background: "#000", borderRadius: 26, padding: 6, opacity: 0.85, filter: "saturate(0.55) contrast(1.05)" }}>
        <div style={{ width: "100%", height: "100%", background: "#0c0a09", borderRadius: 21, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 60, height: 14, background: "#000", borderRadius: 8 }} />
          <div style={{ position: "absolute", top: 30, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: FP.display, color: "#fff", fontSize: 13, fontWeight: 700 }}>STAGE</div>
            <div style={{ color: "#bbb", fontSize: 10 }}>⌕</div>
          </div>
          <div style={{ position: "absolute", top: 54, left: 10, right: 10, display: "flex", gap: 9, fontSize: 8, color: "#888" }}>
            <span style={{ color: "#fff", borderBottom: `1.5px solid ${PL.accent}`, paddingBottom: 3 }}>Home</span>
            <span>Movies</span>
            <span>Serials</span>
            <span>Live</span>
          </div>
          <div style={{ position: "absolute", top: 76, left: 10, right: 10, aspectRatio: "2 / 3", background: "linear-gradient(180deg, #4d2218, #1a0c0a)", borderRadius: 5 }}>
            <div style={{ position: "absolute", top: "32%", left: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", background: "radial-gradient(circle, #c8856a, #6a2c1c)" }} />
            <div style={{ position: "absolute", bottom: 8, left: 8, fontFamily: FP.display, fontSize: 11, fontWeight: 700, color: "#fff" }}>Aakhri</div>
          </div>
          <div style={{ position: "absolute", top: "61.5%", left: 10, right: 10, height: 18, background: "rgba(255,255,255,0.92)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 600, color: "#111" }}>Watch now</div>
          <div style={{ position: "absolute", top: "72%", left: 10, fontFamily: FP.body, fontSize: 8, color: "#aaa" }}>Continue watching</div>
          <div style={{ position: "absolute", top: "75%", left: 10, right: 10, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ aspectRatio: "3 / 4", background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)", borderRadius: 2 }} />
            ))}
          </div>
        </div>
      </div>
      <Marker letter="A" top="22%" left="35%" />
      <Marker letter="B" top="59%" left="62%" />
      <Marker letter="C" top="66%" left="22%" />
    </div>
  );
}

function OldPlatterAnnotated() {
  const annotations = [
    { label: "Generic poster", note: "Same frame for everyone. No personalization signal — taste, history, language all ignored." },
    { label: "Cluttered hierarchy", note: "Poster fights with surrounding chrome. Nothing dominates; the eye has nowhere to land." },
    { label: "Dead-end CTA", note: "Tap and commit. No way to preview the content first — decisions made blind." },
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
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 0 }}>
        <div style={{ padding: "32px 36px", background: "#fafaf6", borderRight: `1px solid ${PL.rule}`, position: "relative" }}>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: `1px solid ${PL.rule}`, background: "#fbf8f3" }}>
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
    { label: "Saw platter", value: 100, color: PL.ink2 },
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
          <div key={s.label} style={{ display: "grid", gridTemplateColumns: "180px 1fr 90px", gap: 16, alignItems: "center" }}>
            <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", color: PL.ink, textTransform: "uppercase" }}>{String(i + 1).padStart(2, "0")} · {s.label}</div>
            <div style={{ position: "relative", height: 30, background: PL.bg, border: `1px solid ${PL.ruleSoft}` }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${s.value}%`, background: s.color, transition: "width 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
              {i > 0 && <div style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontFamily: FP.mono, fontSize: 10, color: PL.bad, letterSpacing: "0.15em" }}>−{(steps[i - 1].value - s.value).toFixed(1)} pts</div>}
            </div>
            <div style={{ fontFamily: FP.display, fontSize: 22, fontWeight: 500, color: i === 0 ? PL.ink : PL.bad, textAlign: "right", letterSpacing: -0.5 }}>{s.value}%</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px dashed ${PL.rule}`, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.18em", color: PL.muted, display: "flex", justifyContent: "space-between" }}>
        <span>↳ ~80% OF VIEWERS NEVER TAPPED THE HERO SLOT</span>
        <span>SOURCE · INTERNAL ANALYTICS · 30D</span>
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
    <section style={{ padding: "100px 0", background: PL.bg }}>
      <Container>
        <SectionMark num="01" label="The problem" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 880 }}>
          The <span style={{ background: PL.highlight, padding: "0 8px" }}>19.6%</span> problem
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, marginTop: 40, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>STAGE's homepage poster looked good but wasn't doing its job. Only a fraction of users who saw it actually tapped through to content. The data told a clear story: the poster was <em>wallpaper</em>, not a doorway.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>Three things were broken. None of them flashy on their own — together, they explained the leak.</p>
        </div>
        <div style={{ marginTop: 64 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: PL.muted, marginBottom: 16 }}>FIG. 01 · OLD HOMEPAGE · ANNOTATED</div>
          <OldPlatterAnnotated />
        </div>
        <div style={{ marginTop: 56 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: PL.muted, marginBottom: 16 }}>FIG. 02 · PLATTER CONVERSION FUNNEL · BASELINE</div>
          <ConversionFunnel />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 56 }}>
          {issues.map((it) => (
            <div key={it.n} style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted, marginBottom: 24 }}>
                <span>ISSUE · {it.n}</span>
                <span style={{ color: PL.bad }}>✕</span>
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

function PeerCard({ idx, hue }) {
  return (
    <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 10, filter: "saturate(0.4)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>
        <span>0{idx + 1}</span>
        <span>STATIC</span>
      </div>
      <div style={{ aspectRatio: "9 / 16", background: "#0c0a09", borderRadius: 3, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 6, left: 6, right: 6, display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: 24, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
          <div style={{ width: 10, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
        </div>
        <div style={{ position: "absolute", top: 18, left: 5, right: 5, aspectRatio: "2 / 3", background: `linear-gradient(180deg, ${hue}, #181818)`, borderRadius: 2 }}>
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: "45%", aspectRatio: "1/1", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: 8, left: 6, right: 6, height: 5, background: "rgba(255,255,255,0.7)", borderRadius: 1 }} />
          <div style={{ position: "absolute", bottom: 18, left: 6, width: "55%", height: 4, background: "rgba(255,255,255,0.5)", borderRadius: 1 }} />
        </div>
        <div style={{ position: "absolute", bottom: 18, left: 5, right: 5, height: 9, background: "rgba(255,255,255,0.85)", borderRadius: 2 }} />
        <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 2 }}>
          {[0, 1, 2].map((j) => <div key={j} style={{ width: j === 0 ? 6 : 2, height: 2, borderRadius: 1, background: j === 0 ? "#fff" : "rgba(255,255,255,0.4)" }} />)}
        </div>
      </div>
    </div>
  );
}

function BenchmarkSection() {
  const peers = [
    { hue: "#3a4a6a" }, { hue: "#6a3a4a" }, { hue: "#5a4a3a" }, { hue: "#3a5a4a" },
    { hue: "#4a3a5a" }, { hue: "#5a3a3a" }, { hue: "#3a5a5a" }, { hue: "#5a5a3a" },
  ];
  return (
    <section style={{ padding: "100px 0", background: PL.bgDeep, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="02" label="The benchmark" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          What everyone <span style={{ fontStyle: "italic" }}>else</span> missed
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, marginTop: 32 }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>I audited eight major streaming and content platforms. Every single one treated homepage posters the same way — big image, text overlay, CTA button. The pattern was so universal that nobody was questioning whether it worked.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>The gap wasn't visual quality. It was <strong>interaction cost</strong>. Users were being asked to make a decision with almost no information. The poster gave them a mood, not a reason.</p>
        </div>
        <div style={{ marginTop: 56, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted, marginBottom: 16 }}>FIG. 03 · COMPETITOR AUDIT · TOP-OF-HOMEPAGE TREATMENT</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {peers.map((p, i) => <PeerCard key={i} idx={i} {...p} />)}
        </div>
        <div style={{ marginTop: 32, padding: "20px 24px", background: PL.paper, border: `1px solid ${PL.rule}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: FP.display, fontSize: 24, fontWeight: 500, letterSpacing: -0.5, color: PL.ink }}>8 platforms. Same pattern. Same problem.</div>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted }}>↳ NOBODY WAS QUESTIONING IT</div>
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
    <section style={{ padding: "100px 0", background: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="03" label="The hypothesis" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          What if the poster wasn't a <span style={{ fontStyle: "italic" }}>poster</span> — but a <span style={{ color: PL.accent }}>preview?</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, marginTop: 32, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>Instead of a static frame, I explored turning the platter into a short, motion-driven preview — giving users a taste of the content before they committed. The goal was to reduce the decision cost to near zero.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>Research on the <strong>Mere Exposure Effect</strong> suggests that even brief, passive exposure increases familiarity and preference. A 2-3 second motion preview could do two things at once: inform the decision <em>and</em> build subconscious interest.</p>
        </div>
        <div style={{ marginTop: 64 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: PL.muted, marginBottom: 24 }}>FIG. 04 · THE BET</div>
          <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 0, alignItems: "center" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 48 }}>
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
        <rect x="2" y="2" width="156" height="86" fill="#3a2520" />
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
          <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted, padding: "3px 7px", border: `1px solid ${PL.rule}` }}>C · {n}</span>
          <span style={{ fontFamily: FP.display, fontSize: 18, fontWeight: 500, letterSpacing: -0.3, color: PL.ink }}>{title}</span>
        </div>
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: PL.ink2, marginBottom: 18, maxWidth: 480 }}>{body}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, border: `1px solid ${PL.ruleSoft}`, background: PL.bg }}>
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
    <section style={{ padding: "100px 0", background: PL.bgDeep, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="04" label="The constraints" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          Designing around <span style={{ fontStyle: "italic" }}>real</span> constraints
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: PL.ink2, maxWidth: 720, marginTop: 24 }}>This wasn't a blank canvas. The homepage has rules, and the poster has to survive them all.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 56 }}>
          {constraints.map((c) => <ConstraintCard key={c.n} {...c} />)}
        </div>
      </Container>
    </section>
  );
}

function SpecFrame({ ratio, label, dims, detail, highlight = false }) {
  return (
    <div style={{ position: "relative", padding: "32px 56px 32px 32px" }}>
      <div style={{ width: "100%", aspectRatio: ratio, background: highlight ? "radial-gradient(120% 80% at 30% 40%, #8a3a26 0%, #2b1410 60%, #0e0908 100%)" : "linear-gradient(180deg, #4d2218, #1a0c0a)", borderRadius: 6, position: "relative", overflow: "hidden", border: highlight ? `2px solid ${PL.accent}` : "none" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 70, height: 70, borderRadius: "50%", background: "radial-gradient(circle, #c8856a, #6a2c1c)" }} />
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

function ContentMiniFrame({ ratio, kind, state }) {
  const bg = kind === "face"
    ? "linear-gradient(180deg, #4d2218, #1a0c0a)"
    : kind === "landscape"
      ? "linear-gradient(180deg, #3a4a3a, #142018)"
      : "linear-gradient(180deg, #2a2a4a, #14142a)";
  return (
    <div style={{ width: "100%", aspectRatio: ratio, background: bg, borderRadius: 4, position: "relative", overflow: "hidden", border: state === "motion" ? `1px solid ${PL.accent}` : "none" }}>
      {kind === "face" && (
        <div style={{ position: "absolute", top: state === "motion" ? "32%" : "26%", left: "50%", transform: "translate(-50%,-50%)", width: 36, height: 36, borderRadius: "50%", background: "radial-gradient(circle, #c8856a, #6a2c1c)" }} />
      )}
      {kind === "landscape" && (
        <div>
          <div style={{ position: "absolute", left: 0, right: 0, top: state === "motion" ? "55%" : "60%", height: 1, background: "#8aa68a" }} />
          <div style={{ position: "absolute", left: "20%", top: state === "motion" ? "40%" : "45%", width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "12px solid #5a7a5a" }} />
          <div style={{ position: "absolute", left: "55%", top: state === "motion" ? "45%" : "50%", width: 0, height: 0, borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderBottom: "16px solid #4a6a4a" }} />
        </div>
      )}
      {kind === "text" && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 4, padding: 6 }}>
          <div style={{ width: "70%", height: 5, background: "rgba(255,255,255,0.85)", borderRadius: 1 }} />
          <div style={{ width: "50%", height: 4, background: "rgba(255,255,255,0.5)", borderRadius: 1 }} />
          <div style={{ width: "60%", height: 4, background: "rgba(255,255,255,0.5)", borderRadius: 1 }} />
        </div>
      )}
      {state === "motion" && <div style={{ position: "absolute", top: 4, right: 4, width: 6, height: 6, borderRadius: "50%", background: PL.accent }} />}
      <div style={{ position: "absolute", bottom: 4, left: 4, fontFamily: FP.mono, fontSize: 7, letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)" }}>{state === "motion" ? "1:1" : "2:3"}</div>
    </div>
  );
}

function ContentRun({ kind, label, detail }) {
  return (
    <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted }}>
        <span>{label.toUpperCase()}</span>
        <span>{detail.toUpperCase()}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <ContentMiniFrame ratio="2 / 3" kind={kind} state="static" />
        <ContentMiniFrame ratio="1 / 1" kind={kind} state="motion" />
      </div>
      <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.18em", color: PL.muted }}>
        <span>2:3</span><span style={{ color: PL.accent }}>→ 1:1</span>
      </div>
    </div>
  );
}

function SolutionSection() {
  return (
    <section style={{ padding: "100px 0", background: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="05" label="The solution" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          A <span style={{ color: PL.accent }}>two-ratio</span> system
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, marginTop: 32, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>I designed a system that adapts the poster into two states — a <strong>static ratio</strong> for the default view and a <strong>motion ratio</strong> for the preview — and transitions between them seamlessly.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>The static state works exactly like the current poster: clean, art-directed, optimized for the hero slot. The motion state activates on pause, expanding the aspect ratio to accommodate a video preview without disrupting layout.</p>
        </div>
        <div style={{ marginTop: 64 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: PL.muted, marginBottom: 24 }}>FIG. 05 · TWO-RATIO SPEC · 2:3 → 1:1</div>
          <div style={{ background: PL.paper, border: `1px solid ${PL.rule}`, padding: 48, display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "center" }}>
            <SpecFrame ratio="2 / 3" label="STATE 01 · STATIC" dims="2 : 3" detail="DEFAULT · POSTER" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: FP.mono, fontSize: 32, color: PL.accent, lineHeight: 1 }}>→</span>
              <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>ON DWELL</span>
              <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>≈ 2.5s</span>
            </div>
            <SpecFrame ratio="1 / 1" label="STATE 02 · MOTION" dims="1 : 1" detail="ACTIVE · PREVIEW" highlight />
          </div>
        </div>
        <div style={{ marginTop: 56 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: PL.muted, marginBottom: 16 }}>FIG. 06 · SYSTEM ACROSS CONTENT TYPES · 3 RUNS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <ContentRun kind="face" label="Face-heavy" detail="Romance · drama" />
            <ContentRun kind="landscape" label="Landscape-heavy" detail="Action · scenic" />
            <ContentRun kind="text" label="Text-heavy" detail="News · title card" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function StoryPhone({ state }) {
  const ratio = state === "motion" ? "1 / 1" : "2 / 3";
  return (
    <div style={{ width: 160, aspectRatio: "9 / 18", background: "#000", borderRadius: 20, padding: 6, position: "relative" }}>
      <div style={{ width: "100%", height: "100%", background: "#0c0a09", borderRadius: 15, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 32, height: 8, background: "#000", borderRadius: 4 }} />
        <div style={{ position: "absolute", top: 22, left: 10, fontFamily: FP.display, fontSize: 10, fontWeight: 700, color: "#fff" }}>STAGE</div>
        <div style={{ position: "absolute", top: 40, left: 10, right: 10, aspectRatio: ratio, background: state === "motion" ? "radial-gradient(120% 80% at 30% 40%, #8a3a26, #1a0c0a)" : "linear-gradient(180deg, #4d2218, #1a0c0a)", borderRadius: 4, transition: "aspect-ratio 0.4s", position: "relative" }}>
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 28, height: 28, borderRadius: "50%", background: "radial-gradient(circle, #c8856a, #6a2c1c)" }} />
          {state === "motion" && <div style={{ position: "absolute", top: 4, right: 4, width: 5, height: 5, borderRadius: "50%", background: PL.accent }} />}
          {state === "tap" && (
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: PL.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10 }}>▶</div>
            </div>
          )}
        </div>
        <div style={{ position: "absolute", bottom: 30, left: 10, right: 10, display: "flex", justifyContent: "center" }}>
          <div style={{ background: state === "tap" ? PL.accent : "rgba(255,255,255,0.95)", color: state === "tap" ? "#fff" : "#111", padding: "4px 16px", fontSize: 8, fontWeight: 600, borderRadius: 3 }}>Watch</div>
        </div>
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
        <StoryPhone state={frame.state} />
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
    { n: "01", title: "Scrolling", principle: "Poster earns attention first", caption: "The static frame still does the heavy lifting for first impressions. Motion is additive, not a replacement.", state: "static" },
    { n: "02", title: "Pause", principle: "Movement becomes the preview", caption: 'A 2-3s clip answers "is this for me?" passively. The content comes to the user, not the other way around.', state: "motion" },
    { n: "03", title: "Tap", principle: "Reward, not interruption", caption: "Motion only triggers when behavior suggests interest. It respects the browsing flow instead of hijacking it.", state: "tap" },
  ];
  return (
    <section style={{ padding: "100px 0", background: PL.bgDeep, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="06" label="Why this works" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 880 }}>
          Three frames of an interaction
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: PL.ink2, maxWidth: 720, marginTop: 24 }}>The principles guiding the design, read as a storyboard rather than a list.</p>
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 0, alignItems: "stretch" }}>
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
    <div ref={ref} style={{ background: "#0e0e0e", border: "1px solid #2a2a2a", padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
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
          <div style={{ height: 6, background: "#1a1a1a" }}>
            <div style={{ width: `${bA * beforeW}%`, height: "100%", background: "#555", transition: "width 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.accent, marginBottom: 4 }}>
            <span>AFTER</span><span>{after}%</span>
          </div>
          <div style={{ height: 6, background: "#1a1a1a" }}>
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
    { value: 60, label: "PREVIEW → TAP", caption: "Of users who saw the motion preview tapped into content — vs a much lower static rate.", before: 22, after: 60 },
    { value: 15, label: "BOUNCE REDUCTION", caption: "Users stayed on the homepage longer and explored more before leaving.", before: 38, after: 23 },
  ];
  return (
    <section style={{ padding: "100px 0", background: PL.ink, color: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="07" label="Results" light />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, maxWidth: 880 }}>
          The directional <span style={{ color: PL.accent }}>signal</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#aaa", maxWidth: 720, marginTop: 24 }}>I tested the redesigned poster against the original across a 7-day A/B test on the STAGE platform.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 64 }}>
          {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
        </div>
        <div style={{ marginTop: 32, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: "#666", textAlign: "right" }}>↳ 7-DAY A/B TEST · ~12K USERS · STAGE PLATFORM</div>
        <div style={{ marginTop: 56, padding: "32px 0 0", borderTop: "1px solid #2a2a2a", display: "grid", gridTemplateColumns: "auto 1fr", gap: 32 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: "#777" }}>HONEST · NOTE</div>
          <div style={{ fontSize: 15, lineHeight: 1.55, color: "#bbb", maxWidth: 820 }}>
            These are early numbers from a single test cycle. The sample is meaningful but not conclusive — I'd want to run this across content categories and geographies before calling it proven. But the directional signal is strong: <span style={{ color: PL.bg }}>reducing decision cost works.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProfileBlob({ name, tags }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", border: `1.5px dashed ${PL.ink}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FP.mono, fontSize: 12, color: PL.ink }}>{name.split(" ")[2]}</div>
      <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted }}>{name}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {tags.map((t) => <span key={t} style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.1em", padding: "3px 7px", border: `1px solid ${PL.rule}`, color: PL.ink2 }}>{t}</span>)}
      </div>
    </div>
  );
}

function SketchClip({ kind, label }) {
  const isA = kind === "A";
  return (
    <div>
      <div style={{ aspectRatio: "1 / 1", background: isA ? "linear-gradient(180deg, #6a2c1c, #1a0c0a)" : "linear-gradient(180deg, #3a4a3a, #14201a)", borderRadius: 6, border: `1.5px dashed ${PL.ink}`, position: "relative", overflow: "hidden" }}>
        {isA ? (
          <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%,-50%)", width: 60, height: 60, borderRadius: "50%", background: "radial-gradient(circle, #d99478, #6a2c1c)" }} />
        ) : (
          <>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 6px, transparent 6px 12px)" }} />
            <div style={{ position: "absolute", top: "55%", left: 10, right: 10, height: 1, background: "#8aa68a" }} />
            <div style={{ position: "absolute", top: "45%", left: "30%", width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "14px solid #5a7a5a" }} />
            <div style={{ position: "absolute", top: "50%", left: "55%", width: 0, height: 0, borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderBottom: "18px solid #4a6a4a" }} />
          </>
        )}
        <div style={{ position: "absolute", bottom: 6, left: 6, fontFamily: FP.mono, fontSize: 8, letterSpacing: "0.15em", color: "#fff", opacity: 0.7 }}>0:00 / 0:03</div>
        <div style={{ position: "absolute", top: 6, right: 6, width: 5, height: 5, borderRadius: "50%", background: PL.accent }} />
      </div>
      <div style={{ marginTop: 8, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.accent, textAlign: "center" }}>{label}</div>
    </div>
  );
}

function FutureSection() {
  return (
    <section style={{ padding: "100px 0", background: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <SectionMark num="08" label="What I'd do differently" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: PL.ink, maxWidth: 980 }}>
          Already thinking <span style={{ fontStyle: "italic" }}>ahead</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginTop: 32, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>If I had more time, I'd explore <strong>personalization in the preview layer</strong> — showing different clips to different user segments based on watch history. The current system is one-size-fits-all, which limits how far the conversion gains can scale.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PL.ink2, margin: 0 }}>I'd also want to <strong>stress-test the motion on lower-end devices</strong> and slower connections. A preview that buffers is worse than no preview at all.</p>
        </div>
        <div style={{ marginTop: 64 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: PL.muted, marginBottom: 16 }}>SKETCH · PERSONALIZED PREVIEW (CONCEPT)</div>
          <div style={{ background: PL.paper, border: `1px dashed ${PL.rule}`, padding: 36 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 32, alignItems: "center" }}>
              <ProfileBlob name="USER · A" tags={["Drama", "Family", "Hindi"]} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ fontFamily: FP.mono, fontSize: 22, color: PL.accent, lineHeight: 1 }}>→</div>
                <div style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>SEES</div>
              </div>
              <SketchClip kind="A" label="EMOTIONAL CUT" />
              <div style={{ gridColumn: "1 / -1", height: 1, borderTop: `1px dashed ${PL.rule}`, margin: "8px 0" }} />
              <ProfileBlob name="USER · B" tags={["Action", "Thriller", "Punjabi"]} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ fontFamily: FP.mono, fontSize: 22, color: PL.accent, lineHeight: 1 }}>→</div>
                <div style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: PL.muted }}>SEES</div>
              </div>
              <SketchClip kind="B" label="ACTION CUT" />
            </div>
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px dashed ${PL.rule}`, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.18em", color: PL.muted, display: "flex", justifyContent: "space-between" }}>
              <span>↳ ONE SLOT · MULTIPLE CUTS · SEGMENT-AWARE</span>
              <span style={{ color: PL.accent }}>EXPLORATORY · NOT BUILT</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CaseFooter() {
  return (
    <section style={{ padding: "100px 0 60px", background: PL.bg, borderTop: `1px solid ${PL.rule}` }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: PL.muted, marginBottom: 16 }}>END · OF · CASE</div>
            <div style={{ fontFamily: FP.display, fontSize: 36, fontWeight: 500, letterSpacing: -1, color: PL.ink }}>Thanks for reading.</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#" data-cursor="hover" style={{ padding: "12px 20px", border: `1px solid ${PL.ink}`, color: PL.ink, textDecoration: "none", fontFamily: FP.body, fontSize: 13, fontWeight: 500 }}>← All work</a>
            <a href="#contact" data-cursor="hover" style={{ padding: "12px 20px", background: PL.accent, color: PL.paper, textDecoration: "none", fontFamily: FP.body, fontSize: 13, fontWeight: 600 }}>Get in touch →</a>
          </div>
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: `1px solid ${PL.ruleSoft}`, display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: PL.muted }}>
          <span>PRERNA · 2024</span>
          <a href="#case-stage" style={{ color: PL.ink2, textDecoration: "none" }} data-cursor="hover">← PREV · STAGE · DISCOVERY</a>
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
      <FutureSection />
      <CaseFooter />
    </div>
  );
}
