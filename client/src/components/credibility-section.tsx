import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CredibilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const brands = [
    { name: "PlayStation", id: "playstation" },
    { name: "Jägermeister", id: "jagermeister" },
    { name: "ICON", id: "icon" },
    { name: "Remington", id: "remington" }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone text-onyx relative overflow-hidden" ref={ref} id="work">
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-fiery/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 border border-onyx/10 rotate-12"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 section-divider pt-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-8 geometric-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by brands that lead
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-light opacity-80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From global gaming giants to luxury spirits, we've crafted <span className="text-fiery font-medium">cinematic stories</span> that resonate across cultures and continents.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl w-36 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-onyx/5"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <span className="text-lg font-bold text-onyx/90">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
