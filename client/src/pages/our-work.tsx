import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { VideoPlayer } from "@/components/video-player";
import { Filter, Play, ArrowRight, Volume2, VolumeX } from "lucide-react";

// Import all video assets
import iconHeistVideo from "@assets/ICON_Heist_FullFilm_Edit06_OriginalVersion_DC (1)_1749160669052.mp4";
import iconHeistShortVideo from "@assets/15 MIN - ICON BLACK FRIDAY HEIST  - RICO GETS AWAY (ADS)_1749493489639.mp4";
import manifestVideo from "@assets/1. Comp Open - Manifest v4_1749493286513.mp4";
import manifestV5Video from "@assets/1. Comp Open - Manifest v5_1749342296563.mp4";
import makuShowreelVideo from "@assets/2025 Showreel MAKU (1)_1749340063718.mp4";
import makuShowreel2Video from "@assets/2025 Showreel MAKU (1)_1749341370057.mp4";
import teremanaVideo from "@assets/Teremana UK Launch - (Full Version - 4K)_1749341946737.mp4";
import teremanaShortVideo from "@assets/Teremana UK Launch (20 Sec Cutdown - Vertical) (1)_1749495031895.mp4";
import padelVideo from "@assets/Padel Website (Wide - FINAL) _1749158053418.mp4";
import rezzilVideo from "@assets/Rezzil 16-9 PSVR Final_1749337960289.mp4";

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
      description: "20-second vertical cut optimized for social media platforms and mobile consumption.",
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
    }
  ];

  const filteredProjects = projects.filter(project => {
    const industryMatch = activeFilter === "all" || project.industry === activeFilter;
    const formatMatch = activeFormat === "all" || project.format === activeFormat;
    return industryMatch && formatMatch;
  });

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-oswald font-bold text-white mb-8 tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            See How We Help Brands{" "}
            <span className="text-fiery">Lead Culture</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Visually.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section ref={ref} className="py-12 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Industry Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-oswald font-medium text-white mb-4 tracking-wide flex items-center gap-2">
                <Filter size={20} />
                Industry
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    className={`px-4 py-2 text-sm font-jetbrains-mono font-medium tracking-wide uppercase transition-all duration-300 ${
                      activeFilter === industry
                        ? "bg-fiery text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {industry.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Format Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-oswald font-medium text-white mb-4 tracking-wide">
                Format
              </h3>
              <div className="flex flex-wrap gap-2">
                {formats.map((format) => (
                  <button
                    key={format}
                    onClick={() => setActiveFormat(format)}
                    className={`px-4 py-2 text-sm font-jetbrains-mono font-medium tracking-wide uppercase transition-all duration-300 ${
                      activeFormat === format
                        ? "bg-fiery text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {format.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-iron">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredVideo(project.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => openVideoModal(project.video, project.title)}
              >
                <div className={`relative overflow-hidden rounded-lg mb-6 ${project.aspect === '9:16' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  <video
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  

                  
                  {/* Orange border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-fiery/50 rounded-lg transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-fiery text-white px-3 py-1 text-xs font-oswald font-medium tracking-wide uppercase rounded shadow-lg">
                    {project.format.replace("-", " ")}
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 text-xs font-jetbrains-mono rounded backdrop-blur-sm">
                    {project.duration}
                  </div>
                  
                  {/* Click indicator */}
                  <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={20} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-oswald font-bold text-white group-hover:text-fiery transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-jetbrains-mono text-sm text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-sm font-jetbrains-mono font-medium text-fiery"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                    <span className="font-jetbrains-mono text-sm font-medium mr-2">
                      View Case Study
                    </span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-iron">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Ready to Join Our Portfolio?
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