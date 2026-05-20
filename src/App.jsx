import { useState, useEffect } from 'react';
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

function useRoute() {
  const getRoute = () => {
    const raw = window.location.hash.replace(/^#/, "");
    return SECTION_ANCHORS.has(raw) ? "" : raw;
  };
  const [route, setRoute] = useState(getRoute);
  useEffect(() => {
    const onChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export default function App() {
  const route = useRoute();

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
