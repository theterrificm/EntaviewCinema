import { useRef, useEffect, useState } from 'react';

interface SimpleVideoAutoplayProps {
  src: string;
  className?: string;
  poster?: string;
  onClick?: () => void;
  enableHoverPlay?: boolean;
  style?: React.CSSProperties;
}

export const SimpleVideoAutoplay: React.FC<SimpleVideoAutoplayProps> = ({
  src,
  className = "",
  poster,
  onClick,
  enableHoverPlay = false,
  style
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Global user interaction detection
  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      // Enable autoplay for all videos after user interaction
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    };

    // Listen for any user interaction globally
    document.addEventListener('click', handleUserInteraction, { once: true, passive: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true, passive: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true, passive: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  // Immediate autoplay attempt on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video attributes for maximum browser compatibility
    video.muted = true;
    video.volume = 0;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // Immediate play attempt
    const attemptPlay = () => {
      video.muted = true;
      video.volume = 0;
      video.play().catch(() => {
        // Silent fail - will play after user interaction
      });
    };

    // Try playing when video can play
    const handleCanPlay = () => {
      attemptPlay();
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);

    // Also try immediate play
    if (video.readyState >= 3) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
    };
  }, [src]);

  // Handle hover play functionality
  const handleMouseEnter = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    const video = videoRef.current;
    video.muted = true;
    video.volume = 0;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline=""
      preload="metadata"
      disablePictureInPicture
      controls={false}
    />
  );
};