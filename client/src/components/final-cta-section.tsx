import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleBookCall = () => {
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  return (
    <section className="py-32 bg-onyx text-white" ref={ref} id="contact">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-league-spartan font-bold mb-8 leading-tight">
            Ready to Create<br />
            Something Bold?
          </h2>
          
          <p className="text-xl font-helvetica font-light opacity-70 mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and create a film that leads culture, not follows it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBookCall}
              className="bg-fiery hover:bg-fiery/90 text-white px-8 py-4 font-league-spartan font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              BOOK A DISCOVERY CALL
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-league-spartan font-semibold text-lg transition-all duration-300">
              VIEW OUR WORK
            </button>
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          className="mt-24 pt-12 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <img 
                src="/Layer 25@4x_1749161317114.png" 
                alt="Entaview" 
                className="h-6 w-auto object-contain mx-auto md:mx-0"
              />
            </div>
            
            <div className="flex space-x-8 text-sm font-helvetica opacity-70">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm font-helvetica opacity-50">
            © 2024 Entaview. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
