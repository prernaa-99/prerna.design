'use client';
import { useRef, useState, useEffect } from 'react';
import { V2, FP, SPRING } from '@/lib/data';

export default function Contact() {
  const cvs = useRef(null);
  const [color, setColor] = useState("#cf3a1f");
  const [size, setSize] = useState(4);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const c = cvs.current; if (!c) return;
    const ctx = c.getContext("2d");
    const init = () => {
      const r = c.getBoundingClientRect();
      c.width = r.width * 2; c.height = r.height * 2;
      c.style.width = r.width + "px"; c.style.height = r.height + "px";
      ctx.scale(2, 2);
      ctx.fillStyle = "#2a2a28"; ctx.fillRect(0, 0, r.width, r.height);
      ctx.font = "italic 28px Georgia"; ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fillText("draw here", 32, 60);
    };
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
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

  const colors = ["#cf3a1f", "#f3f1ea", "#e89642", "#3a9b5c", "#4a7fb8"];
  const sizes = [{ s: 2, l: "Fine" }, { s: 4, l: "Medium" }, { s: 8, l: "Bold" }, { s: 16, l: "Chunky" }];

  return (
    <section id="contact" className="px-5 pt-[72px] pb-12 md:px-8 md:pt-[120px] md:pb-[60px]" style={{ background: V2.dark, color: V2.paper, borderTop: `1px solid ${V2.rule}` }}>
      <div className="mx-auto max-w-[1320px]">
        <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: "#888", marginBottom: 24 }}>§05 ──── GET·IN·TOUCH</div>
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(72px,12vw,200px)", fontWeight: 500, lineHeight: 0.85, letterSpacing: -5, margin: 0 }}>
          DRAW<br /><span style={{ color: V2.accent }}>SOMETHING</span><br />TOGETHER.
        </h2>

        <div style={{ marginTop: 48, display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
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

        <canvas ref={cvs}
          onMouseDown={start} onMouseMove={move} onMouseUp={end} onMouseLeave={end}
          onTouchStart={start} onTouchMove={move} onTouchEnd={end}
          data-cursor="crosshair"
          className="block w-full h-80 mt-6 md:h-[460px]"
          style={{ background: "#2a2a28", border: "1px solid #333", touchAction: "none" }} />

        <div className="mt-10 md:mt-[60px] grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid rgba(255,255,255,0.2)", fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.15em" }}>
          {[["EMAIL", "hello@prerna.studio"], ["INSTAGRAM", "@prerna.studio"], ["READ.CV", "read.cv/prerna"], ["LINKEDIN", "in/prerna-studio"]].map(([k, v], i) => (
            <div key={k} className={`border-solid border-white/20 px-4 py-6 ${["border-r", "md:border-r", "border-r border-t md:border-t-0", "border-t md:border-t-0"][i]}`}>
              <div style={{ opacity: 0.5, marginBottom: 12 }}>{k}</div>
              <div style={{ fontFamily: FP.body, fontSize: 16, letterSpacing: 0, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
