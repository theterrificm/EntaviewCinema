import { motion } from "framer-motion";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { VideoPlayer } from "@/components/video-player";
import makuShowreelVideo from "@assets/2025 Showreel MAKU (1)_1749340063718.mp4";

export default function HeroSection() {
  const [showReelModal, setShowReelModal] = useState(false);

  const handleBookCall = () => {
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  const openShowreel = () => {
    setShowReelModal(true);
  };

  const closeShowreel = () => {
    setShowReelModal(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-onyx">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {/* Static Background Image Fallback */}
        <img 
          src="/maku-thumbnail.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Video Overlay - Simplified autoplay */}
        <SimpleVideoAutoplay
          src={makuShowreelVideo}
          className="absolute inset-0 w-full h-full object-cover"
          enableHoverPlay={false}
        />
        
        <div className="absolute inset-0 bg-onyx/70"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl">

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-roboto-condensed font-black leading-[0.85] mb-6 text-white text-center tracking-tight uppercase">
              We help brands lead <em className="text-fiery not-italic">culture</em> —<br />
              <span className="text-fiery italic">not follow it.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 max-w-2xl leading-relaxed text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.9 }}
          >
            For lifestyle labels, tech startups and culture-first brands ready to stop blending in.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.3 }}
          >
            <button 
              onClick={handleBookCall}
              className="bg-fiery hover:bg-fiery/90 text-white px-8 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              BOOK A DISCOVERY CALL
            </button>
            <button 
              onClick={openShowreel}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300"
            >
              WATCH OUR REEL
            </button>
          </motion.div>
        </div>
      </div>
      


      {/* Showreel Video Modal */}
      <VideoModal
        isOpen={showReelModal}
        onClose={closeShowreel}
        videoSrc={makuShowreelVideo}
        title="MAKU Media 2025 Showreel"
      />
    </section>
  );
}
