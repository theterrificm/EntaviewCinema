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
      title: "Creative Director, Lifestyle Brand",
      rating: 5
    },
    {
      quote: "Working with Entaview elevated our brand story from noise to narrative. The cinematic quality speaks for itself.",
      author: "Marcus Rodriguez", 
      title: "Founder, Bold Startup",
      rating: 5
    },
    {
      quote: "The team's attention to detail and creative vision exceeded our expectations. Our campaign reached 10M+ views.",
      author: "James Wilson",
      title: "Marketing Director, PlayStation",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-stone text-onyx" ref={ref} id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-helvetica font-light mb-6">
            Client Reviews
          </h2>
          <p className="text-xl font-helvetica font-light opacity-70 max-w-2xl mx-auto">
            See what our clients say about working with Entaview
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-fiery text-lg">★</span>
                ))}
              </div>
              
              <blockquote className="text-lg font-helvetica mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-fiery/20 rounded-full flex items-center justify-center mr-4 text-fiery font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-helvetica font-medium">{testimonial.author}</div>
                  <div className="text-sm opacity-70">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
