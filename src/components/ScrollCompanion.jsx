import { useState, useEffect } from 'react';
import { SPRING } from '../data';

function PixelChar({ size = 84, mouse }) {
  const ref = useRef(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [bob, setBob] = useState(0);

  useEffect(() => {
    let raf, t0 = performance.now();
    const tick = (t) => { setBob(Math.sin((t - t0) / 800) * 3); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!ref.current || !mouse) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height * 0.35;
    const dx = mouse.x - cx, dy = mouse.y - cy;
    const a = Math.atan2(dy, dx), d = Math.min(3, Math.hypot(dx, dy) / 80);
    setEyePos({ x: Math.cos(a) * d, y: Math.sin(a) * d });
  }, [mouse]);

  const s = size;
  return (
    <div ref={ref} style={{ width: s, height: s, position: "relative", transform: `translateY(${bob}px)`, transition: "transform 0.05s linear" }}>
      <svg viewBox="0 0 100 100" width={s} height={s} style={{ display: "block" }}>
        <rect x="22" y="12" width="56" height="32" rx="4" fill="#3a2418" />
        <rect x="28" y="22" width="44" height="38" rx="4" fill="#f5d6b8" />
        <rect x="26" y="18" width="22" height="10" fill="#3a2418" />
        <rect x="50" y="18" width="14" height="6" fill="#3a2418" />
        <rect x="62" y="22" width="6" height="3" fill="#cf3a1f" />
        <circle cx="34" cy="44" r="3" fill="#f5a8a0" opacity="0.7" />
        <circle cx="66" cy="44" r="3" fill="#f5a8a0" opacity="0.7" />
        <ellipse cx="40" cy="38" rx="4" ry="5" fill="#fff" />
        <ellipse cx="60" cy="38" rx="4" ry="5" fill="#fff" />
        <circle cx={40 + eyePos.x} cy={38 + eyePos.y} r="2.4" fill="#1a1a1a" />
        <circle cx={60 + eyePos.x} cy={38 + eyePos.y} r="2.4" fill="#1a1a1a" />
        <circle cx={40 + eyePos.x + 0.6} cy={38 + eyePos.y - 0.8} r="0.8" fill="#fff" />
        <circle cx={60 + eyePos.x + 0.6} cy={38 + eyePos.y - 0.8} r="0.8" fill="#fff" />
        <path d="M 44 50 Q 50 54 56 50" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <rect x="26" y="60" width="48" height="28" rx="3" fill="#e8dcc4" />
        <rect x="36" y="60" width="3" height="14" fill="#6a3d5e" />
        <rect x="61" y="60" width="3" height="14" fill="#6a3d5e" />
        <rect x="32" y="74" width="36" height="14" fill="#6a3d5e" />
        <rect x="70" y="64" width="6" height="14" rx="2" fill="#f5d6b8" />
        <rect x="24" y="64" width="6" height="14" rx="2" fill="#f5d6b8" />
      </svg>
    </div>
  );
}

import { useRef } from 'react';

export default function ScrollCompanion({ mouse }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 100, transform: show ? "translateY(0)" : "translateY(120px)", opacity: show ? 1 : 0, transition: `transform 0.5s ${SPRING}, opacity 0.5s`, pointerEvents: "none" }}>
      <PixelChar size={84} mouse={mouse} />
    </div>
  );
}
