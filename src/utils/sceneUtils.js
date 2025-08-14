/**
 * Utility functions for scene transitions and animations
 */

export const getSceneTransform = (scrollProgress, sceneStart, sceneEnd) => {
  // Before scene starts: below viewport
  if (scrollProgress < sceneStart) return 'translateY(100vh)';
  
  // After scene ends: above viewport
  if (scrollProgress > sceneEnd) return 'translateY(-100vh)';
  
  // During scene: calculate transition
  const sceneProgress = (scrollProgress - sceneStart) / (sceneEnd - sceneStart);
  
  if (sceneProgress < 0.1) {
    // Entering animation (first 10% of scene duration)
    const enterProgress = sceneProgress / 0.1;
    const yPos = 100 * (1 - enterProgress);
    return `translateY(${yPos}vh)`;
  } else if (sceneProgress > 0.9) {
    // Exiting animation (last 10% of scene duration)
    const exitProgress = (sceneProgress - 0.9) / 0.1;
    const yPos = -100 * exitProgress;
    return `translateY(${yPos}vh)`;
  } else {
    // Stable at center (middle 80% of scene duration)
    return 'translateY(0)';
  }
};

export const scrollToProgress = (targetProgress) => {
  const containerHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const maxScroll = containerHeight - windowHeight;
  const targetY = targetProgress * maxScroll;
  
  window.scrollTo({ top: targetY, behavior: 'smooth' });
};
