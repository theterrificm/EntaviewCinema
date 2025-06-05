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
          <h2 className="text-5xl md:text-6xl font-helvetica font-light mb-6">
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
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-helvetica font-medium mb-3">{feature.title}</h3>
              <p className="font-helvetica text-sm opacity-70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}