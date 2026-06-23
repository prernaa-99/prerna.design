// Small helper that fans a custom event out to whatever analytics is loaded.
// Safe to call anywhere — no-ops if a tool (or window) isn't present.

export function track(name, params = {}) {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }

  // Microsoft Clarity — tag the session + fire a named event
  if (typeof window.clarity === 'function') {
    window.clarity('event', name);
    Object.entries(params).forEach(([key, value]) => {
      window.clarity('set', key, String(value));
    });
  }
}
