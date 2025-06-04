import { motion } from "framer-motion";

export default function HeroSection() {
  const handleBookCall = () => {
    // This would typically integrate with a booking system
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Professional cinematographer with camera equipment"
          className="w-full h-full object-cover parallax-bg"
        />
      </div>
      
      <div className="absolute inset-0 video-overlay"></div>
      <div className="geometric-overlay"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-fiery/20 rounded-full floating-element opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-fiery/30 rotate-45 floating-element" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 geometric-accent">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-newake font-normal leading-tight mb-6 text-gradient tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          WE CREATE FILMS THAT LEAD CULTURE — NOT FOLLOW IT.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-helvetica font-light mb-8 max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
        >
          For lifestyle brands and bold startups ready to cut through the noise.
        </motion.p>
        
        <motion.button 
          onClick={handleBookCall}
          className="bg-fiery hover:bg-fiery/90 text-white px-8 py-4 text-lg font-helvetica font-medium tracking-wide transition-all duration-300 hover:scale-105 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Call
        </motion.button>
      </div>
    </section>
  );
}
