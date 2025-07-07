import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { VideoPlayer } from "@/components/video-player";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { Play, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import makuShowreelVideo from "@assets/2025 Showreel MAKU (1)_1749340063718.mp4";
import teremanaShortVideo from "@assets/Teremana UK Launch (20 Sec Cutdown - Vertical) (1)_1749495031895.mp4";

export default function BrandFilms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [modalVideo, setModalVideo] = useState<{ src: string; title: string } | null>(null);

  const openVideoModal = (src: string, title: string) => {
    setModalVideo({ src, title });
  };

  const closeVideoModal = () => {
    setModalVideo(null);
  };

  const benefits = [
    "£500K in quality sales for ICON Amsterdam",
    "2M+ organic campaign views",
    "27% conversion uplift"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery + Strategy Call",
      description: "We dive deep into your brand story, values, and goals to craft the perfect narrative approach."
    },
    {
      step: "02", 
      title: "Shoot & Edit with You at the Centre",
      description: "Professional cinematography and post-production that captures your brand's authentic essence."
    },
    {
      step: "03",
      title: "Release a Cinematic Story",
      description: "Launch a film that builds legacy and moves culture forward."
    }
  ];

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-oswald font-bold text-white mb-8 tracking-tight leading-none uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-fiery">CULTURE</span> FILM
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            For brands ready to lead culture.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-fiery text-white px-8 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Discovery Call
              </motion.button>
            </Link>
            <motion.button
              onClick={() => openVideoModal(makuShowreelVideo, "MAKU Media 2025 Showreel")}
              className="border-2 border-white text-white px-8 py-4 text-lg font-oswald font-medium hover:bg-white hover:text-onyx transition-all duration-300 tracking-widest uppercase flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              Watch Our Reel
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* MAKU Showreel Video Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              OUR WORK IN ACTION
            </h2>
            <p className="text-lg font-jetbrains-mono font-light text-white/80 leading-relaxed">
              See how we craft cinematic stories that build brand legacy
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            onClick={() => openVideoModal(makuShowreelVideo, "MAKU Media 2025 Showreel")}
            whileHover={{ scale: 1.02 }}
          >
            <SimpleVideoAutoplay
              src={makuShowreelVideo}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
              style={{ cursor: 'pointer' }}
              onClick={() => openVideoModal(makuShowreelVideo, "MAKU Media 2025 Showreel")}
              enableHoverPlay={true}
            />
            
            {/* Animated border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-fiery/50 rounded-lg transition-all duration-500"></div>
            


            {/* Video title overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white text-lg font-oswald font-medium mb-2 drop-shadow-lg">
                MAKU Media 2025 Showreel
              </div>
              <div className="text-white/80 text-sm font-jetbrains-mono">
                Cinematic brand storytelling that moves culture forward
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 tracking-tight uppercase">
              WHAT'S INCLUDED
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {[
                "Hero brand film (60–90s)",
                "Narrative scripting + storyboarding", 
                "Cinematic production + direction",
                "4K colour grade + sound design",
                "Launch-ready social cutdowns (3 formats)",
                "Usage rights for web + social"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-fiery text-2xl font-oswald font-bold">–</div>
                  <p className="text-lg font-jetbrains-mono font-light text-white/90 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-iron to-onyx">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 tracking-tight uppercase">
              INVESTMENT
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-lg p-12 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-fiery/5 to-transparent"></div>
                <div className="relative z-10">
                  <p className="text-lg font-jetbrains-mono font-light text-white/80 mb-6">
                    Investment details:
                  </p>
                  <div className="text-3xl md:text-4xl font-oswald font-bold text-fiery mb-4">
                    Book a call for quote
                  </div>
                  <p className="text-lg font-jetbrains-mono font-light text-white/70 mb-8">
                    Complete culture film package
                  </p>
                  <Link href="/contact">
                    <motion.button
                      className="bg-fiery text-white px-8 py-3 font-oswald font-medium text-sm uppercase tracking-widest transition-all duration-300 hover:bg-fiery/90"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Call
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-onyx">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 tracking-tight uppercase">
              OUR PROCESS
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
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-onyx">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight uppercase">
              READY TO BUILD YOUR LEGACY?
            </h2>
            <p className="text-xl font-jetbrains-mono font-light text-white/80 mb-8">
              Let's create a cinematic story that moves culture.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Discovery Call
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
        />
      )}
    </div>
  );
}