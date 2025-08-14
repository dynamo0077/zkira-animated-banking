import React, { useMemo } from 'react';

/**
 * Scene 5: Blank End State
 * A clean ending state for the animation sequence
 */
const Scene5BlankEnd = ({ scrollProgress }) => {
  const sceneTransform = useMemo(() => 
    scrollProgress >= 1.0 ? 'translateY(0)' : 'translateY(100vh)', [scrollProgress]);
  
  return (
    <div 
      className="scene scene-5"
      style={{ transform: sceneTransform }}
    >
      {/* Just particles background - minimal end state */}
    </div>
  );
};

export default React.memo(Scene5BlankEnd);
