import StageCase from '@/components/StageCase';

export const metadata = {
  title: 'STAGE, Scaling discovery',
  description:
    'Case study: redesigning STAGE\'s content categorization into a culturally-rooted tagging framework that drove 30% viewing growth for the next million users.',
};

export default function CaseStagePage() {
  return (
    <div style={{ background: "#f0eee9", color: "#1a1a1a", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <StageCase />
    </div>
  );
}
