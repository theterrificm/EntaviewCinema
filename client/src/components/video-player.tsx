import { useRef, useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  muted?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  aspectRatio?: 'video' | '9/16';
  autoUnmute?: boolean;
}

export function VideoPlayer({ 
  src, 
  className = '', 
  muted = true, 
  onMouseEnter,
  onMouseLeave,
  aspectRatio = 'video',
  autoUnmute = false
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      if (!hasInteracted) {
        // Try to autoplay
        video.play()
          .then(() => {
            setIsPlaying(true);
            setNeedsInteraction(false);
          })
          .catch(() => {
            // Autoplay blocked - show interaction prompt
            setNeedsInteraction(true);
            setIsPlaying(false);
          });
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [hasInteracted]);

  const handleUserInteraction = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);
    setNeedsInteraction(false);
    
    video.play()
      .then(() => setIsPlaying(true))
      .catch(() => console.warn('Video play failed'));
  };

  const handleMouseEnter = () => {
    if (autoUnmute && videoRef.current) {
      videoRef.current.muted = false;
      if (!isPlaying && hasInteracted) {
        videoRef.current.play().catch(() => {});
      }
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
        className="w-full h-full object-cover"
        muted={muted}
        loop
        playsInline
        controls={false}
        preload="metadata"
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {needsInteraction && (
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer z-10"
          onClick={handleUserInteraction}
        >
          <div className="bg-fiery/90 text-white p-4 rounded-full hover:bg-fiery transition-colors">
            <Play className="w-8 h-8" />
          </div>
        </div>
      )}
    </div>
  );
}