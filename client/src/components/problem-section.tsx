import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 bg-onyx" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Most content just adds noise.
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-3xl font-light opacity-80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We help brands tell cinematic stories people actually care about.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
