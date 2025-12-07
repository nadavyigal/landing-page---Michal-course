import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const FacebookPixel = () => {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip initial mount since HTML script already tracks it
    // Only track on route changes (SPA navigation)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Track PageView on route changes
    if (typeof window !== 'undefined' && window.fbq) {
      const trackPageView = () => {
        try {
          window.fbq('track', 'PageView');
        } catch (error) {
          console.error('Facebook Pixel tracking error:', error);
        }
      };

      // Small delay to ensure smooth tracking
      const timer = setTimeout(() => {
        trackPageView();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // Track on route changes

  return null;
};

export default FacebookPixel;

