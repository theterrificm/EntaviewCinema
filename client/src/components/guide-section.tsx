import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GuideSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const brands = [
    { name: "PlayStation", id: "playstation", logo: null },
    { name: "Jägermeister", id: "jagermeister", logo: null },
    { name: "ICON Amsterdam", id: "icon", logo: "/attached_assets/ICON_1.9.1_1749334597260.png" },
    { name: "Remington", id: "remington", logo: null },
    { name: "Teremana Tequila", id: "teremana", logo: null },
    { name: "Sony Music Entertainment", id: "sony", logo: null },
    { name: "Apple Music", id: "apple", logo: null },
    { name: "Graft Events", id: "graft", logo: null },
    { name: "Manchester United", id: "manchester", logo: null },
    { name: "Parklife Festival", id: "parklife", logo: null },
    { name: "Fresh Ego Kid", id: "fresh", logo: null },
    { name: "Padel Social Club", id: "padel", logo: null },
    { name: "Relentless Records", id: "relentless", logo: null },
    { name: "Maximum Music", id: "maximum", logo: null },
    { name: "RnB & Slow Jams", id: "rnb", logo: null }
  ];

  return (
    <section className="py-24 md:py-32 bg-onyx text-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-fiery/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-fiery/20 rotate-45"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-roboto-condensed font-black mb-8 leading-[0.85] tracking-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by brands that <em className="text-fiery not-italic">lead</em>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 max-w-4xl mx-auto leading-relaxed mb-12"
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
            x: "-50%",
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
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
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-8 w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              ) : (
                <span className="font-oswald font-medium text-sm text-white/90 text-center group-hover:text-fiery transition-colors duration-300 tracking-wider uppercase">
                  {brand.name}
                </span>
              )}
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
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-8 w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              ) : (
                <span className="font-oswald font-medium text-sm text-white/90 text-center group-hover:text-fiery transition-colors duration-300 tracking-wider uppercase">
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}