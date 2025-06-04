import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 md:py-40 bg-onyx relative overflow-hidden section-border" ref={ref}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-fiery/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 premium-card rotate-45"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-fiery/30 floating-element"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center section-divider pt-12">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-helvetica font-bold leading-tight mb-12 geometric-accent uppercase tracking-tight text-shimmer"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Most content just adds noise.
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-4xl font-helvetica font-light opacity-90 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We help brands tell <span className="text-fiery font-medium bg-fiery/10 px-2 py-1 rounded">cinematic stories</span> people actually care about.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
