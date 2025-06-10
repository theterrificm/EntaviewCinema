import { useState, useCallback } from 'react';

export function useVideoInteraction() {
  const [userInteracted, setUserInteracted] = useState(false);

  const enableVideoInteraction = useCallback(() => {
    if (!userInteracted) {
      setUserInteracted(true);
    }
  }, [userInteracted]);

  const playVideoSafely = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;
    
    video.play().catch(() => {
      // Autoplay blocked - this is expected in production
      console.log('Autoplay blocked, waiting for user interaction');
    });
  }, []);

  return {
    userInteracted,
    enableVideoInteraction,
    playVideoSafely
  };
}