import React, { useMemo } from 'react';
import { getSceneTransform } from '../../utils/sceneUtils';

/**
 * Scene 4: Feature Callouts
 * Displays animated feature callouts with connecting lines
 */
const Scene4FeatureCallouts = ({ scrollProgress }) => {
  const sceneTransform = useMemo(() => 
    getSceneTransform(scrollProgress, 0.85, 1.0), [scrollProgress]);
  
  const calloutsData = useMemo(() => [
    { text: "just toggle UPI Switch", position: "callout-left-top", delay: 0 },
    { text: "access with Fingerprint", position: "callout-left-bottom", delay: 0.15 },
    { text: "NO MORE CABLES", position: "callout-right-top", delay: 0.3 },
    { text: "JUST SNAP, CHARGE & GO.", position: "callout-right-bottom", delay: 0.45 }
  ], []);
  
  const calloutAnimations = useMemo(() => {
    if (scrollProgress < 0.85) return calloutsData.map(() => ({ 
      opacity: 0, 
      transform: 'scale(0.8) translateY(20px)' 
    }));
    
    const phaseProgress = (scrollProgress - 0.85) / (1.0 - 0.85);
    
    return calloutsData.map((callout, index) => {
      const individualProgress = Math.min(Math.max((phaseProgress - callout.delay) / 0.25, 0), 1);
      
      return {
        opacity: individualProgress,
        transform: `scale(${0.8 + (individualProgress * 0.2)}) translateY(${20 - (individualProgress * 20)}px)`
      };
    });
  }, [scrollProgress, calloutsData]);
  
  const objectAnimations = useMemo(() => {
    const cardX = -75;
    const chargerX = 75;
    const scale = 0.9;
    
    return { cardX, chargerX, scale };
  }, []);
  
  return (
    <div 
      className="scene scene-4"
      style={{ transform: sceneTransform }}
    >
      <div className="objects-container">
        <div 
          className="credit-card-3d"
          style={{
            transform: `translateX(${objectAnimations.cardX}px) scale(${objectAnimations.scale}) rotateX(15deg) rotateY(170deg)`
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
      
      <div className="feature-callouts">
        {calloutsData.map((callout, index) => (
          <div 
            key={index}
            className={`callout ${callout.position}`}
            style={calloutAnimations[index]}
          >
            <span className="feature-text">{callout.text}</span>
            <svg className="connection-line" viewBox="0 0 100 50">
              <path 
                d={callout.position.includes('left') 
                  ? (callout.position.includes('top') ? "M5 45 L60 5" : "M5 5 L60 45")
                  : (callout.position.includes('top') ? "M95 45 L40 5" : "M95 5 L40 45")
                } 
                stroke="#00d4d4" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5"
                strokeDashoffset={calloutAnimations[index].opacity < 1 ? 100 : 0}
                style={{ 
                  strokeDashoffset: `${100 - (calloutAnimations[index].opacity * 100)}`,
                  transition: 'stroke-dashoffset 0.6s ease-out'
                }}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Scene4FeatureCallouts);
