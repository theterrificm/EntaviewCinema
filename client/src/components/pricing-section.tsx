import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleBookCall = () => {
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  const packages = [
    {
      name: "Starter",
      price: "From $15k",
      description: "Perfect for emerging brands",
      features: [
        "30-60 second commercial",
        "Single location shoot",
        "Basic post-production",
        "2 rounds of revisions",
        "HD delivery"
      ]
    },
    {
      name: "Professional",
      price: "From $35k",
      description: "For established businesses",
      features: [
        "60-120 second film",
        "Multiple locations",
        "Advanced cinematography",
        "Color grading & sound design",
        "4K delivery",
        "Social media versions"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "From $75k",
      description: "For global campaigns",
      features: [
        "Feature-length content",
        "International shoots",
        "Celebrity talent",
        "Full production crew",
        "Cinema-grade equipment",
        "Global distribution strategy"
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
          <h2 className="text-5xl md:text-7xl font-bebas font-normal mb-6 leading-[0.9] tracking-wide uppercase">
            Investment Options
          </h2>
          <p className="text-xl font-jetbrains-mono font-light opacity-70 max-w-2xl mx-auto">
            Choose the package that matches your vision and budget. All packages include our signature cinematic approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-lg border overflow-hidden group cursor-pointer ${
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
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fiery text-white px-6 py-2 text-sm font-oswald font-medium rounded-full z-20 shadow-lg border-2 border-white tracking-wider uppercase"
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -2, 0] 
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.3 },
                    scale: { duration: 0.5, delay: 0.3 },
                    y: { duration: 2, repeat: Infinity, delay: 0.8 }
                  }}
                >
                  Most Popular
                </motion.div>
              )}
              
              {/* 3D Package Graphics Section */}
              <div className="mb-8 relative z-10">
                <div className="flex items-center justify-center h-40 perspective-1000">
                  {pkg.name === "Essential" && (
                    <div className="relative transform-gpu preserve-3d group-hover:rotate-y-12 transition-transform duration-700">
                      {/* Single Book Package */}
                      <div className="relative w-32 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-r-lg shadow-2xl transform rotate-y-15">
                        {/* Book spine */}
                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-l-sm"></div>
                        {/* Book cover */}
                        <div className="absolute inset-0 bg-white rounded-r-lg border border-gray-200 flex flex-col justify-center items-center p-4">
                          <div className="w-8 h-8 bg-onyx rounded-full mb-2 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 2v-7l-4 2z"/>
                            </svg>
                          </div>
                          <div className="text-xs font-bold text-onyx text-center leading-tight">
                            ESSENTIAL<br/>GUIDE
                          </div>
                        </div>
                        {/* Shadow */}
                        <div className="absolute -bottom-2 -right-2 w-32 h-40 bg-black/20 rounded-r-lg -z-10 blur-sm"></div>
                      </div>
                    </div>
                  )}
                  {pkg.name === "Professional" && (
                    <div className="relative transform-gpu preserve-3d group-hover:rotate-y-12 transition-transform duration-700">
                      {/* Multiple Books Bundle */}
                      <div className="relative">
                        {/* Background books */}
                        <div className="absolute w-28 h-36 bg-gradient-to-br from-orange-400 to-orange-500 rounded-r-lg shadow-xl transform rotate-y-10 translate-x-2 translate-y-1">
                          <div className="absolute left-0 top-0 w-2 h-full bg-orange-600 rounded-l-sm"></div>
                        </div>
                        <div className="absolute w-30 h-38 bg-gradient-to-br from-gray-700 to-gray-800 rounded-r-lg shadow-xl transform rotate-y-8 translate-x-1 translate-y-0.5">
                          <div className="absolute left-0 top-0 w-2 h-full bg-gray-900 rounded-l-sm"></div>
                        </div>
                        {/* Front book */}
                        <div className="relative w-32 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-r-lg shadow-2xl transform rotate-y-15">
                          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-l-sm"></div>
                          <div className="absolute inset-0 bg-white rounded-r-lg border border-gray-200 flex flex-col justify-center items-center p-4">
                            <div className="w-10 h-10 bg-onyx rounded-lg mb-2 flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <div className="text-xs font-bold text-onyx text-center leading-tight">
                              PRO<br/>BUNDLE
                            </div>
                          </div>
                        </div>
                        {/* Bundle shadow */}
                        <div className="absolute -bottom-3 -right-3 w-36 h-42 bg-black/25 rounded-r-lg -z-10 blur-md"></div>
                      </div>
                    </div>
                  )}
                  {pkg.name === "Premium" && (
                    <div className="relative transform-gpu preserve-3d group-hover:rotate-y-12 transition-transform duration-700">
                      {/* Luxury Box Set */}
                      <div className="relative">
                        {/* Box container */}
                        <div className="relative w-36 h-44 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-2xl transform rotate-y-10">
                          {/* Box lid */}
                          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-lg border-b border-gray-700"></div>
                          {/* Box front */}
                          <div className="absolute inset-x-0 top-8 bottom-0 bg-gradient-to-b from-gray-100 to-white rounded-b-lg p-4 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-fiery to-orange-600 rounded-xl mb-2 flex items-center justify-center shadow-lg">
                              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <div className="text-xs font-bold text-onyx text-center leading-tight">
                              PREMIUM<br/>COLLECTION
                            </div>
                            <div className="mt-2 flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-1 h-4 bg-gradient-to-t from-gray-400 to-gray-300 rounded-full"></div>
                              ))}
                            </div>
                          </div>
                          {/* Premium accent */}
                          <div className="absolute top-4 right-2 w-2 h-16 bg-gradient-to-b from-fiery to-orange-600 rounded-full"></div>
                        </div>
                        {/* Luxury shadow */}
                        <div className="absolute -bottom-4 -right-4 w-36 h-44 bg-black/30 rounded-lg -z-10 blur-lg"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-helvetica font-normal mb-2 group-hover:text-fiery transition-colors duration-300">
                    {pkg.name}
                  </h3>
                  <motion.div 
                    className="text-4xl font-helvetica font-light mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {pkg.price}
                  </motion.div>
                  <p className="text-sm opacity-70 font-helvetica font-light">{pkg.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 relative z-10">
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
                    <span className="text-sm font-helvetica font-light">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                onClick={handleBookCall}
                className={`w-full py-3 font-oswald font-medium text-sm uppercase tracking-widest transition-all duration-300 relative z-10 ${
                  pkg.popular
                    ? 'bg-fiery hover:bg-fiery/90 text-white'
                    : 'border border-white/30 text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}