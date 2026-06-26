import StageCase from '@/components/StageCase';
import JsonLd from '@/components/JsonLd';

const SITE = 'https://prernaa99.in';
const PATH = '/case-stage';
const DESCRIPTION =
  "Case study: redesigning STAGE's content categorization into a culturally-rooted tagging framework that drove 30% viewing growth for the next million users.";

export const metadata = {
  title: 'STAGE, Scaling discovery',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: 'STAGE — Scaling discovery',
    description: DESCRIPTION,
    url: PATH,
    type: 'article',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${SITE}${PATH}/#article`,
      headline: 'STAGE — Scaling discovery for the next million users',
      description: DESCRIPTION,
      url: `${SITE}${PATH}`,
      image: `${SITE}${PATH}/opengraph-image`,
      datePublished: '2024',
      author: { '@type': 'Person', '@id': `${SITE}/#person`, name: 'Prerna' },
      publisher: { '@id': `${SITE}/#person` },
      isPartOf: { '@id': `${SITE}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'STAGE — Scaling discovery', item: `${SITE}${PATH}` },
      ],
    },
  ],
};

export default function CaseStagePage() {
  return (
    <div style={{ background: "#f0eee9", color: "#1a1a1a", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <JsonLd data={jsonLd} />
      <StageCase />
    </div>
  );
}
