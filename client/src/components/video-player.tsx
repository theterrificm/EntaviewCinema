import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  poster?: string;
  onClick?: () => void;
}

export function VideoPlayer({ src, className = "", poster, onClick }: VideoPlayerProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleClick}>
      <video
        className={className}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline=""
        preload="metadata"
        poster={poster}
        onLoadedData={() => console.log("Video loaded successfully")}
        onError={(e) => {
          console.error("Video load error:", src, e);
          e.currentTarget.style.display = 'none';
        }}
      >
        <source src={src} type="video/mp4" />
        <p>Your browser does not support HTML5 video. <a href={src} target="_blank" rel="noopener noreferrer">View video</a></p>
      </video>
      
      {/* Play overlay on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 bg-fiery/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-fiery transition-colors">
          <Play className="w-8 h-8 text-white ml-1" fill="white" />
        </div>
      </div>
    </div>
  );
}