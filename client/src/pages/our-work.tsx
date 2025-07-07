import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { VideoPlayer } from "@/components/video-player";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { Filter, Play, ArrowRight, Volume2, VolumeX } from "lucide-react";

// Video file paths (using actual files in public directory)
const iconHeistVideo = "/icon-heist-video.mp4";
const iconHeistShortVideo = "/hero-video.mp4"; // Using available video as placeholder
const manifestVideo = "/maku-showreel-optimized.mp4"; // Using available video
const manifestV5Video = "/1. Comp Open - Manifest v5_1749342296563.mp4";
const makuShowreelVideo = "/maku-showreel-optimized.mp4";
const makuShowreel2Video = "/2025 Showreel MAKU (1)_1749340063718.mp4";
const teremanaVideo = "/Teremana UK Launch - (Full Version - 4K)_1749341946737.mp4";
const teremanaShortVideo = "/hero-video.mp4"; // Using available video as placeholder  
const padelVideo = "/Padel Website (Wide - FINAL) _1749158053418.mp4";
const rezzilVideo = "/rezzil-player.mp4";

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

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section - Home Page Style */}
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

      {/* Filters Section - Netflix Style */}
      <section ref={ref} className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Industry Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Filter size={20} />
                Industry
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    className={`px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                      activeFilter === industry
                        ? "bg-red-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {industry.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Format Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4">
                Format
              </h3>
              <div className="flex flex-wrap gap-2">
                {formats.map((format) => (
                  <button
                    key={format}
                    onClick={() => setActiveFormat(format)}
                    className={`px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                      activeFormat === format
                        ? "bg-red-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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

      {/* Netflix-Style Content Rows */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-full mx-auto">
          {/* Featured Content Row */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-6">Featured Projects</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-6">
              {filteredProjects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden group cursor-pointer relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredVideo(project.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => openVideoModal(project.video, project.title)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <SimpleVideoAutoplay
                      src={project.video}
                      className="w-full h-full object-cover"
                      enableHoverPlay={hoveredVideo === project.id}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      {project.format.replace("-", " ")}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-300">{project.duration}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-500 text-sm font-medium uppercase">
                        {project.industry}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">
                        {project.aspect}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="space-y-1">
                      {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-red-500" />
                          <span className="text-gray-400 text-xs">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Brand Films Row */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-6">Brand Films</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-6">
              {filteredProjects.filter(p => p.format === 'brand-film').map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden group cursor-pointer relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredVideo(project.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => openVideoModal(project.video, project.title)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <SimpleVideoAutoplay
                      src={project.video}
                      className="w-full h-full object-cover"
                      enableHoverPlay={hoveredVideo === project.id}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      Brand Film
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-300">{project.duration}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-500 text-sm font-medium uppercase">
                        {project.industry}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">
                        {project.aspect}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="space-y-1">
                      {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-red-500" />
                          <span className="text-gray-400 text-xs">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Campaigns Row */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-6">Campaigns</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-6">
              {filteredProjects.filter(p => p.format === 'campaign').map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden group cursor-pointer relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredVideo(project.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => openVideoModal(project.video, project.title)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <SimpleVideoAutoplay
                      src={project.video}
                      className="w-full h-full object-cover"
                      enableHoverPlay={hoveredVideo === project.id}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      Campaign
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-300">{project.duration}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-500 text-sm font-medium uppercase">
                        {project.industry}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">
                        {project.aspect}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="space-y-1">
                      {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-red-500" />
                          <span className="text-gray-400 text-xs">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Showreels Row */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-6">Showreels</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-6">
              {filteredProjects.filter(p => p.format === 'showreel').map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden group cursor-pointer relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredVideo(project.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => openVideoModal(project.video, project.title)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <SimpleVideoAutoplay
                      src={project.video}
                      className="w-full h-full object-cover"
                      enableHoverPlay={hoveredVideo === project.id}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      Showreel
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-300">{project.duration}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-500 text-sm font-medium uppercase">
                        {project.industry}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">
                        {project.aspect}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="space-y-1">
                      {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-red-500" />
                          <span className="text-gray-400 text-xs">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-red-900/20 to-black">
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