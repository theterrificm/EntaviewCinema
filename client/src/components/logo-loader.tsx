import { motion } from "framer-motion";

export default function LogoLoader() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 4 }}
    >
      <motion.img 
        src="/Layer 25@4x_1749161317114.png" 
        alt="Entaview" 
        className="h-24 sm:h-32 md:h-48 lg:h-64 w-auto max-w-[80vw] object-contain"
        initial={{ 
          opacity: 0, 
          scale: 0.8 
        }}
        animate={{ 
          opacity: 1, 
          scale: 1 
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );
}