/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lint is run separately via `npm run lint`; don't fail production builds on it.
  eslint: { ignoreDuringBuilds: true },

  // Serve modern formats (AVIF, then WebP) for any next/image — big byte
  // savings over PNG/JPEG, with alpha support for the transparent portrait.
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // SEO: prernaa99.in is the one canonical domain. 301 the Vercel production
  // alias to it so ranking signals don't split across hosts. (Preview deploys
  // use hash-prefixed *.vercel.app hosts, so they won't match and still work.)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'prerna-design.vercel.app' }],
        destination: 'https://prernaa99.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
