import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoLoader() {
  const [animationPhase, setAnimationPhase] = useState<'reveal' | 'scale' | 'shake' | 'complete'>('reveal');

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase('scale'), 1200);
    const timer2 = setTimeout(() => setAnimationPhase('shake'), 2000);
    const timer3 = setTimeout(() => setAnimationPhase('complete'), 2800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
    >
      {/* Animated Background Stripes */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #F24005 2px, #F24005 4px)',
        }}
        animate={{
          backgroundPosition: animationPhase === 'reveal' ? ['0px 0px', '40px 40px'] : ['40px 40px', '40px 40px']
        }}
        transition={{
          duration: 1.2,
          ease: "linear",
          repeat: animationPhase === 'reveal' ? Infinity : 0
        }}
      />

      {/* Main Logo Container */}
      <motion.div
        className="relative z-20 flex items-center justify-center"
        initial={{ 
          opacity: 0,
          scale: 0.3,
          rotateX: 90
        }}
        animate={{ 
          opacity: animationPhase === 'reveal' ? [0, 0.7, 1] : 1,
          scale: animationPhase === 'reveal' 
            ? [0.3, 0.8, 1] 
            : animationPhase === 'scale' 
            ? [1, 1.15, 1] 
            : animationPhase === 'shake'
            ? [1, 1.02, 0.98, 1.01, 0.99, 1]
            : 1,
          rotateX: animationPhase === 'reveal' ? [90, 45, 0] : 0,
          x: animationPhase === 'shake' ? [0, -2, 2, -1, 1, 0] : 0,
          y: animationPhase === 'shake' ? [0, -1, 1, -0.5, 0.5, 0] : 0
        }}
        transition={{ 
          duration: animationPhase === 'reveal' 
            ? 1.2 
            : animationPhase === 'scale' 
            ? 0.8 
            : animationPhase === 'shake'
            ? 0.8
            : 0.5,
          ease: animationPhase === 'reveal' 
            ? "easeOut" 
            : animationPhase === 'scale'
            ? "easeInOut"
            : "easeInOut"
        }}
      >
        {/* Logo Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(242, 64, 5, 0.4) 0%, transparent 70%)'
          }}
          animate={{
            scale: animationPhase === 'scale' ? [1, 1.3, 1] : 1,
            opacity: animationPhase === 'reveal' ? [0, 0.5, 0.8] : animationPhase === 'scale' ? [0.8, 1, 0.8] : 0.8
          }}
          transition={{
            duration: animationPhase === 'scale' ? 0.8 : 1.2,
            ease: "easeInOut"
          }}
        />

        {/* Main Logo */}
        <img 
          src="/Layer 25@4x_1749161317114.png" 
          alt="Entaview" 
          className="h-32 sm:h-40 md:h-56 lg:h-72 w-auto max-w-[90vw] object-contain relative z-10"
        />

        {/* Scanline Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(transparent 50%, rgba(242, 64, 5, 0.1) 50%)',
            backgroundSize: '100% 4px'
          }}
          animate={{
            y: animationPhase === 'reveal' ? ['-100%', '100%'] : '100%',
            opacity: animationPhase === 'reveal' ? [0.8, 0.8, 0] : 0
          }}
          transition={{
            duration: 1.2,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Corner Brackets Animation */}
      <motion.div
        className="absolute inset-8 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: animationPhase === 'scale' || animationPhase === 'shake' || animationPhase === 'complete' ? 1 : 0 
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Top Left */}
        <motion.div
          className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-fiery"
          initial={{ scale: 0, rotate: 45 }}
          animate={{ 
            scale: animationPhase === 'scale' || animationPhase === 'shake' || animationPhase === 'complete' ? 1 : 0,
            rotate: 0
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        {/* Top Right */}
        <motion.div
          className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-fiery"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ 
            scale: animationPhase === 'scale' || animationPhase === 'shake' || animationPhase === 'complete' ? 1 : 0,
            rotate: 0
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        {/* Bottom Left */}
        <motion.div
          className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-fiery"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ 
            scale: animationPhase === 'scale' || animationPhase === 'shake' || animationPhase === 'complete' ? 1 : 0,
            rotate: 0
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-fiery"
          initial={{ scale: 0, rotate: 45 }}
          animate={{ 
            scale: animationPhase === 'scale' || animationPhase === 'shake' || animationPhase === 'complete' ? 1 : 0,
            rotate: 0
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
