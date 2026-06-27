'use client';
import Image from 'next/image';
import { FP } from '@/lib/data';
import { track } from '@/lib/analytics';

// Hero palette, taken straight from the Figma design (portfoluo_2026, node 1:2).
const HERO_BG = '#fcfcfc';
const NAVY = '#1d2f46';
const NAVY_MUTED = 'rgba(29,47,70,0.7)';

// "HIRE ME" opens the default mail client with the address + subject pre-filled.
const MAILTO = "mailto:prernaa99@icloud.com?subject=Let's%20work%20together";

const CAPABILITIES = [
  { label: 'User Research', active: false },
  { label: 'Product Design', active: true },
  { label: 'Product Strategy', active: false },
  { label: 'Experimentation', active: false },
];

export default function Hero() {
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
          <Image
            src="/hero/portrait.png"
            alt="Prerna"
            width={1024}
            height={1536}
            priority
            sizes="(min-width: 768px) 48vw, 100vw"
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
        <a
          href={MAILTO}
          onClick={() => track('cta_click', { cta: 'hire_me', location: 'hero' })}
          data-cursor="hover"
          className="group absolute flex items-end gap-1 bg-transparent border-0 p-0 cursor-pointer text-[#1d2f46] transition-colors duration-200 hover:text-[#2e5c8a]"
          style={{
            left: '7.81%',
            top: '69.2%',
            fontFamily: FP.body,
            fontWeight: 700,
            fontSize: '1.5625cqw',
            textDecoration: 'none',
            zIndex: 5,
          }}
        >
          <span className="whitespace-nowrap">{'// HIRE ME'}</span>
          <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>

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
      <div className="md:hidden relative h-[100svh] overflow-hidden flex flex-col items-center text-center px-5 pt-24 pb-10">
        {/* sharp navy heading */}
        <h1
          aria-label="Prerna"
          className="relative m-0 leading-none whitespace-nowrap"
          style={{ zIndex: 1, fontFamily: FP.heroDisplay, fontWeight: 700, fontSize: 'clamp(3rem, 19vw, 5rem)', letterSpacing: '0.01em', color: NAVY }}
        >
          PRERNA
        </h1>

        {/* LAYER 2: cutout portrait (z-2). Flexes to fill the rest of the fold,
            pulled up so the head overlaps the heading (only the top of PRERNA
            peeks above the hair), and faded at the bottom with a CSS mask. */}
        <div
          className="relative flex-1 min-h-0 w-full max-w-[400px] overflow-hidden"
          style={{
            zIndex: 2,
            marginTop: '-14vw', // tune: how much the head covers the heading
            WebkitMaskImage: 'linear-gradient(to bottom, #000 45%, rgba(0,0,0,0.55) 72%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, #000 45%, rgba(0,0,0,0.55) 72%, transparent 100%)',
          }}
        >
          <Image src="/hero/portrait.png" alt="Prerna" fill priority sizes="100vw" className="block" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <p
          className="mt-4 m-0 max-w-[340px]"
          style={{ fontFamily: FP.body, fontWeight: 500, fontSize: 15, lineHeight: 1.4, color: NAVY }}
        >
          I turn user insights into intuitive digital products that drive engagement, conversion, and growth.
        </p>

        <a
          href={MAILTO}
          onClick={() => track('cta_click', { cta: 'hire_me', location: 'hero' })}
          data-cursor="hover"
          className="group mt-6 flex items-end gap-1 bg-transparent border-0 p-0 cursor-pointer text-[#1d2f46] transition-colors duration-200 hover:text-[#2e5c8a]"
          style={{ fontFamily: FP.body, fontWeight: 700, fontSize: 18, textDecoration: 'none' }}
        >
          <span className="whitespace-nowrap">{'// HIRE ME'}</span>
          <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
