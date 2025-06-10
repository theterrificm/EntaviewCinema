import { useEffect, useRef } from 'react';

interface ProductionVideoProps {
  src: string;
  className?: string;
  poster?: string;
  onClick?: () => void;
  enableHoverPlay?: boolean;
  style?: React.CSSProperties;
}

export const ProductionVideo: React.FC<ProductionVideoProps> = ({
  src,
  className = "",
  poster,
  onClick,
  enableHoverPlay = true,
  style
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      video.play().catch(() => {
        // Silent fail, will play on user interaction
      });
    };

    const handleCanPlay = () => {
      video.muted = true;
      video.volume = 0;
      
      // Multiple aggressive play attempts
      const attemptPlay = () => {
        video.play().catch(() => {
          setTimeout(() => {
            video.play().catch(() => {
              // Final attempt after delay
              setTimeout(() => video.play().catch(() => {}), 200);
            });
          }, 100);
        });
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

    // Intersection observer for viewport detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true;
            video.volume = 0;
            video.play().catch(() => {});
          }
        });
      },
      { threshold: 0.3, rootMargin: '100px' }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      observer.disconnect();
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [src]);

  const handleMouseEnter = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    const video = videoRef.current;
    video.muted = true;
    video.volume = 0;
    video.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
  };

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
      videoRef.current.play().catch(() => {});
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      controls={false}
      disablePictureInPicture
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};