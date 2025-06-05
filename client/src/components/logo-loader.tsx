import { motion } from "framer-motion";

export default function LogoLoader() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-onyx flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [0.8, 1.1, 1] 
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
        className="flex items-center justify-center"
      >
        <img 
          src="/entaview-logo-white.png" 
          alt="Entaview" 
          className="h-16 md:h-24 w-auto"
        />
      </motion.div>
    </motion.div>
  );
}
