import { useRef, useState, useEffect } from 'react';
import { V2, FP, TOOLS } from '../data';

function shade(hex, amt) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  const f = (v) => Math.max(0, Math.min(255, Math.round(v + v * amt)));
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}

export default function Stack() {
  const [hover, setHover] = useState(null);
  const cvs = useRef(null);
  const wrap = useRef(null);
  const [mouseLocal, setMouseLocal] = useState({ x: -1, y: -1 });

  useEffect(() => {
    const c = cvs.current; if (!c) return;
    const ctx = c.getContext("2d");
    const resize = () => {
      const r = wrap.current.getBoundingClientRect();
      c.width = r.width * 2; c.height = 520 * 2;
      c.style.width = r.width + "px"; c.style.height = "520px";
      ctx.scale(2, 2);
    };
    resize();
    let raf, t0 = performance.now();
    const blocks = TOOLS.map((t, i) => {
      const col = i % 5, row = Math.floor(i / 5);
      return { ...t, baseX: 120 + col * 130, baseY: 200 + row * 130, phase: i * 0.7 };
    });
    const draw = (t) => {
      const dt = (t - t0) / 1000;
      const W = c.width / 2, H = c.height / 2;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#1a1a18"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,255,255,0.06)"; ctx.lineWidth = 1;
      for (let i = -10; i < 10; i++) {
        const ox = W/2 + i * 60, oy = 360;
        ctx.beginPath(); ctx.moveTo(ox - 600, oy + 300); ctx.lineTo(ox + 600, oy - 300); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox - 600, oy - 300); ctx.lineTo(ox + 600, oy + 300); ctx.stroke();
      }
      blocks.forEach((b, i) => {
        const isHov = hover === i;
        const float = Math.sin(dt + b.phase) * 6;
        const lift = isHov ? -16 : 0;
        const x = b.baseX, y = b.baseY + float + lift, sz = 60;
        ctx.fillStyle = "rgba(0,0,0,0.3)"; ctx.beginPath(); ctx.ellipse(x, y + 50 - lift, 30, 8, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = b.color; ctx.beginPath(); ctx.moveTo(x, y - sz/2); ctx.lineTo(x + sz/2, y - sz/4); ctx.lineTo(x, y); ctx.lineTo(x - sz/2, y - sz/4); ctx.closePath(); ctx.fill();
        ctx.fillStyle = shade(b.color, -0.2); ctx.beginPath(); ctx.moveTo(x - sz/2, y - sz/4); ctx.lineTo(x, y); ctx.lineTo(x, y + sz/2); ctx.lineTo(x - sz/2, y + sz/4); ctx.closePath(); ctx.fill();
        ctx.fillStyle = shade(b.color, -0.4); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + sz/2, y - sz/4); ctx.lineTo(x + sz/2, y + sz/4); ctx.lineTo(x, y + sz/2); ctx.closePath(); ctx.fill();
        if (isHov) { ctx.shadowColor = b.color; ctx.shadowBlur = 30; ctx.fillStyle = b.color; ctx.beginPath(); ctx.moveTo(x, y - sz/2 - 2); ctx.lineTo(x + sz/2 + 2, y - sz/4); ctx.lineTo(x, y + 2); ctx.lineTo(x - sz/2 - 2, y - sz/4); ctx.closePath(); ctx.fill(); ctx.shadowBlur = 0; }
        ctx.fillStyle = "#fff"; ctx.font = "bold 10px 'Space Grotesk',sans-serif"; ctx.textAlign = "center"; ctx.fillText(b.name, x, y - sz/2 - 6); ctx.textAlign = "left";
        b.hit = { x: x - sz/2, y: y - sz/2, w: sz, h: sz };
      });
      const cx = W/2, cy = 380;
      ctx.fillStyle = "#3a2418"; ctx.fillRect(cx - 14, cy - 30, 28, 16);
      ctx.fillStyle = "#f5d6b8"; ctx.fillRect(cx - 12, cy - 22, 24, 18);
      ctx.fillStyle = "#1a1a1a"; ctx.fillRect(cx - 6, cy - 14, 3, 3); ctx.fillRect(cx + 3, cy - 14, 3, 3);
      ctx.fillStyle = "#e8dcc4"; ctx.fillRect(cx - 14, cy - 4, 28, 22);
      raf = requestAnimationFrame(draw);
      if (mouseLocal.x >= 0) {
        let h = null;
        for (let i = 0; i < blocks.length; i++) {
          const b = blocks[i];
          if (mouseLocal.x >= b.hit.x && mouseLocal.x <= b.hit.x + b.hit.w && mouseLocal.y >= b.hit.y && mouseLocal.y <= b.hit.y + b.hit.h) { h = i; break; }
        }
        if (h !== hover) setHover(h);
      } else if (hover !== null) setHover(null);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [hover, mouseLocal]);

  return (
    <section id="skills" style={{ padding: "120px 0 0", background: V2.dark, color: V2.paper, borderTop: `1px solid ${V2.rule}` }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px 40px" }}>
        <div style={{ fontFamily: FP.mono, fontSize: 11, letterSpacing: "0.2em", color: "#888", marginBottom: 24 }}>§03 ──── STACK / WORKSHOP</div>
        <h2 style={{ fontFamily: FP.display, fontSize: "clamp(48px,6vw,96px)", fontWeight: 500, lineHeight: 0.95, letterSpacing: -2.5, margin: 0 }}>The <span style={{ color: V2.accent }}>workshop</span>.</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#aaa", maxWidth: 640, marginTop: 16 }}>Hover the floating tools to see what each one is for.</p>
      </div>
      <div ref={wrap} onMouseMove={(e) => { const r = wrap.current.getBoundingClientRect(); setMouseLocal({ x: e.clientX - r.left, y: e.clientY - r.top }); }} onMouseLeave={() => setMouseLocal({ x: -1, y: -1 })} style={{ position: "relative", width: "100%", height: 520, overflow: "hidden" }}>
        <canvas ref={cvs} style={{ display: "block" }} />
        {hover !== null && (
          <div style={{ position: "absolute", left: mouseLocal.x + 16, top: mouseLocal.y + 16, background: V2.paper, color: V2.ink, padding: "12px 16px", border: `1px solid ${V2.rule}`, pointerEvents: "none", maxWidth: 240, boxShadow: "0 12px 32px rgba(0,0,0,0.4)", zIndex: 5 }}>
            <div style={{ fontFamily: FP.display, fontSize: 16, fontWeight: 600 }}>{TOOLS[hover].name}</div>
            <div style={{ fontFamily: FP.mono, fontSize: 9, letterSpacing: "0.2em", color: TOOLS[hover].color, marginTop: 4 }}>{TOOLS[hover].level.toUpperCase()}</div>
            <div style={{ fontSize: 12, color: V2.ink2, marginTop: 6 }}>{TOOLS[hover].desc}</div>
          </div>
        )}
      </div>
    </section>
  );
}
