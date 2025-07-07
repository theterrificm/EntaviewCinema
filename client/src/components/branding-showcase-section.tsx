import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BrandingShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const brandingItems = [
    {
      image: "/Entaview Digital Billboard Mockup_1749156867248.png",
      title: "Digital Billboard",
      description: "story-driven brand content that makes people feel something, then act on",
      size: "large"
    },
    {
      image: "/Entaview Business Card Mockup_1749156867248.png",
      title: "Business Cards",
      description: "Premium brand identity",
      size: "medium"
    },
    {
      image: "/entaview orange Apple Watch Ultra_1749156867248.png",
      title: "Wearable Tech",
      description: "Brand experiences everywhere",
      size: "medium"
    },
    {
      image: "/Entaview T-shirt Mockup_1749156867248.png",
      title: "Apparel",
      description: "Lifestyle brand integration",
      size: "medium"
    },
    {
      image: "/Entaview Digital Billboard Mockup 2_1749156867248.png",
      title: "Transit Media",
      description: "Urban brand presence",
      size: "large"
    },
    {
      image: "/entaview grey Apple Watch Ultra_1749156867248.png",
      title: "Product Design",
      description: "Seamless brand integration",
      size: "small"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-onyx text-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-fiery/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 border border-fiery/20 rotate-45"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-7xl font-roboto-condensed font-black mb-8 leading-[0.85] tracking-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            BRAND
            <span className="text-fiery block italic">EVERYWHERE</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't just create films — we build complete brand ecosystems that live across every touchpoint, from digital billboards to wearable tech.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
          {brandingItems.map((item, index) => (
            <motion.div
              key={index}
              className={`
                relative group cursor-pointer overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${item.size === 'medium' ? 'md:col-span-1' : ''}
                ${item.size === 'small' ? 'md:col-span-1' : ''}
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-jetbrains-mono font-semibold mb-2">{item.title}</h3>
                <p className="text-sm font-jetbrains-mono font-light text-white/80 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg font-jetbrains-mono font-light text-white/60 max-w-2xl mx-auto">
            Every brand deserves to be seen, felt, and remembered. We make that happen across every medium that matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}