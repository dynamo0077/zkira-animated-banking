import React, { useMemo } from 'react';
import { getSceneTransform } from '../../utils/sceneUtils';

/**
 * Scene 1: Letter-by-Letter Glow Animation
 * Displays a headline with each letter animating in with a glowing effect
 */
const Scene1LetterGlow = ({ scrollProgress }) => {
  const text = "Experience Effortless Banking at Your Fingertips";
  const letters = useMemo(() => text.split(''), []);
  
  const sceneTransform = useMemo(() => 
    getSceneTransform(scrollProgress, 0, 0.25), [scrollProgress]);
  
  const letterRevealProgress = useMemo(() => 
    Math.min(Math.max((scrollProgress - 0) / 0.2, 0), 1), [scrollProgress]);
  
  return (
    <div 
      className="scene scene-1"
      style={{ transform: sceneTransform }}
    >
      <h1 className="main-tagline">
        {letters.map((letter, index) => {
          const letterProgress = Math.min(Math.max(
            (letterRevealProgress * letters.length - index), 0), 1);
          
          return (
            <span
              key={index}
              className="letter"
              style={{
                opacity: letterProgress,
                textShadow: `0 0 ${20 * letterProgress}px rgba(0, 212, 212, ${letterProgress})`,
                filter: `blur(${Math.max(0, 2 - (letterProgress * 2))}px)`
              }}
            >
              {letter}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default React.memo(Scene1LetterGlow);
