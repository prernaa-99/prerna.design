import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import CustomCursor from '@/components/CustomCursor';
import Clarity from '@/components/Clarity';

export const metadata = {
  // prernaa99.in is the canonical domain — all absolute URLs (OG, canonical,
  // sitemap) resolve against this base.
  metadataBase: new URL('https://prernaa99.in'),
  title: {
    default: 'Prerna, Product Designer',
    template: '%s · Prerna',
  },
  description:
    'Portfolio of Prerna, a product designer working at the seam of brand, product, and motion. Selected case studies in research, interaction, and design systems.',
  keywords: ['product designer', 'UX designer', 'portfolio', 'STAGE', 'interaction design', 'design systems', 'Bangalore'],
  authors: [{ name: 'Prerna' }],
  creator: 'Prerna',
  icons: { icon: '/fevicon.png' },
  openGraph: {
    siteName: 'Prerna · Product Designer',
    type: 'website',
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Syne:wght@600;700;800&family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        {children}
        <Analytics />
        <Clarity />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
