import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { usePackageImages } from "@/hooks/use-package-images";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { images, isLoading, error, generateImages } = usePackageImages();

  const handleBookCall = () => {
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  const packages = [
    {
      name: "Essential",
      price: "From $15k",
      description: "Perfect for emerging brands",
      packageType: "essential" as const,
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
      packageType: "professional" as const,
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
      packageType: "premium" as const,
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
              
              {/* 3D Course Package Graphics Section */}
              <div className="mb-8 relative z-10">
                <div className="flex items-center justify-center h-48 perspective-1000">
                  {pkg.name === "Essential" && (
                    <div className="relative transform-gpu preserve-3d group-hover:rotate-y-6 transition-transform duration-700">
                      {/* Single Course Box - matching reference composition */}
                      <div className="relative w-32 h-44 transform rotate-y-20 rotate-x-8">
                        {/* Box depth/side shadows */}
                        <div className="absolute top-0 left-0 w-3 h-44 bg-gradient-to-b from-gray-700 to-gray-900 transform skew-y-6 origin-bottom -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-3 bg-gradient-to-r from-gray-600 to-gray-800 transform skew-x-6 -z-10"></div>
                        
                        {/* Main box face */}
                        <div className="relative w-32 h-44 bg-gradient-to-br from-gray-900 to-black rounded-sm shadow-2xl border border-gray-600 overflow-hidden">
                          {/* Orange accent top */}
                          <div className="h-2 bg-gradient-to-r from-orange-500 to-fiery"></div>
                          
                          {/* Main course image showing successful video production */}
                          <div className="h-28 bg-gradient-to-br from-blue-900 to-blue-800 m-1 rounded-sm relative overflow-hidden">
                            {/* Happy film crew scene */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-2 left-2 w-6 h-6 bg-white rounded-full opacity-90 flex items-center justify-center">
                              <span className="text-xs">😊</span>
                            </div>
                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-orange-500 rounded-sm"></div>
                            <div className="absolute top-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="absolute top-2 right-2 text-[8px] text-white font-bold">4K</div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold opacity-80">📹</div>
                          </div>
                          
                          {/* Course info */}
                          <div className="p-2">
                            <div className="text-sm font-bold text-white mb-1 leading-tight">
                              FOUNDATIONS
                            </div>
                            <div className="text-[10px] text-gray-300 leading-tight mb-2">
                              Film Production Success
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-[8px] text-fiery font-bold">ENTAVIEW</div>
                              <div className="text-[8px] text-green-400">✓ PROVEN</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Realistic shadow */}
                        <div className="absolute -bottom-2 -right-3 w-32 h-44 bg-black/30 rounded-sm -z-20 blur-sm"></div>
                      </div>
                    </div>
                  )}
                  
                  {pkg.name === "Professional" && (
                    <div className="relative transform-gpu preserve-3d group-hover:rotate-y-6 transition-transform duration-700">
                      {/* Multiple Course Boxes Bundle - matching reference */}
                      <div className="relative flex items-end space-x-1">
                        {/* 5 course boxes arranged like reference image */}
                        {[...Array(5)].map((_, i) => {
                          const heights = [36, 40, 44, 40, 36]; // Varied heights like reference
                          const colors = [
                            'from-blue-800 to-blue-900',
                            'from-green-800 to-green-900', 
                            'from-orange-800 to-orange-900',
                            'from-purple-800 to-purple-900',
                            'from-red-800 to-red-900'
                          ];
                          const accents = ['bg-blue-400', 'bg-green-400', 'bg-orange-400', 'bg-purple-400', 'bg-red-400'];
                          const titles = ['BASICS', 'CAMERA', 'DIRECT', 'EDIT', 'POST'];
                          
                          return (
                            <div key={i} className={`relative w-6 transform rotate-y-${5 + i * 3} ${i === 2 ? 'z-10' : 'z-0'}`} style={{height: `${heights[i]}px`}}>
                              <div className={`w-6 bg-gradient-to-br ${colors[i]} rounded-sm shadow-lg border border-gray-600 overflow-hidden`} style={{height: `${heights[i]}px`}}>
                                {/* Top accent */}
                                <div className={`h-1 w-full ${accents[i]}`}></div>
                                
                                {/* Course success image */}
                                <div className="h-4 bg-gradient-to-br from-gray-600 to-gray-700 m-0.5 rounded-[1px] relative">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                  </div>
                                </div>
                                
                                {/* Title and success indicator */}
                                <div className="px-0.5 space-y-1">
                                  <div className="text-[6px] text-white font-bold leading-none">
                                    {titles[i]}
                                  </div>
                                  <div className="text-[4px] text-green-400 leading-none">
                                    ✓ SUCCESS
                                  </div>
                                </div>
                              </div>
                              
                              {/* Individual shadow */}
                              <div className={`absolute -bottom-1 -right-1 w-6 bg-black/25 rounded-sm -z-10 blur-[1px]`} style={{height: `${heights[i]}px`}}></div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Bundle shadow */}
                      <div className="absolute -bottom-3 -right-4 w-36 h-48 bg-black/20 rounded-lg -z-20 blur-md"></div>
                    </div>
                  )}
                  
                  {pkg.name === "Premium" && (
                    <div className="relative transform-gpu preserve-3d group-hover:rotate-y-6 transition-transform duration-700">
                      {/* Single Premium Box - matching reference style */}
                      <div className="relative w-36 h-48 transform rotate-y-15 rotate-x-8">
                        {/* Box depth/sides */}
                        <div className="absolute top-0 left-0 w-4 h-48 bg-gradient-to-b from-gray-700 to-gray-900 transform skew-y-6 origin-bottom -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-36 h-4 bg-gradient-to-r from-gray-600 to-gray-800 transform skew-x-6 -z-10"></div>
                        
                        {/* Main premium box */}
                        <div className="relative w-36 h-48 bg-gradient-to-br from-gray-900 to-black rounded-sm shadow-2xl border border-gray-600 overflow-hidden">
                          {/* Premium orange header */}
                          <div className="h-3 bg-gradient-to-r from-orange-500 to-fiery flex items-center justify-center">
                            <div className="text-[8px] text-white font-bold">PREMIUM COLLECTION</div>
                          </div>
                          
                          {/* Main success story image */}
                          <div className="h-32 bg-gradient-to-br from-purple-900 to-purple-800 m-1 rounded-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            
                            {/* Celebrating film crew elements */}
                            <div className="absolute bottom-3 left-3 w-8 h-8 bg-white rounded-full opacity-90 flex items-center justify-center">
                              <span className="text-sm">🎬</span>
                            </div>
                            <div className="absolute bottom-3 right-3 w-6 h-6 bg-yellow-400 rounded-full opacity-90 flex items-center justify-center">
                              <span className="text-xs">⭐</span>
                            </div>
                            <div className="absolute top-2 left-2 text-[8px] text-green-400 font-bold">LIVE</div>
                            <div className="absolute top-2 right-2 text-[8px] text-white font-bold">8K</div>
                            
                            {/* Success indicators */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg opacity-80">🏆</div>
                          </div>
                          
                          {/* Premium course info */}
                          <div className="p-2 space-y-1">
                            <div className="text-sm font-bold text-white leading-tight">
                              CINEMA MASTERY
                            </div>
                            <div className="text-[10px] text-gray-300 leading-tight">
                              Award-Winning Productions
                            </div>
                            
                            {/* Premium features */}
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="w-1 h-1 bg-fiery rounded-full"></div>
                                ))}
                              </div>
                              <div className="text-[8px] text-fiery font-bold">24 HOURS</div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="text-[8px] text-fiery font-bold">ENTAVIEW PRO</div>
                              <div className="text-[8px] text-green-400">✓ GUARANTEED</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Premium shadow */}
                        <div className="absolute -bottom-3 -right-4 w-36 h-48 bg-black/40 rounded-sm -z-20 blur-md"></div>
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