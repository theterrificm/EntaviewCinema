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
    <section className="py-24 md:py-32 bg-onyx" ref={ref} id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-8"
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
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
            >
              <div className="w-16 h-16 bg-fiery rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                {step.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                {step.title}
              </h3>
              <p className="text-lg opacity-80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
