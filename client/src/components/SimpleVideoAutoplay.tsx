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

  // Enhanced autoplay with browser compatibility checks
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let isMounted = true;

    // Set video attributes for maximum browser compatibility
    video.muted = true;
    video.volume = 0;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // Check if video source is valid before attempting play
    const attemptPlay = () => {
      if (!isMounted || !video.isConnected) return;
      
      console.log('Attempting to play video:', src);
      
      if (!video.canPlayType || !video.canPlayType('video/mp4')) {
        console.warn('Browser does not support MP4 format');
        return;
      }

      video.muted = true;
      video.volume = 0;
      
      // Test if video source loads successfully
      const testPlay = video.play();
      if (testPlay !== undefined) {
        testPlay.catch((error) => {
          if (isMounted) {
            console.warn('Autoplay failed for:', src, error.message);
          }
        });
      }
    };

    // Enhanced error handling with detailed debugging
    const handleError = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      const errorCode = target.error?.code;
      const errorMessage = target.error?.message;
      
      console.error('Video load error details:', {
        src: video.src,
        errorCode,
        errorMessage,
        networkState: video.networkState,
        readyState: video.readyState,
        event: e
      });
      
      // Don't hide video immediately, let it try to recover
      // video.style.display = 'none';
    };

    const handleCanPlay = () => {
      attemptPlay();
    };

    const handleLoadStart = () => {
      // Ensure attributes are set when loading starts
      video.muted = true;
      video.volume = 0;
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);

    // Immediate attempt if video is already ready
    if (video.readyState >= 3) {
      attemptPlay();
    }

    return () => {
      isMounted = false;
      if (video) {
        video.pause();
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleCanPlay);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('error', handleError);
      }
    };
  }, [src]);

  // Handle hover play functionality
  const handleMouseEnter = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    const video = videoRef.current;
    if (!video.isConnected) return;
    
    video.muted = true;
    video.volume = 0;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    const video = videoRef.current;
    if (!video.isConnected) return;
    
    video.pause();
    video.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={`${className} block`}
      style={{ ...style, minHeight: '200px', backgroundColor: '#1a1a1a' }}
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
      onError={(e) => {
        const target = e.target as HTMLVideoElement;
        const errorCode = target.error?.code;
        const errorMessage = target.error?.message;
        
        console.error('Video JSX error details:', {
          src: src,
          errorCode,
          errorMessage,
          networkState: target.networkState,
          readyState: target.readyState,
          currentSrc: target.currentSrc,
          event: e
        });
      }}
      onLoadStart={() => {
        console.log('Video loading started:', src);
      }}
      onCanPlay={() => {
        console.log('Video can play:', src);
      }}
    >
      Your browser does not support HTML5 video. <a href={src} target="_blank" rel="noopener noreferrer">View video</a>
    </video>
  );
};