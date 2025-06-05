import { motion } from "framer-motion";

export default function HeroSection() {
  const handleBookCall = () => {
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-onyx">
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-onyx via-onyx/95 to-onyx/90"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-helvetica font-light leading-none mb-6 text-white">
              Create Powerful &<br />
              Profitable Films
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl font-helvetica font-light text-white/80 mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
          >
            We create films that lead culture — not follow it. For lifestyle brands and bold startups ready to cut through the noise.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0 }}
          >
            <button 
              onClick={handleBookCall}
              className="bg-fiery hover:bg-fiery/90 text-white px-8 py-4 font-helvetica font-medium text-lg transition-all duration-300 hover:scale-105"
            >
              BOOK A CALL
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-helvetica font-medium text-lg transition-all duration-300">
              WATCH TRAILER
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="absolute bottom-20 right-20 hidden lg:block">
        <motion.div 
          className="w-80 h-52 bg-onyx/80 rounded-lg border border-white/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 4.4 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=520"
            alt="Film production"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
