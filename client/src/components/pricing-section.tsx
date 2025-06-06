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
                <div className="flex items-center justify-center h-48 perspective-1000">
                  {pkg.name === "Essential" && (
                    <div className="relative transform-gpu preserve-3d group-hover:scale-105 transition-transform duration-700">
                      {/* Single Course Box - Foundations */}
                      <div className="relative w-24 h-32 transform rotate-y-20 rotate-x-5">
                        {/* Box depth/side */}
                        <div className="absolute top-0 left-0 w-2 h-32 bg-gradient-to-b from-gray-800 to-gray-900 transform skew-y-12 origin-bottom"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-2 bg-gradient-to-r from-gray-700 to-gray-800 transform skew-x-12"></div>
                        
                        {/* Main box face */}
                        <div className="relative w-24 h-32 bg-gradient-to-br from-gray-900 to-black rounded-sm shadow-2xl border border-gray-700">
                          {/* Orange accent stripe */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-fiery"></div>
                          
                          {/* Course content */}
                          <div className="p-2 h-full flex flex-col">
                            {/* Top section with person image placeholder */}
                            <div className="h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-sm mb-1 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-1 left-1 w-4 h-4 bg-white rounded-full opacity-80"></div>
                            </div>
                            
                            {/* Title area */}
                            <div className="flex-1 flex flex-col justify-end">
                              <div className="text-xs font-bold text-white mb-1 leading-tight">
                                FOUNDATIONS
                              </div>
                              <div className="text-[8px] text-gray-300 leading-tight">
                                Film Production Basics
                              </div>
                            </div>
                          </div>
                          
                          {/* Entaview branding */}
                          <div className="absolute bottom-1 right-1 text-[6px] text-fiery font-bold">
                            ENTAVIEW
                          </div>
                        </div>
                        
                        {/* Realistic shadow */}
                        <div className="absolute -bottom-1 -right-1 w-24 h-32 bg-black/40 rounded-sm -z-10 blur-sm transform translate-x-1 translate-y-1"></div>
                      </div>
                    </div>
                  )}
                  
                  {pkg.name === "Professional" && (
                    <div className="relative transform-gpu preserve-3d group-hover:scale-105 transition-transform duration-700">
                      {/* Multiple Course Boxes Bundle */}
                      <div className="relative flex items-end space-x-1">
                        {/* Background boxes */}
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`relative w-5 h-${24 + i * 2} transform rotate-y-${10 + i * 5} ${i === 2 ? 'z-10' : 'z-0'}`}>
                            <div className={`w-5 h-${24 + i * 2} bg-gradient-to-br ${
                              i === 0 ? 'from-blue-800 to-blue-900' :
                              i === 1 ? 'from-green-800 to-green-900' :
                              i === 2 ? 'from-gray-900 to-black' :
                              i === 3 ? 'from-purple-800 to-purple-900' :
                              'from-red-800 to-red-900'
                            } rounded-sm shadow-lg border border-gray-600`}>
                              {/* Top accent */}
                              <div className={`h-0.5 w-full ${
                                i === 0 ? 'bg-blue-400' :
                                i === 1 ? 'bg-green-400' :
                                i === 2 ? 'bg-fiery' :
                                i === 3 ? 'bg-purple-400' :
                                'bg-red-400'
                              }`}></div>
                              
                              {/* Course image area */}
                              <div className="h-3 bg-gradient-to-br from-gray-600 to-gray-700 m-0.5 rounded-[1px]"></div>
                              
                              {/* Title area */}
                              <div className="px-0.5 mt-1">
                                <div className="text-[4px] text-white font-bold leading-none">
                                  {i === 0 ? 'BASICS' :
                                   i === 1 ? 'CAMERA' :
                                   i === 2 ? 'DIRECTION' :
                                   i === 3 ? 'EDITING' :
                                   'POST'}
                                </div>
                              </div>
                            </div>
                            
                            {/* Individual shadows */}
                            <div className={`absolute -bottom-0.5 -right-0.5 w-5 h-${24 + i * 2} bg-black/30 rounded-sm -z-10 blur-[1px]`}></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Main shadow for entire bundle */}
                      <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-black/25 rounded-lg -z-20 blur-md"></div>
                    </div>
                  )}
                  
                  {pkg.name === "Premium" && (
                    <div className="relative transform-gpu preserve-3d group-hover:scale-105 transition-transform duration-700">
                      {/* Single Premium Course Box */}
                      <div className="relative w-28 h-36 transform rotate-y-15 rotate-x-3">
                        {/* Box depth/sides */}
                        <div className="absolute top-0 left-0 w-2 h-36 bg-gradient-to-b from-gray-800 to-gray-900 transform skew-y-12 origin-bottom"></div>
                        <div className="absolute bottom-0 left-0 w-28 h-2 bg-gradient-to-r from-gray-700 to-gray-800 transform skew-x-12"></div>
                        
                        {/* Main premium box */}
                        <div className="relative w-28 h-36 bg-gradient-to-br from-gray-900 to-black rounded-sm shadow-2xl border border-gray-600">
                          {/* Premium orange header */}
                          <div className="h-2 bg-gradient-to-r from-orange-500 to-fiery flex items-center justify-center">
                            <div className="text-[6px] text-white font-bold">PREMIUM</div>
                          </div>
                          
                          {/* Main course image area */}
                          <div className="h-20 bg-gradient-to-br from-gray-600 to-gray-700 m-1 rounded-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            {/* Person silhouette */}
                            <div className="absolute bottom-2 left-2 w-6 h-6 bg-white rounded-full opacity-90"></div>
                            <div className="absolute bottom-1 right-1 text-[6px] text-white font-bold">4K</div>
                          </div>
                          
                          {/* Course info section */}
                          <div className="p-1 space-y-1">
                            <div className="text-xs font-bold text-white leading-tight">
                              CINEMA MASTERY
                            </div>
                            <div className="text-[8px] text-gray-300 leading-tight">
                              Professional Film Production
                            </div>
                            
                            {/* Feature indicators */}
                            <div className="flex justify-between items-center mt-2">
                              <div className="flex space-x-1">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="w-1 h-1 bg-fiery rounded-full"></div>
                                ))}
                              </div>
                              <div className="text-[6px] text-fiery font-bold">12 HOURS</div>
                            </div>
                          </div>
                          
                          {/* Entaview premium branding */}
                          <div className="absolute bottom-1 right-1 text-[6px] text-fiery font-bold">
                            ENTAVIEW PRO
                          </div>
                        </div>
                        
                        {/* Premium shadow */}
                        <div className="absolute -bottom-2 -right-2 w-28 h-36 bg-black/50 rounded-sm -z-10 blur-sm transform translate-x-2 translate-y-2"></div>
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