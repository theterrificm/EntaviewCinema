import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { CheckCircle, Download, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import entaviewLogo from "@assets/Layer 25@4x.png";

export default function LeadMagnet() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success! Check your email for the guide.",
        description: "We've sent your Video Marketing Blueprint to your inbox.",
      });
      setIsSubmitting(false);
      // In a real app, redirect to thank-you page
      window.location.href = "/thank-you";
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "Plan your first high-impact video campaign",
    "Tips to increase social engagement using video",
    "Learn how to measure video ROI for your brand"
  ];

  const trustElements = [
    { icon: <Users className="w-5 h-5" />, text: "Trusted by 250+ lifestyle brands" },
    { icon: <Shield className="w-5 h-5" />, text: "We respect your privacy" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "No spam, unsubscribe anytime" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="bg-white border-b border-iron/20 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <img 
              src={entaviewLogo} 
              alt="Entaview Creative"
              className="h-6 w-auto"
            />
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="text-onyx border-onyx hover:bg-onyx hover:text-white">
              Book a Call
            </Button>
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
            <h1 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-8 text-onyx tracking-tight uppercase">
              Unlock Your Free<br />
              <span className="text-fiery italic">Video Marketing</span><br />
              Blueprint
            </h1>
            
            <p className="text-2xl md:text-3xl font-oswald font-medium text-onyx/80 mb-12 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
              Learn how lifestyle brands use video to build culture, connect with audiences, and drive growth.
            </p>

            {/* Benefits List */}
            <div className="max-w-2xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 mb-6 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-fiery mt-1 flex-shrink-0" />
                  <span className="text-lg font-jetbrains-mono text-onyx/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-onyx text-white" ref={formRef}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <Download className="w-12 h-12 text-fiery mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-roboto-condensed font-black leading-[0.85] mb-4 tracking-tight uppercase">
                Get Your <span className="text-fiery italic">Free Guide</span>
              </h2>
              <p className="text-lg font-jetbrains-mono text-white/80">
                Enter your details below to download the 10-Step Video Marketing Blueprint
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white font-jetbrains-mono text-sm tracking-wide">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-fiery focus:ring-fiery"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white font-jetbrains-mono text-sm tracking-wide">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-fiery focus:ring-fiery"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="businessName" className="text-white font-jetbrains-mono text-sm tracking-wide">
                  Brand/Business Name (Optional)
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-fiery focus:ring-fiery"
                  placeholder="Enter your brand or business name"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-fiery hover:bg-fiery/90 text-white font-oswald font-medium text-lg tracking-widest uppercase py-4 transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Get My Free Guide"}
              </Button>
            </form>

            {/* Trust Elements */}
            <div className="mt-12 space-y-4">
              {trustElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center gap-3 text-white/70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {element.icon}
                  <span className="font-jetbrains-mono text-sm">{element.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-white/60 font-jetbrains-mono text-sm">
                We respect your privacy. No spam. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-iron/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-roboto-condensed font-black text-onyx mb-8 uppercase tracking-wide">
            Join brands creating <span className="text-fiery italic">culture-shaping</span> content
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            <div className="text-center">
              <div className="text-3xl font-roboto-condensed font-black text-fiery mb-2">250+</div>
              <p className="font-jetbrains-mono text-onyx/70 text-sm">Films Created</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-roboto-condensed font-black text-fiery mb-2">50+</div>
              <p className="font-jetbrains-mono text-onyx/70 text-sm">Lifestyle Brands</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-roboto-condensed font-black text-fiery mb-2">10M+</div>
              <p className="font-jetbrains-mono text-onyx/70 text-sm">Views Generated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-roboto-condensed font-black text-fiery mb-2">98%</div>
              <p className="font-jetbrains-mono text-onyx/70 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}