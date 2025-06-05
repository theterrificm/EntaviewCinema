import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PlanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const steps = [
    {
      number: "01",
      title: "Book a Discovery Call",
      description: "We dive deep into your brand vision and goals"
    },
    {
      number: "02", 
      title: "We Build the Concept",
      description: "Our team crafts a cinematic story tailored to your audience"
    },
    {
      number: "03",
      title: "You Get Cinematic Results", 
      description: "Launch with a film that captures attention and drives action"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone text-onyx relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-fiery/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-1/3 w-32 h-32 border border-onyx/10 rotate-45"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-league-spartan font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Here's how it works
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
            >
              <motion.div 
                className="relative mb-6 mx-auto w-16 h-16 bg-fiery rounded-full flex items-center justify-center text-white font-league-spartan font-bold text-lg group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {step.number}
              </motion.div>
              
              <h3 className="text-xl md:text-2xl font-league-spartan font-semibold mb-4 group-hover:text-fiery transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="font-helvetica text-lg opacity-80 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-onyx/20 transform translate-x-8 -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}