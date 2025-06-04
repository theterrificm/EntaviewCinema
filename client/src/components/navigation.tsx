import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-onyx" : "bg-onyx/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.8 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img 
          src="/attached_assets/Asset 2@4x - WHITE - 1308x241.png" 
          alt="Entaview" 
          className="h-8 w-auto"
        />
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection("work")}
            className="hover:text-fiery transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="hover:text-fiery transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="hover:text-fiery transition-colors"
          >
            Contact
          </button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-onyx border-t border-white/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("work")}
              className="block hover:text-fiery transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block hover:text-fiery transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block hover:text-fiery transition-colors"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
