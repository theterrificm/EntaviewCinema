import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const steps = [
    {
      number: 1,
      title: "Book a Discovery Call",
      description: "We dive deep into your brand, audience, and vision to understand what makes you unique."
    },
    {
      number: 2,
      title: "We Build the Concept",
      description: "Our team crafts a cinematic narrative that captures your essence and resonates with your audience."
    },
    {
      number: 3,
      title: "You Get Cinematic Results",
      description: "Receive a film that doesn't just showcase your brand—it elevates it to cultural relevance."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-onyx relative overflow-hidden" ref={ref} id="about">
      <div className="absolute top-0 left-1/4 w-28 h-28 bg-fiery/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/3 w-20 h-20 border border-fiery/20 rotate-45 floating-element"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 section-divider pt-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bebas font-normal mb-8 geometric-accent uppercase tracking-wide leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            The Plan
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="text-center relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-fiery/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-fiery to-fiery/80 rounded-full flex items-center justify-center text-2xl font-anton mb-6 mx-auto shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-oswald font-medium mb-4 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-lg font-jetbrains-mono opacity-80 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-fiery/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
