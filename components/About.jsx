'use client';
import { useRef, useEffect } from 'react';
import { V2, FP } from '@/lib/data';
import DesignerCharacter from './DesignerCharacter';

function DeskScene() {
  const cvs = useRef(null);
  useEffect(() => {
    const c = cvs.current; if (!c) return;
    const ctx = c.getContext("2d");
    const W = c.width = 600, H = c.height = 380;
    let raf, t0 = performance.now();
    const draw = (t) => {
      const dt = (t - t0) / 1000;
      ctx.fillStyle = "#2a2826"; ctx.fillRect(0, 0, W, H);
      const grad = ctx.createRadialGradient(W/2, H/2, 50, W/2, H/2, 350);
      grad.addColorStop(0, "rgba(46,92,138,0.14)"); grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#5c4438"; ctx.fillRect(0, 280, W, 100);
      ctx.fillStyle = "#3a2a22"; ctx.fillRect(0, 280, W, 4);
      ctx.fillStyle = "#1a1a18"; ctx.fillRect(180, 100, 240, 170);
      ctx.fillStyle = "#0a0a08"; ctx.fillRect(190, 110, 220, 150);
      ctx.fillStyle = "#1a1a18"; ctx.fillRect(280, 270, 40, 18); ctx.fillRect(250, 286, 100, 6);
      ctx.font = "11px monospace";
      ["const design = (problem) => {", "  return clarity + craft;", "};", "design(everything);", "// ship it"].forEach((line, i) => {
        const reveal = Math.min(line.length, Math.max(0, (dt * 12) % 60 - i * 8));
        ctx.fillStyle = i === 3 ? "#7ea8d6" : "#a8d8a8";
        ctx.fillText(line.slice(0, reveal), 200, 130 + i * 20);
      });
      if (Math.floor(dt * 2) % 2 === 0) { ctx.fillStyle = "#7ea8d6"; ctx.fillRect(200, 222, 6, 12); }
      ctx.fillStyle = "#e8dcc4"; ctx.fillRect(80, 240, 50, 50);
      ctx.strokeStyle = "#7ea8d6"; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(140, 265, 12, -Math.PI/2, Math.PI/2); ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,0.4)"; ctx.lineWidth = 2;
      [0, 1, 2].forEach(i => {
        ctx.beginPath();
        for (let y = 0; y < 50; y++) {
          const x = 95 + i * 14 + Math.sin((dt * 2 + y / 8 + i)) * 6;
          y === 0 ? ctx.moveTo(x, 240 - y) : ctx.lineTo(x, 240 - y);
        }
        ctx.stroke();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 600 }}>
      <canvas ref={cvs} style={{ width: "100%", height: "auto", display: "block" }} />
      {/* Static 3D character — placed where the original pixel character sat,
          beside the monitor on the right (canvas was 600×380; character at x≈440, y≈200) */}
      <div style={{
        position: "absolute",
        // monitor base sits at canvas y≈292 (of 380) — that's ~23% from bottom
        left: "70%",
        bottom: "23%",
        pointerEvents: "none",
        transform: "scale(0.32)",
        transformOrigin: "bottom left",
      }}>
        <DesignerCharacter size={200} intensity={1} still />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-16 md:px-8 md:py-24"
      style={{
        background: V2.bg,
        borderTop: `1px solid ${V2.rule}`,
      }}
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          style={{
            fontFamily: FP.mono,
            fontSize: 11,
            letterSpacing: "0.2em",
            color: V2.muted,
            marginBottom: 24,
          }}
        >
          §02 ──── ABOUT
        </div>

        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:gap-12">
          <div>
            <h2
              style={{
                fontFamily: FP.display,
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: -0.8,
                color: V2.ink,
                margin: 0,
                maxWidth: 540,
              }}
            >
              I build systems that other people's good ideas can grow inside.
              <br />
              <span style={{ color: V2.accent }}>Type, structure, motion</span>
              {" "}— in that order.
            </h2>

            <p
              style={{
                marginTop: 20,
                fontSize: 14,
                lineHeight: 1.65,
                color: V2.ink2,
                maxWidth: 520,
                margin: "20px 0 0",
              }}
            >
              Eight years between studios and in-house teams. I tend to start with type and structure, then work outward into motion and detail. Most engagements run six to twelve weeks, in small teams — usually one founder, one engineer, me.
            </p>
          </div>

          <div style={{ border: `1px solid ${V2.rule}`, padding: 12, background: V2.paper }}>
            <DeskScene />
            <div
              style={{
                fontFamily: FP.mono,
                fontSize: 9,
                letterSpacing: "0.2em",
                color: V2.muted,
                marginTop: 8,
                textAlign: "center",
              }}
            >
              FIG.02 / STUDIO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
