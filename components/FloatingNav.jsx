'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/* ------------------------------------------------------------------ *
 * Tweak-me config — colors, links, and the two scroll states.
 * ------------------------------------------------------------------ */
const CONFIG = {
  ink: '#1d2f46',          // primary text / logo
  inkMuted: '#6b7a91',     // muted link text
  ring: '#3a9b5c',         // green avatar ring
  talkBg: '#111111',       // "Let's Talk" pill background
  talkText: '#ffffff',
  glassRGB: '255, 255, 255',     // glass tint (rgb, alpha animated)
  shadowRGB: '0, 0, 0',          // glass shadow color
};

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

// Scroll threshold with hysteresis so it never flickers at the boundary.
const ENTER = 120; // scrolled past this -> glass pill
const EXIT = 70;   // scrolled above this -> hero state

// Interpolated values for each end of the transition.
const HERO = { top: 10, maxWidth: 1280, padX: 26, padY: 16, gap: 40, bgA: 0, blur: 0, borderA: 0, shadowA: 0 };
const PILL = { top: 16, maxWidth: 640, padX: 18, padY: 9, gap: 26, bgA: 0.65, blur: 16, borderA: 0.4, shadowA: 0.08 };

const TALK_COLLAPSED = 44; // circle diameter
const TALK_EXPANDED = 168; // expanded pill width

export default function FloatingNav() {
  const root = useRef(null);
  const barRef = useRef(null);     // the animated pill/header element
  const navRef = useRef(null);     // center links (gap animates)
  const ringRef = useRef(null);    // green pulsing ring
  const talkRef = useRef(null);    // avatar -> Let's Talk container
  const talkTextRef = useRef(null);
  const menuRef = useRef(null);    // mobile dropdown panel

  const [menuOpen, setMenuOpen] = useState(false);

  // Single function that maps progress p (0=hero, 1=pill) onto every
  // animated property. Driven by one eased GSAP tween below.
  const applyState = (p) => {
    const lerp = (a, b) => a + (b - a) * p;
    const bar = barRef.current;
    if (!bar) return;
    bar.style.top = `${lerp(HERO.top, PILL.top)}px`;
    bar.style.maxWidth = `${lerp(HERO.maxWidth, PILL.maxWidth)}px`;
    bar.style.paddingLeft = bar.style.paddingRight = `${lerp(HERO.padX, PILL.padX)}px`;
    bar.style.paddingTop = bar.style.paddingBottom = `${lerp(HERO.padY, PILL.padY)}px`;

    const blur = lerp(HERO.blur, PILL.blur);
    bar.style.backdropFilter = bar.style.webkitBackdropFilter = `blur(${blur}px)`;
    bar.style.backgroundColor = `rgba(${CONFIG.glassRGB}, ${lerp(HERO.bgA, PILL.bgA)})`;
    bar.style.borderColor = `rgba(${CONFIG.glassRGB}, ${lerp(HERO.borderA, PILL.borderA)})`;
    bar.style.boxShadow = `0 ${lerp(0, 8)}px ${lerp(0, 32)}px rgba(${CONFIG.shadowRGB}, ${lerp(HERO.shadowA, PILL.shadowA)})`;

    if (navRef.current) navRef.current.style.gap = `${lerp(HERO.gap, PILL.gap)}px`;
  };

  /* ---- setup: scroll-driven state + ring pulse + initial sets ---- */
  const { contextSafe } = useGSAP(
    () => {
      applyState(0); // hero state on mount

      // One eased tween; play()/reverse() across the threshold keeps the
      // motion continuous and reversible (no snapping, no flicker).
      const proxy = { p: 0 };
      const tween = gsap.to(proxy, {
        p: 1,
        duration: 0.5,
        ease: 'power2.out',
        paused: true,
        onUpdate: () => applyState(proxy.p),
      });

      let rafId = 0;
      const onScroll = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          const y = window.scrollY || window.pageYOffset;
          if (y > ENTER) tween.play();
          else if (y < EXIT) tween.reverse();
          // between EXIT..ENTER: hold current direction -> no flicker
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // Avatar "Let's Talk" pill starts collapsed, text hidden.
      gsap.set(talkRef.current, { width: TALK_COLLAPSED });
      gsap.set(talkTextRef.current, { autoAlpha: 0, x: -6 });

      // Gentle eased pulse on the green ring (sine in/out, not linear).
      gsap.to(ringRef.current, {
        scale: 1.09,
        opacity: 0.5,
        duration: 1.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        transformOrigin: 'center',
      });

      // Mobile menu starts hidden.
      gsap.set(menuRef.current, { autoAlpha: 0, y: -8 });

      return () => {
        window.removeEventListener('scroll', onScroll);
        if (rafId) cancelAnimationFrame(rafId);
      };
    },
    { scope: root }
  );

  /* ---- avatar hover: expand to dark "Let's Talk" pill ---- */
  const expandTalk = contextSafe(() => {
    gsap.to(talkRef.current, {
      width: TALK_EXPANDED,
      backgroundColor: CONFIG.talkBg,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(talkTextRef.current, { autoAlpha: 1, x: 0, duration: 0.4, ease: 'power2.out' });
  });

  const collapseTalk = contextSafe(() => {
    gsap.to(talkTextRef.current, { autoAlpha: 0, x: -6, duration: 0.3, ease: 'power2.in' });
    gsap.to(talkRef.current, {
      width: TALK_COLLAPSED,
      backgroundColor: 'rgba(0,0,0,0)',
      duration: 0.4,
      ease: 'power2.out',
    });
  });

  /* ---- mobile dropdown open/close ---- */
  useGSAP(
    () => {
      if (!menuRef.current) return;
      if (menuOpen) {
        gsap.to(menuRef.current, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      } else {
        gsap.to(menuRef.current, { autoAlpha: 0, y: -8, duration: 0.3, ease: 'power2.in' });
      }
    },
    { dependencies: [menuOpen], scope: root }
  );

  return (
    <div ref={root}>
      {/* Animated header bar — fixed, centered, glass values driven by GSAP */}
      <header
        ref={barRef}
        className="fixed left-1/2 -translate-x-1/2 z-[60] flex items-center justify-between rounded-full"
        style={{
          top: HERO.top,
          width: 'calc(100% - 32px)',
          maxWidth: HERO.maxWidth,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'rgba(255,255,255,0)',
          willChange: 'max-width, padding, top, background-color, box-shadow',
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}
      >
        {/* LEFT — logo */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0" data-cursor="hover" aria-label="Prerna — home">
          {/* Swap this styled mark for <img src="/logo.png" .../> when ready */}
          <span
            className="flex items-center justify-center w-9 h-9 rounded-[10px] text-white font-semibold text-[17px]"
            style={{ background: CONFIG.ink, backgroundImage: 'url(/logo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            P
          </span>
          <span className="text-[16px] font-semibold tracking-tight" style={{ color: CONFIG.ink }}>
            Prerna
          </span>
        </a>

        {/* CENTER — links (hidden on mobile) */}
        <nav ref={navRef} className="hidden md:flex items-center" style={{ gap: HERO.gap }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              data-cursor="hover"
              className="relative text-[14px] font-medium transition-colors duration-200 hover:opacity-100"
              style={{ color: CONFIG.inkMuted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CONFIG.ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = CONFIG.inkMuted)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* RIGHT — avatar -> Let's Talk + mobile hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            ref={talkRef}
            href="#contact"
            onMouseEnter={expandTalk}
            onMouseLeave={collapseTalk}
            data-cursor="hover"
            aria-label="Let's talk"
            className="relative flex items-center h-11 rounded-full overflow-hidden"
            style={{ width: TALK_COLLAPSED, backgroundColor: 'rgba(0,0,0,0)' }}
          >
            {/* avatar pinned left */}
            <span className="absolute left-0 top-0 w-11 h-11 flex items-center justify-center shrink-0">
              <span
                ref={ringRef}
                className="absolute inset-[1px] rounded-full"
                style={{ border: `2px solid ${CONFIG.ring}` }}
              />
              <span
                className="absolute inset-[4px] rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/avatar.jpg)',
                  backgroundColor: CONFIG.ink, // graceful fallback if image missing
                }}
              />
            </span>
            {/* revealing text */}
            <span
              ref={talkTextRef}
              className="whitespace-nowrap text-[14px] font-medium pl-[52px] pr-5"
              style={{ color: CONFIG.talkText }}
            >
              Let&apos;s Talk
            </span>
          </a>

          {/* hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px]"
            data-cursor="hover"
          >
            <span
              className="block w-5 h-[2px] rounded-full transition-transform duration-300"
              style={{ background: CONFIG.ink, transform: menuOpen ? 'translateY(3.5px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-[2px] rounded-full transition-transform duration-300"
              style={{ background: CONFIG.ink, transform: menuOpen ? 'translateY(-3.5px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </header>

      {/* MOBILE dropdown panel */}
      <div
        ref={menuRef}
        className="md:hidden fixed left-1/2 -translate-x-1/2 z-[59] top-[76px] w-[calc(100%-32px)] max-w-[420px] rounded-2xl p-4"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: `0 8px 32px rgba(${CONFIG.shadowRGB},0.1)`,
        }}
      >
        <nav className="flex flex-col">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 text-[15px] font-medium border-b last:border-b-0"
              style={{ color: CONFIG.ink, borderColor: 'rgba(29,47,70,0.08)' }}
              data-cursor="hover"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
