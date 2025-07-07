import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StakesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleBookCall = () => {
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  return (
    <section className="py-24 md:py-32 bg-onyx text-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-fiery/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 border border-fiery/20 rotate-12"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <motion.h2 
            className="text-5xl md:text-7xl font-roboto-condensed font-black mb-8 leading-[0.85] tracking-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            WITHOUT <em className="text-fiery not-italic">STORY</em>, YOUR BRAND BECOMES FORGETTABLE.
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Most brands get drowned out in digital noise. Don't waste your time or budget on content that doesn't connect.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={handleBookCall}
              className="bg-fiery hover:bg-fiery/90 text-white px-8 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              BOOK A CALL
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}