'use client';
import { useRef, useState, useEffect } from 'react';
import { V2, FP, SPRING } from '@/lib/data';

export default function Contact() {
  const cvs = useRef(null);
  const [color, setColor] = useState("#2e5c8a");
  const [size, setSize] = useState(4);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const c = cvs.current; if (!c) return;
    const ctx = c.getContext("2d");
    // Size the backing buffer to the element's CURRENT (flex-controlled)
    // display size × 2 for sharpness. Do NOT set c.style, the canvas height
    // stays driven by `flex-1` so the section always fits the viewport.
    const init = () => {
      const r = c.getBoundingClientRect();
      if (!r.width || !r.height) return;
      c.width = r.width * 2; c.height = r.height * 2;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(2, 2);
      ctx.fillStyle = "#2a2a28"; ctx.fillRect(0, 0, r.width, r.height);
      ctx.font = "italic 28px Georgia"; ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fillText("draw here", 32, 60);
    };
    init();
    const ro = new ResizeObserver(init);
    ro.observe(c);
    window.addEventListener("resize", init);
    return () => { ro.disconnect(); window.removeEventListener("resize", init); };
  }, []);

  const getPos = (e) => {
    const c = cvs.current, r = c.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - r.left, y: t.clientY - r.top };
  };
  const start = (e) => { drawing.current = true; last.current = getPos(e); };
  const move = (e) => {
    if (!drawing.current) return;
    e.preventDefault();
    const p = getPos(e);
    const ctx = cvs.current.getContext("2d");
    ctx.strokeStyle = color; ctx.lineWidth = size; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(last.current.x, last.current.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    last.current = p;
  };
  const end = () => { drawing.current = false; };
  const clear = () => {
    const c = cvs.current, r = c.getBoundingClientRect(), ctx = c.getContext("2d");
    ctx.fillStyle = "#2a2a28"; ctx.fillRect(0, 0, r.width, r.height);
    ctx.font = "italic 28px Georgia"; ctx.fillStyle = "rgba(255,255,255,0.1)"; ctx.fillText("draw here", 32, 60);
  };
  const save = () => {
    const a = document.createElement("a"); a.href = cvs.current.toDataURL("image/png"); a.download = "draw-with-prerna.png"; a.click();
  };

  const colors = ["#2e5c8a", "#7ea8d6", "#f3f1ea", "#3a9b5c", "#1d2f46"];
  const sizes = [{ s: 2, l: "Fine" }, { s: 4, l: "Medium" }, { s: 8, l: "Bold" }, { s: 16, l: "Chunky" }];

  return (
    <section id="contact" className="min-h-[100svh] flex flex-col px-5 pt-24 pb-10 md:px-8 md:pt-24" style={{ background: V2.dark, color: V2.paper, borderTop: `1px solid ${V2.rule}` }}>
      <div className="mx-auto w-full max-w-[1320px] flex flex-col flex-1 min-h-0 justify-between gap-6">
        {/* top, label + headline */}
        <div>
          <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: "#888", marginBottom: 20 }}>GET IN TOUCH</div>
          <h2 style={{ fontFamily: FP.display, fontSize: "clamp(40px,6vw,88px)", fontWeight: 500, lineHeight: 0.9, letterSpacing: -3, margin: 0 }}>
            DRAW <span style={{ color: V2.accent }}>SOMETHING</span><br />TOGETHER.
          </h2>
        </div>

        {/* middle, controls + a moderate canvas */}
        <div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8 }}>
              {colors.map(c => (
                <button key={c} onClick={() => setColor(c)} data-cursor="hover" style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: color === c ? `2px solid ${V2.paper}` : "2px solid transparent", cursor: "pointer", transition: `transform 0.3s ${SPRING}`, transform: color === c ? "scale(1.15)" : "scale(1)" }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {sizes.map(({ s, l }) => (
                <button key={s} onClick={() => setSize(s)} data-cursor="hover" style={{ padding: "8px 14px", background: size === s ? V2.accent : "transparent", color: V2.paper, border: `1px solid ${size === s ? V2.accent : "#444"}`, fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", cursor: "pointer" }}>{l.toUpperCase()}</button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
              <button onClick={clear} data-cursor="hover" style={{ padding: "8px 14px", background: "transparent", color: V2.paper, border: "1px solid #444", fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", cursor: "pointer" }}>CLEAR</button>
              <button onClick={save} data-cursor="hover" style={{ padding: "8px 14px", background: V2.paper, color: V2.dark, border: "none", fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em", cursor: "pointer", fontWeight: 600 }}>SAVE PNG ↓</button>
            </div>
          </div>

          <div className="relative mt-4" style={{ height: "clamp(280px, 48vh, 520px)" }}>
            <canvas ref={cvs}
              onMouseDown={start} onMouseMove={move} onMouseUp={end} onMouseLeave={end}
              onTouchStart={start} onTouchMove={move} onTouchEnd={end}
              data-cursor="crosshair"
              className="absolute inset-0 block w-full h-full"
              style={{ background: "#2a2a28", border: "1px solid #333", touchAction: "none" }} />
          </div>
        </div>

        {/* bottom, contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderTop: "1px solid rgba(255,255,255,0.2)", fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em" }}>
          {[["EMAIL", "hello@prerna.studio"], ["READ.CV", "read.cv/prerna"], ["LINKEDIN", "in/prerna-studio"]].map(([k, v]) => (
            <div key={k} className="border-solid border-white/20 px-4 py-5 border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <div style={{ opacity: 0.5, marginBottom: 10 }}>{k}</div>
              <div style={{ fontFamily: FP.body, fontSize: 16, letterSpacing: 0, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
