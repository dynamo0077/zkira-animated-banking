import React, { useState, useEffect, useMemo } from 'react';
// Import custom hooks
import useScrollProgress from './hooks/useScrollProgress';
import usePerformanceMonitor from './hooks/usePerformanceMonitor';
// Import scene components
import Scene1LetterGlow from './components/scenes/Scene1LetterGlow';
import Scene2BrandMessage from './components/scenes/Scene2BrandMessage';
import Scene33DObjects from './components/scenes/Scene33DObjects';
import Scene4FeatureCallouts from './components/scenes/Scene4FeatureCallouts';
import Scene5BlankEnd from './components/scenes/Scene5BlankEnd';
// Import other components
import ParticlesBackground from './components/ParticlesBackground';
// Import utilities
import { getSceneTransform, scrollToProgress } from './utils/sceneUtils';
// Import styles
import './App.css';

// Main ZRIKA App Component
const ZRIKAApp = () => {
  const scrollProgress = useScrollProgress();
  const [activeScene, setActiveScene] = useState('none');
  
  // Determine active scene based on scroll progress
  useEffect(() => {
    if (scrollProgress < 0.25) setActiveScene('scene1');
    else if (scrollProgress < 0.44) setActiveScene('scene2');
    else if (scrollProgress < 0.85) setActiveScene('scene3');
    else if (scrollProgress < 1.0) setActiveScene('scene4');
    else setActiveScene('scene5');
  }, [scrollProgress]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const scrollAmount = window.innerHeight * 0.6;
      
      switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
          break;
        case 'Home':
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'End':
          e.preventDefault();
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
          break;
        case '1':
          e.preventDefault();
          scrollToProgress(0.1);
          break;
        case '2':
          e.preventDefault();
          scrollToProgress(0.3);
          break;
        case '3':
          e.preventDefault();
          scrollToProgress(0.6);
          break;
        case '4':
          e.preventDefault();
          scrollToProgress(0.9);
          break;
        case '5':
          e.preventDefault();
          scrollToProgress(1.0);
          break;
      }
    };
    
    const scrollToProgress = (targetProgress) => {
      const containerHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = containerHeight - windowHeight;
      const targetY = targetProgress * maxScroll;
      
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="scroll-container">
      <div className="visual-container">
        {/* Persistent particle background */}
        <ParticlesBackground />
        
        {/* All scenes with vertical transitions */}
        <Scene1LetterGlow scrollProgress={scrollProgress} />
        <Scene2BrandMessage scrollProgress={scrollProgress} />
        <Scene33DObjects scrollProgress={scrollProgress} />
        <Scene4FeatureCallouts scrollProgress={scrollProgress} />
        <Scene5BlankEnd scrollProgress={scrollProgress} />
        
        {/* Debug info */}
        <div className="debug-overlay">
          <div>Progress: {(scrollProgress * 100).toFixed(1)}%</div>
          <div>Active: {activeScene}</div>
        </div>
      </div>
    </div>
  );
};

// Performance monitoring hook is imported from './hooks/usePerformanceMonitor'

// Root App with performance monitoring
const App = () => {
  usePerformanceMonitor();
  return <ZRIKAApp />;
};

// Export the App component
export default App;

// Global error handling
window.addEventListener('error', (e) => {
  console.error('ZRIKA Application error:', e.error);
});

// Console instructions
console.log('ZRIKA Controls:');
console.log('- Scroll wheel or arrow keys to navigate');
console.log('- Press 1, 2, 3, 4, 5 to jump to specific scenes');
console.log('- Home/End to go to start/end');
console.log('- Application uses React function-based components with vertical scene transitions');