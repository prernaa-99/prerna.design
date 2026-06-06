import { V2 } from '@/lib/data';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Prerna — Product Designer',
  description:
    'Product designer working at the seam of brand, product, and motion. Currently freelancing from Bangalore, taking on selective work for ambitious teams.',
};

export default function HomePage() {
  return (
    <div style={{ background: V2.bg, color: V2.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}>
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
