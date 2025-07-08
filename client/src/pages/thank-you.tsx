import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import entaviewLogo from "@assets/Layer 25@4x.png";

export default function ThankYou() {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const nextSteps = [
    "Check your email for the Video Marketing Blueprint",
    "Review the 10-step framework at your own pace",
    "Start planning your first high-impact video campaign",
    "Book a discovery call to discuss your specific needs"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="bg-white border-b border-iron/20 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <Link href="/">
            <img 
              src={entaviewLogo} 
              alt="Entaview Creative"
              className="h-6 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-iron/5" ref={heroRef}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-8 text-onyx tracking-tight uppercase">
              Thank You!<br />
              <span className="text-fiery italic">Check Your Email</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-oswald font-medium text-onyx/80 mb-12 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
              Your Video Marketing Blueprint is on its way
            </p>

            {/* Next Steps */}
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-roboto-condensed font-black text-onyx mb-8 uppercase tracking-wide">
                What happens next?
              </h2>
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 mb-6 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-fiery/10 text-fiery rounded-full flex items-center justify-center font-jetbrains-mono font-bold text-sm mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-lg font-jetbrains-mono text-onyx/80">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-fiery to-fiery/80 text-white" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-12 h-12 text-white/90 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-roboto-condensed font-black leading-[0.85] mb-6 tracking-tight uppercase">
              Ready to Take the<br />
              <span className="text-onyx italic">Next Step?</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help you implement these strategies for your specific brand and goals.
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

            <p className="text-white/70 font-jetbrains-mono text-sm mt-6">
              30-minute consultation • No obligations • Free strategy session
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-onyx text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-jetbrains-mono text-white/70 mb-4">
            © 2025 Entaview Creative. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/about">
              <span className="text-white/70 hover:text-white font-jetbrains-mono text-sm transition-colors">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-white/70 hover:text-white font-jetbrains-mono text-sm transition-colors">
                Contact
              </span>
            </Link>
            <Link href="/our-work">
              <span className="text-white/70 hover:text-white font-jetbrains-mono text-sm transition-colors">
                Our Work
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}