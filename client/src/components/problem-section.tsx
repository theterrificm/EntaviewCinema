import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-stone text-onyx relative overflow-hidden" ref={ref}>
      {/* Enhanced animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-0 w-40 h-40 bg-fiery/20 rounded-full blur-2xl"
        animate={{ 
          scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
          opacity: isHovered ? [0.2, 0.4, 0.2] : [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-0 w-32 h-32 border-2 border-fiery/30 rotate-12"
        animate={{ rotate: isHovered ? [12, 45, 12] : [12, 24, 12] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-fiery/10 rounded-full blur-xl"
        animate={{ y: isHovered ? [-10, 10, -10] : [-5, 5, -5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      ></motion.div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center relative group cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background image with overlay effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-fiery/10 via-transparent to-fiery/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
          ></motion.div>
          
          {/* Animated border effect */}
          <motion.div 
            className="absolute inset-0 border-2 border-fiery/0 rounded-2xl group-hover:border-fiery/30 transition-all duration-500"
            whileHover={{ 
              boxShadow: "0 0 30px rgba(242, 64, 5, 0.3)"
            }}
          ></motion.div>
          
          <div className="relative z-10 p-8">
            <motion.h2 
              className="text-5xl md:text-7xl font-league-spartan font-bold mb-8 leading-tight group-hover:text-fiery transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              Most content gets ignored.
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl font-helvetica font-light opacity-80 max-w-3xl mx-auto leading-relaxed group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              You're creating content, but it doesn't connect. Your brand deserves more than just views — it deserves impact.
            </motion.p>
            
            {/* Animated text overlay on hover */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-fiery/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            >
              <div className="text-center text-white">
                <motion.h3 
                  className="text-3xl md:text-4xl font-league-spartan font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Break Through the Noise
                </motion.h3>
                <motion.p 
                  className="text-lg font-helvetica font-light"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Stand out with content that commands attention
                </motion.p>
              </div>
            </motion.div>
          </div>
          
          {/* Floating particles effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-fiery/40 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: isHovered ? [-10, -20, -10] : [0],
                opacity: isHovered ? [0, 1, 0] : [0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}