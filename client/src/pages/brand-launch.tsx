import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { VideoPlayer } from "@/components/video-player";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { Target, TrendingUp, CheckCircle, Video, Play, Users, Zap, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { getVideoUrl, encodeVideoUrl } from "@/utils/videoUtils";

// Video file paths using deployment-safe utility
const iconHeistVideo = getVideoUrl('iconHeistAds');
const manifestVideo = getVideoUrl('manifestV4');
const teremanaVideo = getVideoUrl('teremanaShort');

export default function BrandCampaign() {
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
    "Hero brand films that establish market authority",
    "Episodic social content that builds ongoing engagement", 
    "Strategic campaign ideation and creative direction",
    "Cross-platform content optimised for maximum reach",
    "Comprehensive usage rights for ads, web, and social"
  ];

  const process = [
    {
      step: "01",
      title: "Campaign Strategy",
      description: "We develop comprehensive campaign ideation, identify your brand's unique positioning, and create a strategic plan for multi-platform influence."
    },
    {
      step: "02", 
      title: "Content Creation",
      description: "Hero brand films (60-90s) and up to 5 episodic social reels (15-30s) with full creative direction, location sourcing, and on-set art direction."
    },
    {
      step: "03",
      title: "Market Amplification", 
      description: "Deploy content across all platforms with comprehensive usage rights, measuring engagement and scaling influence through strategic distribution."
    }
  ];

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-oswald font-bold text-white mb-8 tracking-tight leading-none uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            BRAND CAMPAIGNS THAT{" "}
            <span className="text-fiery">SCALE INFLUENCE</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We create comprehensive campaigns with hero films and episodic content that amplify your brand across every platform, scaling your influence and establishing market dominance through strategic storytelling.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Target className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">Hero Brand Films</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Video className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">Episodic Social Reels</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Zap className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">Campaign Strategy</span>
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
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              SUCCESSFUL BRAND CAMPAIGNS PORTFOLIO
            </h2>
            <p className="text-lg font-jetbrains-mono font-light text-white/80 leading-relaxed">
              See how we create comprehensive campaigns that scale brand influence through hero films and strategic episodic content.
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
                  <SimpleVideoAutoplay
                    src={iconHeistVideo}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    onClick={() => openVideoModal(iconHeistVideo, "ICON Heist Campaign", "9:16")}
                    enableHoverPlay={true}
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
                  ICON Brand Launch Story
                </h3>
                <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                  Strategic messaging applied to streetwear launch, positioning ICON as the guide to customer style transformation.
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
                  <SimpleVideoAutoplay
                    src={teremanaVideo}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    onClick={() => openVideoModal(teremanaVideo, "Teremana UK Launch", "9:16")}
                    enableHoverPlay={true}
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
                  Teremana UK Market Entry
                </h3>
                <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                  Premium spirits brand launch using strategic storytelling principles to establish market authority and customer trust.
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
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              THE CAMPAIGN CHALLENGE
            </h2>
            <p className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
              Most brands create disconnected content that fails to build sustained influence, leaving audiences confused about your brand's value and unable to engage meaningfully.
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
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              OUR STRATEGIC SOLUTION
            </h2>
            <p className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
              Through comprehensive campaign strategy, we create cohesive narratives that connect hero films with episodic content, positioning your brand as the culture leader and scaling your influence across every platform.
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
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 tracking-tight uppercase">
              CAMPAIGN SUCCESS OUTCOMES
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
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 tracking-tight uppercase">
              OUR CAMPAIGN PROCESS
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
                  <h3 className="text-xl font-oswald font-medium text-white mb-4 tracking-wide uppercase">
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

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-onyx">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              CULTURE CAMPAIGN
            </h2>
            <p className="text-xl font-jetbrains-mono text-white/80 mb-8">
              For brands ready to scale their influence.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-lg p-8 mb-8 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >

            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-oswald font-medium text-white mb-4 tracking-wide uppercase">
                Culture Campaign
              </h3>
              <div className="text-3xl font-roboto-condensed font-black text-fiery mb-4">
                Book a call for quote
              </div>
              <p className="text-lg font-jetbrains-mono text-white/80">
                For brands ready to scale their influence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-fiery text-xl">•</span>
                  <span className="font-jetbrains-mono text-white">Hero brand film (60–90s)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fiery text-xl">•</span>
                  <span className="font-jetbrains-mono text-white">Up to 5 episodic social reels (15–30s each)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fiery text-xl">•</span>
                  <span className="font-jetbrains-mono text-white">Creative direction + campaign ideation</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-fiery text-xl">•</span>
                  <span className="font-jetbrains-mono text-white">Location + talent sourcing</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fiery text-xl">•</span>
                  <span className="font-jetbrains-mono text-white">On-set direction + art direction</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fiery text-xl">•</span>
                  <span className="font-jetbrains-mono text-white">Usage rights for ads, web + social</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <motion.button 
                  className="bg-fiery hover:bg-fiery/90 text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Campaign
                </motion.button>
              </Link>
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
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              Ready to Scale Your Brand Influence?
            </h2>
            <p className="text-xl font-jetbrains-mono font-light text-white/80 mb-8">
              Every culture-defining campaign starts with strategic storytelling.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Scale Your Influence
              </motion.button>
            </Link>
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
          aspectRatio={modalVideo.aspect === "9:16" ? "9:16" : "16:9"}
        />
      )}
    </div>
  );
}