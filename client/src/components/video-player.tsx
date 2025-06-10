import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  poster?: string;
  onClick?: () => void;
}

export function VideoPlayer({ src, className = "", poster, onClick }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryAutoplay = async () => {
      try {
        // Set video properties before attempting play
        video.muted = true;
        video.playsInline = true;
        
        // Attempt to play
        await video.play();
        setIsPlaying(true);
        console.log("Video autoplay successful");
      } catch (error) {
        console.log("Autoplay blocked, showing controls:", error);
        setShowControls(true);
        setIsPlaying(false);
      }
    };

    // Load video first
    video.load();
    
    // Try autoplay after a short delay to ensure video is ready
    const timer = setTimeout(tryAutoplay, 100);

    return () => clearTimeout(timer);
  }, [src]);

  const handleVideoClick = () => {
    if (onClick) {
      onClick();
    } else if (!isPlaying && videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setShowControls(false);
      }).catch(() => {
        setShowControls(true);
      });
    }
  };

  return (
    <video
      ref={videoRef}
      className={`${className} ${!isPlaying ? 'cursor-pointer' : ''}`}
      muted
      loop
      playsInline
      preload="metadata"
      controls={showControls}
      poster={poster}
      onClick={handleVideoClick}
      onLoadedData={() => console.log("Video loaded successfully")}
      onError={(e) => console.error("Video load error:", e)}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}