import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Reveal from './components/Reveal';
import { V2 } from './data';

export default function App() {
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
