'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/* ------------------------------------------------------------------ *
 * Tweak-me config, colors, links, and the two scroll states.
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
  { label: 'About', href: '#about-story' },
  { label: 'Resume', href: '/prerna_product_designer.pdf', external: true },
];

// "Let's talk" opens the mail client, matching the Hero's "HIRE ME" CTA.
const MAILTO = "mailto:prernaa99@icloud.com?subject=Let's%20work%20together";

// Scroll threshold with hysteresis so it never flickers at the boundary.
const ENTER = 120; // scrolled past this -> glass pill
const EXIT = 70;   // scrolled above this -> hero state

// Interpolated values for each end of the transition.
const HERO = { top: 10, maxWidth: 1280, padX: 26, padY: 16, gap: 40, bgA: 0, blur: 0, borderA: 0, shadowA: 0 };
const PILL = { top: 16, maxWidth: 640, padX: 18, padY: 9, gap: 26, bgA: 0.65, blur: 16, borderA: 0.4, shadowA: 0.08 };

const TALK_COLLAPSED = 44; // circle diameter (collapsed pill = just the avatar)
// expanded width is measured from content at hover time (see expandTalk)

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

      // Mobile menu starts hidden. Centered via CSS auto-margins (not a
      // transform), so GSAP can own the transform (y) without conflict.
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
    const el = talkRef.current;
    // Hug the content: scrollWidth = avatar + gap + text + right padding,
    // measured even while the pill is clipped/collapsed (overflow-hidden).
    const target = el ? el.scrollWidth : 160;
    gsap.to(el, {
      width: target,
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
      {/* ===== MOBILE: flat, full-width, fixed top bar (no pill) ===== */}
      <header
        className="md:hidden fixed top-0 inset-x-0 z-[60] flex items-center justify-between h-14 px-5"
        style={{
          background: 'rgba(252,252,252,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(29,47,70,0.08)',
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}
      >
        <a href="#hero" className="flex items-center gap-2.5" data-cursor="hover" aria-label="Prerna, home">
          <img src="/prerna_design_logo.svg" alt="prerna.design" className="h-[22px] w-auto" />        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex items-center justify-center w-8 h-8 bg-transparent border-0 p-0 appearance-none"
          data-cursor="hover"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={CONFIG.ink} strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={CONFIG.ink}>
              <path d="M3 7V5H21V7H3ZM3 19V17H21V19H3ZM3 13V11H21V13H3Z" />
            </svg>
          )}
        </button>
      </header>

      {/* ===== DESKTOP: animated glass pill (md+), glass values driven by GSAP ===== */}
      <header
        ref={barRef}
        className="hidden md:grid md:grid-cols-[1fr_auto_1fr] fixed left-1/2 -translate-x-1/2 z-[60] items-center rounded-full"
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
        {/* LEFT, logo */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0 justify-self-start" data-cursor="hover" aria-label="Prerna, home">
          <img src="/prerna_design_logo.svg" alt="prerna.design" className="h-[22px] w-auto" />        </a>

        {/* CENTER, links — constant weight; only color + underline animate */}
        <nav ref={navRef} className="flex items-center justify-self-center" style={{ gap: HERO.gap }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              data-cursor="hover"
              className="group relative text-[14px] font-medium transition-colors duration-200"
              style={{ color: CONFIG.inkMuted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CONFIG.ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = CONFIG.inkMuted)}
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[1.5px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: CONFIG.ink }} />
            </a>
          ))}
        </nav>

        {/* RIGHT, avatar -> Let's Talk pill (overlays leftward, no reflow) */}
        <div className="relative z-10 flex items-center shrink-0 justify-self-end">
          <div className="relative shrink-0 mr-3" style={{ width: TALK_COLLAPSED, height: TALK_COLLAPSED }}>
            <a
              ref={talkRef}
              href={MAILTO}
              onMouseEnter={expandTalk}
              onMouseLeave={collapseTalk}
              data-cursor="hover"
              aria-label="Let's talk"
              className="absolute right-0 top-0 flex items-center h-11 rounded-full overflow-hidden"
              style={{ width: TALK_COLLAPSED, backgroundColor: 'rgba(0,0,0,0)' }}
            >
              <span className="absolute left-0 top-0 w-11 h-11 flex items-center justify-center shrink-0">
                <span ref={ringRef} className="absolute inset-[1px] rounded-full" style={{ border: `2px solid ${CONFIG.ring}` }} />
                <span className="absolute inset-[4px] rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(/avatar.jpg)', backgroundColor: CONFIG.ink }} />
              </span>
              <span ref={talkTextRef} className="whitespace-nowrap text-[14px] font-medium pl-[52px] pr-4" style={{ color: CONFIG.talkText }}>
                Let&apos;s Talk
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* ===== MOBILE dropdown — floating rounded glass panel ===== */}
      <div
        ref={menuRef}
        className="md:hidden fixed left-0 right-0 mx-auto z-[59] top-[64px] w-[calc(100%-32px)] max-w-[420px] rounded-2xl p-4"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: `0 8px 32px rgba(${CONFIG.shadowRGB},0.1)`,
        }}
      >
        <nav className="flex flex-col">
          {[...LINKS, { label: "Let's talk", href: MAILTO }].map((l) => (
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
