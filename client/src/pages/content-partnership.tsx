import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SimpleVideoAutoplay } from "@/components/SimpleVideoAutoplay";
import { VideoErrorBoundary } from "@/components/VideoErrorBoundary";
import { CheckCircle, Play, Calendar, Users, TrendingUp, Award, ArrowRight, Clock, Star, ChevronDown, Info } from "lucide-react";



export default function ContentPartnership() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const pricingRef = useRef(null);
  const socialProofRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const isSocialProofInView = useInView(socialProofRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const [showReelModal, setShowReelModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

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

  const clientLogos = [
    { name: "ManUtd", logo: "/logos/manutd.png" },
    { name: "Rezzil", logo: "/logos/rezzil.png" },
    { name: "Teremana", logo: "/logos/teremana.png" },
    { name: "Icon", logo: "/logos/icon.png" },
    { name: "Padel Social Club", logo: "/logos/padel.png" },
    { name: "Fresh Ego Kid", logo: "/logos/freshegokid.png" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Concepts",
      description: "We dive deep into your brand, develop compelling concepts, and create a content strategy that resonates with your audience.",
      timeline: "Week 1",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Production",
      description: "High-quality cinematic shoots with consistent style and storytelling aligned with your vision.",
      timeline: "Week 2-3",
      icon: <Play className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Post-Production & Delivery",
      description: "Professional editing, color grading, and delivery of polished content ready for launch across all platforms.",
      timeline: "Week 3-4",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Entaview transformed our content strategy. The quality and consistency have elevated our brand presence significantly.",
      author: "Marketing Director",
      company: "Leading Sports Brand",
      rating: 5
    },
    {
      quote: "The subscription model gives us peace of mind knowing we'll always have premium content ready to deploy.",
      author: "Brand Manager", 
      company: "Lifestyle Brand",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What's included in each monthly content drop?",
      answer: "Each drop includes 1 hero film (30-60 seconds), 3-5 social cutdowns (15-30 seconds), 5-8 reels/stories, and behind-the-scenes content. All content is delivered edited, color-graded, and ready for posting."
    },
    {
      question: "How many revision rounds are included?",
      answer: "We include 2 rounds of revisions for each piece of content. Additional revisions can be accommodated and will be discussed during the planning phase."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel with 30 days notice after completing your minimum 3-month commitment. We want to ensure the subscription works for your business needs."
    },
    {
      question: "Do you handle the creative strategy and planning?",
      answer: "Absolutely. We handle all ideation, storyboarding, campaign concepts, and content planning. You'll have input at every stage, but we take care of the creative heavy lifting."
    },
    {
      question: "What's the typical turnaround time?",
      answer: "Our standard process is 4 weeks from concept to delivery. Rush projects can be accommodated with additional planning and may affect the timeline for subsequent content."
    },
    {
      question: "Who owns the content rights?",
      answer: "You own all the content we create for your brand. We retain the right to showcase the work in our portfolio and case studies unless otherwise specified."
    }
  ];

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
              Content<br />
              <span className="text-fiery italic">Partnership</span>
            </h1>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-oswald font-medium text-white mb-6 tracking-wide uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            CONSISTENT, CULTURE-SHAPING CONTENT FOR YOUR BRAND
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white mb-12 max-w-3xl mx-auto leading-relaxed"
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

      {/* Vertical Video Reels Section - Netflix Style */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Latest Content</h2>
            <p className="text-gray-400 text-sm">Premium vertical content for social media</p>
          </motion.div>
          
          {/* Horizontal Scrolling Vertical Videos */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {/* Vertical Video 1 */}
            <motion.div 
              className="flex-shrink-0 w-48 h-80 bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VideoErrorBoundary>
                <SimpleVideoAutoplay
                  src="/Teremana UK Launch (20 Sec Cutdown - Vertical) (1)_1749495031895.mp4"
                  className="w-full h-full object-cover"
                  enableHoverPlay={true}
                />
              </VideoErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold">Teremana Launch</h3>
                <p className="text-xs text-gray-300">20 sec</p>
              </div>
            </motion.div>

            {/* Vertical Video 2 */}
            <motion.div 
              className="flex-shrink-0 w-48 h-80 bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VideoErrorBoundary>
                <SimpleVideoAutoplay
                  src="/15 MIN - ICON BLACK FRIDAY HEIST  - RICO GETS AWAY (ADS)_1749493489639.mp4"
                  className="w-full h-full object-cover"
                  enableHoverPlay={true}
                />
              </VideoErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold">ICON Black Friday</h3>
                <p className="text-xs text-gray-300">15 min</p>
              </div>
            </motion.div>

            {/* Vertical Video 3 */}
            <motion.div 
              className="flex-shrink-0 w-48 h-80 bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VideoErrorBoundary>
                <SimpleVideoAutoplay
                  src="/2025 Showreel MAKU (1)_1749340063718.mp4"
                  className="w-full h-full object-cover"
                  enableHoverPlay={true}
                />
              </VideoErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold">MAKU Showreel</h3>
                <p className="text-xs text-gray-300">2025</p>
              </div>
            </motion.div>

            {/* Vertical Video 4 */}
            <motion.div 
              className="flex-shrink-0 w-48 h-80 bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VideoErrorBoundary>
                <SimpleVideoAutoplay
                  src="/Rezzil 16-9 PSVR Final_1749337960289.mp4"
                  className="w-full h-full object-cover"
                  enableHoverPlay={true}
                />
              </VideoErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold">Rezzil PSVR</h3>
                <p className="text-xs text-gray-300">16:9</p>
              </div>
            </motion.div>

            {/* Vertical Video 5 */}
            <motion.div 
              className="flex-shrink-0 w-48 h-80 bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VideoErrorBoundary>
                <SimpleVideoAutoplay
                  src="/Padel Website (Wide - FINAL) _1749158053418.mp4"
                  className="w-full h-full object-cover"
                  enableHoverPlay={true}
                />
              </VideoErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold">Padel Website</h3>
                <p className="text-xs text-gray-300">Wide format</p>
              </div>
            </motion.div>

            {/* Vertical Video 6 */}
            <motion.div 
              className="flex-shrink-0 w-48 h-80 bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VideoErrorBoundary>
                <SimpleVideoAutoplay
                  src="/ICON_Heist_FullFilm_Edit06_OriginalVersion_DC (1)_1749333927336.mp4"
                  className="w-full h-full object-cover"
                  enableHoverPlay={true}
                />
              </VideoErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold">ICON Heist</h3>
                <p className="text-xs text-gray-300">Full film</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-fiery text-white" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-6 tracking-tight uppercase">
              What's <span className="text-onyx">Included</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white max-w-3xl mx-auto">
              Everything you need for a consistent, professional content presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${
                  hoveredFeature === index ? 'bg-white text-fiery shadow-lg' : 'bg-onyx text-white'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-oswald font-medium mb-4 uppercase tracking-wide group-hover:text-onyx transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-jetbrains-mono text-white leading-relaxed group-hover:text-onyx transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-onyx" ref={socialProofRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSocialProofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-roboto-condensed font-black leading-[0.85] mb-6 text-white tracking-tight uppercase">
              Trusted by <span className="text-fiery">Leading Brands</span>
            </h2>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSocialProofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isSocialProofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-fiery fill-current" />
                  ))}
                </div>
                <p className="text-white/90 font-jetbrains-mono text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-fiery font-oswald font-medium text-sm uppercase tracking-wide">
                    {testimonial.author}
                  </p>
                  <p className="text-white/60 font-jetbrains-mono text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-24 bg-fiery text-white" ref={processRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-6 tracking-tight uppercase">
              Our <span className="text-onyx">Process</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white max-w-3xl mx-auto">
              From concept to delivery - a streamlined 3-step process that delivers results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-onyx/30"></div>
                )}
                
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-onyx text-white rounded-full flex items-center justify-center mr-8">
                  <span className="text-xl font-roboto-condensed font-black">{step.step}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-onyx/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-fiery">{step.icon}</div>
                      <h3 className="text-2xl font-oswald font-medium uppercase tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-onyx/60">
                      <Clock className="w-4 h-4" />
                      <span className="font-jetbrains-mono text-sm">{step.timeline}</span>
                    </div>
                  </div>
                  <p className="font-jetbrains-mono text-white leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Benefits Section - Netflix Style */}
      <section className="py-24 bg-black text-white" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isBenefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Dedicated Account Management
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A seamless process from concept to delivery, so you can focus on your business.
              </p>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Ideal For:
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-onyx">
                <VideoErrorBoundary>
                  <SimpleVideoAutoplay
                    src="/2025 Showreel MAKU (1)_1749340063718.mp4"
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
      <section className="py-24 bg-fiery text-white" ref={pricingRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-6 tracking-tight uppercase">
              <span className="text-onyx">Investment</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white max-w-3xl mx-auto">
              Transform your brand with premium content that drives results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-12 rounded-lg border-2 border-fiery shadow-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-fiery/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-oswald font-medium mb-4 uppercase tracking-wide">
                      Starting from
                    </h3>
                    <div className="mb-6">
                      <span className="text-6xl md:text-7xl font-roboto-condensed font-black text-fiery">{investmentInfo.price}</span>
                      <span className="text-2xl font-jetbrains-mono text-onyx/70">/{investmentInfo.period}</span>
                    </div>
                    <p className="font-jetbrains-mono text-onyx/80 text-lg mb-4">
                      {investmentInfo.description}
                    </p>
                    <p className="font-jetbrains-mono text-onyx/60 text-sm">
                      ({investmentInfo.minimum})
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fiery" />
                      <span className="font-jetbrains-mono text-onyx/80">4-6 pieces of premium content monthly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fiery" />
                      <span className="font-jetbrains-mono text-onyx/80">Full creative strategy & planning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fiery" />
                      <span className="font-jetbrains-mono text-onyx/80">Professional editing & color grading</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fiery" />
                      <span className="font-jetbrains-mono text-onyx/80">Dedicated account management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fiery" />
                      <span className="font-jetbrains-mono text-onyx/80">Priority booking & fast turnaround</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button 
                      className="bg-fiery text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 hover:bg-fiery/90 hover:shadow-lg flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      BOOK A DISCOVERY CALL
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link href="/our-work">
                    <motion.button 
                      className="border-2 border-onyx text-onyx hover:bg-onyx hover:text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      VIEW PORTFOLIO
                      <Play className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-onyx" ref={faqRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-6 text-white tracking-tight uppercase">
              <span className="text-fiery">Frequently Asked</span><br />Questions
            </h2>
            <p className="text-xl font-jetbrains-mono text-white/80 max-w-3xl mx-auto">
              Everything you need to know about our partnership service
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-white/10 last:border-b-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <button
                  className="w-full py-6 flex items-center justify-between text-left hover:text-fiery transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl md:text-2xl font-oswald font-medium text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-fiery flex-shrink-0 transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="font-jetbrains-mono text-white/80 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-onyx relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-roboto-condensed font-black leading-[0.85] mb-8 text-white tracking-tight uppercase">
              Ready to keep your brand<br />
              <span className="text-fiery">leading the conversation?</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white/80 mb-12 max-w-3xl mx-auto">
              Join the brands that never run out of premium content. Transform your strategy with consistent, culture-shaping content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact">
                <motion.button 
                  className="bg-fiery hover:bg-fiery/90 text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 flex items-center gap-3 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  BOOK A DISCOVERY CALL
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/our-work">
                <motion.button 
                  className="border border-white/30 text-white hover:bg-white/10 px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 flex items-center gap-3 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  VIEW PORTFOLIO
                </motion.button>
              </Link>
            </div>

            {/* Stats or Trust Indicators */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-roboto-condensed font-black text-fiery mb-2">4-6</div>
                <div className="font-jetbrains-mono text-white/80 text-sm uppercase tracking-wide">Content Pieces Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-roboto-condensed font-black text-fiery mb-2">4 Week</div>
                <div className="font-jetbrains-mono text-white/80 text-sm uppercase tracking-wide">Average Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-roboto-condensed font-black text-fiery mb-2">100%</div>
                <div className="font-jetbrains-mono text-white/80 text-sm uppercase tracking-wide">Content Ownership</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}