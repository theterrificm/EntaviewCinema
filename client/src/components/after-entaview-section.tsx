import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AfterEntaviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 bg-stone text-onyx relative overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-fiery/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-onyx/10 rotate-12"></div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bebas font-normal mb-8 leading-[0.9] tracking-wide uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            After working with Entaview
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-jetbrains-mono font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            You'll have more than a polished video.<br />
            You'll have a strategy, a story, and a bold creative identity that drives culture and gets results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}