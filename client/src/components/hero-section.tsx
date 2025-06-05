import { motion } from "framer-motion";

export default function HeroSection() {
  const handleBookCall = () => {
    console.log("Book a call clicked");
    alert("Booking system integration would be implemented here");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-onyx">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-onyx/70"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl">

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-league-spartan font-bold leading-none mb-6 text-white text-center">
              Transform Your<br />
              <span className="text-fiery">Vision</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl font-helvetica font-light text-white/80 mb-12 max-w-2xl leading-relaxed text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.9 }}
          >
            Create powerful and profitable films that lead culture — not follow it. For lifestyle brands and bold startups ready to cut through the noise.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.3 }}
          >
            <button 
              onClick={handleBookCall}
              className="bg-fiery hover:bg-fiery/90 text-white px-8 py-4 font-league-spartan font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              BOOK A CALL
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-league-spartan font-semibold text-lg transition-all duration-300">
              WATCH TRAILER
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="absolute bottom-20 right-20 hidden lg:block">
        <motion.div 
          className="w-80 h-52 bg-onyx/80 rounded-lg border border-white/20 overflow-hidden relative group cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 4.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a1a1a2&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-fiery rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
