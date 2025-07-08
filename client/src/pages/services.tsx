import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Video, Users, Target } from "lucide-react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Brand Films",
      description: "Cinematic storytelling that positions your brand as a culture leader",
      features: [
        "Hero brand film (60–90s)",
        "Narrative scripting + storyboarding",
        "Cinematic production + direction",
        "4K colour grade + sound design",
        "Launch-ready social cutdowns",
        "Usage rights for web + social"
      ],
      link: "/brand-films",
      icon: <Video className="w-8 h-8" />
    },
    {
      title: "Social Content",
      description: "High-impact content partnership for consistent brand presence",
      features: [
        "Monthly content calendar",
        "Professional video production",
        "Platform-optimized formats",
        "Brand consistency guidelines",
        "Performance analytics",
        "Ongoing creative support"
      ],
      link: "/content-partnership",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Brand Campaigns",
      description: "Strategic campaign development for maximum cultural impact",
      features: [
        "Campaign strategy + ideation",
        "Multi-format content creation",
        "Location + talent sourcing",
        "On-set art direction",
        "Launch coordination",
        "Performance measurement"
      ],
      link: "/brand-launch",
      icon: <Target className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-onyx via-iron to-onyx text-white relative overflow-hidden mt-20" ref={heroRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-fiery rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-fiery/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-roboto-condensed font-black leading-[0.85] mb-8 tracking-tight uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            Our<br />
            <span className="text-fiery italic">Services</span>
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl font-oswald font-medium text-white/90 max-w-4xl mx-auto leading-relaxed tracking-wide uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Cinematic Video Production Services for Culture-Leading Brands
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-white" ref={servicesRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-8 text-onyx tracking-tight uppercase">
              What We <span className="text-fiery italic">Offer</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-onyx/70 max-w-3xl mx-auto">
              Comprehensive video production services designed to position your brand as a cultural leader
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-iron/5 to-transparent border border-iron/20 rounded-lg p-8 hover:border-fiery/30 transition-all duration-300 group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-fiery/10 text-fiery rounded-full mb-4 group-hover:bg-fiery group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-roboto-condensed font-black text-onyx mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-lg font-jetbrains-mono text-onyx/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-fiery rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-jetbrains-mono text-onyx/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={service.link}>
                  <motion.button
                    className="w-full bg-transparent border-2 border-onyx text-onyx hover:bg-onyx hover:text-white px-6 py-3 font-oswald font-medium text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-onyx text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-8 tracking-tight uppercase">
              Our <span className="text-fiery italic">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand, audience, and cultural positioning goals" },
              { step: "02", title: "Production", description: "Cinematic filming with professional direction and art coordination" },
              { step: "03", title: "Delivery", description: "Final edits optimised for your launch strategy and platforms" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-4xl font-roboto-condensed font-black text-fiery mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-oswald font-medium text-white mb-4 tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="font-jetbrains-mono text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-fiery to-fiery/80 text-white" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-roboto-condensed font-black leading-[0.85] mb-8 tracking-tight uppercase">
              Ready to Lead<br />
              <span className="text-onyx italic">Your Culture?</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss which service best fits your brand's cultural ambitions and growth goals.
            </p>
            
            <Link href="/contact">
              <motion.button
                className="bg-onyx hover:bg-onyx/90 text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 flex items-center gap-3 justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Discovery Call
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}