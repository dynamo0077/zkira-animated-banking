import React, { useMemo } from 'react';
import { getSceneTransform } from '../../utils/sceneUtils';

/**
 * Scene 3: 3D Objects
 * Shows 3D card and charging pad with animated separation and scaling
 */
const Scene33DObjects = ({ scrollProgress }) => {
  const sceneTransform = useMemo(() => 
    getSceneTransform(scrollProgress, 0.45, 0.85), [scrollProgress]);
  
  const objectAnimations = useMemo(() => {
    if (scrollProgress < 0.45 || scrollProgress > 0.85) {
      return { cardX: 0, chargerX: 0, scale: 0.5 };
    }
    
    const phaseProgress = (scrollProgress - 0.45) / (0.85 - 0.45);
    
    // Card and charger separation animation
    const cardX = phaseProgress > 0.5 ? -75 * ((phaseProgress - 0.5) / 0.5) : 0;
    const chargerX = phaseProgress > 0.5 ? 75 * ((phaseProgress - 0.5) / 0.5) : 0;
    const scale = 0.5 + (phaseProgress * 0.5);
    
    return { cardX, chargerX, scale };
  }, [scrollProgress]);
  
  return (
    <div 
      className="scene scene-3"
      style={{ transform: sceneTransform }}
    >
      <div className="objects-container">
        <div 
          className="credit-card-3d"
          style={{
            transform: `translateX(${objectAnimations.cardX}px) scale(${objectAnimations.scale}) rotateX(15deg) rotateY(-10deg)`
          }}
        >
          <div className="card-body">
            <div className="card-text">ZRICREST</div>
            <div className="card-chip"></div>
            <div className="card-number">0000 8547 1234 0000</div>
          </div>
        </div>
        
        <div 
          className="charging-pad-3d"
          style={{
            transform: `translateX(${objectAnimations.chargerX}px) scale(${objectAnimations.scale}) rotateX(15deg) rotateY(10deg)`
          }}
        >
          <div className="pad-body">
            <div className="pad-symbol"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Scene33DObjects);
