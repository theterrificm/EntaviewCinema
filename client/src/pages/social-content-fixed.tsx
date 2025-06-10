import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { VideoPlayer } from "@/components/video-player";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { Instagram, Youtube, CheckCircle, Video, Play } from "lucide-react";
import iconHeistVideo from "@assets/15 MIN - ICON BLACK FRIDAY HEIST  - RICO GETS AWAY (ADS)_1749493489639.mp4";
import manifestVideo from "@assets/1. Comp Open - Manifest v4_1749493286513.mp4";
import teremanaVideo from "@assets/Teremana UK Launch (20 Sec Cutdown - Vertical) (1)_1749495031895.mp4";

export default function SocialContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [modalVideo, setModalVideo] = useState<{ src: string; title: string; aspect?: string } | null>(null);

  const openVideoModal = (src: string, title: string, aspect: string = "16:9") => {
    setModalVideo({ src, title, aspect });
  };

  const closeVideoModal = () => {
    setModalVideo(null);
  };

  const benefits = [
    "300% higher engagement than static posts",
    "2.1M+ total organic reach across campaigns", 
    "67% average video completion rate",
    "5x more likely to be shared than photos",
    "Premium social media presence that converts"
  ];

  const process = [
    {
      step: "01",
      title: "Social Strategy",
      description: "Platform-specific content strategy that maximizes reach and engagement across all social channels."
    },
    {
      step: "02", 
      title: "Content Creation",
      description: "Vertical-first video production optimized for mobile consumption and social algorithms."
    },
    {
      step: "03",
      title: "Optimization",
      description: "Data-driven refinement using analytics to improve performance and audience engagement."
    }
  ];

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
            Social Content That{" "}
            <span className="text-fiery">Goes Viral</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We create thumb-stopping vertical content that drives engagement, builds communities, and converts followers into customers.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Instagram className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">Instagram</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Youtube className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">YouTube</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Video className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">TikTok</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={ref} className="py-20 px-6 bg-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight">
              Viral Content Portfolio
            </h2>
            <p className="text-lg font-jetbrains-mono font-light text-white/80 leading-relaxed">
              See how we create content that doesn't just get seen—it gets shared.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Video 1 - ICON Heist */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => openVideoModal(iconHeistVideo, "ICON Heist Campaign", "9:16")}
            >
              <div className="rounded-lg p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-fiery/20">
                <div className="aspect-[9/16] rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <AutoplayVideo
                    src={iconHeistVideo}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    onClick={() => openVideoModal(iconHeistVideo, "ICON Heist Campaign", "9:16")}
                    enableHoverPlay={true}
                    enableIntersectionPlay={true}
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-fiery/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-fiery transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-fiery/50 rounded-lg transition-all duration-500"></div>
                </div>
                <h3 className="text-lg font-oswald font-medium text-white mb-2 group-hover:text-fiery transition-colors duration-300">
                  ICON Heist Campaign
                </h3>
                <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                  15-second cinematic ad showcasing streetwear brand story with narrative-driven content.
                </p>
              </div>
            </motion.div>

            {/* Video 2 - Teremana UK Launch */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => openVideoModal(teremanaVideo, "Teremana UK Launch", "9:16")}
            >
              <div className="rounded-lg p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-fiery/20">
                <div className="aspect-[9/16] rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <AutoplayVideo
                    src={teremanaVideo}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    onClick={() => openVideoModal(teremanaVideo, "Teremana UK Launch", "9:16")}
                    enableHoverPlay={true}
                    enableIntersectionPlay={true}
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-fiery/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-fiery transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-fiery/50 rounded-lg transition-all duration-500"></div>
                </div>
                <h3 className="text-lg font-oswald font-medium text-white mb-2 group-hover:text-fiery transition-colors duration-300">
                  Teremana UK Launch
                </h3>
                <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                  20-second premium spirits brand launch optimized for mobile-first consumption.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-iron to-onyx">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight">
              The Problem
            </h2>
            <p className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
              Most brands create social content that gets <em className="text-fiery">lost in the noise</em>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-onyx">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight">
              Our Solution
            </h2>
            <p className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
              We create vertical-first, cinematic content that stops thumbs and starts conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 tracking-tight">
              Proven Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <CheckCircle className="text-fiery mb-4" size={32} />
                    <p className="text-lg font-jetbrains-mono font-medium text-white/90">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 tracking-tight">
              Our Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div className="text-6xl font-oswald font-bold text-fiery mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-oswald font-medium text-white mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="font-jetbrains-mono font-light text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-iron">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight">
              Ready to Go Viral?
            </h2>
            <p className="text-xl font-jetbrains-mono font-light text-white/80 mb-8">
              Let's create social content that stops the scroll.
            </p>
            <motion.button
              className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Discovery Call
            </motion.button>
          </motion.div>
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
          aspect={modalVideo.aspect}
        />
      )}
    </div>
  );
}