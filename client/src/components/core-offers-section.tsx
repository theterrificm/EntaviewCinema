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
      image: "/offer-images/brand-campaigns.svg"
    },
    {
      title: "Retainers", 
      caption: "Ongoing content that keeps your brand top-of-mind every single month.",
      image: "/offer-images/retainers.svg"
    },
    {
      title: "Startup Launches",
      caption: "Launch with purpose through strategic storytelling and product films.",
      image: "/offer-images/startup-launches.svg"
    }
  ];

  return (
    <section className="py-32 bg-onyx text-stone" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Animated Headline */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-helvetica font-bold mb-4">
            Transform Your{" "}
            <span className="relative inline-block min-w-[300px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="absolute left-0 text-fiery"
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
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-stone/20 to-fiery/10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Placeholder for now - will replace with actual images */}
                  <div className="text-6xl text-stone/30 font-helvetica">
                    {index === 0 ? "🎬" : index === 1 ? "📈" : "🚀"}
                  </div>
                </motion.div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-fiery/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-helvetica font-bold mb-4 group-hover:text-fiery transition-colors duration-300">
                  {offer.title}
                </h3>
                <p className="text-lg font-helvetica leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {offer.caption}
                </p>
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