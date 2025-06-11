import { useEffect, useRef, useState } from 'react';

interface ProductionVideoProps {
  src: string;
  className?: string;
  poster?: string;
  onClick?: () => void;
  enableHoverPlay?: boolean;
  enableIntersectionPlay?: boolean;
  style?: React.CSSProperties;
}

export const ProductionVideo: React.FC<ProductionVideoProps> = ({
  src,
  className = "",
  poster,
  onClick,
  enableHoverPlay = true,
  enableIntersectionPlay = true,
  style
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Intersection Observer for viewport-based triggering
  useEffect(() => {
    if (!enableIntersectionPlay || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [enableIntersectionPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video attributes for maximum compatibility
    video.muted = true;
    video.volume = 0;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // Immediate play attempt when video loads
    const handleLoadStart = () => {
      video.muted = true;
      video.volume = 0;
      if (isIntersecting || !enableIntersectionPlay) {
        video.play().catch(() => {
          // Silent fail, will play on user interaction
        });
      }
    };

    const handleCanPlay = () => {
      video.muted = true;
      video.volume = 0;
      
      // Multiple aggressive play attempts
      const attemptPlay = () => {
        if (isIntersecting || !enableIntersectionPlay) {
          video.play().catch(() => {
            setTimeout(() => {
              video.play().catch(() => {
                // Final attempt after delay
                setTimeout(() => video.play().catch(() => {}), 200);
              });
            }, 100);
          });
        }
      };
      
      attemptPlay();
      
      // Also attempt after brief delay
      setTimeout(attemptPlay, 50);
    };

    // Global user interaction handler
    const handleUserInteraction = () => {
      video.muted = true;
      video.volume = 0;
      video.play().catch(() => {});
      
      // Remove listener after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };

    // Add global interaction listeners
    document.addEventListener('click', handleUserInteraction, { once: true, passive: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true, passive: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true, passive: true });

    // Add video event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);

    // Cleanup function
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [isIntersecting, enableIntersectionPlay]);

  // Handle hover play
  const handleMouseEnter = () => {
    if (enableHoverPlay && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (enableHoverPlay && videoRef.current) {
      videoRef.current.pause();
    }
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
      muted
      loop
      playsInline
      webkit-playsinline=""
      preload="metadata"
    />
  );
};