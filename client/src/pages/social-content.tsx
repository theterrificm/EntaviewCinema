import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Instagram, Youtube, CheckCircle, Video } from "lucide-react";
import iconHeistVideo from "@assets/15 MIN - ICON BLACK FRIDAY HEIST  - RICO GETS AWAY (ADS)_1749493489639.mp4";
import manifestVideo from "@assets/1. Comp Open - Manifest v4_1749493286513.mp4";

export default function SocialContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const videoRefs = {
    iconHeist: useRef<HTMLVideoElement>(null),
    manifest: useRef<HTMLVideoElement>(null)
  };

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

      {/* Video Showcase Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 tracking-tight">
              See Social Content In Action
            </h2>
            <p className="text-lg font-jetbrains-mono font-light text-white/70 max-w-3xl mx-auto">
              Watch examples of our vertical video content optimized for Instagram, TikTok, and YouTube Shorts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Video 1 - ICON Black Friday Heist */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onMouseEnter={() => {
                setHoveredVideo('iconHeist');
                if (videoRefs.iconHeist.current) {
                  videoRefs.iconHeist.current.muted = false;
                }
              }}
              onMouseLeave={() => {
                setHoveredVideo(null);
                if (videoRefs.iconHeist.current) {
                  videoRefs.iconHeist.current.muted = true;
                }
              }}
            >
              <div className="rounded-lg p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="aspect-[9/16] rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <video
                    ref={videoRefs.iconHeist}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="metadata"
                  >
                    <source src={iconHeistVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-lg transition-all duration-500"></div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-purple-500 text-white px-2 py-1 text-xs font-oswald font-medium tracking-wide uppercase rounded shadow-lg">
                    Instagram Reel
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-jetbrains-mono mb-2 drop-shadow-lg">
                      ICON Black Friday Heist
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded overflow-hidden">
                      <motion.div 
                        className="h-full bg-fiery rounded"
                        initial={{ width: "0%" }}
                        animate={{ width: "33%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-oswald font-medium text-white mb-2 group-hover:text-fiery transition-colors duration-300">
                  ICON Heist Campaign
                </h3>
                <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                  15-second cinematic ad showcasing streetwear brand story with narrative-driven content.
                </p>
              </div>
            </motion.div>

            {/* Video 2 - TikTok Style */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="rounded-lg p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="aspect-[9/16] rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=700&fit=crop&crop=center"
                      alt="Behind the scenes thumbnail"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                  </div>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-lg transition-all duration-500"></div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 text-xs font-oswald font-medium tracking-wide uppercase rounded shadow-lg">
                    TikTok Style
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-jetbrains-mono mb-2 drop-shadow-lg">
                      Behind The Scenes
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded overflow-hidden">
                      <motion.div 
                        className="h-full bg-fiery rounded"
                        initial={{ width: "0%" }}
                        animate={{ width: "66%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-oswald font-medium text-white mb-2 group-hover:text-fiery transition-colors duration-300">
                  Production Process
                </h3>
                <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                  30-second behind-the-scenes content showing creative process and authenticity.
                </p>
              </div>
            </motion.div>

            {/* Video 3 - Campaign Teaser */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onMouseEnter={() => {
                setHoveredVideo('manifest');
                if (videoRefs.manifest.current) {
                  videoRefs.manifest.current.muted = false;
                }
              }}
              onMouseLeave={() => {
                setHoveredVideo(null);
                if (videoRefs.manifest.current) {
                  videoRefs.manifest.current.muted = true;
                }
              }}
            >
              <div className="rounded-lg p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-fiery/20">
                <div className="aspect-[9/16] rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <video
                    ref={videoRefs.manifest}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="metadata"
                  >
                    <source src={manifestVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-fiery/50 rounded-lg transition-all duration-500"></div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-fiery text-white px-2 py-1 text-xs font-oswald font-medium tracking-wide uppercase rounded shadow-lg">
                    Campaign Teaser
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-jetbrains-mono mb-2 drop-shadow-lg">
                      Manifest Collection
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded overflow-hidden">
                      <motion.div 
                        className="h-full bg-fiery rounded"
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-oswald font-medium text-white mb-2 group-hover:text-fiery transition-colors duration-300">
                  Manifest Campaign
                </h3>
                <p className="text-sm font-jetbrains-mono text-white/70 leading-relaxed">
                  Dynamic product reveal with cinematic quality and strategic brand messaging.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm font-jetbrains-mono text-white/50 mb-6">
              Click any video to see full examples of our social content work
            </p>
            <motion.button
              className="bg-fiery text-white px-8 py-3 font-oswald font-medium text-sm tracking-widest uppercase hover:bg-fiery/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Portfolio
            </motion.button>
          </motion.div>
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

      <Footer />
    </div>
  );
}