import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      number: "10M+",
      label: "Views Generated",
      icon: "👁️"
    },
    {
      number: "40+",
      label: "Campaigns Delivered",
      icon: "🎬"
    },
    {
      number: "5",
      label: "Countries",
      icon: "🌍"
    }
  ];

  const brands = [
    "PlayStation",
    "Jägermeister", 
    "ICON Amsterdam"
  ];

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="py-24 md:py-32 bg-onyx text-white relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-fiery/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-32 h-32 border border-white/10 rotate-45"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black mb-8 leading-[0.85] tracking-tight uppercase">
            The Results Speak for <em className="text-fiery not-italic">Themselves</em>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 group-hover:bg-white/10 group-hover:border-fiery/50 transition-all duration-300">
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    scale: hasAnimated ? [1, 1.2, 1] : 1,
                    rotate: hasAnimated ? [0, 10, -10, 0] : 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.3 + 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div 
                  className="text-4xl md:text-6xl font-bebas font-normal text-fiery mb-4 tracking-wide"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <motion.p 
                  className="text-lg font-jetbrains-mono font-light opacity-80"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p 
            className="text-lg font-jetbrains-mono font-light opacity-70 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Trusted by:
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="text-xl md:text-2xl font-bebas font-normal tracking-wider text-white/60 hover:text-fiery transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}