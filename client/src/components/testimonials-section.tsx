import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const testimonials = [
    {
      quote: "Entaview didn't just create a film for us—they created a cultural moment. The response was unlike anything we'd seen before.",
      author: "Sarah Chen",
      title: "Creative Director at Lifestyle Brand"
    },
    {
      quote: "Working with Entaview elevated our brand story from noise to narrative. The cinematic quality speaks for itself.",
      author: "Marcus Rodriguez",
      title: "Founder, Bold Startup"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone text-onyx relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 right-0 w-36 h-36 bg-fiery/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-24 h-24 border border-onyx/10 rotate-12 floating-element"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-divider pt-8 mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-center mb-12 geometric-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              <div className="relative z-10 p-8">
                <div className="text-fiery text-6xl font-light mb-4 opacity-20">"</div>
                <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8 -mt-8">
                  {testimonial.quote}
                </blockquote>
                <cite className="text-lg opacity-80 flex items-center">
                  <div className="w-12 h-12 bg-fiery/20 rounded-full flex items-center justify-center mr-4 text-fiery font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-medium">{testimonial.author}</span>
                    <br />
                    <span className="text-sm opacity-60">{testimonial.title}</span>
                  </div>
                </cite>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
