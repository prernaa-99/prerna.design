import { renderOg, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Prerna — Product Designer';

export default function Image() {
  return renderOg({
    eyebrow: 'PRODUCT DESIGNER',
    title: 'Prerna',
    subtitle: 'Working at the seam of brand, product, and motion.',
  });
}
