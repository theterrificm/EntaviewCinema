import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { usePackageImages } from "@/hooks/use-package-images";
import { Link } from "wouter";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { images, isLoading, error, generateImages } = usePackageImages();

  const packages = [
    {
      name: "Brand Partnership",
      price: "Book call for investment",
      description: "For brands wanting consistent culture-shaping content",
      packageType: "premium" as const,
      features: [
        "Monthly or quarterly content drops",
        "Short-form campaigns, reels, micro-docs",
        "Strategy sessions + campaign planning",
        "Cinematic shoots, BTS, interviews",
        "Editing, grading, delivery",
        "Dedicated account management"
      ],
      popular: true
    },
    {
      name: "Culture Film",
      price: "Book call for investment",
      description: "For brands ready to lead culture",
      packageType: "essential" as const,
      features: [
        "Hero brand film (60–90s)",
        "Narrative scripting + storyboarding",
        "Cinematic production + direction",
        "4K colour grade + sound design",
        "Launch-ready social cutdowns (3 formats)",
        "Usage rights for web + social"
      ]
    },
    {
      name: "Culture Campaign",
      price: "Book call for investment",
      description: "For brands ready to scale their influence",
      packageType: "professional" as const,
      features: [
        "Hero brand film (60–90s)",
        "Up to 5 episodic social reels (15–30s each)",
        "Creative direction + campaign ideation",
        "Location + talent sourcing",
        "On-set direction + art direction",
        "Usage rights for ads, web + social"
      ]
    }
  ];

  return (
    <section className="py-24 bg-onyx text-white" ref={ref} id="pricing">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black mb-6 leading-[0.85] tracking-tight uppercase">
            INVESTMENT <em className="text-fiery italic">OPTIONS</em>
          </h2>
          <p className="text-xl font-jetbrains-mono font-light opacity-70 max-w-2xl mx-auto">
            Choose the package that matches your vision and budget. All packages include our signature cinematic approach.
          </p>
          

        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto overflow-visible">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-lg border overflow-visible group cursor-pointer flex flex-col h-full ${
                pkg.popular 
                  ? 'border-fiery bg-fiery/5' 
                  : 'border-white/20 bg-white/5'
              }`}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 45 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-fiery/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {pkg.popular && (
                <motion.div 
                  className="absolute -top-3 left-0 right-0 bg-fiery text-white px-4 py-2 text-sm font-oswald font-medium z-30 shadow-xl border-b-2 border-white tracking-wider uppercase text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.3 },
                    scale: { duration: 0.5, delay: 0.3 }
                  }}
                >
                  Most Popular
                </motion.div>
              )}
              
              {/* 3D Course Package Graphics Section */}
              <div className="mb-8 relative z-10">
                <div className="flex items-center justify-center h-48">
                  {pkg.name === "Culture Film" && (
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                    >
                      <img
                        src="/culture-film-package.png"
                        alt="Culture Film Package"
                        className="w-40 h-40 object-cover drop-shadow-2xl rounded-lg"
                      />
                    </motion.div>
                  )}
                  
                  {pkg.name === "Culture Campaign" && (
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                    >
                      <img
                        src="/culture-campaign-package.png"
                        alt="Culture Campaign Package"
                        className="w-40 h-40 object-cover drop-shadow-2xl rounded-lg"
                      />
                    </motion.div>
                  )}
                  
                  {pkg.name === "Brand Partnership" && (
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                    >
                      <img
                        src="/brand-partnership-package-new.png"
                        alt="Brand Partnership Package"
                        className="w-40 h-40 object-cover drop-shadow-2xl rounded-lg"
                      />
                    </motion.div>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-oswald font-medium mb-2 group-hover:text-fiery transition-colors duration-300 tracking-wide uppercase">
                    {pkg.name}
                  </h3>
                  <motion.div 
                    className="text-lg font-jetbrains-mono font-light mb-2 text-white/70"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Contact for pricing
                  </motion.div>
                  <p className="text-sm opacity-70 font-jetbrains-mono">{pkg.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 relative z-10 flex-1">
                {pkg.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                  >
                    <motion.span 
                      className="text-fiery mr-3 mt-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      •
                    </motion.span>
                    <span className="text-sm font-jetbrains-mono">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Link href="/contact">
                <motion.button 
                  className={`w-full py-3 font-oswald font-medium text-sm uppercase tracking-widest transition-all duration-300 relative z-10 mt-auto ${
                    pkg.popular
                      ? 'bg-fiery hover:bg-fiery/90 text-white'
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}