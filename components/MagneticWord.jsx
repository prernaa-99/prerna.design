'use client';
import { useRef } from 'react';
import { SPRING } from '@/lib/data';

export default function MagneticWord({ children, strength = 0.3, color }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    ref.current.style.transform = `translate(${dx}px,${dy}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <span style={{ display: "inline-block", overflow: "visible" }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <span ref={ref} style={{ display: "inline-block", color, transition: `transform 0.45s ${SPRING}` }}>{children}</span>
    </span>
  );
}
