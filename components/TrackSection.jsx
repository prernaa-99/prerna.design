'use client';

import { useEffect, useRef } from 'react';
import { track } from '@/lib/analytics';

// Wraps a section and fires a `section_view` event the first time it
// scrolls into view, so you can see which sections people actually reach.
export default function TrackSection({ name, children }) {
  const ref = useRef(null);
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.current) {
            seen.current = true;
            track('section_view', { section: name });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [name]);

  // Plain block wrapper — IntersectionObserver needs a real box to observe.
  // Sections are full-width blocks, so this is transparent to the layout.
  return <div ref={ref}>{children}</div>;
}
