import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleBookCall = () => {
    // This would typically integrate with a booking system
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  return (
    <section className="py-24 md:py-32 bg-onyx relative overflow-hidden" ref={ref} id="contact">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional film equipment and lighting setup" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Let's build something bold.
          </motion.h2>
          
          <motion.button 
            onClick={handleBookCall}
            className="bg-fiery hover:bg-fiery/90 text-white px-12 py-6 text-xl font-medium tracking-wide transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK A CALL
          </motion.button>
        </div>
      </div>
    </section>
  );
}
