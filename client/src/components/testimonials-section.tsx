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
    <section className="py-24 md:py-32 bg-stone text-onyx" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-lg opacity-80">
                <span>{testimonial.author}</span>, {" "}
                <span>{testimonial.title}</span>
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
