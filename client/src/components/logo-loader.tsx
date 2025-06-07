import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoLoader() {
  const [phase, setPhase] = useState<'static' | 'scan' | 'assemble' | 'reveal' | 'complete'>('static');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('scan'), 600);
    const timer2 = setTimeout(() => setPhase('assemble'), 1400);
    const timer3 = setTimeout(() => setPhase('reveal'), 2200);
    const timer4 = setTimeout(() => setPhase('complete'), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
    >
      {/* Static/Noise Background */}
      <AnimatePresence>
        {phase === 'static' && (
          <motion.div
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="tv-static absolute inset-0 opacity-30" />
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '0px 20px']
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanning Grid */}
      <AnimatePresence>
        {phase === 'scan' && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Horizontal scanning lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute w-full h-[1px] bg-fiery shadow-lg"
                style={{ 
                  top: `${(i + 1) * 12.5}%`,
                  boxShadow: '0 0 10px #F24005, 0 0 20px #F24005'
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Vertical scanning lines */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute h-full w-[1px] bg-fiery shadow-lg"
                style={{ 
                  left: `${(i + 1) * 16.66}%`,
                  boxShadow: '0 0 10px #F24005, 0 0 20px #F24005'
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ 
                  scaleY: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.06,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Assembly Phase */}
      <motion.div className="relative z-20">
        {/* Background Pulse */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(242, 64, 5, 0.2) 0%, transparent 70%)',
          }}
          animate={phase === 'assemble' || phase === 'reveal' || phase === 'complete' ? {
            scale: [0.8, 1.2, 1],
            opacity: [0, 0.6, 0.3]
          } : {}}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        />

        {/* Logo Container with Assembly Effect */}
        <motion.div
          className="relative"
          initial={{ 
            scale: 0,
            rotateY: 180,
            z: -1000
          }}
          animate={{
            scale: phase === 'static' || phase === 'scan' 
              ? 0 
              : phase === 'assemble'
              ? [0, 0.3, 0.8, 1.1, 1]
              : 1,
            rotateY: phase === 'static' || phase === 'scan'
              ? 180
              : phase === 'assemble'
              ? [180, 90, 45, 0, 0]
              : 0,
            z: phase === 'static' || phase === 'scan'
              ? -1000
              : phase === 'assemble'
              ? [-1000, -500, -100, 50, 0]
              : 0
          }}
          transition={{
            duration: phase === 'assemble' ? 0.8 : 0.3,
            ease: "easeOut"
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* Pixelated Assembly Effect */}
          <AnimatePresence>
            {phase === 'assemble' && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: '8px',
                      height: '8px',
                      background: '#F24005',
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      boxShadow: '0 0 4px #F24005'
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Logo */}
          <motion.img 
            src="/Layer 25@4x_1749161317114.png" 
            alt="Entaview" 
            className="h-32 sm:h-40 md:h-56 lg:h-72 w-auto max-w-[90vw] object-contain"
            animate={{
              filter: phase === 'static' || phase === 'scan'
                ? "brightness(0) contrast(0)"
                : phase === 'assemble'
                ? ["brightness(0) contrast(0)", "brightness(0.3) contrast(1.5)", "brightness(1.2) contrast(1.2)", "brightness(1) contrast(1)"]
                : phase === 'reveal'
                ? ["brightness(1) contrast(1)", "brightness(1.3) contrast(1.3)", "brightness(1) contrast(1)"]
                : "brightness(1) contrast(1)"
            }}
            transition={{
              duration: phase === 'assemble' ? 0.8 : phase === 'reveal' ? 0.5 : 0.3,
              ease: "easeOut"
            }}
          />

          {/* Holographic Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(242, 64, 5, 0.1) 50%, transparent 70%)',
              mixBlendMode: 'screen'
            }}
            animate={phase === 'reveal' || phase === 'complete' ? {
              x: ['-100%', '100%'],
              opacity: [0, 0.8, 0]
            } : {}}
            transition={{
              duration: 1.2,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Targeting System */}
        <AnimatePresence>
          {(phase === 'reveal' || phase === 'complete') && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Corner Targeting Lines */}
              {[
                { position: "top-0 left-0", border: "border-l-2 border-t-2", rotation: 0 },
                { position: "top-0 right-0", border: "border-r-2 border-t-2", rotation: 90 },
                { position: "bottom-0 left-0", border: "border-l-2 border-b-2", rotation: -90 },
                { position: "bottom-0 right-0", border: "border-r-2 border-b-2", rotation: 180 }
              ].map((corner, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${corner.position} w-16 h-16 ${corner.border} border-fiery`}
                  style={{
                    boxShadow: '0 0 10px #F24005'
                  }}
                  initial={{ 
                    scale: 0,
                    rotate: corner.rotation + 45
                  }}
                  animate={{ 
                    scale: 1,
                    rotate: corner.rotation
                  }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Center Crosshair */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="w-8 h-[1px] bg-fiery shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2" />
                <div className="w-[1px] h-8 bg-fiery shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
