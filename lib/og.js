import { ImageResponse } from 'next/og';

// Shared 1200×630 OpenGraph/Twitter card renderer. On-brand: near-white
// surface, hero navy ink, steel-blue accent. Used by every route's
// opengraph-image so social shares look intentional and consistent.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const INK = '#1d2f46';
const ACCENT = '#2e5c8a';
const MUTED = '#6b7a91';
const BG = '#fcfcfc';

export function renderOg({ eyebrow = 'PORTFOLIO', title, subtitle }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: BG,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* accent rule + eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 6, background: ACCENT }} />
          <div style={{ fontSize: 26, letterSpacing: 8, color: MUTED, fontWeight: 600 }}>
            {eyebrow}
          </div>
        </div>

        {/* title + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 92, fontWeight: 700, color: INK, lineHeight: 1.02, letterSpacing: -2 }}>
            {title}
          </div>
          {subtitle ? (
            <div style={{ fontSize: 38, color: MUTED, lineHeight: 1.25, maxWidth: 900 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* footer: name + domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28, color: INK }}>
          <div style={{ fontWeight: 700 }}>Prerna</div>
          <div style={{ color: ACCENT, fontWeight: 600 }}>prernaa99.in</div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
