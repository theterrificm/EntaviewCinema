import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Phase = 'noise' | 'glitch1' | 'digital' | 'glitch2' | 'stabilize' | 'enhance' | 'complete';

export default function LogoLoader() {
  const [phase, setPhase] = useState<Phase>('noise');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('glitch1'), 1200);
    const timer2 = setTimeout(() => setPhase('digital'), 2400);
    const timer3 = setTimeout(() => setPhase('glitch2'), 3600);
    const timer4 = setTimeout(() => setPhase('stabilize'), 4800);
    const timer5 = setTimeout(() => setPhase('enhance'), 6000);
    const timer6 = setTimeout(() => setPhase('complete'), 7200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  const isGlitching = phase === 'glitch1' || phase === 'glitch2';
  const isVisible = phase !== 'noise';

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 7.5 }}
    >
      {/* Heavy Static Noise Background */}
      <AnimatePresence>
        {phase === 'noise' && (
          <motion.div
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="tv-static absolute inset-0 opacity-60" />
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.08) 1px, rgba(255,255,255,0.08) 2px)',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '0px 40px', '0px 0px']
              }}
              transition={{
                duration: 0.05,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Container with Advanced Glitch Effects */}
      <motion.div className="relative z-20">
        {/* Main Logo with Complex Glitch Animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Glitch Layer 1 - Red Channel */}
          <motion.img 
            src="/Layer 25@4x_1749161317114.png" 
            alt="" 
            className="absolute h-32 sm:h-40 md:h-56 lg:h-72 w-auto max-w-[90vw] object-contain"
            style={{
              filter: 'sepia(1) hue-rotate(315deg) saturate(3)',
              mixBlendMode: 'screen'
            }}
            animate={{
              x: isGlitching ? [0, -8, 12, -4, 8, -12, 4, 0] : 0,
              opacity: isGlitching ? 0.7 : 0,
              scaleX: isGlitching ? [1, 1.02, 0.98, 1.01, 0.99, 1.03, 0.97, 1] : 1
            }}
            transition={{
              duration: 1.2,
              repeat: isGlitching ? 3 : 0,
              ease: "easeInOut"
            }}
          />

          {/* Glitch Layer 2 - Blue Channel */}
          <motion.img 
            src="/Layer 25@4x_1749161317114.png" 
            alt="" 
            className="absolute h-32 sm:h-40 md:h-56 lg:h-72 w-auto max-w-[90vw] object-contain"
            style={{
              filter: 'sepia(1) hue-rotate(180deg) saturate(3)',
              mixBlendMode: 'screen'
            }}
            animate={{
              x: isGlitching ? [0, 6, -10, 8, -6, 10, -8, 0] : 0,
              opacity: isGlitching ? 0.6 : 0,
              scaleY: isGlitching ? [1, 0.98, 1.02, 0.99, 1.01, 0.97, 1.03, 1] : 1
            }}
            transition={{
              duration: 1.2,
              repeat: isGlitching ? 3 : 0,
              ease: "easeInOut",
              delay: 0.1
            }}
          />

          {/* Main Logo - Clean */}
          <motion.img 
            src="/Layer 25@4x_1749161317114.png" 
            alt="Entaview" 
            className="relative h-32 sm:h-40 md:h-56 lg:h-72 w-auto max-w-[90vw] object-contain z-10"
            animate={{
              filter: phase === 'noise' 
                ? "brightness(0) contrast(0) blur(20px)"
                : phase === 'glitch1'
                ? ["brightness(0) contrast(0)", "brightness(0.2) contrast(2) saturate(2)", "brightness(1.5) contrast(1.5)", "brightness(1) contrast(1)"]
                : phase === 'digital'
                ? ["brightness(1) contrast(1)", "brightness(1.2) contrast(1.3) hue-rotate(10deg)", "brightness(1) contrast(1)"]
                : phase === 'glitch2'
                ? ["brightness(1) contrast(1)", "brightness(0.3) contrast(3) saturate(0)", "brightness(1.8) contrast(1.2)", "brightness(1) contrast(1)"]
                : phase === 'stabilize'
                ? ["brightness(1) contrast(1)", "brightness(1.1) contrast(1.1)", "brightness(1) contrast(1)"]
                : phase === 'enhance'
                ? ["brightness(1) contrast(1)", "brightness(1.3) contrast(1.2) saturate(1.1)", "brightness(1) contrast(1)"]
                : "brightness(1) contrast(1)",
              scale: isGlitching
                ? [1, 1.02, 0.98, 1.01, 0.99, 1]
                : phase === 'digital'
                ? [1, 1.05, 1]
                : phase === 'enhance'
                ? [1, 1.03, 1]
                : 1,
              y: isGlitching ? [0, -2, 4, -1, 2, 0] : 0
            }}
            transition={{
              duration: 1.2,
              repeat: isGlitching ? 3 : phase === 'digital' ? 2 : phase === 'enhance' ? 1 : 0,
              ease: "easeInOut"
            }}
          />

          {/* Digital Scan Lines */}
          <AnimatePresence>
            {phase === 'digital' && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-[2px] bg-fiery/30"
                    style={{ top: `${i * 5}%` }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleX: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.1,
                      delay: i * 0.02,
                      repeat: 10,
                      ease: "linear"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Data Stream Effect */}
          <AnimatePresence>
            {(phase === 'digital' || phase === 'stabilize') && (
              <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-fiery font-mono text-xs opacity-50"
                    style={{
                      left: `${10 + i * 10}%`,
                      fontSize: '8px'
                    }}
                    animate={{
                      y: ['-20px', '120vh'],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {['01001', '11010', '00110', '10101', '01011'][i % 5]}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Targeting System */}
        <AnimatePresence>
          {(phase === 'enhance' || phase === 'complete') && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Advanced Corner Brackets */}
              {[
                { position: "top-0 left-0", border: "border-l-4 border-t-4", rotation: 0 },
                { position: "top-0 right-0", border: "border-r-4 border-t-4", rotation: 90 },
                { position: "bottom-0 left-0", border: "border-l-4 border-b-4", rotation: -90 },
                { position: "bottom-0 right-0", border: "border-r-4 border-b-4", rotation: 180 }
              ].map((corner, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${corner.position} w-20 h-20 ${corner.border} border-fiery`}
                  style={{
                    boxShadow: '0 0 20px #F24005, inset 0 0 20px rgba(242, 64, 5, 0.2)'
                  }}
                  initial={{ 
                    scale: 0,
                    rotate: corner.rotation + 45
                  }}
                  animate={{ 
                    scale: [0, 1.2, 1],
                    rotate: corner.rotation,
                    opacity: [0, 1, 0.8]
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Center Crosshair with Pulse */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.3, 1], 
                  opacity: [0, 1, 0.9] 
                }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div 
                  className="w-12 h-[2px] bg-fiery shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2"
                  animate={{ 
                    boxShadow: ['0 0 5px #F24005', '0 0 20px #F24005', '0 0 5px #F24005'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-[2px] h-12 bg-fiery shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2"
                  animate={{ 
                    boxShadow: ['0 0 5px #F24005', '0 0 20px #F24005', '0 0 5px #F24005'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
