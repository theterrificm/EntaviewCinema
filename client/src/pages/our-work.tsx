import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { VideoPlayer } from "@/components/video-player";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { Filter, Play, ArrowRight, Volume2, VolumeX } from "lucide-react";

import { getVideoUrl, getFallbackVideo } from "@/utils/videoUtils";

// Video file paths using deployment-safe utility
const iconHeistVideo = getVideoUrl('iconHeist');
const iconHeistShortVideo = getFallbackVideo();
const manifestVideo = getVideoUrl('makuShowreel');
const manifestV5Video = getVideoUrl('manifestV5');
const makuShowreelVideo = getVideoUrl('makuShowreel');
const makuShowreel2Video = getVideoUrl('makuShowreel2025');
const teremanaVideo = getVideoUrl('teremanaFull');
const teremanaShortVideo = getFallbackVideo();
const padelVideo = getVideoUrl('padelWebsite');
const rezzilVideo = getVideoUrl('rezzilPlayer');

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeFormat, setActiveFormat] = useState("all");
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [modalVideo, setModalVideo] = useState<{ src: string; title: string } | null>(null);

  const openVideoModal = (src: string, title: string) => {
    setModalVideo({ src, title });
  };

  const closeVideoModal = () => {
    setModalVideo(null);
  };

  const industries = ["all", "fashion", "spirits", "fitness", "tech", "showreel"];
  const formats = ["all", "brand-film", "campaign", "social-vertical", "commercial", "showreel"];

  const projects = [
    {
      id: 1,
      title: "ICON Black Friday Heist - Full Film",
      industry: "fashion",
      format: "brand-film",
      video: iconHeistVideo,
      metrics: ["+£500K launch sales", "2M+ organic views", "27% conversion uplift"],
      description: "Full-length cinematic heist narrative for ICON Amsterdam's Black Friday campaign, showcasing streetwear through storytelling.",
      duration: "15:00",
      aspect: "16:9"
    },
    {
      id: 2,
      title: "ICON Black Friday Heist - Commercial",
      industry: "fashion",
      format: "commercial",
      video: iconHeistShortVideo,
      metrics: ["+180% engagement", "3M+ impressions", "45% CTR"],
      description: "15-second commercial cut showcasing the cinematic quality and brand narrative in a condensed format.",
      duration: "0:15",
      aspect: "16:9"
    },
    {
      id: 3,
      title: "Teremana UK Launch - Full Campaign",
      industry: "spirits",
      format: "brand-film",
      video: teremanaVideo,
      metrics: ["+40% market penetration", "5M+ reach", "32% brand awareness lift"],
      description: "4K cinematic launch campaign for Dwayne Johnson's Teremana Tequila entering the UK market.",
      duration: "2:30",
      aspect: "16:9"
    },
    {
      id: 4,
      title: "Teremana UK Launch - Vertical",
      industry: "spirits",
      format: "social-vertical",
      video: teremanaShortVideo,
      metrics: ["+200% social engagement", "1.5M+ views", "58% completion rate"],
      description: "20-second vertical cut optimised for social media platforms and mobile consumption.",
      duration: "0:20",
      aspect: "9:16"
    },
    {
      id: 5,
      title: "Manifest Collection V4",
      industry: "fashion",
      format: "campaign",
      video: manifestVideo,
      metrics: ["+150% pre-orders", "2.2M+ views", "35% conversion rate"],
      description: "Dynamic product reveal campaign with cinematic quality and strategic brand messaging.",
      duration: "1:45",
      aspect: "16:9"
    },
    {
      id: 6,
      title: "Manifest Collection V5",
      industry: "fashion",
      format: "campaign",
      video: manifestV5Video,
      metrics: ["+120% engagement", "1.8M+ reach", "42% click-through"],
      description: "Enhanced version of the Manifest collection reveal with refined messaging and visual effects.",
      duration: "1:30",
      aspect: "16:9"
    },
    {
      id: 7,
      title: "MAKU Media 2025 Showreel",
      industry: "showreel",
      format: "showreel",
      video: makuShowreelVideo,
      metrics: ["+300% client inquiries", "5M+ industry views", "90% completion rate"],
      description: "Comprehensive showcase of MAKU Media's cinematic capabilities and diverse portfolio across industries.",
      duration: "3:00",
      aspect: "16:9"
    },
    {
      id: 8,
      title: "MAKU Media Showreel V2",
      industry: "showreel",
      format: "showreel",
      video: makuShowreel2Video,
      metrics: ["+250% brand recognition", "4.2M+ views", "85% engagement"],
      description: "Alternative cut of the MAKU Media showreel featuring different project highlights and narrative flow.",
      duration: "2:45",
      aspect: "16:9"
    },
    {
      id: 9,
      title: "Padel Social Club",
      industry: "fitness",
      format: "brand-film",
      video: padelVideo,
      metrics: ["+400% membership growth", "2.5M+ views", "65% retention rate"],
      description: "Premium fitness community brand film showcasing the culture and lifestyle of padel tennis.",
      duration: "2:00",
      aspect: "16:9"
    },
    {
      id: 10,
      title: "Rezzil VR Training",
      industry: "tech",
      format: "commercial",
      video: rezzilVideo,
      metrics: ["+500% trial signups", "3.8M+ views", "78% demo conversion"],
      description: "Next-generation VR training platform for professional athletes, showcasing cutting-edge technology.",
      duration: "1:15",
      aspect: "16:9"
    },
    {
      id: 11,
      title: "ICON Social Reel",
      industry: "fashion",
      format: "social-vertical",
      video: iconHeistShortVideo,
      metrics: ["+350% social engagement", "2.1M+ views", "72% completion rate"],
      description: "High-impact vertical social reel showcasing streetwear through dynamic storytelling and culture-forward messaging.",
      duration: "0:15",
      aspect: "9:16"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const industryMatch = activeFilter === "all" || project.industry === activeFilter;
    const formatMatch = activeFormat === "all" || project.format === activeFormat;
    return industryMatch && formatMatch;
  });

  // Separate vertical videos for social content section
  const verticalVideos = filteredProjects.filter(project => project.aspect === "9:16");
  const horizontalVideos = filteredProjects.filter(project => project.aspect === "16:9");

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section - Art of Documentary Style */}
      <section className="pt-32 pb-16 px-6 bg-onyx">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-left mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-8 tracking-wide uppercase">
              OUR WORK
            </h1>
            <p className="text-lg md:text-xl font-jetbrains-mono font-light text-white/70 max-w-2xl leading-relaxed">
              A curated collection of cinematic stories that elevate brands and connect with audiences through authentic storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Simple Filter Section */}
      <section ref={ref} className="py-8 px-6 bg-onyx border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-6 py-2 font-jetbrains-mono text-sm tracking-wide transition-all duration-300 ${
                  activeFilter === industry
                    ? "text-fiery border-b border-fiery"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {industry === "all" ? "All" : industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Projects - Horizontal Videos */}
      <section className="py-16 px-6 bg-onyx">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {horizontalVideos.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredVideo(project.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => openVideoModal(project.video, project.title)}
              >
                {/* Video Thumbnail */}
                <div className="aspect-video bg-stone/10 overflow-hidden mb-6 relative">
                  <SimpleVideoAutoplay
                    src={project.video}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    enableHoverPlay={hoveredVideo === project.id}
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 border border-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 text-xs font-jetbrains-mono rounded backdrop-blur-sm">
                    {project.duration}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-oswald font-medium text-white group-hover:text-fiery transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-sm font-jetbrains-mono text-white/60">
                    <span className="capitalize">{project.industry}</span>
                    <span>•</span>
                    <span className="capitalize">{project.format.replace("-", " ")}</span>
                  </div>
                  
                  <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="space-y-1 pt-2">
                    {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-xs font-jetbrains-mono text-fiery">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Content - Vertical Videos */}
      {verticalVideos.length > 0 && (
        <section className="py-16 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4 tracking-tight uppercase">
                SOCIAL CONTENT
              </h2>
              <p className="text-lg font-jetbrains-mono font-light text-white/70 max-w-2xl mx-auto">
                Optimized for social media platforms and mobile consumption.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {verticalVideos.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer max-w-xs"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredVideo(project.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => openVideoModal(project.video, project.title)}
                >
                  {/* Vertical Video Thumbnail */}
                  <div className="aspect-[9/16] bg-stone/10 overflow-hidden mb-4 relative rounded-lg">
                    <SimpleVideoAutoplay
                      src={project.video}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      enableHoverPlay={hoveredVideo === project.id}
                    />
                    
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 border border-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 text-xs font-jetbrains-mono rounded backdrop-blur-sm">
                      {project.duration}
                    </div>
                    
                    {/* Social Badge */}
                    <div className="absolute top-3 left-3 bg-fiery text-white px-2 py-1 text-xs font-jetbrains-mono rounded">
                      Social
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-oswald font-medium text-white group-hover:text-fiery transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-jetbrains-mono text-white/60">
                      <span className="capitalize">{project.industry}</span>
                      <span>•</span>
                      <span>{project.aspect}</span>
                    </div>
                    
                    <p className="text-xs font-jetbrains-mono text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Key Metrics */}
                    <div className="space-y-1 pt-1">
                      {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-xs font-jetbrains-mono text-fiery">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-onyx">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            READY TO JOIN OUR PORTFOLIO?
          </motion.h2>
          <motion.p
            className="text-xl font-jetbrains-mono font-light text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Let's create something that moves culture.
          </motion.p>
          <motion.button
            className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Discovery Call
          </motion.button>
        </div>
      </section>

      <Footer />
      
      {/* Video Modal */}
      {modalVideo && (
        <VideoModal
          isOpen={true}
          onClose={closeVideoModal}
          videoSrc={modalVideo.src}
          title={modalVideo.title}
        />
      )}
    </div>
  );
}