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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, 
          scale: [0.5, 1.2, 1] 
        }}
        transition={{ 
          duration: 2.5,
          times: [0, 0.6, 1],
          ease: "easeInOut"
        }}
        className="flex items-center justify-center"
      >
        <img 
          src="/entaview-logo-orange.png" 
          alt="Entaview" 
          className="h-48 md:h-72 lg:h-96 w-auto max-w-screen-md object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
