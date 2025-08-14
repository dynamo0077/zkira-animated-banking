import React, { useMemo } from 'react';
import { getSceneTransform } from '../../utils/sceneUtils';

/**
 * Scene 2: Brand Message
 * Displays the main brand message with fade-in/out effects
 */
const Scene2BrandMessage = ({ scrollProgress }) => {
  const sceneTransform = useMemo(() => 
    getSceneTransform(scrollProgress, 0.25, 0.44), [scrollProgress]);
  
  const contentOpacity = useMemo(() => {
    if (scrollProgress < 0.25 || scrollProgress > 0.44) return 0;
    const phaseProgress = (scrollProgress - 0.25) / (0.44 - 0.25);
    if (phaseProgress < 0.2) return phaseProgress / 0.2;
    if (phaseProgress > 0.8) return (1 - phaseProgress) / 0.2;
    return 1;
  }, [scrollProgress]);
  
  return (
    <div 
      className="scene scene-2"
      style={{ 
        transform: sceneTransform,
        opacity: contentOpacity
      }}
    >
      <div className="brand-content">
        <h1 className="brand-headline">
          Step into the future with <span className="zrika-highlight">ZRIKA</span>
        </h1>
        <p className="brand-subtitle">
          We bridge the gap between your financial goals and innovative tools, delivering smart solutions for a seamless banking experience.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Scene2BrandMessage);
