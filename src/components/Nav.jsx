import { useState, useEffect } from 'react';
import { V2, FP, SPRING } from '../data';

export default function Nav() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const items = [["work", "Work"], ["about", "About"], ["skills", "Stack"], ["experience", "Experience"], ["contact", "Contact"]];

  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);
  const [logoHovered, setLogoHovered] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    const observers = [];
    const visibility = {};
    // track hero separately — when it's visible, nothing is active
    const allIds = ["hero", ...items.map(([id]) => id)];

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibility[id] = entry.intersectionRatio;
          const top = Object.entries(visibility).sort((a, b) => b[1] - a[1])[0];
          // if hero is the most visible section, nothing is active
          if (!top || top[1] === 0 || top[0] === "hero") {
            setActive(null);
          } else {
            setActive(top[0]);
          }
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isLit = (id) => hovered === id || (!hovered && active === id);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50, background: `${V2.bg}ee`, backdropFilter: "blur(10px)", borderBottom: `1px solid ${V2.ruleSoft}` }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a
            href="#hero"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            style={{ display: "flex", alignItems: "center", gap: 10, color: V2.ink, textDecoration: "none", opacity: logoHovered ? 0.6 : 1, transition: `opacity 0.2s ${SPRING}` }}
          >
            <span style={{ width: 28, height: 28, background: logoHovered ? V2.accent : V2.ink, color: V2.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FP.display, fontSize: 16, fontWeight: 600, borderRadius: 4, transition: `background 0.25s ${SPRING}` }}>P</span>
            <span style={{ fontFamily: FP.display, fontSize: 15, fontWeight: 600 }}>Prerna</span>
          </a>

          <nav style={{ display: "flex", gap: 4 }}>
            {items.map(([id, l]) => {
              const lit = isLit(id);
              return (
                <button
                  key={id}
                  onClick={() => go(id)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  data-cursor="hover"
                  style={{
                    position: "relative",
                    padding: "8px 14px",
                    paddingBottom: 8,
                    background: "transparent",
                    color: lit ? V2.ink : V2.muted,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: FP.body,
                    fontSize: 13,
                    fontWeight: lit ? 600 : 500,
                    transition: `color 0.2s ${SPRING}, font-weight 0.15s`,
                  }}
                >
                  {l}
                  {/* underline spans full button width */}
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1.5,
                    background: V2.ink,
                    borderRadius: 1,
                    opacity: lit ? 1 : 0,
                    transition: `opacity 0.2s ${SPRING}`,
                  }} />
                </button>
              );
            })}
          </nav>
        </div>

        <button
          onClick={() => go("contact")}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          data-cursor="hover"
          style={{
            padding: "8px 16px",
            background: ctaHovered ? V2.ink : V2.accent,
            color: V2.paper,
            border: "none",
            borderRadius: 999,
            cursor: "pointer",
            fontFamily: FP.body,
            fontSize: 13,
            fontWeight: 600,
            transition: `background 0.25s ${SPRING}, transform 0.25s ${SPRING}, box-shadow 0.25s`,
            transform: ctaHovered ? "translateY(-1px) scale(1.03)" : "translateY(0) scale(1)",
            boxShadow: ctaHovered ? `0 6px 20px ${V2.accent}55` : "none",
          }}
        >
          Get in touch →
        </button>
      </div>
    </div>
  );
}
