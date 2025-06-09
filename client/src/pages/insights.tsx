import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import { Calendar, ArrowRight, User } from "lucide-react";

export default function Insights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = ["Campaign Strategy", "BTS (Behind the Scenes)", "Creative Process"];

  const articles = [
    {
      id: 1,
      title: "How ICON Amsterdam Generated £500K in Launch Sales Through Strategic Video Content",
      category: "Campaign Strategy",
      excerpt: "Breaking down the creative strategy and execution behind one of our most successful brand film campaigns.",
      author: "Entaview Team",
      date: "2024-03-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Behind the Scenes: Creating Cinematic Content for Jägermeister's Culture Campaign",
      category: "BTS (Behind the Scenes)",
      excerpt: "An inside look at our production process for capturing authentic nightlife culture and community spirit.",
      author: "Entaview Team", 
      date: "2024-03-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "The Art of Visual Storytelling: Why Brands Need More Than Just Pretty Pictures",
      category: "Creative Process",
      excerpt: "Exploring the difference between content that converts and content that just looks good.",
      author: "Entaview Team",
      date: "2024-03-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "From Concept to Culture: PlayStation VR Campaign Case Study",
      category: "Campaign Strategy",
      excerpt: "How we turned gaming technology into a cultural movement through documentary-style content.",
      author: "Entaview Team",
      date: "2024-02-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "The Future of Short-Form Content: Trends Shaping 2024",
      category: "Creative Process",
      excerpt: "What lifestyle brands need to know about evolving social media content strategies.",
      author: "Entaview Team",
      date: "2024-02-20",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Building Community Through Visual Content: Ministry of Sound Legacy Project",
      category: "BTS (Behind the Scenes)",
      excerpt: "How we captured 30 years of electronic music culture in a single brand film.",
      author: "Entaview Team",
      date: "2024-02-15",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1571266028243-3eca146fa8c4?w=600&h=400&fit=crop"
    }
  ];

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
            Tips, Stories &{" "}
            <span className="text-fiery">Insight</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-jetbrains-mono font-light text-white/80 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            For Culture-Driven Brands.
          </motion.p>

          <motion.p
            className="text-lg font-jetbrains-mono font-light text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From campaign breakdowns to strategy tips — we publish short-form advice to help brand leaders make smarter video decisions.
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section ref={ref} className="py-12 px-6 bg-gradient-to-b from-onyx to-iron">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <button className="bg-fiery text-white px-6 py-3 font-jetbrains-mono font-medium text-sm tracking-wide uppercase">
              All Posts
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white/10 text-white/70 hover:bg-white/20 hover:text-white px-6 py-3 font-jetbrains-mono font-medium text-sm tracking-wide uppercase transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 bg-iron">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/5 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-fiery text-white px-3 py-1 text-xs font-oswald font-medium tracking-wide uppercase">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-oswald font-bold text-white group-hover:text-fiery transition-colors duration-300 leading-tight">
                      {article.title}
                    </h2>
                    
                    <p className="font-jetbrains-mono text-sm text-white/70 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs font-jetbrains-mono text-white/50">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300 pt-2">
                      <span className="font-jetbrains-mono text-sm font-medium mr-2">
                        Read Article
                      </span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-t from-fiery/10 to-iron">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className="text-xl font-jetbrains-mono font-light text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Get our latest insights delivered to your inbox monthly.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fiery transition-colors duration-300"
            />
            <button className="bg-fiery text-white px-6 py-3 font-oswald font-medium tracking-widest uppercase hover:bg-fiery/90 transition-colors duration-300">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Ready to Create Your Story?
          </motion.h2>
          <motion.p
            className="text-xl font-jetbrains-mono font-light text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Let's discuss how our insights can transform your brand.
          </motion.p>
          <motion.button
            className="bg-fiery text-white px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 tracking-widest uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.1 }}
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