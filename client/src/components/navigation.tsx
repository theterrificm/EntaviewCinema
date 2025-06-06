import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-onyx/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/Layer 25@4x_1749161317114.png" 
            alt="Entaview" 
            className="h-6 w-auto object-contain"
          />
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection("features")}
            className="text-white/80 hover:text-white font-jetbrains-mono text-sm uppercase tracking-wider transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")}
            className="text-white/80 hover:text-white font-jetbrains-mono text-sm uppercase tracking-wider transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection("pricing")}
            className="text-white/80 hover:text-white font-jetbrains-mono text-sm uppercase tracking-wider transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-fiery hover:bg-fiery/90 text-white px-6 py-2 font-jetbrains-mono text-sm uppercase tracking-wider transition-all duration-300"
          >
            Book Now
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-white/80 hover:text-white font-jetbrains-mono text-sm uppercase tracking-wider">
            Menu
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
