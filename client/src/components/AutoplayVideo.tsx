import { useEffect, useRef, useState } from 'react';

interface AutoplayVideoProps {
  src: string;
  className?: string;
  poster?: string;
  onClick?: () => void;
  enableHoverPlay?: boolean;
  enableIntersectionPlay?: boolean;
  style?: React.CSSProperties;
}

export const AutoplayVideo: React.FC<AutoplayVideoProps> = ({
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
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(false);

  // Test autoplay capability
  useEffect(() => {
    const testAutoplay = async () => {
      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.src = 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAADlmcmVlAAAAAG1kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAALgAAAAAoAAAAAAEdlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAG4AAAAAAAEAAAAAAQVtZGlhAAAAIG1kaGQAAAAAC';
      
      try {
        await video.play();
        setCanAutoplay(true);
        video.pause();
      } catch {
        setCanAutoplay(false);
      }
    };

    testAutoplay();
  }, []);

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!enableIntersectionPlay || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [enableIntersectionPlay]);

  // Auto-play when in viewport and conditions are met
  useEffect(() => {
    if (!videoRef.current || !isIntersecting) return;

    const video = videoRef.current;
    
    if (canAutoplay || hasUserInteracted) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay failed, will require user interaction
        });
      }
    }
  }, [isIntersecting, canAutoplay, hasUserInteracted]);

  const handleMouseEnter = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    setHasUserInteracted(true);
    const video = videoRef.current;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Play failed
      });
    }
  };

  const handleMouseLeave = () => {
    if (!enableHoverPlay || !videoRef.current) return;
    
    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
  };

  const handleClick = () => {
    setHasUserInteracted(true);
    if (onClick) {
      onClick();
    }
  };

  const handleCanPlay = () => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    // Try to play immediately when video is ready
    if (isIntersecting && (canAutoplay || hasUserInteracted)) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silent fail - will play on user interaction
        });
      }
    }
  };

  const handleLoadedData = () => {
    if (!videoRef.current) return;
    
    // Additional attempt to play when data is loaded
    setTimeout(() => {
      if (videoRef.current && isIntersecting && (canAutoplay || hasUserInteracted)) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Silent fail
          });
        }
      }
    }, 100);
  };

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onCanPlay={handleCanPlay}
      onLoadedData={handleLoadedData}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};