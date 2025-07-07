import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";
import entaviewLogo from "@assets/Layer 25@4x.png";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/brand-films", label: "Brand Films" },
    { path: "/social-content", label: "Social Content" },
    { path: "/our-work", label: "Our Work" },
    { path: "/insights", label: "Insights" },
    { path: "/contact", label: "Contact" },
  ];

  const services = [
    "Brand Films",
    "Social Content",
    "Campaign Strategy",
    "Video Production",
    "Creative Direction",
    "Post-Production"
  ];

  return (
    <footer className="bg-onyx border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link href="/">
              <img 
                src={entaviewLogo} 
                alt="Entaview Creative"
                className="h-10 w-auto mb-6 cursor-pointer"
              />
            </Link>
            <p className="font-jetbrains-mono text-sm text-white/70 leading-relaxed mb-6">
              We help brands lead culture — not follow it. Through cinematic storytelling and strategic content creation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-fiery transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-fiery transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-fiery transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-oswald font-medium text-white mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="font-jetbrains-mono text-sm text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-oswald font-medium text-white mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="font-jetbrains-mono text-sm text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-oswald font-medium text-white mb-6 tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-fiery" size={16} />
                <span className="font-jetbrains-mono text-sm text-white/70">
                  info@entaview.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-fiery" size={16} />
                <span className="font-jetbrains-mono text-sm text-white/70">
                  +44 (0) 113 XXX XXXX
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-fiery" size={16} />
                <span className="font-jetbrains-mono text-sm text-white/70">
                  Leeds, UK
                </span>
              </div>
            </div>
            
            <div className="mt-8">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-jetbrains-mono text-sm text-white/50">
              © 2024 Entaview Creative. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="font-jetbrains-mono text-sm text-white/50 hover:text-white/70 transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>
              <span className="font-jetbrains-mono text-sm text-white/50 hover:text-white/70 transition-colors duration-300 cursor-pointer">
                Terms of Service
              </span>
              <span className="font-jetbrains-mono text-sm text-white/50 hover:text-white/70 transition-colors duration-300 cursor-pointer">
                Cookies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}