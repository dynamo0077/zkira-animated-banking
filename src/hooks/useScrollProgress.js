import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress through the page
 * @returns {number} A value between 0 and 1 representing scroll progress
 */
const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };
    
    updateScrollProgress(); // Initial calculation
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);
  
  return scrollProgress;
};

export default useScrollProgress;
