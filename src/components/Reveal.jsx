import { useRef, useState, useEffect } from 'react';
import { SPRING } from '../data';

export default function Reveal({ children, delay = 0, y = 24 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : `translateY(${y}px)`, transition: `opacity 0.7s ${SPRING} ${delay}ms, transform 0.7s ${SPRING} ${delay}ms` }}>
      {children}
    </div>
  );
}
