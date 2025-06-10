import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  aspectRatio?: 'video' | '9/16';
  autoUnmute?: boolean;
}

export function VideoPlayer({ 
  src, 
  poster,
  className = '', 
  muted = true, 
  onMouseEnter,
  onMouseLeave,
  aspectRatio = 'video',
  autoUnmute = false,
  ...rest
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play?.();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay successful
        })
        .catch(() => {
          // Autoplay blocked: show controls
          video.muted = true;
          video.controls = true;
        });
    }
  }, []);

  const handleMouseEnter = () => {
    if (autoUnmute && videoRef.current) {
      videoRef.current.muted = false;
    }
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    if (autoUnmute && videoRef.current) {
      videoRef.current.muted = true;
    }
    onMouseLeave?.();
  };

  return (
    <div 
      className={`relative ${aspectRatio === '9/16' ? 'aspect-[9/16]' : 'aspect-video'} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        controls={false}
        className="w-full h-full object-cover"
        onError={() => console.error('Video load error')}
        {...rest}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}