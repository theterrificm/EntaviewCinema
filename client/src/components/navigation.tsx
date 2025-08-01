import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import entaviewLogo from "@assets/Layer 25@4x.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { 
      path: "/services", 
      label: "Services",
      subItems: [
        { path: "/brand-films", label: "Brand Films" },
        { path: "/content-partnership", label: "Social Content" },
        { path: "/brand-launch", label: "Campaigns" }
      ]
    },
    { path: "/our-work", label: "Our Work" },
    { path: "/insights", label: "Blog / Insights" },
    { path: "/contact", label: "Contact" },
    { path: "/lead-magnet", label: "Free Guide" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-onyx/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={entaviewLogo} 
                alt="Entaview Creative"
                className="h-6 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Menu and CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-white/80 hover:text-white font-jetbrains-mono font-medium text-sm tracking-wide transition-colors duration-300"
              >
                Menu
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-64 bg-onyx border border-white/10 rounded-lg shadow-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-4">
                      {navItems.map((item) => (
                        <div key={item.path}>
                          {item.subItems ? (
                            // Services dropdown with sub-items
                            <div>
                              <Link href={item.path}>
                                <div
                                  className={`block px-6 py-3 font-jetbrains-mono font-medium text-sm tracking-wide cursor-pointer transition-colors duration-300 hover:bg-white/5 ${
                                    location === item.path
                                      ? "text-fiery bg-white/5"
                                      : "text-white/80 hover:text-white"
                                  }`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.label}
                                </div>
                              </Link>
                              <div className="bg-white/5">
                                {item.subItems.map((subItem) => (
                                  <Link key={subItem.path} href={subItem.path}>
                                    <div
                                      className={`block px-10 py-2 font-jetbrains-mono text-xs tracking-wide cursor-pointer transition-colors duration-300 hover:bg-white/5 ${
                                        location === subItem.path
                                          ? "text-fiery bg-white/5"
                                          : "text-white/60 hover:text-white/80"
                                      }`}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            // Regular menu item
                            <Link href={item.path}>
                              <div
                                className={`block px-6 py-3 font-jetbrains-mono font-medium text-sm tracking-wide cursor-pointer transition-colors duration-300 hover:bg-white/5 ${
                                  location === item.path
                                    ? "text-fiery bg-white/5"
                                    : "text-white/80 hover:text-white"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.label}
                              </div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                className="bg-fiery text-white px-6 py-3 font-oswald font-medium text-sm tracking-widest uppercase hover:bg-fiery/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Discovery Call
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-onyx border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.subItems ? (
                    // Services with sub-items
                    <div>
                      <Link href={item.path}>
                        <div
                          className={`block px-6 py-2 font-jetbrains-mono font-medium text-sm tracking-wide cursor-pointer transition-colors duration-300 ${
                            location === item.path
                              ? "text-fiery"
                              : "text-white/80 hover:text-white"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </div>
                      </Link>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link key={subItem.path} href={subItem.path}>
                            <div
                              className={`block px-6 py-1 font-jetbrains-mono text-xs tracking-wide cursor-pointer transition-colors duration-300 ${
                                location === subItem.path
                                  ? "text-fiery"
                                  : "text-white/60 hover:text-white/80"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Regular menu item
                    <Link href={item.path}>
                      <div
                        className={`block px-6 py-2 font-jetbrains-mono font-medium text-sm tracking-wide cursor-pointer transition-colors duration-300 ${
                          location === item.path
                            ? "text-fiery"
                            : "text-white/80 hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-6 pt-4">
                <Link href="/contact">
                  <button
                    className="w-full bg-fiery text-white px-6 py-3 font-oswald font-medium text-sm tracking-widest uppercase hover:bg-fiery/90 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Discovery Call
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}