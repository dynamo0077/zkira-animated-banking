import { useEffect } from 'react';

/**
 * Custom hook to monitor and optimize performance
 * Reduces visual effects if FPS drops below 30
 */
const usePerformanceMonitor = () => {
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;
    
    const checkFrame = () => {
      frameCount++;
      const now = performance.now();
      
      if (now - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (now - lastTime));
        frameCount = 0;
        lastTime = now;
        
        // Enable performance optimizations if FPS is low
        if (fps < 30) {
          console.log('Low performance detected, optimizing...');
          // Reduce particle count
          const particles = document.querySelectorAll('.particle');
          particles.forEach((particle, index) => {
            if (index % 2 === 0) {
              particle.style.display = 'none';
            }
          });
        }
      }
      
      requestAnimationFrame(checkFrame);
    };
    
    const animationId = requestAnimationFrame(checkFrame);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
};

export default usePerformanceMonitor;
