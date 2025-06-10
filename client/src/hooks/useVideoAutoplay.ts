import { useEffect, useRef } from 'react';

export const useVideoAutoplay = (shouldPlay: boolean = true) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldPlay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in viewport, attempt to play
            video.play().catch(() => {
              // Autoplay failed, likely due to browser policy
              // Video will need user interaction to play
            });
          } else {
            // Video is out of viewport, pause and reset
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
        rootMargin: '0px 0px -50px 0px' // Slightly delay trigger
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [shouldPlay]);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Handle autoplay restrictions gracefully
      });
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return {
    videoRef,
    handleMouseEnter,
    handleMouseLeave
  };
};