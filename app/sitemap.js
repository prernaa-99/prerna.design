import { PROJECTS } from '@/lib/data';

// Served at /sitemap.xml — home plus every case study, generated from the
// same PROJECTS source so new cases appear automatically.
export default function sitemap() {
  const base = 'https://prernaa99.in';
  const now = new Date();

  const cases = PROJECTS.map((p) => ({
    url: `${base}${p.href}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...cases,
  ];
}
