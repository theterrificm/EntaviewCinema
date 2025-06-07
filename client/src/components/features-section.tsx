import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, BookOpen, Globe, Zap, Users, Award } from "lucide-react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      title: "Premium Production",
      description: "State-of-the-art equipment and industry-leading techniques for cinematic excellence.",
      icon: Video
    },
    {
      title: "Brand Storytelling", 
      description: "We craft narratives that resonate with your audience and drive emotional connection.",
      icon: BookOpen
    },
    {
      title: "Global Reach",
      description: "Experience working with international brands across multiple markets and cultures.",
      icon: Globe
    },
    {
      title: "Fast Turnaround",
      description: "Efficient production process without compromising on quality or creative vision.",
      icon: Zap
    },
    {
      title: "Expert Team",
      description: "Industry veterans with decades of experience in commercial and documentary filmmaking.",
      icon: Users
    },
    {
      title: "Award Winning",
      description: "Recognition from international film festivals and industry organizations worldwide.",
      icon: Award
    }
  ];

  return (
    <section className="py-24 bg-black text-white" ref={ref} id="features">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-roboto-condensed font-black mb-6 leading-[0.85] tracking-tight uppercase text-white">
            Why Choose <em className="text-fiery italic">Entaview</em>
          </h2>
          <p className="text-lg font-jetbrains-mono font-light text-white/70 max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver films that make an impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center group cursor-pointer p-8 border border-white/10 rounded-none hover:border-fiery/30 transition-all duration-300 bg-black"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent 
                    size={48} 
                    className="text-fiery group-hover:text-fiery transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="text-xl font-oswald font-medium mb-4 text-white group-hover:text-fiery transition-colors duration-300 tracking-wide uppercase">
                  {feature.title}
                </h3>
                <p className="font-jetbrains-mono text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}