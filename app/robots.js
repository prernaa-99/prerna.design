// Served at /robots.txt — allow all crawlers, point them to the sitemap.
export default function robots() {
  const base = 'https://prernaa99.in';
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
