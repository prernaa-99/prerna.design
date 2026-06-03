import { useState, useEffect, useRef } from 'react';

const SC = {
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

const SC_MAX = 1180;

function Container({ children, style = {} }) {
  return (
    <div style={{ maxWidth: SC_MAX, margin: "0 auto", padding: "0 32px", width: "100%", ...style }}>
      {children}
    </div>
  );
}

function Placeholder({ label, ratio = "16 / 9", note, accent = SC.accent, children }) {
  return (
    <div style={{
      position: "relative",
      aspectRatio: ratio,
      width: "100%",
      background: SC.paper,
      border: `1px solid ${SC.rule}`,
      backgroundImage: `repeating-linear-gradient(135deg, transparent 0 8px, ${SC.ruleSoft}88 8px 9px)`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 20,
      overflow: "hidden",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.18em", color: SC.muted }}>
        <span>↳ PLACEHOLDER</span>
        <span style={{ color: accent }}>{label}</span>
      </div>
      {children}
      {note && <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.15em", color: SC.muted, lineHeight: 1.5, maxWidth: 480 }}>{note}</div>}
    </div>
  );
}

function SectionMark({ num, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: SC.muted, marginBottom: 24 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: SC.rule }} />
      <span>§{num}</span>
      <span>·</span>
      <span>{label.toUpperCase()}</span>
    </div>
  );
}

function CaseNav() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10, background: `${SC.bg}ee`, backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: `1px solid ${SC.ruleSoft}` }}>
      <Container style={{ padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: SC.ink, fontFamily: "inherit" }} data-cursor="hover">
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, background: SC.ink, color: SC.bg, fontFamily: FP.display, fontSize: 16, fontWeight: 600, borderRadius: 4 }}>P</span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1, alignItems: "flex-start" }}>
            <span style={{ fontFamily: FP.display, fontSize: 15, fontWeight: 600 }}>Prerna</span>
            <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.18em", color: SC.muted, marginTop: 3 }}>PRODUCT DESIGNER</span>
          </span>
        </a>
        <a href="#" style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.18em", color: SC.ink2, textDecoration: "none" }} data-cursor="hover">← INDEX</a>
      </Container>
    </div>
  );
}

function CaseHero() {
  return (
    <section style={{ padding: "80px 0 60px", borderBottom: `1px solid ${SC.rule}` }}>
      <Container>
        <div style={{ display: "flex", gap: 16, alignItems: "center", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted, marginBottom: 32 }}>
          <span style={{ width: 24, height: 1, background: SC.rule }} />
          <span>STAGE · OTT PLATFORM</span>
          <span style={{ width: 24, height: 1, background: SC.rule }} />
          <span>JUNE 2024</span>
        </div>
        <h1 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 5.4vw, 84px)", fontWeight: 500, lineHeight: 1, letterSpacing: -2, margin: 0, color: SC.ink }}>
          <span style={{ whiteSpace: "nowrap" }}>Scaling discovery for the</span><br />
          <span style={{ color: SC.accent }}>next million users.</span>
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: SC.ink2, maxWidth: 720, marginTop: 32 }}>
          A redesign of STAGE's content categorization framework, moving from generic genres to a culturally-rooted tagging system that speaks the language of regional audiences.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 56, borderTop: `1px solid ${SC.rule}`, borderBottom: `1px solid ${SC.rule}` }}>
          {[
            ["ROLE", "Product Designer"],
            ["TEAM", "1 PM · 2 Eng · Me"],
            ["TIMELINE", "4 weeks"],
            ["IMPACT", "+30% viewing growth"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: "20px 24px", borderRight: i < 3 ? `1px solid ${SC.rule}` : "none" }}>
              <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted, marginBottom: 8 }}>{k}</div>
              <div style={{ fontSize: 15, color: SC.ink, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PhoneFrame({ src, alt, caption }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <div
        style={{
          width: "100%",
          maxWidth: 240,
          aspectRatio: "9 / 19.5",
          background: "#0a0a0a",
          borderRadius: 36,
          padding: 6,
          boxShadow:
            "0 28px 48px rgba(0,0,0,0.18), 0 8px 16px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(255,255,255,0.05)",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 30,
            overflow: "hidden",
            background: "#000",
            position: "relative",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FP.mono,
          fontSize: 10,
          letterSpacing: "0.22em",
          color: SC.muted,
          textTransform: "uppercase",
        }}
      >
        {caption}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <section
      style={{
        padding: "100px 0",
        background: SC.bgDeep,
        borderBottom: `1px solid ${SC.rule}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft radial vignette to lift the phones off the background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 60% at 50% 45%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 60%)",
          pointerEvents: "none",
        }}
      />
      <Container style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 48,
            fontFamily: FP.mono,
            fontSize: 10,
            letterSpacing: "0.22em",
            color: SC.muted,
          }}
        >
          <span>STAGE APP · LIVE PRODUCT</span>
          <span>HOME → CATEGORIES → FILTERED</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            alignItems: "end",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <PhoneFrame
            src="/images/stage/home-1.png"
            alt="STAGE home with featured original poster"
            caption="Home · Originals"
          />
          <PhoneFrame
            src="/images/stage/home-2.png"
            alt="STAGE categories with cultural genres"
            caption="Categories · Discovery"
          />
          <PhoneFrame
            src="/images/stage/home-3.png"
            alt="STAGE movies filtered view"
            caption="Movies · Filtered"
          />
        </div>
      </Container>
    </section>
  );
}

function BeforeAfterCompare() {
  const [open, setOpen] = useState(false);

  const RED = "#A32D2D";
  const GREEN = "#0F6E56";
  const MISS_ROW_BG = "#FCEBEB22";
  const MISS_ROW_BORDER = "#F09595";
  const MISS_TAG_BG = "#FCEBEB";
  const HIT_ROW_BG = "#E1F5EE66";
  const HIT_ROW_BORDER = "#5DCAA5";
  const HIT_TAG_BG = "#E1F5EE";
  const HIT_TAG_TEXT = "#085041";

  const misses = [
    { title: "Action Spectacle 7", tag: "ACTION" },
    { title: "Detective Shadow", tag: "CRIME" },
    { title: "Highway Brawl", tag: "ACTION" },
  ];
  const hits = [
    { title: "Pyaar Ke Liye Kuch Bhi", tag: "EMOTION · ROMANCE" },
    { title: "Maa Ki Mamta", tag: "EMOTION · FAMILY" },
    { title: "Aakhri Vidaai", tag: "EMOTION · TRAGEDY" },
    { title: "Dil Se Dil Tak", tag: "EMOTION · DRAMA" },
  ];

  const labelStyle = {
    fontFamily: FP.mono,
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: SC.muted,
  };

  return (
    <div
      style={{
        background: "#fff",
        border: `0.5px solid ${SC.rule}`,
        borderRadius: 12,
        padding: 28,
        fontFamily: FP.body,
      }}
    >
      {/* Hero: 0 → 4 with before/after labels */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 20 }}>
          <div>
            <div style={{ fontSize: 40, fontWeight: 500, color: RED, lineHeight: 1, fontFamily: FP.display }}>0</div>
            <div style={{ ...labelStyle, fontSize: 10, marginTop: 6, letterSpacing: "0.2em" }}>before</div>
          </div>
          <div style={{ fontSize: 24, color: SC.muted, paddingBottom: 18, lineHeight: 1 }}>→</div>
          <div>
            <div style={{ fontSize: 40, fontWeight: 500, color: GREEN, lineHeight: 1, fontFamily: FP.display }}>4</div>
            <div style={{ ...labelStyle, fontSize: 10, marginTop: 6, letterSpacing: "0.2em" }}>after</div>
          </div>
        </div>
        <div style={{ ...labelStyle, paddingBottom: 4, textAlign: "right" }}>
          relevant matches
        </div>
      </div>

      {/* Query pill */}
      <div style={{ marginTop: 20 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            background: "#F4F2EE",
            borderRadius: 999,
            fontSize: 13,
            color: SC.ink,
          }}
        >
          <span style={{ color: SC.muted, fontSize: 14 }}>⌕</span>
          Emotional Drama
        </span>
      </div>

      {/* Secondary metrics row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: `1px solid ${SC.ruleSoft}`,
          borderBottom: `1px solid ${SC.ruleSoft}`,
          padding: "16px 0",
          marginTop: 24,
        }}
      >
        <div style={{ paddingRight: 16, borderRight: `1px solid ${SC.ruleSoft}` }}>
          <div style={{ fontSize: 15, fontWeight: 500, color: RED }}>30% bounce</div>
          <div style={{ ...labelStyle, fontSize: 10, marginTop: 4 }}>before</div>
        </div>
        <div style={{ paddingLeft: 16 }}>
          <div style={{ fontSize: 15, fontWeight: 500, color: GREEN }}>+30% viewing</div>
          <div style={{ ...labelStyle, fontSize: 10, marginTop: 4 }}>after</div>
        </div>
      </div>

      {/* Collapsible: Example results */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-cursor="hover"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "16px 0 4px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          ...labelStyle,
          color: SC.ink,
          fontSize: 11,
        }}
      >
        <span>{open ? "Hide example results" : "View example results"}</span>
        <span
          style={{
            display: "inline-block",
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          ⌄
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? 800 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ paddingTop: 16 }}>
          {/* Before group */}
          <div style={{ ...labelStyle, fontSize: 10, marginBottom: 8 }}>
            Before — irrelevant results
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
            {misses.map((r) => (
              <div
                key={r.title}
                style={{
                  padding: "10px 12px",
                  background: MISS_ROW_BG,
                  borderLeft: `3px solid ${MISS_ROW_BORDER}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 13, color: SC.ink }}>{r.title}</span>
                <span
                  style={{
                    fontFamily: FP.mono,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    background: MISS_TAG_BG,
                    color: RED,
                    padding: "3px 8px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.tag}
                </span>
              </div>
            ))}
          </div>

          {/* After group */}
          <div style={{ ...labelStyle, fontSize: 10, marginBottom: 8 }}>
            After — relevant matches
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {hits.map((r) => (
              <div
                key={r.title}
                style={{
                  padding: "10px 12px",
                  background: HIT_ROW_BG,
                  borderLeft: `3px solid ${HIT_ROW_BORDER}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 13, color: SC.ink }}>{r.title}</span>
                <span
                  style={{
                    fontFamily: FP.mono,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    background: HIT_TAG_BG,
                    color: HIT_TAG_TEXT,
                    padding: "3px 8px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section style={{ padding: "100px 0", background: SC.bg }}>
      <Container>
        {/* Full-width section label + heading */}
        <SectionMark num="01" label="The problem" />
        <h2
          style={{
            fontFamily: FP.display,
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: -1.5,
            margin: 0,
            color: SC.ink,
          }}
        >
          The <span style={{ background: SC.highlight, padding: "0 8px" }}>"generic genre" trap</span>
        </h2>

        {/* Two-column row below heading: paragraphs left, card right */}
        <div className="problem-grid" style={{ marginTop: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: SC.ink2, margin: 0 }}>
              Standard OTT platforms rely on basic genres like "Drama" or "Crime", but for STAGE, these labels were too rigid. Users searched in cultural and emotional terms that the system simply couldn't parse.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: SC.ink2, margin: 0 }}>
              The absence of granular, culturally-rooted tagging became a major blocker for personalization, the very feature users expect from a modern streaming service.
            </p>
          </div>

          <div>
            <BeforeAfterCompare />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ResearchCard({ num, kind, title, body, chips }) {
  return (
    <div style={{ background: SC.paper, border: `1px solid ${SC.rule}`, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted }}>
        <span>METHOD · {num}</span>
        <span>{kind.toUpperCase()}</span>
      </div>
      <div style={{ fontFamily: FP.display, fontSize: 22, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.4, color: SC.ink }}>
        {title}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: SC.ink2 }}>{body}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 8 }}>
        {chips.map((c) => (
          <span key={c} style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.1em", padding: "5px 10px", border: `1px solid ${SC.rule}`, color: SC.ink2 }}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function PhotoChip({ rotate, caption }) {
  return (
    <div style={{
      width: 110, aspectRatio: "3 / 4",
      background: SC.paper,
      border: `1px solid ${SC.rule}`,
      transform: `rotate(${rotate}deg)`,
      padding: 6,
      display: "flex", flexDirection: "column",
      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    }}>
      <div style={{ flex: 1, background: `linear-gradient(135deg, ${SC.ruleSoft}, ${SC.rule})`, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: SC.muted, fontSize: 24 }}>◯</div>
      </div>
      <div style={{ paddingTop: 4, fontFamily: FP.mono, fontSize: 8, letterSpacing: "0.15em", color: SC.muted, textAlign: "center" }}>{caption}</div>
    </div>
  );
}

function CollageVideoTile({ src, index }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", flex: 1, minWidth: 0,
        aspectRatio: "2 / 3", overflow: "hidden",
        background: SC.ink, border: `1px solid ${SC.rule}`, borderRadius: 10,
        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
      }}>
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{ position: "absolute", top: 12, left: 12, fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.18em", color: "#fff", mixBlendMode: "difference", pointerEvents: "none" }}>{index} · VIDEO</div>
      <button
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        data-cursor="hover"
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) scale(${hover ? 1 : 0.85})`,
          width: 64, height: 44, borderRadius: 12,
          border: "none", background: "rgba(20,20,20,0.72)", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", padding: 0,
          opacity: hover ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.2s ease, background 0.15s ease",
          backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)",
        }}
        onMouseDown={(e) => { e.currentTarget.style.background = SC.accent; }}
        onMouseUp={(e) => { e.currentTarget.style.background = "rgba(20,20,20,0.72)"; }}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}

function CollageImageTile({ src, index }) {
  return (
    <div style={{
      position: "relative", aspectRatio: "16 / 9", overflow: "hidden",
      background: SC.ink, border: `1px solid ${SC.rule}`, borderRadius: 10,
      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
    }}>
      <img src={src} alt="Field research — card sorting" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", top: 12, left: 12, fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.18em", color: "#fff", mixBlendMode: "difference", pointerEvents: "none" }}>{index} · PHOTO</div>
    </div>
  );
}

function FieldCollage() {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "center" }}>
      <CollageVideoTile src="/2_video_1.MP4" index="01" />
      <CollageVideoTile src="/2_video_2.MP4" index="02" />
      <div style={{ flex: 1.3, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
        <CollageImageTile src="/2_image_1.JPG" index="03" />
        <CollageImageTile src="/2_image_2.JPG" index="04" />
      </div>
    </div>
  );
}

function ResearchSection() {
  return (
    <section style={{ padding: "100px 0", background: SC.bgDeep, borderTop: `1px solid ${SC.rule}` }}>
      <Container>
        <SectionMark num="02" label="The research" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: SC.ink, maxWidth: 880 }}>
          Finding the <span style={{ fontStyle: "italic", color: SC.accent }}>mental model</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: SC.ink2, maxWidth: 720, marginTop: 24 }}>
          We didn't just guess, we went to the field. Two parallel research tracks gave us a foundation.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 56 }}>
          <ResearchCard
            num="A"
            kind="Secondary research"
            title="What do other regional platforms do?"
            body="We benchmarked global giants and regional peers. While Netflix leans heavily on AI recommendations, regional players like Hotstar and ZEE5 use a hybrid of AI and human editors to surface local language and cultural nuance."
            chips={["Netflix · AI-only", "Hotstar · Hybrid", "ZEE5 · Hybrid + Human"]}
          />
          <ResearchCard
            num="B"
            kind="Primary research"
            title="In-person card sorting"
            body="Initial user calls were too vague to act on. We pivoted to an in-person card sorting activity using physical posters from Bollywood, TV serials, and STAGE originals, letting users group content the way they actually thought about it."
            chips={["12 participants", "60 posters", "3 cities"]}
          />
        </div>

        <div style={{ marginTop: 48 }}>
          <FieldCollage />
          <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.15em", color: SC.muted, lineHeight: 1.5, marginTop: 14 }}>
            ↳ TESTING MENTAL MODELS IN THE FIELD — IN-PERSON CARD SORTING WITH PHYSICAL POSTERS
          </div>
        </div>
      </Container>
    </section>
  );
}

function InsightCard({ n, title, hook, detail }) {
  return (
    <div style={{
      background: SC.paper,
      color: SC.ink,
      border: `1px solid ${SC.rule}`,
      padding: 28, minHeight: 320,
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.25em", color: SC.muted, marginBottom: 28 }}>
        INSIGHT · {n}
      </div>
      <div style={{ fontFamily: FP.display, fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase", color: SC.muted, marginBottom: 12 }}>
        {title}
      </div>
      <div style={{ fontFamily: FP.display, fontSize: 26, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.6, marginBottom: 20 }}>
        {hook}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: SC.ink2, marginTop: "auto" }}>
        {detail}
      </div>
    </div>
  );
}

function InsightsSection() {
  const insights = [
    {
      n: "01",
      title: "Terminology matters",
      hook: 'STAGE users don\'t say "web series."',
      detail: 'They say "serials" — the term carries decades of TV-watching context. Using "web series" felt foreign and aspirational, not native.',
    },
    {
      n: "02",
      title: "Visual recognition wins",
      hook: "Users don't read titles first.",
      detail: "They scan for familiar actors' faces and posters to judge a show's vibe before reading a single word. Faces > copy.",
    },
    {
      n: "03",
      title: "Emotional anchors",
      hook: '"Pyaar ke liye kuch bhi karna."',
      detail: 'Users categorized content by plotlines and emotions, not by genre. Instead of "Romance," they described it as "doing anything for love."',
    },
  ];

  return (
    <section style={{ padding: "100px 0", background: SC.bg, borderTop: `1px solid ${SC.rule}` }}>
      <Container>
        <SectionMark num="03" label="The aha moment" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: SC.ink, maxWidth: 880 }}>
          How users <span style={{ fontStyle: "italic" }}>actually</span> talk
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: SC.ink2, maxWidth: 720, marginTop: 24 }}>
          Card sorting revealed three massive gaps in how we'd been thinking about content.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 56 }}>
          {insights.map((it) => <InsightCard key={it.n} {...it} />)}
        </div>
      </Container>
    </section>
  );
}

function FilterRow({ label, value, options, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.25em", color: SC.muted, marginBottom: 6 }}>{label}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {options.map((o) => {
          const active = o === value;
          return (
            <button
              key={o}
              onClick={() => onChange(o)}
              data-cursor="hover"
              style={{
                padding: "6px 12px",
                border: `1px solid ${active ? SC.ink : SC.rule}`,
                background: active ? SC.ink : "transparent",
                color: active ? SC.bg : SC.ink2,
                fontFamily: "inherit", fontSize: 12,
                cursor: "pointer", letterSpacing: -0.1,
                transition: "all 0.15s",
              }}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FilterDemo() {
  const [filters, setFilters] = useState({ mood: "Romance", lang: "Hindi", theme: "Family" });
  const moods = ["Romance", "Action", "Emotional", "Comedy", "Drama"];
  const langs = ["Hindi", "Bhojpuri", "Punjabi", "Haryanvi"];
  const themes = ["Family", "Friendship", "Revenge", "Devotion"];

  const content = {
    "Romance·Hindi": ["Pyaar Ke Liye", "Dil Se Dil Tak", "Suhaag Raat"],
    "Romance·Bhojpuri": ["Bhojpuri Pyaar", "Saiyan Ji", "Lal Ghaghra"],
    "Action·Hindi": ["Sher Ka Dil", "Dabangg Returns", "Mafia Don"],
    "Emotional·Hindi": ["Maa Ki Mamta", "Aakhri Vidaai", "Beti Ka Vivah"],
  };
  const key = `${filters.mood}·${filters.lang}`;
  const results = content[key] || ["Aakhri Vidaai", "Sher Aur Sava Sher", "Maati Ke Laal"];

  return (
    <div style={{ background: SC.paper, border: `1px solid ${SC.rule}`, padding: 24, fontFamily: FP.body, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted }}>
        <span>↳ INTERACTIVE DEMO</span>
        <span>STAGE / MVP</span>
      </div>
      <FilterRow label="MOOD" value={filters.mood} options={moods} onChange={(v) => setFilters({ ...filters, mood: v })} />
      <FilterRow label="LANGUAGE" value={filters.lang} options={langs} onChange={(v) => setFilters({ ...filters, lang: v })} />
      <FilterRow label="THEME" value={filters.theme} options={themes} onChange={(v) => setFilters({ ...filters, theme: v })} />

      <div style={{ borderTop: `1px solid ${SC.ruleSoft}`, marginTop: 16, paddingTop: 16 }}>
        <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted, marginBottom: 12 }}>
          ↳ {results.length} MATCHES
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {results.map((r, i) => (
            <div key={r + i} style={{ aspectRatio: "2 / 3", background: SC.bg, border: `1px solid ${SC.ruleSoft}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${SC.accent}33 0%, ${SC.accent}99 100%)` }} />
              <div style={{ position: "absolute", inset: 0, padding: 10, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: SC.paper, lineHeight: 1.2 }}>{r}</div>
                <div style={{ fontFamily: FP.mono, fontSize: 8, letterSpacing: "0.1em", color: SC.paper, opacity: 0.75, marginTop: 3 }}>{filters.lang.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer caption — pushed to bottom of card so it aligns with right-card footer */}
      <div style={{ borderTop: `1px solid ${SC.ruleSoft}`, marginTop: "auto", paddingTop: 16, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted, lineHeight: 1.6 }}>
        <div style={{ marginTop: 16 }}>
          ↳ TRY · TWEAK · MATCH<br />
          <span style={{ opacity: 0.75, textTransform: "none", letterSpacing: "0.05em", fontSize: 11 }}>Combine any mood, language, and theme — results update in real time.</span>
        </div>
      </div>
    </div>
  );
}

function SolutionSection() {
  return (
    <section style={{ padding: "100px 0", background: SC.bgDeep, borderTop: `1px solid ${SC.rule}` }}>
      <Container>
        <SectionMark num="04" label="The solution" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: SC.ink, maxWidth: 980 }}>
          Multi-dimensional <span style={{ color: SC.accent }}>tagging</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: SC.ink2, maxWidth: 720, marginTop: 24 }}>
          We moved away from single-label systems. Home-screen filters let users browse content by mood, theme, and regional preference, combining as many dimensions as they wanted.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 56, alignItems: "stretch" }}>
          <FilterDemo />

          {/* Phone preview — wrapped in a matching paper card */}
          <div style={{ background: SC.paper, border: `1px solid ${SC.rule}`, padding: 24, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted }}>
              <span>↳ MVP PREVIEW</span>
              <span>STAGE / iOS</span>
            </div>

            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: SC.bgDeep, borderRadius: 4, position: "relative", minHeight: 460, padding: 24 }}>
              {/* Phone */}
              <div style={{ width: 220, aspectRatio: "9 / 19", background: SC.ink, borderRadius: 24, padding: 7, position: "relative", boxShadow: "0 18px 36px rgba(0,0,0,0.18)" }}>
                <div style={{ width: "100%", height: "100%", background: SC.bg, borderRadius: 18, position: "relative", overflow: "hidden" }}>
                  {/* notch */}
                  <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 50, height: 5, background: SC.ink, borderRadius: 3, zIndex: 2 }} />
                  {/* status */}
                  <div style={{ position: "absolute", top: 22, left: 14, right: 14, display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 7, color: SC.muted, letterSpacing: "0.1em" }}>
                    <span>9:41</span>
                    <span>●●●</span>
                  </div>
                  {/* content */}
                  <div style={{ position: "absolute", inset: "42px 12px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
                    <div style={{ fontFamily: FP.display, fontSize: 13, fontWeight: 600, color: SC.ink }}>Discover</div>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      <span style={{ padding: "3px 7px", background: SC.ink, color: SC.bg, fontSize: 8, borderRadius: 8, fontWeight: 600 }}>Romance</span>
                      <span style={{ padding: "3px 7px", background: SC.ruleSoft, color: SC.ink2, fontSize: 8, borderRadius: 8 }}>Bhojpuri</span>
                      <span style={{ padding: "3px 7px", background: SC.ruleSoft, color: SC.ink2, fontSize: 8, borderRadius: 8 }}>Family</span>
                    </div>
                    <div style={{ fontFamily: FP.mono, fontSize: 6, letterSpacing: "0.2em", color: SC.muted, marginTop: 2 }}>↳ 12 MATCHES</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, flex: 1 }}>
                      {["Pyaar Ke Liye", "Saiyan Ji", "Lal Ghaghra", "Dil Se Dil"].map((title, i) => (
                        <div key={i} style={{ background: SC.bg, position: "relative", overflow: "hidden", borderRadius: 4 }}>
                          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${SC.accent}33 0%, ${SC.accent}cc 100%)` }} />
                          <div style={{ position: "absolute", bottom: 3, left: 4, right: 4, fontSize: 6, fontWeight: 600, color: SC.paper, lineHeight: 1.1 }}>
                            {title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* play overlay */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 14, color: "#fff", marginLeft: 2 }}>▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${SC.ruleSoft}`, marginTop: 16, paddingTop: 16, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.2em", color: SC.muted, lineHeight: 1.6 }}>
              ↳ VIDEO · MVP RECORDING<br />
              <span style={{ opacity: 0.75, textTransform: "none", letterSpacing: "0.05em", fontSize: 11 }}>User taps 'Romance' filter, toggles to 'Bhojpuri', content updates instantly.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ImpactBar({ label, value, caption }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        setTimeout(() => setV(value), 100);
      }
    }, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ background: "#0e0e0e", border: "1px solid #2a2a2a", padding: 32 }}>
      <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: SC.muted, marginBottom: 28 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 32 }}>
        <span style={{ fontFamily: FP.display, fontSize: 96, fontWeight: 500, lineHeight: 0.9, letterSpacing: -3, color: SC.accent }}>
          {Math.round(v)}
        </span>
        <span style={{ fontFamily: FP.display, fontSize: 48, fontWeight: 500, color: SC.accent }}>%</span>
        <span style={{ fontFamily: FP.mono, fontSize: 12, letterSpacing: "0.2em", color: SC.muted, marginLeft: 8 }}>↑</span>
      </div>
      <div style={{ height: 8, background: "#2a2a2a", position: "relative", marginBottom: 12 }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: `${v / 50 * 100}%`,
          background: SC.accent,
          transition: "width 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: SC.muted, marginBottom: 24 }}>
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.5, color: "#aaa", maxWidth: 360 }}>{caption}</div>
    </div>
  );
}

function ImpactSection() {
  return (
    <section style={{ padding: "100px 0", background: SC.ink, color: SC.bg, borderTop: `1px solid ${SC.rule}` }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: SC.muted, marginBottom: 24 }}>
          <span style={{ display: "inline-block", width: 32, height: 1, background: "#444" }} />
          <span>§05</span>
          <span>·</span>
          <span>THE IMPACT</span>
        </div>
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, maxWidth: 880 }}>
          Data-backed <span style={{ color: SC.accent }}>success</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 64 }}>
          <ImpactBar label="CONTENT CONSUMPTION" value={20} caption="Driven by users engaging with the new home-screen filters." />
          <ImpactBar label="VIEWING GROWTH" value={30} caption="Linked to more accurate search results powered by the new tagging framework." />
        </div>
      </Container>
    </section>
  );
}

function CaseFooter() {
  return (
    <section style={{ padding: "100px 0 60px", background: SC.bg, borderTop: `1px solid ${SC.rule}` }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: SC.muted, marginBottom: 16 }}>END · OF · CASE</div>
            <div style={{ fontFamily: FP.display, fontSize: 36, fontWeight: 500, letterSpacing: -1, color: SC.ink }}>
              Thanks for reading.
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#" data-cursor="hover" style={{ padding: "12px 20px", border: `1px solid ${SC.ink}`, color: SC.ink, textDecoration: "none", fontFamily: FP.body, fontSize: 13, fontWeight: 500 }}>← All work</a>
            <a href="#contact" data-cursor="hover" style={{ padding: "12px 20px", background: SC.accent, color: SC.paper, textDecoration: "none", fontFamily: FP.body, fontSize: 13, fontWeight: 600 }}>Get in touch →</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function StageCase() {
  return (
    <div style={{ background: SC.bg, color: SC.ink, fontFamily: FP.body, minHeight: "100vh" }}>
      <CaseNav />
      <CaseHero />
      <HeroVisual />
      <ProblemSection />
      <ResearchSection />
      <InsightsSection />
      <SolutionSection />
      <ImpactSection />
      <CaseFooter />
    </div>
  );
}
