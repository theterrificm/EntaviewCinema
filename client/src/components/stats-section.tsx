import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import brand logos
import playstationPS5Logo from "@assets/PS5_PSVR2 Combo Watermark - White_1749480923281.png";
import jagermeisterWordmarkLogo from "@assets/JM_INT_Logo_Wordmark_White_RGB_digital_display_1749472035908.png";
import iconLogo from "@assets/ICON LOGO white_1749472507635.png";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      number: "+10M",
      label: "VIEWS GENERATED",
      category: "TOTAL REACH"
    },
    {
      number: "+40",
      label: "CAMPAIGNS DELIVERED", 
      category: "COMPLETED PROJECTS"
    },
    {
      number: "+5",
      label: "COUNTRIES",
      category: "GLOBAL PRESENCE"
    }
  ];

  const brands = [
    { name: "PlayStation", logo: playstationPS5Logo },
    { name: "Jägermeister", logo: jagermeisterWordmarkLogo },
    { name: "ICON Amsterdam", logo: iconLogo }
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
          className="text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-roboto-condensed font-black leading-tight tracking-tight mb-8">
            <span className="text-white">OVER 10M+ PEOPLE HAVE HAD</span><br />
            <span className="text-white">THEIR CONTENT </span><span className="text-fiery italic">IMPACTED BY ENTAVIEW</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15
              }}
            >
              <motion.p 
                className="text-sm font-roboto-condensed font-medium text-white/60 uppercase tracking-wider mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
              >
                {stat.category}
              </motion.p>
              
              <motion.div 
                className="text-6xl md:text-8xl lg:text-9xl font-roboto-condensed font-black text-white/80 mb-4 leading-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.8 } : { scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.15 + 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {stat.number}
              </motion.div>
              
              <motion.p 
                className="text-sm font-roboto-condensed font-medium text-white/60 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.8 }}
              >
                {stat.label}
              </motion.p>
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
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-10 w-auto max-w-[180px] object-contain filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}