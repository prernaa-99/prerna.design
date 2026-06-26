import PlatterCase from '@/components/PlatterCase';
import JsonLd from '@/components/JsonLd';

const SITE = 'https://prernaa99.in';
const PATH = '/case-stage-platter';
const DESCRIPTION =
  "Case study: redesigning STAGE's homepage poster from a passive visual into an interactive motion preview, driving a +19.6% preview-to-content lift.";

export const metadata = {
  title: 'STAGE · Platter, Turning static into intent',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: 'STAGE · Platter — Turning static into intent',
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
      headline: 'STAGE · Platter — Turning static into intent',
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
        { '@type': 'ListItem', position: 2, name: 'STAGE · Platter — Turning static into intent', item: `${SITE}${PATH}` },
      ],
    },
  ],
};

export default function CaseStagePlatterPage() {
  return (
    <div style={{ background: "#f0eee9", color: "#1a1a1a", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <JsonLd data={jsonLd} />
      <PlatterCase />
    </div>
  );
}
