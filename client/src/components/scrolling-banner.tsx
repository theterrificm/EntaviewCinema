import { motion } from "framer-motion";

export default function ScrollingBanner() {
  // The main text content that will scroll
  const bannerText = [
    { text: "WE HELP", color: "white" },
    { text: "BRANDS", color: "fiery" },
    { text: "LEAD", color: "white" },
    { text: "CULTURE", color: "fiery" },
    { text: "—", color: "white" },
    { text: "NOT", color: "white" },
    { text: "FOLLOW", color: "fiery" },
    { text: "IT", color: "white" },
    { text: "•", color: "fiery" },
    { text: "CINEMATIC", color: "white" },
    { text: "STORYTELLING", color: "fiery" },
    { text: "THAT", color: "white" },
    { text: "DRIVES", color: "fiery" },
    { text: "RESULTS", color: "white" },
    { text: "•", color: "fiery" },
  ];

  return (
    <section className="bg-onyx border-y border-white/10 overflow-hidden relative">
      <div className="py-8 md:py-12 relative">
        {/* Seamless infinite scroll */}
        <motion.div
          className="flex"
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: window.innerWidth < 768 ? 4 : 20, // 5x faster on mobile (20/5 = 4)
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First copy of text */}
          <div className="flex items-center whitespace-nowrap">
            {bannerText.map((item, index) => (
              <span
                key={`first-${index}`}
                className={`text-6xl md:text-8xl lg:text-9xl font-bebas font-black tracking-tight mr-8 ${
                  item.color === "fiery" 
                    ? "text-fiery" 
                    : "text-white"
                }`}
              >
                {item.text}
              </span>
            ))}
          </div>
          
          {/* Second copy of text for seamless loop */}
          <div className="flex items-center whitespace-nowrap">
            {bannerText.map((item, index) => (
              <span
                key={`second-${index}`}
                className={`text-6xl md:text-8xl lg:text-9xl font-bebas font-black tracking-tight mr-8 ${
                  item.color === "fiery" 
                    ? "text-fiery" 
                    : "text-white"
                }`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Gradient fade on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-onyx to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-onyx to-transparent z-10"></div>
      </div>
    </section>
  );
}