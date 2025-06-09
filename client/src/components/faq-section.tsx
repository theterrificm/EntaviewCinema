import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included in your video packages?",
      answer: "Each package includes pre-production planning, full-day filming, professional editing, color grading, sound design, and multiple video formats optimized for different platforms. You'll receive raw footage, final edited videos, and usage rights for commercial use."
    },
    {
      question: "Will this actually grow my brand, or just look good?",
      answer: "Our films are built for performance, not just aesthetics. We craft strategic narratives that drive action—whether that's increasing brand awareness, generating leads, or building cultural authority. Every creative decision serves your business goals, backed by proven frameworks that convert viewers into customers."
    },
    {
      question: "How do you turn our vision into a cinematic concept?",
      answer: "We start with deep brand discovery to understand your essence, then develop concepts through our StoryBrand framework. Your vision becomes a cinematic narrative through collaborative mood boarding, strategic storytelling sessions, and iterative creative development until we achieve something authentically you—but elevated."
    },
    {
      question: "What kind of results have your campaigns delivered?",
      answer: "Our campaigns have generated millions of views across platforms, driven significant increases in brand awareness, and converted directly into sales growth. MAKU's showreel elevated their industry positioning, Teremana's launch campaign reached targeted demographics effectively, and our fashion films for ICON built cultural buzz that translated into market presence."
    },
    {
      question: "How long does the production process take from start to finish?",
      answer: "Timeline varies by project scope. Brand campaigns typically take 4-6 weeks from concept to delivery, while retainer content is delivered within 2-3 weeks. Startup launches require 6-8 weeks for comprehensive storytelling. We'll provide a detailed timeline during our discovery call."
    },
    {
      question: "Can I see examples of your work before committing?",
      answer: "Yes, our portfolio showcases authentic projects including MAKU showreels, Teremana launches, ICON fashion films, and Rezzil sports content. Each piece demonstrates our cinematic approach to brand storytelling and technical expertise."
    },
    {
      question: "Do you provide ongoing content for social media?",
      answer: "Yes, our retainer packages provide monthly content creation including behind-the-scenes footage, product showcases, and brand stories optimized for Instagram, TikTok, LinkedIn, and other platforms. This keeps your brand consistently engaging."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-24 bg-fiery text-onyx relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-onyx/20 via-transparent to-onyx/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black mb-6 leading-[0.85] tracking-tight uppercase text-onyx">
            Frequently Asked <em className="italic">Questions</em>
          </h2>
          <p className="text-xl font-jetbrains-mono font-light opacity-80 max-w-2xl mx-auto text-onyx">
            Everything you need to know about working with Entaview
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-2 border-onyx rounded-lg overflow-hidden bg-fiery"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center bg-onyx text-fiery hover:bg-onyx/90 transition-colors duration-300"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg md:text-xl font-oswald font-medium tracking-wide uppercase pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openQuestion === index ? 'auto' : 0,
                  opacity: openQuestion === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-fiery border-t-2 border-onyx">
                  <p className="text-onyx font-jetbrains-mono leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl font-oswald font-medium mb-2 text-onyx tracking-wide">
            Still have questions?
          </p>
          <p className="text-xl font-jetbrains-mono font-light text-fiery mb-8">
            Let's discuss your project.
          </p>
          <motion.button
            className="bg-onyx text-fiery px-12 py-4 text-lg font-oswald font-medium hover:bg-onyx/90 transition-all duration-300 shadow-lg hover:shadow-xl tracking-widest uppercase border-2 border-onyx"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}