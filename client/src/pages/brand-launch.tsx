import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { VideoPlayer } from "@/components/video-player";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { Target, TrendingUp, CheckCircle, Video, Play, Users, Zap, Star } from "lucide-react";
import iconHeistVideo from "@assets/15 MIN - ICON BLACK FRIDAY HEIST  - RICO GETS AWAY (ADS)_1749493489639.mp4";
import manifestVideo from "@assets/1. Comp Open - Manifest v4_1749493286513.mp4";
import teremanaVideo from "@assets/Teremana UK Launch (20 Sec Cutdown - Vertical) (1)_1749495031895.mp4";

export default function BrandLaunch() {
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
    "Clear brand story that resonates with your target market",
    "Successful launch campaigns with measurable ROI",
    "Strong market positioning from day one",
    "Customer-centric messaging that drives conversions",
    "Brand narrative that builds lasting customer relationships"
  ];

  const process = [
    {
      step: "01",
      title: "Strategic Foundation",
      description: "We identify your customer's core problems, position your brand as the trusted guide, and create a clear plan that leads to success."
    },
    {
      step: "02", 
      title: "Launch Campaign",
      description: "Cinematic storytelling that introduces your brand solution and calls customers to take meaningful action toward transformation."
    },
    {
      step: "03",
      title: "Market Impact",
      description: "Measure success through customer engagement, brand recognition, and revenue growth that proves your messaging resonates."
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
            BRAND LAUNCHES THAT{" "}
            <span className="text-fiery">DEFINE MARKETS</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We craft compelling launch narratives that connect your brand with customers who need what you offer, driving immediate market impact and lasting brand loyalty through strategic storytelling.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Target className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">Strategic Messaging</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <TrendingUp className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">Market Launch</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-fiery" />
              <span className="font-jetbrains-mono text-sm text-white">Customer Journey</span>
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
              Successful Brand Launch Portfolio
            </h2>
            <p className="text-lg font-jetbrains-mono font-light text-white/80 leading-relaxed">
              See how we transform brand stories into market-defining launch campaigns that create lasting customer connections.
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
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight">
              The Launch Challenge
            </h2>
            <p className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
              Most brands launch with confusing messages that fail to connect with customers, leaving them wondering <em className="text-fiery">"What's in it for me?"</em>
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
              We create crystal-clear launch narratives that position your brand as the trusted guide, helping customers understand exactly how your solution transforms their world.
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
              Launch Success Stories
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
              OUR LAUNCH PROCESS
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
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              READY TO LAUNCH YOUR BRAND STORY?
            </h2>
            <p className="text-xl font-jetbrains-mono font-light text-white/80 mb-8">
              Let's transform your brand launch into a customer success story with clear, compelling messaging that drives action.
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
          aspectRatio={modalVideo.aspect === "9:16" ? "9:16" : "16:9"}
        />
      )}
    </div>
  );
}