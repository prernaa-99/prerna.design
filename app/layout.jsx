import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  metadataBase: new URL('https://prerna.design'),
  title: {
    default: 'Prerna — Product Designer',
    template: '%s · Prerna',
  },
  description:
    'Portfolio of Prerna, a product designer working at the seam of brand, product, and motion. Selected case studies in research, interaction, and design systems.',
  keywords: ['product designer', 'UX designer', 'portfolio', 'STAGE', 'interaction design', 'design systems', 'Bangalore'],
  authors: [{ name: 'Prerna' }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Prerna — Product Designer',
    description:
      'Product designer working at the seam of brand, product, and motion. Selected case studies in research, interaction, and design systems.',
    type: 'website',
    locale: 'en_US',
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
      </body>
    </html>
  );
}
