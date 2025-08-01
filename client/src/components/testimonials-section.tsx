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
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Working with Entaview elevated our brand story from noise to narrative. The cinematic quality speaks for itself.",
      author: "Marcus Rodriguez", 
      title: "Founder, Bold Startup",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The team's attention to detail and creative vision exceeded our expectations. Our campaign reached 10M+ views.",
      author: "James Wilson",
      title: "Marketing Director, PlayStation",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
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
          <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black mb-6 leading-[0.85] tracking-tight uppercase">
            CLIENT <em className="text-fiery not-italic">REVIEWS</em>
          </h2>
          <p className="text-xl font-jetbrains-mono font-light opacity-70 max-w-2xl mx-auto">
            See what our clients say about working with Entaview
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/90 p-8 rounded-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-fiery/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Rating Stars */}
              <div className="flex mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="text-fiery text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              
              <blockquote className="text-lg font-jetbrains-mono mb-6 leading-relaxed relative z-10 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center relative z-10 mt-auto">
                <motion.div 
                  className="w-12 h-12 mr-4 overflow-hidden rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <div className="font-jetbrains-mono font-medium group-hover:text-fiery transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm opacity-70">{testimonial.title}</div>
                </div>
              </div>
              
              {/* Floating quote mark */}
              <div className="absolute top-4 right-4 text-6xl text-fiery/10 font-baskerville leading-none select-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
