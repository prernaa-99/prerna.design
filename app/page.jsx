import { V2 } from '@/lib/data';
import FloatingNav from '@/components/FloatingNav';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import Story from '@/components/Story';
import About from '@/components/About';
import Stack from '@/components/Stack';
// import Experience from '@/components/Experience'; // CV LOG, hidden for now, re-add in phase 2
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';
import TrackSection from '@/components/TrackSection';

export const metadata = {
  title: 'Prerna, Product Designer',
  description:
    'Product designer working at the seam of brand, product, and motion. Currently freelancing from Bangalore, taking on selective work for ambitious teams.',
};

export default function HomePage() {
  return (
    <div style={{ background: V2.bg, color: V2.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <FloatingNav />
      <TrackSection name="hero"><Hero /></TrackSection>
      <TrackSection name="work"><WorkSection /></TrackSection>
      <TrackSection name="story"><Reveal><Story /></Reveal></TrackSection>
      <TrackSection name="about"><Reveal><About /></Reveal></TrackSection>
      <TrackSection name="stack"><Reveal><Stack /></Reveal></TrackSection>
      {/* CV LOG (Experience), hidden for now, re-add in phase 2 */}
      <TrackSection name="contact"><Contact /></TrackSection>
    </div>
  );
}
