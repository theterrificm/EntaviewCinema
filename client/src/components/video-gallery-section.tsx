import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { validateAndEncodeVideoUrl } from "@/utils/videoValidator";

export default function VideoGallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "MAKU Showreel 2025",
      category: "Brand Campaign",
      thumbnail: "/maku-thumbnail.jpg",
      videoUrl: "/2025%20Showreel%20MAKU%20(1)_1749340063718.mp4"
    },
    {
      id: 2,
      title: "Rezzil Player",
      category: "Sports Tech",
      thumbnail: "/rezzil-thumbnail.png",
      videoUrl: "/Rezzil%2016-9%20PSVR%20Final_1749337960289.mp4"
    },
    {
      id: 3,
      title: "ICON Heist",
      category: "Fashion Film",
      thumbnail: "/icon-heist-thumbnail.png",
      videoUrl: "/ICON_Heist_FullFilm_Edit06_OriginalVersion_DC%20(1)_1749333927336.mp4"
    },
    {
      id: 4,
      title: "Padel Website",
      category: "Digital Campaign",
      thumbnail: "/padel-thumbnail.jpg",
      videoUrl: "/Padel%20Website%20(Wide%20-%20FINAL)%20_1749158053418.mp4"
    }
  ];

  return (
    <section className="py-24 bg-onyx text-white relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-fiery/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-stone/10 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black mb-6 leading-[0.85] tracking-tight uppercase">
            Our <em className="text-fiery italic">Work</em>
          </h2>
          <p className="text-xl font-jetbrains-mono font-light opacity-70 max-w-2xl mx-auto">
            Cinematic stories that captivate audiences and drive results for leading brands
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video.videoUrl)}
              onMouseEnter={() => setHoveredVideo(video.videoUrl)}
              onMouseLeave={() => setHoveredVideo(null)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Static thumbnail - Always visible */}
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className={`w-full h-64 object-cover transition-all duration-500 ${
                    hoveredVideo === video.videoUrl ? 'opacity-0' : 'opacity-100 group-hover:scale-110'
                  }`}
                  onError={(e) => {
                    console.error('Gallery thumbnail error:', video.title, e);
                    // Fallback to a default thumbnail or hide thumbnail
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Video preview on hover */}
                <SimpleVideoAutoplay
                  src={validateAndEncodeVideoUrl(video.videoUrl).encodedUrl}
                  enableHoverPlay={true}
                  className={`absolute inset-0 w-full h-64 object-cover transition-opacity duration-500 ${
                    hoveredVideo === video.videoUrl ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-fiery/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-fiery font-oswald font-medium mb-2 tracking-wider uppercase">{video.category}</div>
                  <h3 className="text-xl font-oswald font-medium tracking-wide">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              className="relative max-w-4xl w-full aspect-video"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              />
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-fiery text-2xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}