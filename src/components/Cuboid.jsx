export default function Cuboid({ w, h, d, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, faceColors, children, radius = 0, style }) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const fc = faceColors || {};
  const sides = [
    { t: `translateZ(${hd}px)`, c: fc.front || color, w, h },
    { t: `rotateY(180deg) translateZ(${hd}px)`, c: fc.back || color, w, h },
    { t: `rotateY(90deg) translateZ(${hw}px)`, c: fc.right || color, w: d, h },
    { t: `rotateY(-90deg) translateZ(${hw}px)`, c: fc.left || color, w: d, h },
    { t: `rotateX(90deg) translateZ(${hh}px)`, c: fc.top || color, w, h: d },
    { t: `rotateX(-90deg) translateZ(${hh}px)`, c: fc.bottom || color, w, h: d },
  ];
  return (
    <div style={{
      position: "absolute",
      left: "50%", top: "50%",
      width: w, height: h,
      marginLeft: -hw, marginTop: -hh,
      transformStyle: "preserve-3d",
      transform: `translate3d(${x}px,${y}px,${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
      ...style,
    }}>
      {sides.map((s, i) => (
        <div key={i} style={{
          position: "absolute",
          width: s.w, height: s.h,
          left: w / 2 - s.w / 2, top: h / 2 - s.h / 2,
          background: s.c,
          transform: s.t,
          borderRadius: radius,
          boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.18)",
        }} />
      ))}
      {children}
    </div>
  );
}
