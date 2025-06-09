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
import playstationVRLogo from "@assets/PS5_PSVR2 PS4_PSVR Combo Watermark - White_1749480707200.png";
import playstationPS5Logo from "@assets/PS5_PSVR2 Combo Watermark - White_1749480923281.png";
import metaQuestLogo from "@assets/Meta-Quest-3-Logo_1749481153820.png";

export default function GuideSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const brands = [
    { name: "Jägermeister", id: "jagermeister", logo: jagermeisterWordmarkLogo, largeSize: true, url: "https://www.jagermeister.com" },
    { name: "PlayStation", id: "playstation", logo: playstationPS5Logo, largeSize: true, url: "https://www.playstation.com" },
    { name: "Manchester United", id: "manchester", logo: manchesterLogo, largeSize: true, extraLarge: true, url: "https://www.manutd.com" },
    { name: "Meta Quest", id: "meta-quest", logo: metaQuestLogo, largeSize: true, url: "https://www.meta.com/quest" },
    { name: "Apple Music", id: "apple", logo: appleMusicLogo, url: "https://music.apple.com" },
    { name: "ICON Amsterdam", id: "icon", logo: iconLogo, url: "https://iconamsterdam.com" },
    { name: "Remington", id: "remington", logo: remingtonLogo, url: "https://www.remington.com" },
    { name: "Teremana Tequila", id: "teremana", logo: teremanaLogo, largeSize: true, extraLarge: true, url: "https://www.teremana.com" },
    { name: "Rezzil Player", id: "rezzil", logo: rezzilLogo, url: "https://rezzil.com" },
    { name: "Graft Events", id: "graft", logo: graftLogo, largeSize: true, extraLarge: true, url: "https://graftevents.com" },
    { name: "Ministry of Sound", id: "ministry", logo: ministryLogo, largeSize: true, extraLarge: true, url: "https://ministryofsound.com" },
    { name: "Parklife Festival", id: "parklife", logo: parklifeLogo, largeSize: true, url: "https://parklife.uk.com" },
    { name: "Fresh Ego Kid", id: "fresh", logo: freshEgoLogo, largeSize: true, url: "https://freshegokid.com" },
    { name: "Padel Social Club", id: "padel", logo: padelLogo, largeSize: true, url: "https://padelsocialclub.com" },
    { name: "Relentless Records", id: "relentless", logo: relentlessLogo, largeSize: true, url: "https://relentlessrecords.co.uk" },
    { name: "Lights4Fun", id: "lights4fun", logo: lights4funLogo, url: "https://www.lights4fun.co.uk" },
    { name: "PlayStation VR", id: "playstation-vr", logo: playstationVRLogo, largeSize: true, url: "https://www.playstation.com/vr" }
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
          className="flex space-x-16 items-center"
          animate={{
            x: "-100%",
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-1`}
              className="min-w-[320px] h-20 flex items-center justify-center group"
              whileHover={{ 
                scale: 1.1,
                y: -2
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a 
                href={brand.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full cursor-pointer"
              >
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className={`${brand.extraLarge ? 'h-20 max-w-[280px]' : brand.largeSize ? 'h-16 max-w-[240px]' : 'h-12 max-w-[180px]'} ${brand.id === 'relentless' ? 'scale-[1.8]' : ''} w-auto object-contain ${brand.id === 'icon' ? 'opacity-80' : 'filter brightness-0 invert opacity-70'} group-hover:opacity-100 transition-all duration-300`}
                  />
                ) : (
                  <span className="font-oswald font-medium text-lg text-white/70 text-center group-hover:text-white transition-colors duration-300 tracking-wider uppercase">
                    {brand.name}
                  </span>
                )}
              </a>
            </motion.div>
          ))}
          {/* Second set for seamless loop */}
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-2`}
              className="min-w-[320px] h-20 flex items-center justify-center group"
              whileHover={{ 
                scale: 1.1,
                y: -2
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a 
                href={brand.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full cursor-pointer"
              >
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className={`${brand.extraLarge ? 'h-20 max-w-[280px]' : brand.largeSize ? 'h-16 max-w-[240px]' : 'h-12 max-w-[180px]'} ${brand.id === 'relentless' ? 'scale-[1.8]' : ''} w-auto object-contain ${brand.id === 'icon' ? 'opacity-80' : 'filter brightness-0 invert opacity-70'} group-hover:opacity-100 transition-all duration-300`}
                  />
                ) : (
                  <span className="font-oswald font-medium text-lg text-white/70 text-center group-hover:text-white transition-colors duration-300 tracking-wider uppercase">
                    {brand.name}
                  </span>
                )}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}