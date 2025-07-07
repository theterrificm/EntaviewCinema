import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    project: ""
  });

  const budgetRanges = [
    "Under £5,000",
    "£5,000 - £15,000", 
    "£15,000 - £50,000",
    "£50,000 - £100,000",
    "£100,000+"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
            Let's Build Something That{" "}
            <span className="text-fiery">Leads Culture</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to transform your brand story into cinematic reality?
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            className="bg-white/5 p-8 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-oswald font-bold text-white mb-8 tracking-wide">
              Get Started
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-jetbrains-mono font-medium text-white/80 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fiery transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-jetbrains-mono font-medium text-white/80 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fiery transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-jetbrains-mono font-medium text-white/80 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fiery transition-colors duration-300"
                  placeholder="Your company or brand"
                />
              </div>

              <div>
                <label className="block text-sm font-jetbrains-mono font-medium text-white/80 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-fiery transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range} className="bg-onyx text-white">
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-jetbrains-mono font-medium text-white/80 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fiery transition-colors duration-300 resize-none"
                  placeholder="Describe your vision, goals, and what kind of content you're looking to create..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-fiery text-white px-8 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl font-oswald font-bold text-white mb-6 tracking-wide">
                Let's Connect
              </h2>
              <p className="text-lg font-jetbrains-mono font-light text-white/80 leading-relaxed mb-8">
                Based in Leeds. Available UK-wide. We reply within 1 business day.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-fiery rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-oswald font-medium text-white text-lg">Email</h3>
                  <p className="font-jetbrains-mono text-white/70">hello@entaview.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-fiery rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-oswald font-medium text-white text-lg">Phone</h3>
                  <p className="font-jetbrains-mono text-white/70">+44 (0) 113 XXX XXXX</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-fiery rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-oswald font-medium text-white text-lg">Location</h3>
                  <p className="font-jetbrains-mono text-white/70">Leeds, UK</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-oswald font-medium text-white mb-4 tracking-wide">
                What Happens Next?
              </h3>
              <ul className="space-y-3 font-jetbrains-mono text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-fiery font-bold">1.</span>
                  We review your project and schedule a discovery call within 24 hours
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fiery font-bold">2.</span>
                  Discuss your vision and receive a custom strategy proposal
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fiery font-bold">3.</span>
                  Begin creating content that moves culture
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-iron">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to Lead Culture?
          </motion.h2>
          <motion.p
            className="text-xl font-jetbrains-mono font-light text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Every culture-shifting brand started with a conversation.
          </motion.p>
          <motion.button
            className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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