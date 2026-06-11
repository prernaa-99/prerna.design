'use client';
import { FP } from '@/lib/data';

// Hero palette, taken straight from the Figma design (portfoluo_2026, node 1:2).
const HERO_BG = '#fcfcfc';
const NAVY = '#1d2f46';
const NAVY_MUTED = 'rgba(29,47,70,0.7)';

const CAPABILITIES = [
  { label: 'User Research', active: false },
  { label: 'Product Design', active: true },
  { label: 'Product Strategy', active: false },
  { label: 'Experimentation', active: false },
];

export default function Hero() {
  const goContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative overflow-hidden" style={{ background: HERO_BG }}>
      {/* ===================== DESKTOP STAGE (md+) ===================== */}
      {/* A 1280×840 art-directed canvas. Children are positioned by % of the
          canvas; type sizes use cqw (container-query width) so the whole
          composition scales proportionally and caps at the 1280 max-width. */}
      <div className="hidden md:flex md:flex-col" style={{ height: '100svh' }}>
        <div className="flex-1 min-h-0 w-full flex items-center justify-center">
          <div
            className="relative h-full"
            style={{ aspectRatio: '1280 / 840', maxWidth: '1280px', width: 'auto', containerType: 'inline-size' }}
          >
        {/* faint PRERNA watermark band along the top */}
        {/* watermark breaks out to the full viewport width while the
            foreground composition stays at the 1280 canvas proportions */}
        <img
          src="/hero/watermark.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
          style={{ width: '100vw', height: 'auto', zIndex: 1 }}
        />

        {/* giant PRERNA wordmark */}
        <p
          aria-label="Prerna"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap m-0"
          style={{
            top: '12.5%',
            fontFamily: FP.heroDisplay,
            fontWeight: 700,
            fontSize: '15.78cqw',
            color: NAVY,
            zIndex: 2,
          }}
        >
          PRERNA
        </p>

        {/* portrait, crops to the top of the source image and fades out below */}
        <div
          className="absolute overflow-hidden"
          style={{ left: '26.17%', top: '22.14%', width: '47.42%', height: '78.57%', zIndex: 3 }}
        >
          <img
            src="/hero/portrait.png"
            alt="Prerna"
            className="block w-full h-auto"
          />
        </div>

        {/* gradient that fades the portrait into the background */}
        <div
          className="pointer-events-none absolute left-0 w-full"
          style={{
            top: '62%',
            height: '38%',
            background: 'linear-gradient(to bottom, rgba(252,252,252,0) 0%, rgba(252,252,252,0.5) 70%, #fcfcfc 100%)',
            zIndex: 4,
          }}
        />

        {/* tagline */}
        <p
          className="absolute m-0"
          style={{
            left: '7.81%',
            top: '56.4%',
            width: '24%',
            fontFamily: FP.body,
            fontWeight: 500,
            fontSize: '1.25cqw',
            lineHeight: 1.3,
            color: NAVY,
            zIndex: 5,
          }}
        >
          I turn user insights into intuitive digital products that drive engagement, conversion, and growth.
        </p>

        {/* // HIRE ME → */}
        <button
          onClick={goContact}
          data-cursor="hover"
          className="absolute flex items-end gap-1 bg-transparent border-0 p-0 cursor-pointer"
          style={{
            left: '7.81%',
            top: '69.2%',
            fontFamily: FP.body,
            fontWeight: 700,
            fontSize: '1.5625cqw',
            color: NAVY,
            zIndex: 5,
          }}
        >
          <span className="whitespace-nowrap">{'// HIRE ME'}</span>
          <span aria-hidden>→</span>
        </button>

        {/* capabilities list (bottom-right) */}
        <div
          className="absolute flex flex-col items-start"
          style={{ left: '80.4%', top: '52.7%', gap: '1.15cqw', zIndex: 5 }}
        >
          {CAPABILITIES.map((c) => (
            <span
              key={c.label}
              className="whitespace-nowrap"
              style={{
                fontFamily: FP.body,
                fontWeight: c.active ? 700 : 400,
                fontSize: '1.5625cqw',
                lineHeight: 1.15,
                color: c.active ? NAVY : NAVY_MUTED,
              }}
            >
              {c.label}
            </span>
          ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MOBILE STACK (< md) ===================== */}
      <div className="md:hidden px-5 pt-12 pb-4">
        <p
          aria-label="Prerna"
          className="text-center m-0 leading-none"
          style={{
            fontFamily: FP.heroDisplay,
            fontWeight: 700,
            fontSize: 'clamp(2.75rem, 18vw, 5rem)',
            color: NAVY,
          }}
        >
          PRERNA
        </p>

        <div className="relative mt-2 mx-auto max-w-[420px] overflow-hidden" style={{ height: '46vh' }}>
          <img src="/hero/portrait.png" alt="Prerna" className="block w-full h-auto" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
            style={{ background: 'linear-gradient(to bottom, rgba(252,252,252,0) 0%, rgba(252,252,252,0.5) 70%, #fcfcfc 100%)' }}
          />
        </div>

        <p
          className="mt-4 m-0 max-w-[320px]"
          style={{ fontFamily: FP.body, fontWeight: 500, fontSize: 15, lineHeight: 1.4, color: NAVY }}
        >
          I turn user insights into intuitive digital products that drive engagement, conversion, and growth.
        </p>

        <button
          onClick={goContact}
          data-cursor="hover"
          className="mt-4 flex items-end gap-1 bg-transparent border-0 p-0 cursor-pointer"
          style={{ fontFamily: FP.body, fontWeight: 700, fontSize: 18, color: NAVY }}
        >
          <span className="whitespace-nowrap">{'// HIRE ME'}</span>
          <span aria-hidden>→</span>
        </button>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
          {CAPABILITIES.map((c) => (
            <span
              key={c.label}
              style={{
                fontFamily: FP.body,
                fontWeight: c.active ? 700 : 400,
                fontSize: 15,
                color: c.active ? NAVY : NAVY_MUTED,
              }}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
