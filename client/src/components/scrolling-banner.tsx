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

  // Calculate the total width of one complete text cycle
  const textWidth = 1800; // Approximate width of one complete text cycle
  
  // Create the repeating text string
  const createTextElement = (offset: number = 0) => (
    <motion.div
      key={offset}
      className="flex items-center whitespace-nowrap"
      initial={{ x: offset * textWidth }}
      animate={{ x: (offset - 1) * textWidth }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }}
    >
      {bannerText.map((item, index) => (
        <span
          key={`${offset}-${index}`}
          className={`text-6xl md:text-8xl lg:text-9xl font-bebas font-black tracking-tight mr-8 ${
            item.color === "fiery" 
              ? "text-fiery" 
              : "text-white"
          }`}
        >
          {item.text}
        </span>
      ))}
    </motion.div>
  );

  return (
    <section className="bg-onyx border-y border-white/10 overflow-hidden relative">
      <div className="py-8 md:py-12 relative">
        {/* Multiple offset text elements for continuous scroll */}
        <div className="flex">
          {createTextElement(0)}
          {createTextElement(1)}
          {createTextElement(2)}
        </div>
        
        {/* Gradient fade on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-onyx to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-onyx to-transparent z-10"></div>
      </div>
    </section>
  );
}