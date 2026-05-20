import { useState, useEffect, useLayoutEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Reveal from './components/Reveal';
import StageCase from './components/StageCase';
import { V2 } from './data';

// section anchors used by Nav/Contact; everything else is treated as a case route
const SECTION_ANCHORS = new Set(["", "hero", "work", "about", "skills", "experience", "contact"]);

// Instant (non-smooth) jump to top — bypasses the global `scroll-behavior: smooth`.
function jumpToTop() {
  // Temporarily disable smooth scrolling on the documentElement, jump, restore.
  const prev = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  // Restore on next frame so future anchor clicks animate normally.
  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = prev;
  });
}

function useRoute() {
  const getRoute = () => {
    const raw = window.location.hash.replace(/^#/, "");
    return SECTION_ANCHORS.has(raw) ? "" : raw;
  };
  const [route, setRoute] = useState(getRoute);
  useEffect(() => {
    const onChange = () => {
      jumpToTop();
      setRoute(getRoute());
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export default function App() {
  const route = useRoute();

  // Instant jump on every route change before paint.
  useLayoutEffect(() => {
    jumpToTop();
  }, [route]);

  if (route === "case-stage") {
    return (
      <div style={{ background: "#f0eee9", color: "#1a1a1a", fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <CustomCursor />
        <StageCase />
      </div>
    );
  }

  return (
    <div style={{ background: V2.bg, color: V2.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <CustomCursor />
      <Nav />
      <Hero />
      <WorkSection />
      <Reveal><About /></Reveal>
      <Reveal><Stack /></Reveal>
      <Reveal><Experience /></Reveal>
      <Contact />
    </div>
  );
}
