import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import logo assets
import jagermeisterWordmarkLogo from "@assets/JM_INT_Logo_Wordmark_White_RGB_digital_display_1749472035908.png";
import iconLogo from "@assets/ICON LOGO white_1749472507635.png";
import remingtonLogo from "@assets/Remington White_2x_1749467036215.png";
import teremanaLogo from "@assets/Teremana_White_Gradient_Copper_Primary_Logo_sRGB (1)_1749470160928.png";
import rezzilLogo from "@assets/Rezzil Player W_1749467627330.png";
import appleMusicLogo from "@assets/Apple music White 2_1749467108225.png";
import graftLogo from "@assets/GRAFT EVENTS SOLID LOGO-02_1749470064556.png";
import manchesterLogo from "@assets/ManUtdLogo-notag-WO_1749467061387.png";
import ministryLogo from "@assets/ministry-of-sound-logo-svg-vector 2_1749467061387.png";
import parklifeLogo from "@assets/PL25_RSxPL_logo-03_1749470183599.png";
import freshEgoLogo from "@assets/FreshEgoKid-LockUp-White 2_1749467123710.png";
import padelLogo from "@assets/Padel Social Club_Logo_White_CMYK_AW_1749469804275.png";
import relentlessLogo from "@assets/relentless-records- transparent_1749467088116.png";
import lights4funLogo from "@assets/Lights4fun_ReversedLogo_RGB_1749467061387.png";

export default function GuideSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const brands = [
    { name: "PlayStation", id: "playstation", logo: null },
    { name: "Jägermeister", id: "jagermeister", logo: jagermeisterWordmarkLogo, largeSize: true },
    { name: "ICON Amsterdam", id: "icon", logo: iconLogo },
    { name: "Remington", id: "remington", logo: remingtonLogo },
    { name: "Teremana Tequila", id: "teremana", logo: teremanaLogo, largeSize: true, extraLarge: true },
    { name: "Rezzil Player", id: "rezzil", logo: rezzilLogo },
    { name: "Apple Music", id: "apple", logo: appleMusicLogo },
    { name: "Graft Events", id: "graft", logo: graftLogo, largeSize: true, extraLarge: true },
    { name: "Manchester United", id: "manchester", logo: manchesterLogo, largeSize: true, extraLarge: true },
    { name: "Ministry of Sound", id: "ministry", logo: ministryLogo, largeSize: true, extraLarge: true },
    { name: "Parklife Festival", id: "parklife", logo: parklifeLogo, largeSize: true },
    { name: "Fresh Ego Kid", id: "fresh", logo: freshEgoLogo, largeSize: true },
    { name: "Padel Social Club", id: "padel", logo: padelLogo, largeSize: true },
    { name: "Relentless Records", id: "relentless", logo: relentlessLogo, largeSize: true },
    { name: "Lights4Fun", id: "lights4fun", logo: lights4funLogo }
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
            x: [0, "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-1`}
              className={`${brand.extraLarge ? 'min-w-[450px]' : brand.largeSize ? 'min-w-[300px]' : 'min-w-[240px]'} ${brand.id === 'relentless' ? 'min-w-[400px]' : ''} h-20 flex items-center justify-center group cursor-pointer`}
              whileHover={{ 
                scale: 1.1,
                y: -2
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={`${brand.extraLarge ? 'h-20 max-w-[350px]' : brand.largeSize ? 'h-16 max-w-[280px]' : 'h-12 max-w-[200px]'} ${brand.id === 'relentless' ? 'scale-[2]' : ''} w-auto object-contain ${brand.id === 'icon' ? 'opacity-80' : 'filter brightness-0 invert opacity-70'} group-hover:opacity-100 transition-all duration-300`}
                />
              ) : (
                <span className="font-oswald font-medium text-lg text-white/70 text-center group-hover:text-white transition-colors duration-300 tracking-wider uppercase">
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
          {/* Second set for seamless loop */}
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-2`}
              className={`${brand.extraLarge ? 'min-w-[450px]' : brand.largeSize ? 'min-w-[300px]' : 'min-w-[240px]'} ${brand.id === 'relentless' ? 'min-w-[400px]' : ''} h-20 flex items-center justify-center group cursor-pointer`}
              whileHover={{ 
                scale: 1.1,
                y: -2
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={`${brand.extraLarge ? 'h-20 max-w-[350px]' : brand.largeSize ? 'h-16 max-w-[280px]' : 'h-12 max-w-[200px]'} ${brand.id === 'relentless' ? 'scale-[2]' : ''} w-auto object-contain ${brand.id === 'icon' ? 'opacity-80' : 'filter brightness-0 invert opacity-70'} group-hover:opacity-100 transition-all duration-300`}
                />
              ) : (
                <span className="font-oswald font-medium text-lg text-white/70 text-center group-hover:text-white transition-colors duration-300 tracking-wider uppercase">
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