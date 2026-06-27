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
import JsonLd from '@/components/JsonLd';

const SITE = 'https://prernaa99.in';

// One description, reused for meta + OG so they never drift apart.
const HOME_DESCRIPTION =
  'I turn fuzzy user problems into products people love and businesses grow on. Real case studies, real numbers — see how I work end to end.';

export const metadata = {
  title: { absolute: 'Prerna — Product Designer' },
  description: HOME_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Prerna — Product Designer',
    description: HOME_DESCRIPTION,
    url: '/',
  },
};

// Structured data: who this person is + the site itself. Drives eligibility
// for a knowledge panel on name/role searches.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Prerna',
      jobTitle: 'Product Designer',
      url: SITE,
      email: 'prernaa99@icloud.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' },
      knowsAbout: ['Product Design', 'UX Design', 'Interaction Design', 'Design Systems', 'Motion Design', 'Brand'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Prerna · Product Designer',
      url: SITE,
      publisher: { '@id': `${SITE}/#person` },
    },
  ],
};

export default function HomePage() {
  return (
    <div style={{ background: V2.bg, color: V2.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <JsonLd data={jsonLd} />
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
