import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Track PageView after React mounts and on route changes
    if (typeof window !== 'undefined' && window.fbq) {
      // Wait for pixel to be fully loaded before tracking
      const trackPageView = () => {
        try {
          window.fbq('track', 'PageView');
        } catch (error) {
          console.error('Facebook Pixel tracking error:', error);
        }
      };

      // Small delay to ensure pixel script is fully initialized
      // This is important for SPAs where React loads after the initial HTML
      const timer = setTimeout(() => {
        trackPageView();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // Track on route changes

  return null;
};

export default FacebookPixel;

