import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GuideSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const brands = [
    { name: "PlayStation", id: "playstation" },
    { name: "Jägermeister", id: "jagermeister" },
    { name: "ICON Amsterdam", id: "icon" },
    { name: "Remington", id: "remington" },
    { name: "Teremana Tequila", id: "teremana" },
    { name: "Sony Music Entertainment", id: "sony" },
    { name: "Apple Music", id: "apple" },
    { name: "Graft Events", id: "graft" },
    { name: "Manchester United", id: "manchester" },
    { name: "Parklife Festival", id: "parklife" },
    { name: "Fresh Ego Kid", id: "fresh" },
    { name: "Padel Social Club", id: "padel" },
    { name: "Relentless Records", id: "relentless" },
    { name: "Maximum Music", id: "maximum" },
    { name: "RnB & Slow Jams", id: "rnb" }
  ];

  return (
    <section className="py-24 md:py-32 bg-onyx text-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-fiery/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-fiery/20 rotate-45"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-bebas font-normal mb-8 leading-[0.9] tracking-wide uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by brands that lead
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-roboto-condensed font-light text-white/80 max-w-4xl mx-auto leading-relaxed mb-12 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We've led global campaigns and branded shorts for some of the boldest brands in culture. Let's make yours unforgettable.
          </motion.p>
        </div>
      </div>
      
      {/* Full-width horizontal scrolling marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex space-x-12 items-center"
          animate={{
            x: [1920, -(212 * brands.length)]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: `${(212 * brands.length * 2) + 1920}px` }}
        >
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-1`}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[200px] h-24 flex items-center justify-center border border-white/20 hover:border-fiery/50 transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(242, 64, 5, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="font-oswald font-medium text-sm text-white/90 text-center group-hover:text-fiery transition-colors duration-300 tracking-wider uppercase">
                {brand.name}
              </span>
            </motion.div>
          ))}
          {/* Second set for seamless loop */}
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-2`}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[200px] h-24 flex items-center justify-center border border-white/20 hover:border-fiery/50 transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(242, 64, 5, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="font-oswald font-medium text-sm text-white/90 text-center group-hover:text-fiery transition-colors duration-300 tracking-wider uppercase">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}