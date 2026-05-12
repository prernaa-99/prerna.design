import { useState, useEffect, useRef } from 'react';
import { V2, FP, SPRING } from '../data';

const PAIRS = [
  { action: "understand users", method: "research & interviews" },
  { action: "validate ideas",   method: "prototyping & testing" },
  { action: "ship faster",      method: "design systems" },
  { action: "find clarity",     method: "journey mapping" },
  { action: "think bigger",     method: "AI-assisted ideation" },
  { action: "build confidence", method: "competitive analysis" },
];

const ACCENT = "#c4462a";
const STATIC_COLOR = "rgba(232, 230, 224, 0.85)";
const SYNE = "'Syne', 'Space Grotesk', sans-serif";

// One animated slot — reserves width for its longest possible value
// so surrounding sentence text never reflows.
function Slot({ word, options, onClick }) {
  const [displayed, setDisplayed] = useState(word);
  const [phase, setPhase] = useState("idle"); // idle | exiting | entering

  useEffect(() => {
    if (word === displayed) return;
    setPhase("exiting");
    const t1 = setTimeout(() => {
      setDisplayed(word);
      setPhase("entering");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("idle")));
    }, 350);
    return () => clearTimeout(t1);
  }, [word, displayed]);

  const transitions = `transform 0.45s ${SPRING}, opacity 0.35s ease`;
  let transform = "translateY(0)";
  let opacity = 1;
  if (phase === "exiting") { transform = "translateY(-0.6em)"; opacity = 0; }
  if (phase === "entering") { transform = "translateY(0.6em)"; opacity = 0; }

  // Longest option defines the reserved width
  const longest = options.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span
      onClick={onClick}
      role="button"
      tabIndex={0}
      data-cursor="hover"
      style={{
        display: "inline-block",
        position: "relative",
        verticalAlign: "baseline",
        cursor: "pointer",
        borderBottom: `2px solid ${ACCENT}`,
        paddingBottom: "0.04em",
        color: ACCENT,
        whiteSpace: "nowrap",
        textAlign: "center",
      }}
    >
      {/* Invisible sizer — reserves the width of the longest option */}
      <span aria-hidden style={{ visibility: "hidden", display: "inline-block" }}>
        {longest}
      </span>

      {/* Visible animated word — absolutely positioned on top of the sizer */}
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform,
          opacity,
          transition: transitions,
          willChange: "transform, opacity",
        }}
      >
        {displayed}
      </span>
    </span>
  );
}

export default function Stack() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-cycle every 3.5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % PAIRS.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const cycleManual = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % PAIRS.length);
    }, 3500);
    setIndex((i) => (i + 1) % PAIRS.length);
  };

  const current = PAIRS[index];
  const actionOptions = PAIRS.map((p) => p.action);
  const methodOptions = PAIRS.map((p) => p.method);

  return (
    <section
      id="skills"
      style={{
        background: "#1a1a18",
        color: "#e8e6e0",
        borderTop: `1px solid ${V2.rule}`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "160px 32px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", width: "100%", textAlign: "center" }}>
        <div style={{
          fontFamily: FP.mono,
          fontSize: 11,
          letterSpacing: "0.25em",
          color: "rgba(232, 230, 224, 0.45)",
          marginBottom: 80,
          textTransform: "uppercase",
        }}>
          §03 ──── How I work
        </div>

        <h2
          style={{
            fontFamily: SYNE,
            fontWeight: 700,
            fontSize: "clamp(2rem, 6vw, 4rem)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            margin: 0,
            color: STATIC_COLOR,
          }}
        >
          <span>I help teams </span>
          <Slot
            word={current.action}
            options={actionOptions}
            onClick={cycleManual}
          />
          <span> through </span>
          <Slot
            word={current.method}
            options={methodOptions}
            onClick={cycleManual}
          />
          <span>.</span>
        </h2>
      </div>
    </section>
  );
}
