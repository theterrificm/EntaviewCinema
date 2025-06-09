import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import { Filter, Play, ArrowRight } from "lucide-react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeFormat, setActiveFormat] = useState("all");

  const industries = ["all", "fashion", "fitness", "hospitality", "food", "tech"];
  const formats = ["all", "brand-film", "series", "short-doc", "ad", "reels"];

  const projects = [
    {
      id: 1,
      title: "ICON Amsterdam Heritage Film",
      industry: "fashion",
      format: "brand-film",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      metrics: ["+£500K launch sales", "2M+ views", "27% conversion uplift"],
      description: "A cinematic exploration of craftsmanship and culture for Amsterdam's iconic streetwear brand."
    },
    {
      id: 2,
      title: "Jägermeister Culture Campaign",
      industry: "hospitality", 
      format: "series",
      thumbnail: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop",
      metrics: ["+61% engagement", "3M+ reach", "22% brand lift"],
      description: "Multi-part series capturing the spirit of nightlife and community."
    },
    {
      id: 3,
      title: "PlayStation VR Experience",
      industry: "tech",
      format: "short-doc",
      thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      metrics: ["+10M views", "500K interactions", "35% trial increase"],
      description: "Documentary-style content showcasing next-generation gaming experiences."
    },
    {
      id: 4,
      title: "Fresh Ego Kid Streetwear",
      industry: "fashion",
      format: "ad",
      thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      metrics: ["+180% sales growth", "5M+ impressions", "45% CTR"],
      description: "Bold advertising campaign for emerging streetwear collective."
    },
    {
      id: 5,
      title: "Padel Social Club Community",
      industry: "fitness",
      format: "reels",
      thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      metrics: ["+300% membership", "1M+ video views", "60% retention"],
      description: "Social content series building community around premium fitness experiences."
    },
    {
      id: 6,
      title: "Ministry of Sound Legacy",
      industry: "hospitality",
      format: "brand-film",
      thumbnail: "https://images.unsplash.com/photo-1571266028243-3eca146fa8c4?w=600&h=400&fit=crop",
      metrics: ["+40% venue bookings", "8M+ reach", "85% brand recall"],
      description: "Celebrating 30 years of electronic music culture and innovation."
    }
  ];

  const filteredProjects = projects.filter(project => {
    const industryMatch = activeFilter === "all" || project.industry === activeFilter;
    const formatMatch = activeFormat === "all" || project.format === activeFormat;
    return industryMatch && formatMatch;
  });

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-oswald font-bold text-white mb-8 tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            See How We Help Brands{" "}
            <span className="text-fiery">Lead Culture</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Visually.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section ref={ref} className="py-12 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Industry Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-oswald font-medium text-white mb-4 tracking-wide flex items-center gap-2">
                <Filter size={20} />
                Industry
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    className={`px-4 py-2 text-sm font-jetbrains-mono font-medium tracking-wide uppercase transition-all duration-300 ${
                      activeFilter === industry
                        ? "bg-fiery text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {industry.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Format Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-oswald font-medium text-white mb-4 tracking-wide">
                Format
              </h3>
              <div className="flex flex-wrap gap-2">
                {formats.map((format) => (
                  <button
                    key={format}
                    onClick={() => setActiveFormat(format)}
                    className={`px-4 py-2 text-sm font-jetbrains-mono font-medium tracking-wide uppercase transition-all duration-300 ${
                      activeFormat === format
                        ? "bg-fiery text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {format.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-iron">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="text-white" size={48} />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-fiery text-white px-3 py-1 text-xs font-oswald font-medium tracking-wide uppercase">
                    {project.format.replace("-", " ")}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-oswald font-bold text-white group-hover:text-fiery transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-jetbrains-mono text-sm text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-sm font-jetbrains-mono font-medium text-fiery"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                    <span className="font-jetbrains-mono text-sm font-medium mr-2">
                      View Case Study
                    </span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-iron">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Ready to Join Our Portfolio?
          </motion.h2>
          <motion.p
            className="text-xl font-jetbrains-mono font-light text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Let's create something that moves culture.
          </motion.p>
          <motion.button
            className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Discovery Call
          </motion.button>
        </div>
      </section>
    </div>
  );
}