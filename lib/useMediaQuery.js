import { useState, useEffect } from 'react';

// Returns true while the given media query matches. SPA-only (window always present).
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const m = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    setMatches(m.matches);
    m.addEventListener('change', handler);
    return () => m.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Phone-ish widths.
export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
// Tablet-and-below.
export const useIsTablet = () => useMediaQuery('(max-width: 1024px)');
