import React, { useMemo } from 'react';

/**
 * ParticlesBackground Component
 * Renders an animated particle effect in the background
 */
const ParticlesBackground = React.memo(() => {
  const particles = useMemo(() => {
    return Array.from({ length: 65 }, (_, i) => ({
      id: i,
      size: 1 + Math.random() * 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 5
    }));
  }, []);
  
  return (
    <div className="particles-background">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
});

export default ParticlesBackground;
