import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function CoreOffersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ["Brand", "Content Strategy", "Launch Plan"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const offers = [
    {
      title: "Brand Campaigns",
      caption: "High-impact hero films that define your identity and build cultural buzz.",
      videoSrc: "/offer-videos/brand-campaigns-loop.mp4",
      fallbackType: "brand"
    },
    {
      title: "Retainers", 
      caption: "Ongoing content that keeps your brand top-of-mind every single month.",
      videoSrc: "/offer-videos/retainers-loop.mp4",
      fallbackType: "retainer"
    },
    {
      title: "Startup Launches",
      caption: "Launch with purpose through strategic storytelling and product films.",
      videoSrc: "/offer-videos/startup-launches-loop.mp4",
      fallbackType: "launch"
    }
  ];

  return (
    <section className="py-32 bg-onyx text-stone" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Animated Headline */}
        <motion.div
          className="text-center mb-24 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-4 text-center">
            Transform Your{" "}
            <span className="relative inline-block min-w-[200px] md:min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="absolute left-1/2 transform -translate-x-1/2 text-fiery z-20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </motion.div>

        {/* Three Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl ml-8 mr-auto mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                zIndex: 50
              }}
              style={{ zIndex: 1 }}
            >
              {/* Video Container */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[16/9] h-[400px] shadow-2xl bg-gradient-to-br from-stone/10 to-fiery/20">
                {/* Animated Background Preview */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ 
                    background: offer.fallbackType === "brand" 
                      ? 'linear-gradient(45deg, #1a1a1a 25%, #2a2a2a 25%, #2a2a2a 50%, #1a1a1a 50%, #1a1a1a 75%, #2a2a2a 75%, #2a2a2a)'
                      : offer.fallbackType === "retainer"
                      ? 'radial-gradient(circle at 30% 40%, #F24005 0%, #1a1a1a 70%)'
                      : 'linear-gradient(135deg, #F24005 0%, #1a1a1a 100%)',
                    backgroundSize: offer.fallbackType === "brand" ? '20px 20px' : 'cover',
                    animation: offer.fallbackType === "brand" 
                      ? 'slide 2s linear infinite'
                      : offer.fallbackType === "retainer"
                      ? 'pulse 3s ease-in-out infinite'
                      : 'gradient-shift 4s ease-in-out infinite'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center text-stone mix-blend-overlay">
                    <div className="text-lg font-helvetica font-bold mb-2">
                      {offer.title}
                    </div>
                    <div className="text-xs opacity-60">
                      Video Preview
                    </div>
                  </div>
                </motion.div>
                
                {/* Hover Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-helvetica font-bold text-white mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm font-helvetica text-white/90 leading-relaxed">
                    {offer.caption}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-fiery/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Card Title - Always Visible */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-helvetica font-bold group-hover:text-fiery transition-colors duration-300">
                  {offer.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-fiery text-white px-12 py-4 rounded-full text-lg font-helvetica font-medium hover:bg-fiery/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Discovery Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}