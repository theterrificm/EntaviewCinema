import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  poster?: string;
  onClick?: () => void;
}

export function VideoPlayer({ src, className = "", poster, onClick }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try immediate autoplay after a short delay
    const timer = setTimeout(async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        video.load();
        await video.play();
        setIsPlaying(true);
        setHasStarted(true);
        console.log("Video autoplay successful");
      } catch (error) {
        console.log("Autoplay blocked, showing play button");
        setIsPlaying(false);
        setHasStarted(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [src]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (onClick) {
      onClick();
      return;
    }

    if (!hasStarted || !isPlaying) {
      video.muted = false; // Unmute for user-initiated playback
      video.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(() => {
        console.log("Manual play failed");
      });
    }
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        className={className}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => console.log("Video loaded successfully")}
        onError={(e) => console.error("Video load error:", e)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play overlay when not started or not playing */}
      {(!hasStarted || !isPlaying) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-fiery/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-fiery transition-colors">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>
      )}
    </div>
  );
}