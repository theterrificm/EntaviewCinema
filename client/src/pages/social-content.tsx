import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Instagram, Youtube, CheckCircle, Video } from "lucide-react";

export default function SocialContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const packages = [
    {
      name: "Essential",
      price: "£1,200",
      period: "/month",
      features: [
        "4 short-form videos",
        "1 strategy call",
        "Ready-to-post assets",
        "Caption writing"
      ]
    },
    {
      name: "Professional",
      price: "£2,400",
      period: "/month",
      features: [
        "8 short-form videos",
        "2 strategy calls", 
        "Story templates",
        "Performance analytics",
        "Caption writing"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "£3,600",
      period: "/month",
      features: [
        "12 short-form videos",
        "Weekly strategy calls",
        "Custom graphics",
        "A/B testing",
        "Priority support"
      ]
    }
  ];

  const results = [
    "15% IG follower growth",
    "61% engagement lift for Jägermeister",
    "3x faster content creation"
  ];

  const process = [
    {
      step: "01",
      title: "Choose Your Package",
      description: "Select the monthly content package that fits your brand's needs and goals."
    },
    {
      step: "02",
      title: "Shoot Day(s)",
      description: "We handle all filming with professional equipment and creative direction."
    },
    {
      step: "03",
      title: "Receive Social-Ready Clips",
      description: "Get edited videos optimized for each platform with captions and posting schedules."
    }
  ];

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-oswald font-bold text-white mb-8 tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Your Audience Scrolls{" "}
            <span className="text-fiery">Fast</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We Help You Keep Up.
          </motion.p>

          <motion.p
            className="text-lg font-jetbrains-mono font-light text-white/60 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Custom short-form video built to match your brand, your audience, and your goals.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Instagram className="text-white/60" size={32} />
            <Video className="text-white/60" size={32} />
            <Youtube className="text-white/60" size={32} />
          </motion.div>

          <motion.button
            className="bg-fiery text-white px-8 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Discovery Call
          </motion.button>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            The Problem
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating regular content takes time. You're juggling strategy, shooting, posting — and falling behind.
          </motion.p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-iron">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Solution
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We deliver monthly videos that help you stay consistent, creative and connected.
          </motion.p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-iron to-onyx">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-oswald font-bold text-white mb-16 text-center tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Choose Your Package
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`bg-white/5 p-8 rounded-lg relative ${pkg.popular ? 'ring-2 ring-fiery' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fiery text-white px-4 py-1 text-sm font-oswald font-medium tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-oswald font-bold text-white mb-4 tracking-wide">
                  {pkg.name}
                </h3>
                
                <div className="text-4xl font-oswald font-bold text-fiery mb-2">
                  {pkg.price}
                  <span className="text-lg text-white/60">{pkg.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80 font-jetbrains-mono text-sm">
                      <CheckCircle className="text-fiery mr-3" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-fiery text-white py-3 font-oswald font-medium tracking-widest uppercase hover:bg-fiery/90 transition-colors duration-300">
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-onyx">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-oswald font-bold text-white mb-12 text-center tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Proven Results
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <CheckCircle className="text-fiery mb-4 mx-auto" size={32} />
                <p className="text-lg font-jetbrains-mono font-medium text-white/90">
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-onyx">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-oswald font-bold text-white mb-16 text-center tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Our Process
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                <div className="text-6xl font-oswald font-bold text-fiery mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-oswald font-medium text-white mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-jetbrains-mono font-light text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Ready to Stay Consistent?
          </motion.h2>
          <motion.p
            className="text-xl font-jetbrains-mono font-light text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            Let's build your monthly content strategy.
          </motion.p>
          <motion.button
            className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
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