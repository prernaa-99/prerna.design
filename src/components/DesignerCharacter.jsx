import { useState, useEffect, useRef } from 'react';
import Cuboid from './Cuboid';

const SKIN = "#f5d0b8", SKIN_D = "#e0b598", SKIN_DD = "#c89a7c";
const HAIR = "#3a2a1f", HAIR_D = "#2a1d14", HAIR_HL = "#5a4332";
const SWEATER = "#fbe9d3", SWEATER_D = "#e8d0b2";
const OVERALLS = "#b15c8e", OVERALLS_D = "#8c4570";
const SHOES = "#3a2a1f", CHEEK = "#f0a098";
const ACCENT = "#cf3a1f", MINT = "#9ec9b4";

export default function DesignerCharacter({ size = 360, intensity = 1, still = false }) {
  const [rot, setRot] = useState(still ? { x: 0, y: 0 } : { x: -6, y: -18 });
  const [auto, setAuto] = useState(!still);
  const [t, setT] = useState(0);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (still) return;
    const onMove = (e) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.28;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const maxDist = 5;
      const d = Math.min(maxDist, (dist / 120) * maxDist);
      const angle = Math.atan2(dy, dx);
      setPupil({ x: Math.cos(angle) * d, y: Math.sin(angle) * d });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [still]);

  useEffect(() => {
    if (still) return;
    let raf, last = performance.now(), elapsed = 0;
    const tick = (now) => {
      const dt = (now - last) / 1000; last = now;
      elapsed += dt;
      setT((v) => v + dt);
      if (auto) setRot({ x: -6 + Math.sin(elapsed * 0.6) * 4, y: -10 + Math.sin(elapsed * 0.8) * 18 });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [auto, still]);

  const onDown = (e) => {
    e.preventDefault();
    setAuto(false);
    const start = { x: e.clientX, y: e.clientY, rx: rot.x, ry: rot.y };
    const move = (ev) => setRot({
      x: Math.max(-50, Math.min(40, start.rx - (ev.clientY - start.y) * 0.5)),
      y: start.ry + (ev.clientX - start.x) * 0.5,
    });
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const bob = still ? 0 : Math.sin(t * 1.6) * 5;
  const handWave = still ? 0 : Math.sin(t * 4) * 8;
  const heartFloat = still ? 0 : Math.sin(t * 1.2) * 6;
  const eyeShine = still ? 1 : (Math.sin(t * 2) + 1) / 2;

  return (
    <div
      ref={containerRef}
      style={{ width: size + 60, height: size + 60, perspective: `${1500 / intensity}px`, cursor: still ? "default" : "grab", userSelect: "none", touchAction: "none", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
      onPointerDown={still ? undefined : onDown}
    >
      <div style={{ width: size, height: size, position: "relative", transformStyle: "preserve-3d", transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateY(${bob}px)` }}>

        <div style={{ position: "absolute", left: "50%", top: "50%", width: 180, height: 180, marginLeft: -90, marginTop: -90, background: "radial-gradient(ellipse, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 65%)", transform: "rotateX(90deg) translateZ(-150px)" }} />

        {/* HEAD */}
        <Cuboid w={110} h={100} d={96} color={SKIN} faceColors={{ front: SKIN, back: SKIN_D, left: SKIN_D, right: SKIN_D, top: SKIN_D, bottom: SKIN_DD }} y={-90} radius={16}>
          <Cuboid w={118} h={36} d={104} color={HAIR} faceColors={{ front: HAIR, top: HAIR_D, back: HAIR_D, left: HAIR_HL, right: HAIR_HL, bottom: HAIR_D }} y={-38} radius={14} />
          <Cuboid w={20} h={36} d={28} color={HAIR} faceColors={{ left: HAIR_D, right: HAIR_HL, top: HAIR_D }} x={-58} y={-12} z={20} radius={8} />
          <Cuboid w={20} h={36} d={28} color={HAIR} faceColors={{ left: HAIR_D, right: HAIR_D, top: HAIR_D }} x={58} y={-12} z={20} radius={8} />
          <Cuboid w={70} h={14} d={10} color={HAIR_D} y={-30} z={48} radius={6} />
          <div style={{ position: "absolute", left: 4, top: 8, width: 14, height: 6, background: ACCENT, transform: "translateZ(50px)", borderRadius: 2 }} />
          {/* EYES — flat SVG painted directly onto the head face (z=49) */}
          <svg
            viewBox="0 0 110 100"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 110,
              height: 100,
              transform: "translateZ(49px)",
              pointerEvents: "none",
            }}
          >
            {[
              { cx: 38 },
              { cx: 72 },
            ].map((e, i) => (
              <g key={i}>
                {/* eye — tiny dark dot with a bright sparkle, chibi style */}
                <ellipse cx={e.cx + pupil.x} cy={56 + pupil.y} rx={4} ry={5} fill="#1a1310" style={{ transition: "cx 0.08s ease-out, cy 0.08s ease-out" }} />
                {/* sparkle highlight */}
                <circle cx={e.cx + 1.2 + pupil.x} cy={54 + pupil.y} r={1.4 * (0.85 + eyeShine * 0.2)} fill="#ffffff" style={{ transition: "cx 0.08s ease-out, cy 0.08s ease-out" }} />
              </g>
            ))}
          </svg>
          <div style={{ position: "absolute", width: 18, height: 10, left: 14, top: 70, background: CHEEK, borderRadius: "50%", opacity: 0.85, transform: "translateZ(48.5px)", filter: "blur(1px)" }} />
          <div style={{ position: "absolute", width: 18, height: 10, right: 14, top: 70, background: CHEEK, borderRadius: "50%", opacity: 0.85, transform: "translateZ(48.5px)", filter: "blur(1px)" }} />
          <div style={{ position: "absolute", left: "50%", top: 76, marginLeft: -7, width: 14, height: 7, borderBottom: `2.5px solid ${HAIR_D}`, borderLeft: "2.5px solid transparent", borderRight: "2.5px solid transparent", borderRadius: "0 0 10px 10px", transform: "translateZ(48.5px)" }} />
        </Cuboid>

        <Cuboid w={22} h={8} d={20} color={SKIN_D} y={-38} />

        {/* TORSO */}
        <Cuboid w={64} h={56} d={44} color={SWEATER} faceColors={{ front: SWEATER, back: SWEATER_D, left: SWEATER_D, right: SWEATER_D, top: SWEATER_D, bottom: OVERALLS }} y={-4} radius={12}>
          <div style={{ position: "absolute", left: 14, top: 14, width: 36, height: 28, background: OVERALLS, transform: "translateZ(22.5px)", borderRadius: 4 }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", color: ACCENT, fontSize: 14, lineHeight: 1 }}>♥</div>
          </div>
          <div style={{ position: "absolute", left: 12, top: -2, width: 8, height: 18, background: OVERALLS, transform: "translateZ(22.5px)", borderRadius: 2 }} />
          <div style={{ position: "absolute", right: 12, top: -2, width: 8, height: 18, background: OVERALLS, transform: "translateZ(22.5px)", borderRadius: 2 }} />
          <div style={{ position: "absolute", left: 13, top: 14, width: 6, height: 6, background: ACCENT, transform: "translateZ(23px)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", right: 13, top: 14, width: 6, height: 6, background: ACCENT, transform: "translateZ(23px)", borderRadius: "50%" }} />
        </Cuboid>

        {/* LEFT ARM */}
        <Cuboid w={18} h={36} d={20} color={SWEATER} faceColors={{ left: SWEATER_D, right: SWEATER_D, top: SWEATER_D }} x={-42} y={-20} z={2} rz={-25 + handWave} radius={8} />
        <Cuboid w={16} h={34} d={18} color={SWEATER} faceColors={{ top: SKIN, bottom: SWEATER_D, left: SWEATER_D, right: SWEATER_D }} x={-58} y={-50} z={4} rz={-50 + handWave} radius={8}>
          <Cuboid w={16} h={14} d={16} color={SKIN} y={-22} radius={6} />
          <div style={{ position: "absolute", left: "50%", top: 0, width: 5, height: 38, marginLeft: -2.5, marginTop: -36, background: MINT, transform: "rotateZ(20deg)", transformOrigin: "bottom center", borderRadius: 2, boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.25)" }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 8, background: ACCENT, borderRadius: "2px 2px 0 0" }} />
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 4, height: 1.5, background: HAIR_D }} />
          </div>
        </Cuboid>

        {/* RIGHT ARM */}
        <Cuboid w={18} h={42} d={20} color={SWEATER} faceColors={{ left: SWEATER_D, right: SWEATER_D, top: SWEATER_D, bottom: SKIN }} x={42} y={-12} z={2} rz={6} radius={8}>
          <Cuboid w={16} h={14} d={16} color={SKIN} y={26} radius={6} />
        </Cuboid>

        <Cuboid w={62} h={8} d={42} color={OVERALLS_D} y={28} radius={4} />
        <Cuboid w={66} h={36} d={46} color={OVERALLS} faceColors={{ front: OVERALLS, back: OVERALLS_D, left: OVERALLS_D, right: OVERALLS_D, bottom: SKIN }} y={50} radius={10} />

        {/* LEGS */}
        <Cuboid w={22} h={44} d={26} color={SKIN} faceColors={{ front: SKIN, back: SKIN_D, left: SKIN_D, right: SKIN_D }} x={-14} y={92} radius={8} />
        <Cuboid w={22} h={44} d={26} color={SKIN} faceColors={{ front: SKIN, back: SKIN_D, left: SKIN_D, right: SKIN_D }} x={14} y={92} radius={8} />
        <Cuboid w={28} h={14} d={36} color={SHOES} x={-14} y={120} z={4} radius={6}>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: "#fff", transform: "translateZ(18.5px)" }} />
        </Cuboid>
        <Cuboid w={28} h={14} d={36} color={SHOES} x={14} y={120} z={4} radius={6}>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: "#fff", transform: "translateZ(18.5px)" }} />
        </Cuboid>

        {/* Floating elements — hidden in still mode */}
        {!still && (
          <>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate3d(-130px,${-150 + heartFloat}px,40px) rotateZ(-12deg)`, color: ACCENT, fontSize: 28, lineHeight: 1, textShadow: "0 2px 0 rgba(0,0,0,0.15)" }}>♥</div>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate3d(140px,${-130 - heartFloat}px,30px) rotateZ(${t * 30}deg)`, color: MINT, fontSize: 22, lineHeight: 1, textShadow: "0 2px 0 rgba(0,0,0,0.15)" }}>✦</div>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate3d(120px,${20 + heartFloat * 0.5}px,60px) rotateY(-22deg) rotateZ(8deg)`, width: 80, height: 56, background: "#f3f1ea", border: "1.5px solid #161513", borderRadius: 6, boxShadow: "0 6px 0 rgba(0,0,0,0.12)" }}>
              <div style={{ position: "absolute", left: 6, top: 6, fontFamily: "'JetBrains Mono',monospace", fontSize: 6, letterSpacing: "0.15em", color: "#6b6862" }}>SKETCH.01</div>
              <div style={{ position: "absolute", left: 8, top: 18, right: 8, height: 2, background: ACCENT }} />
              <div style={{ position: "absolute", left: 8, top: 24, width: "60%", height: 1.5, background: "#161513" }} />
              <div style={{ position: "absolute", left: 8, top: 30, width: "40%", height: 1.5, background: "#161513" }} />
              <div style={{ position: "absolute", left: 30, top: 36, width: 16, height: 16, border: "1.5px solid #161513", borderRadius: "50%" }} />
              <div style={{ position: "absolute", left: 50, top: 36, width: 16, height: 16, background: MINT, borderRadius: 2 }} />
            </div>
          </>
        )}
      </div>

      {!still && (
        <>
          <div style={{ position: "absolute", left: 10, top: 16, fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.18em", color: "#6b6862", pointerEvents: "none" }}>↳ FIG.01 / DESIGNER ♥</div>
          <div style={{ position: "absolute", right: 10, bottom: 16, fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.18em", color: "#6b6862", pointerEvents: "none" }}>DRAG TO ROTATE ↻</div>
        </>
      )}
    </div>
  );
}
