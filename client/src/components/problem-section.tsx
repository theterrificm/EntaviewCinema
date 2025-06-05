import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 bg-stone text-onyx relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-fiery/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 border border-onyx/10 rotate-12"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <motion.h2 
            className="text-5xl md:text-7xl font-league-spartan font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Most content gets ignored.
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-helvetica font-light opacity-80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            You're creating content, but it doesn't connect. Your brand deserves more than just views — it deserves impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
}