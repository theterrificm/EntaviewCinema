import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { VideoErrorBoundary } from "@/components/VideoErrorBoundary";
import { CheckCircle, Play, Calendar, Users, TrendingUp, Award } from "lucide-react";

export default function BrandContentSubscription() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const pricingRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });

  const [showReelModal, setShowReelModal] = useState(false);

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Monthly or Quarterly Content Drops",
      description: "Hero films, social cutdowns, reels, BTS and lifestyle snippets ready for posting."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Creative Strategy + Planning",
      description: "We handle ideation, storyboarding, and campaign concepts tailored to your goals."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "On-Brand Cinematic Production",
      description: "High-quality shoots with consistent style and storytelling aligned with your vision."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Editing + Colour Grading",
      description: "Each piece delivered polished, premium, and ready for launch."
    }
  ];

  const benefits = [
    "Dedicated Account Management",
    "A seamless process from concept to delivery, so you can focus on your business."
  ];

  const investmentInfo = {
    price: "£6,000",
    period: "per month",
    minimum: "3-month minimum subscription",
    description: "Premium content subscription for culture-leading brands"
  };

  return (
    <div className="min-h-screen bg-onyx text-white">
      <Navigation />
      
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <VideoErrorBoundary>
            <SimpleVideoAutoplay
              src="/1. Comp Open - Manifest v5_1749342296563.mp4"
              className="absolute inset-0 w-full h-full object-cover object-top"
              enableHoverPlay={false}
            />
          </VideoErrorBoundary>
          <div className="absolute inset-0 bg-onyx/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-roboto-condensed font-black leading-[0.85] mb-6 text-white tracking-tight uppercase">
              Brand Content<br />
              <span className="text-fiery italic">Subscription</span>
            </h1>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-oswald font-medium text-white mb-6 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Consistent, Culture-Shaping Content for Your Brand
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Stay relevant and lead culture with a steady stream of cinematic content crafted for your brand.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button className="bg-fiery hover:bg-fiery/90 text-white px-8 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 hover:scale-105">
              BOOK A DISCOVERY CALL
            </button>
            <button 
              onClick={() => setShowReelModal(true)}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              WATCH EXAMPLES
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-stone text-onyx" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-6 tracking-tight uppercase">
              What's <span className="text-fiery">Included</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-onyx/80 max-w-3xl mx-auto">
              Everything you need for a consistent, professional content presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-fiery text-white rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-oswald font-medium mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-jetbrains-mono text-onyx/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-onyx" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isBenefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-roboto-condensed font-black leading-[0.85] mb-8 text-white tracking-tight uppercase">
                <span className="text-fiery">Dedicated Account</span><br />
                Management
              </h2>
              <p className="text-xl font-jetbrains-mono text-white/80 mb-8 leading-relaxed">
                A seamless process from concept to delivery, so you can focus on your business.
              </p>
              
              <div className="mb-12">
                <h3 className="text-3xl font-oswald font-medium text-white mb-6 tracking-wide uppercase">
                  Ideal For:
                </h3>
                <p className="text-lg font-jetbrains-mono text-white/90 leading-relaxed">
                  Brands that want to stay top-of-mind, grow their community, and position themselves as cultural leaders—without the stress of planning and producing content alone.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={isBenefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <VideoErrorBoundary>
                  <SimpleVideoAutoplay
                    src="/maku-showreel-optimized.mp4"
                    className="w-full h-full object-cover"
                    enableHoverPlay={true}
                  />
                </VideoErrorBoundary>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-24 bg-stone text-onyx" ref={pricingRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-6 tracking-tight uppercase">
              <span className="text-fiery">Investment</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="bg-white p-12 rounded-lg border-2 border-fiery shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-oswald font-medium mb-4 uppercase tracking-wide">
                  Starting from
                </h3>
                <div className="mb-6">
                  <span className="text-6xl font-roboto-condensed font-black text-fiery">{investmentInfo.price}</span>
                  <span className="text-2xl font-jetbrains-mono text-onyx/70">/{investmentInfo.period}</span>
                </div>
                <p className="font-jetbrains-mono text-onyx/80 text-lg mb-4">
                  {investmentInfo.description}
                </p>
                <p className="font-jetbrains-mono text-onyx/60 text-sm">
                  ({investmentInfo.minimum})
                </p>
              </div>

              <button className="bg-fiery text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 hover:bg-fiery/90 hover:scale-105 w-full">
                BOOK A DISCOVERY CALL
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-onyx">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-roboto-condensed font-black leading-[0.85] mb-8 text-white tracking-tight uppercase">
              Ready to Transform<br />
              Your <span className="text-fiery">Content Strategy?</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white/80 mb-12 max-w-3xl mx-auto">
              Join the brands that never run out of premium content. Start your subscription today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-fiery hover:bg-fiery/90 text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 hover:scale-105">
                BOOK A STRATEGY CALL
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300">
                VIEW PORTFOLIO
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}