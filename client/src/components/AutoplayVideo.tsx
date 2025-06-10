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

  // Aggressive autoplay testing and user interaction detection
  useEffect(() => {
    const testAutoplay = async () => {
      try {
        // Test with actual video element
        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.volume = 0;
        
        // Use a minimal test video
        video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAENmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAALgAAAAAoAAAAAAEdlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAG4AAAAAAAEAAAAAAQVtZGlhAAAAIG1kaGQAAAAAC';
        
        document.body.appendChild(video);
        video.style.position = 'absolute';
        video.style.left = '-9999px';
        video.style.width = '1px';
        video.style.height = '1px';
        
        await video.play();
        setCanAutoplay(true);
        setHasUserInteracted(true);
        video.pause();
        document.body.removeChild(video);
      } catch {
        setCanAutoplay(false);
        
        // Listen for any user interaction to enable autoplay
        const handleUserInteraction = () => {
          setHasUserInteracted(true);
          setCanAutoplay(true);
          document.removeEventListener('click', handleUserInteraction);
          document.removeEventListener('touchstart', handleUserInteraction);
          document.removeEventListener('keydown', handleUserInteraction);
        };
        
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);
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
    video.muted = true;
    video.volume = 0;
    
    // Multiple aggressive play attempts
    const attemptPlay = async () => {
      try {
        await video.play();
      } catch {
        // Try again with additional attributes
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        
        setTimeout(async () => {
          try {
            await video.play();
          } catch {
            // Final attempt after user interaction
            if (hasUserInteracted) {
              setTimeout(() => video.play().catch(() => {}), 200);
            }
          }
        }, 50);
      }
    };
    
    if (isIntersecting || !enableIntersectionPlay) {
      attemptPlay();
    }
  };

  const handleLoadedData = () => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    video.muted = true;
    video.volume = 0;
    
    // Immediate play attempt when data is ready
    const playWhenReady = () => {
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA
        video.play().catch(() => {
          // Try again after brief delay
          setTimeout(() => {
            video.play().catch(() => {});
          }, 100);
        });
      } else {
        setTimeout(playWhenReady, 50);
      }
    };
    
    if (isIntersecting || !enableIntersectionPlay) {
      playWhenReady();
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
      disableRemotePlayback
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onCanPlay={handleCanPlay}
      onLoadedData={handleLoadedData}
      onLoadedMetadata={handleCanPlay}
      onTimeUpdate={() => {
        // Ensure video stays muted during playback
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.volume = 0;
        }
      }}
      data-webkit-playsinline=""
      data-x5-playsinline=""
      data-x5-video-player-type="h5"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};