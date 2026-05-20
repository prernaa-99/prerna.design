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
        <h1 style={{ fontFamily: FP.display, fontSize: "clamp(44px, 6.4vw, 96px)", fontWeight: 500, lineHeight: 0.95, letterSpacing: -2.5, margin: 0, color: SC.ink, maxWidth: 980 }}>
          Scaling discovery for the<br />
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

function PhoneMock({ label }) {
  return (
    <div style={{ width: 160, aspectRatio: "9 / 19", background: SC.ink, borderRadius: 18, padding: 6, position: "relative" }}>
      <div style={{ width: "100%", height: "100%", background: SC.bg, borderRadius: 12, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 40, height: 4, background: SC.ink, borderRadius: 2 }} />
        <div style={{ position: "absolute", inset: "30px 12px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ height: 8, width: "60%", background: SC.rule, borderRadius: 2 }} />
          <div style={{ height: 50, background: SC.accent, borderRadius: 4, opacity: 0.85 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            <div style={{ height: 28, background: SC.rule, borderRadius: 3 }} />
            <div style={{ height: 28, background: SC.rule, borderRadius: 3 }} />
          </div>
          <div style={{ height: 6, width: "40%", background: SC.muted, borderRadius: 2 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
            <div style={{ height: 36, background: SC.ruleSoft, borderRadius: 3 }} />
            <div style={{ height: 36, background: SC.ruleSoft, borderRadius: 3 }} />
            <div style={{ height: 36, background: SC.ruleSoft, borderRadius: 3 }} />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 6, left: 0, right: 0, textAlign: "center", fontFamily: FP.mono, fontSize: 7, letterSpacing: "0.15em", color: SC.muted }}>{label}</div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <section style={{ padding: "60px 0", background: SC.bgDeep, borderBottom: `1px solid ${SC.rule}` }}>
      <Container>
        <Placeholder label="HERO · PRODUCT SHOT" ratio="16 / 8" note="Final product hero — STAGE app on phone with new tagging UI visible.">
          <div style={{ display: "flex", justifyContent: "center", gap: 24, alignItems: "center", width: "100%" }}>
            <PhoneMock label="STAGE · HOME" />
            <PhoneMock label="DISCOVER" />
            <PhoneMock label="FILTERS" />
          </div>
        </Placeholder>
      </Container>
    </section>
  );
}

function CompareCard({ kind }) {
  const before = kind === "before";
  const results = before
    ? [
        { t: "Action Spectacle 7", g: "ACTION", match: false },
        { t: "Detective Shadow", g: "CRIME", match: false },
        { t: "Highway Brawl", g: "ACTION", match: false },
        { t: "(no relevant results)", g: "—", match: null },
      ]
    : [
        { t: "Pyaar Ke Liye Kuch Bhi", g: "EMOTION · ROMANCE", match: true },
        { t: "Maa Ki Mamta", g: "EMOTION · FAMILY", match: true },
        { t: "Aakhri Vidaai", g: "EMOTION · TRAGEDY", match: true },
        { t: "Dil Se Dil Tak", g: "EMOTION · DRAMA", match: true },
      ];
  return (
    <div style={{ padding: "32px 28px", borderRight: before ? `1px solid ${SC.rule}` : "none", background: before ? SC.paper : "#fcfaf5" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.25em", color: before ? SC.bad : SC.good }}>
          {before ? "✕ BEFORE" : "✓ AFTER"}
        </span>
        <span style={{ fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.15em", color: SC.muted }}>
          QUERY: "EMOTIONAL DRAMA"
        </span>
      </div>
      <div style={{ border: `1px solid ${SC.rule}`, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, background: SC.bg, marginBottom: 16 }}>
        <span style={{ color: SC.muted, fontSize: 14 }}>⌕</span>
        <span style={{ fontSize: 14, color: SC.ink }}>Emotional Drama</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {results.map((r, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "10px 12px",
            background: r.match === false ? "#fbeaea" : r.match ? "#eaf6ee" : SC.paper,
            border: `1px solid ${r.match === false ? "#f0d0d0" : r.match ? "#cfe7d5" : SC.ruleSoft}`,
          }}>
            <span style={{ fontSize: 14, color: SC.ink, fontStyle: r.match === null ? "italic" : "normal", opacity: r.match === null ? 0.6 : 1 }}>
              {r.t}
            </span>
            <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.15em", color: r.match === false ? SC.bad : r.match ? SC.good : SC.muted }}>
              {r.g}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, fontFamily: FP.mono, fontSize: 10, letterSpacing: "0.15em", color: SC.muted }}>
        {before ? "↳ 0 RELEVANT MATCHES · 30% BOUNCE" : "↳ 4 RELEVANT MATCHES · +30% VIEWING"}
      </div>
    </div>
  );
}

function BeforeAfterCompare() {
  const [side, setSide] = useState("both");
  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em" }}>
        {[["both", "BOTH"], ["before", "BEFORE ONLY"], ["after", "AFTER ONLY"]].map(([k, l]) => (
          <button
            key={k}
            onClick={() => setSide(k)}
            data-cursor="hover"
            style={{
              padding: "8px 14px",
              border: `1px solid ${side === k ? SC.ink : SC.rule}`,
              background: side === k ? SC.ink : "transparent",
              color: side === k ? SC.bg : SC.ink,
              fontFamily: "inherit", fontSize: "inherit", letterSpacing: "inherit", cursor: "pointer",
            }}>
            {l}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: side === "both" ? "1fr 1fr" : "1fr", gap: 0, border: `1px solid ${SC.rule}`, background: SC.paper }}>
        {(side === "both" || side === "before") && <CompareCard kind="before" />}
        {(side === "both" || side === "after") && <CompareCard kind="after" />}
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section style={{ padding: "100px 0", background: SC.bg }}>
      <Container>
        <SectionMark num="01" label="The problem" />
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 1, letterSpacing: -1.5, margin: 0, color: SC.ink, maxWidth: 880 }}>
          The <span style={{ background: SC.highlight, padding: "0 8px" }}>"generic genre" trap</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 40, alignItems: "start" }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: SC.ink2, margin: 0 }}>
            Standard OTT platforms rely on basic genres like "Drama" or "Crime", but for STAGE, these labels were too rigid. Users searched in cultural and emotional terms that the system simply couldn't parse.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: SC.ink2, margin: 0 }}>
            The absence of granular, culturally-rooted tagging became a major blocker for personalization, the very feature users expect from a modern streaming service.
          </p>
        </div>

        <div style={{ marginTop: 64 }}>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: SC.muted, marginBottom: 16 }}>
            FIG.01 · BEFORE / AFTER
          </div>
          <BeforeAfterCompare />
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
          <Placeholder label="VIDEO · 5–10S TIMELAPSE" ratio="16 / 9" note="Ken-Burns timelapse of in-person card sorting on a charpai. Caption: 'Testing mental models in the field.'" accent={SC.accent}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, gap: 16 }}>
              <PhotoChip rotate={-4} caption="01 · CHARPAI" />
              <PhotoChip rotate={2} caption="02 · POSTERS" />
              <PhotoChip rotate={-1} caption="03 · SORTING" />
              <PhotoChip rotate={5} caption="04 · DEBRIEF" />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginLeft: 8 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: `2px solid ${SC.ink}`, display: "flex", alignItems: "center", justifyContent: "center", background: SC.bg }}>
                  <span style={{ fontSize: 18, color: SC.ink }}>▶</span>
                </div>
                <span style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: SC.muted }}>0:08</span>
              </div>
            </div>
          </Placeholder>
        </div>
      </Container>
    </section>
  );
}

function InsightCard({ n, title, hook, detail }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor="hover"
      style={{
        background: hover ? SC.ink : SC.paper,
        color: hover ? SC.bg : SC.ink,
        border: `1px solid ${SC.rule}`,
        padding: 28, minHeight: 320,
        display: "flex", flexDirection: "column",
        transition: "background 0.25s, color 0.25s, transform 0.25s",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
      }}>
      <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.25em", color: SC.muted, marginBottom: 28 }}>
        INSIGHT · {n}
      </div>
      <div style={{ fontFamily: FP.display, fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase", color: hover ? SC.accent : SC.muted, marginBottom: 12 }}>
        {title}
      </div>
      <div style={{ fontFamily: FP.display, fontSize: 26, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.6, marginBottom: 20 }}>
        {hook}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: hover ? "#cccac4" : SC.ink2, marginTop: "auto" }}>
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
    <div style={{ background: SC.paper, border: `1px solid ${SC.rule}`, padding: 24, fontFamily: FP.body }}>
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
            <div key={r + i} style={{ aspectRatio: "3 / 4", background: SC.bg, border: `1px solid ${SC.ruleSoft}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${SC.accent}33 0%, ${SC.accent}99 100%)` }} />
              <div style={{ position: "absolute", inset: 0, padding: 8, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: SC.paper, lineHeight: 1.2 }}>{r}</div>
                <div style={{ fontFamily: FP.mono, fontSize: 8, letterSpacing: "0.1em", color: SC.paper, opacity: 0.7, marginTop: 2 }}>{filters.lang.toUpperCase()}</div>
              </div>
            </div>
          ))}
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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 56, alignItems: "center" }}>
          <FilterDemo />
          <Placeholder label="VIDEO · MVP RECORDING" ratio="9 / 14" note="Screen recording: user taps 'Romance' filter, toggles to 'Bhojpuri', content updates instantly." accent={SC.accent} />
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
