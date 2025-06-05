import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      title: "Premium Production",
      description: "State-of-the-art equipment and industry-leading techniques for cinematic excellence.",
      icon: "🎬"
    },
    {
      title: "Brand Storytelling",
      description: "We craft narratives that resonate with your audience and drive emotional connection.",
      icon: "📖"
    },
    {
      title: "Global Reach",
      description: "Experience working with international brands across multiple markets and cultures.",
      icon: "🌍"
    },
    {
      title: "Fast Turnaround",
      description: "Efficient production process without compromising on quality or creative vision.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-24 bg-stone text-onyx" ref={ref} id="features">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-league-spartan font-bold mb-6">
            Why Choose Entaview
          </h2>
          <p className="text-xl font-helvetica font-light opacity-70 max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver films that make an impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-helvetica font-medium mb-3 group-hover:text-fiery transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-helvetica text-sm opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                {feature.description}
              </p>
              
              {/* Animated underline */}
              <div className="mt-4 h-0.5 bg-fiery/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}