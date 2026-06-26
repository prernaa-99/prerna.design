import { renderOg, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'STAGE — Scaling discovery for the next million users';

export default function Image() {
  return renderOg({
    eyebrow: 'CASE STUDY · STAGE',
    title: 'Scaling discovery',
    subtitle: 'A culturally-rooted tagging framework that drove 30% viewing growth.',
  });
}
