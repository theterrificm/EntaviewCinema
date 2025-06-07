import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoLoader() {
  const [glitchPhase, setGlitchPhase] = useState<'intro' | 'stable' | 'outro'>('intro');

  useEffect(() => {
    const timer1 = setTimeout(() => setGlitchPhase('stable'), 1500);
    const timer2 = setTimeout(() => setGlitchPhase('outro'), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-onyx flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [0.8, 1.1, 1],
          filter: glitchPhase === 'intro' 
            ? [
                "hue-rotate(0deg) saturate(1) contrast(1)",
                "hue-rotate(90deg) saturate(2) contrast(1.5)",
                "hue-rotate(180deg) saturate(0.5) contrast(2)",
                "hue-rotate(270deg) saturate(1.5) contrast(1.2)",
                "hue-rotate(360deg) saturate(1) contrast(1)"
              ]
            : glitchPhase === 'outro'
            ? [
                "hue-rotate(0deg) saturate(1) contrast(1)",
                "hue-rotate(-45deg) saturate(3) contrast(3)",
                "hue-rotate(45deg) saturate(0) contrast(0.5)",
                "hue-rotate(-90deg) saturate(2) contrast(2.5)",
                "hue-rotate(0deg) saturate(1) contrast(1)"
              ]
            : "hue-rotate(0deg) saturate(1) contrast(1)"
        }}
        transition={{ 
          duration: glitchPhase === 'intro' ? 1.5 : glitchPhase === 'outro' ? 1 : 3.5,
          times: glitchPhase === 'stable' ? [0, 0.4, 1] : [0, 0.2, 0.4, 0.7, 1],
          ease: glitchPhase === 'stable' ? "easeInOut" : "linear"
        }}
        className={`flex items-center justify-center relative ${
          glitchPhase === 'intro' ? 'glitch-intro' : 
          glitchPhase === 'outro' ? 'glitch-outro' : ''
        }`}
      >
        <img 
          src="/Layer 25@4x_1749161317114.png" 
          alt="Entaview" 
          className="h-48 md:h-72 lg:h-96 w-auto max-w-screen-md object-contain relative z-10"
        />
        
        {/* Digital glitch overlay effects */}
        {glitchPhase === 'intro' && (
          <>
            <motion.div 
              className="absolute inset-0 bg-fiery mix-blend-screen opacity-20"
              animate={{
                x: [0, -2, 2, -1, 1, 0],
                y: [0, 1, -1, 2, -2, 0],
                opacity: [0, 0.3, 0.1, 0.4, 0.2, 0]
              }}
              transition={{ duration: 1.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
            />
            <motion.div 
              className="absolute inset-0 bg-cyan-400 mix-blend-multiply opacity-10"
              animate={{
                x: [0, 3, -2, 1, -3, 0],
                scaleX: [1, 1.02, 0.98, 1.01, 0.99, 1]
              }}
              transition={{ duration: 1.5, times: [0, 0.25, 0.5, 0.75, 1, 1] }}
            />
          </>
        )}
        
        {glitchPhase === 'outro' && (
          <>
            <motion.div 
              className="absolute inset-0 bg-red-500 mix-blend-difference opacity-30"
              animate={{
                x: [0, -5, 3, -2, 4, 0],
                y: [0, 2, -3, 1, -1, 0],
                scaleY: [1, 0.95, 1.05, 0.98, 1.02, 1]
              }}
              transition={{ duration: 1, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
            />
            <motion.div 
              className="absolute inset-0 bg-green-400 mix-blend-overlay opacity-20"
              animate={{
                x: [0, 4, -3, 5, -1, 0],
                scaleX: [1, 0.97, 1.03, 0.96, 1.04, 1]
              }}
              transition={{ duration: 1, times: [0, 0.15, 0.35, 0.65, 0.85, 1] }}
            />
          </>
        )}
      </motion.div>

      <style jsx>{`
        .glitch-intro {
          animation: glitch-intro 1.5s linear;
        }
        
        .glitch-outro {
          animation: glitch-outro 1s linear;
        }
        
        @keyframes glitch-intro {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, 1px); }
          20% { transform: translate(1px, -1px); }
          30% { transform: translate(-1px, 2px); }
          40% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, -1px); }
          60% { transform: translate(1px, 1px); }
          70% { transform: translate(-1px, -2px); }
          80% { transform: translate(2px, 1px); }
          90% { transform: translate(-1px, -1px); }
        }
        
        @keyframes glitch-outro {
          0%, 100% { transform: translate(0); }
          5% { transform: translate(-3px, 2px); }
          15% { transform: translate(2px, -3px); }
          25% { transform: translate(-4px, 1px); }
          35% { transform: translate(3px, -2px); }
          45% { transform: translate(-2px, -3px); }
          55% { transform: translate(4px, 2px); }
          65% { transform: translate(-3px, -1px); }
          75% { transform: translate(2px, 3px); }
          85% { transform: translate(-1px, -2px); }
          95% { transform: translate(1px, 1px); }
        }
      `}</style>
    </motion.div>
  );
}
