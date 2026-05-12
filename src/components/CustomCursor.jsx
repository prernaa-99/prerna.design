import { useRef, useState, useEffect } from 'react';
import { V2, SPRING } from '../data';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: -50, y: -50 });
  const ringPos = useRef({ x: -50, y: -50 });
  const [mode, setMode] = useState("default");

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
      const el = e.target;
      if (el?.closest?.("[data-cursor='crosshair']")) setMode("crosshair");
      else if (el?.closest?.("a, button, [data-cursor='hover']")) setMode("hover");
      else setMode("default");
    };
    window.addEventListener("mousemove", move);
    let raf;
    const loop = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringPos.current.x - 18}px,${ringPos.current.y - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  const ringSize = mode === "hover" ? 56 : mode === "crosshair" ? 1 : 36;

  return (
    <>
      <div ref={dotRef} style={{ position: "fixed", top: 0, left: 0, width: 8, height: 8, borderRadius: "50%", background: V2.accent, pointerEvents: "none", zIndex: 9999, mixBlendMode: "exclusion" }} />
      <div ref={ringRef} style={{ position: "fixed", top: 0, left: 0, width: ringSize, height: ringSize, borderRadius: "50%", border: mode === "crosshair" ? "none" : `1.5px solid ${V2.ink}`, background: mode === "crosshair" ? V2.accent : "transparent", marginLeft: (36 - ringSize) / 2, marginTop: (36 - ringSize) / 2, pointerEvents: "none", zIndex: 9998, mixBlendMode: "exclusion", transition: `width 0.3s ${SPRING}, height 0.3s ${SPRING}, border 0.3s, background 0.3s` }} />
    </>
  );
}
