import { renderOg, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'STAGE · Platter — Turning static into intent';

export default function Image() {
  return renderOg({
    eyebrow: 'CASE STUDY · STAGE · PLATTER',
    title: 'Turning static into intent',
    subtitle: 'An interactive motion preview that lifted preview-to-content +19.6%.',
  });
}
