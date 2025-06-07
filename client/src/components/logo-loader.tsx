import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoLoader() {
  const [tvPhase, setTvPhase] = useState<'static' | 'tuning' | 'clear' | 'fadeout'>('static');

  useEffect(() => {
    const timer1 = setTimeout(() => setTvPhase('tuning'), 800);
    const timer2 = setTimeout(() => setTvPhase('clear'), 1800);
    const timer3 = setTimeout(() => setTvPhase('fadeout'), 2800);
    
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
      <div className="relative flex items-center justify-center">
        {/* TV Static Background */}
        {tvPhase === 'static' && (
          <motion.div
            className="absolute inset-0 w-screen h-screen tv-static"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.8, 1, 0.6, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Tuning Effect */}
        {tvPhase === 'tuning' && (
          <>
            <motion.div
              className="absolute inset-0 w-screen h-screen tv-static"
              animate={{ 
                opacity: [1, 0.3, 0.8, 0.1, 0.5, 0],
                filter: ["blur(3px)", "blur(1px)", "blur(2px)", "blur(0.5px)", "blur(0px)"]
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"
              animate={{ 
                opacity: [0.8, 0.3, 0.6, 0.1, 0]
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </>
        )}

        {/* Logo */}
        <motion.div
          className="relative z-20"
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            filter: "blur(10px) brightness(0.3)"
          }}
          animate={{ 
            opacity: tvPhase === 'static' ? 0 : tvPhase === 'tuning' ? [0, 0.3, 0.7, 1] : 1,
            scale: tvPhase === 'static' ? 0.5 : tvPhase === 'tuning' ? [0.5, 0.8, 1.1, 1] : 1,
            filter: tvPhase === 'static' 
              ? "blur(10px) brightness(0.3)" 
              : tvPhase === 'tuning' 
              ? ["blur(8px) brightness(0.5)", "blur(3px) brightness(0.8)", "blur(1px) brightness(1)", "blur(0px) brightness(1)"]
              : "blur(0px) brightness(1)"
          }}
          transition={{ 
            duration: tvPhase === 'tuning' ? 1 : 0.5,
            ease: "easeOut"
          }}
        >
          <img 
            src="/Layer 25@4x_1749161317114.png" 
            alt="Entaview" 
            className="h-48 md:h-72 lg:h-96 w-auto max-w-screen-md object-contain"
          />
        </motion.div>

        {/* Fadeout Static */}
        {tvPhase === 'fadeout' && (
          <motion.div
            className="absolute inset-0 w-screen h-screen tv-static"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.7, 1],
              filter: ["blur(0px)", "blur(2px)", "blur(5px)", "blur(10px)"]
            }}
            transition={{ duration: 1, ease: "easeIn" }}
          />
        )}
      </div>
    </motion.div>
  );
}
