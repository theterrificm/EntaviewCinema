import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Users, Target, Award, Heart } from "lucide-react";
import Footer from "../components/footer";

// Import client logos
import jagermeisterLogo from "@assets/JM_INT_Logo_Wordmark_White_RGB_digital_display_1749472035908.png";
import iconLogo from "@assets/ICON LOGO white_1749472507635.png";
import remingtonLogo from "@assets/Remington White_2x_1749467036215.png";
import teremanaLogo from "@assets/Teremana_White_Gradient_Copper_Primary_Logo_sRGB (1)_1749470160928.png";
import rezzilLogo from "@assets/Rezzil Player W_1749467627330.png";
import appleMusicLogo from "@assets/Apple music White 2_1749467108225.png";
import manchesterLogo from "@assets/ManUtdLogo-notag-WO_1749467061387.png";
import freshEgoLogo from "@assets/FreshEgoKid-LockUp-White 2_1749467123710.png";

export default function About() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const clientsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isClientsInView = useInView(clientsRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const clientLogos = [
    { name: "Jägermeister", logo: jagermeisterLogo },
    { name: "Manchester United", logo: manchesterLogo },
    { name: "Apple Music", logo: appleMusicLogo },
    { name: "ICON Amsterdam", logo: iconLogo },
    { name: "Remington", logo: remingtonLogo },
    { name: "Teremana Tequila", logo: teremanaLogo },
    { name: "Rezzil Player", logo: rezzilLogo },
    { name: "Fresh Ego Kid", logo: freshEgoLogo }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Culture-First Strategy",
      description: "We don't just create content—we build cultural movements that resonate with your audience's values and aspirations."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Cinematic Excellence",
      description: "Every frame is crafted with cinematic precision, ensuring your brand story is told with the visual impact it deserves."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Measurable Results",
      description: "Beautiful visuals mean nothing without impact. We track engagement, brand awareness, and cultural influence."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-onyx via-iron to-onyx text-white relative overflow-hidden" ref={heroRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-fiery rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-fiery/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-roboto-condensed font-black leading-[0.85] mb-8 tracking-tight uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            We Are<br />
            <span className="text-fiery">Entaview Creative</span>
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl font-oswald font-medium text-white/90 max-w-4xl mx-auto leading-relaxed tracking-wide uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Culture-Driven Video Production for Brands Ready to Lead, Not Follow
          </motion.p>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-24 px-6 bg-white" ref={missionRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-8 text-onyx tracking-tight uppercase">
              The <span className="text-fiery">Mission</span>
            </h2>
            <p className="text-2xl md:text-3xl font-jetbrains-mono text-onyx/80 max-w-4xl mx-auto leading-relaxed">
              We help lifestyle brands build culture through cinematic storytelling that moves audiences, drives engagement, and creates lasting impact.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-3xl font-oswald font-medium text-onyx mb-6 uppercase tracking-wide">
                More Than Video Production
              </h3>
              <p className="text-lg font-jetbrains-mono text-onyx/70 leading-relaxed mb-6">
                In a world saturated with content, we create films that don't just capture attention—they shape culture. Every project is an opportunity to position your brand as a cultural leader.
              </p>
              <p className="text-lg font-jetbrains-mono text-onyx/70 leading-relaxed">
                We understand that lifestyle brands need more than beautiful visuals. They need strategic storytelling that resonates with their audience's values, aspirations, and cultural movements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-fiery/10 to-transparent p-8 rounded-lg border border-fiery/20">
              <div className="text-6xl font-roboto-condensed font-black text-fiery mb-4">250+</div>
              <p className="font-jetbrains-mono text-onyx/80 text-lg">
                Culture-shaping films created for lifestyle brands across fashion, hospitality, wellness, and fitness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 bg-onyx text-white" ref={teamRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-8 tracking-tight uppercase">
              Who <span className="text-fiery">We Are</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-3xl font-oswald font-medium text-white mb-6 uppercase tracking-wide">
                Founded in Leeds, Creating Globally
              </h3>
              <p className="text-lg font-jetbrains-mono text-white/80 leading-relaxed mb-6">
                Entaview Creative was born from a simple belief: lifestyle brands have the power to shape culture, not just follow trends. Based in Leeds, we've built a reputation for creating cinematic content that helps brands become cultural leaders.
              </p>
              <p className="text-lg font-jetbrains-mono text-white/80 leading-relaxed mb-6">
                Our founder's background in both commercial filmmaking and cultural strategy gives us a unique perspective on how visual storytelling can drive real business results while building authentic brand communities.
              </p>
              <p className="text-lg font-jetbrains-mono text-white/80 leading-relaxed">
                We specialize in lifestyle sectors—fashion, hospitality, wellness, and fitness—because these industries have the greatest opportunity to influence how people live, think, and connect.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-fiery" />
                <div>
                  <h4 className="text-xl font-oswald font-medium text-white">Expert Team</h4>
                  <p className="font-jetbrains-mono text-white/70">Cinematic directors, cultural strategists, and brand storytellers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-fiery" />
                <div>
                  <h4 className="text-xl font-oswald font-medium text-white">Leeds Based</h4>
                  <p className="font-jetbrains-mono text-white/70">Rooted in Yorkshire, working with brands across the UK and beyond</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Heart className="w-8 h-8 text-fiery" />
                <div>
                  <h4 className="text-xl font-oswald font-medium text-white">Culture Focus</h4>
                  <p className="font-jetbrains-mono text-white/70">Specializing in lifestyle brands ready to lead cultural movements</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-iron/10" ref={valuesRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black leading-[0.85] mb-8 text-onyx tracking-tight uppercase">
              What Sets <span className="text-fiery">Us Apart</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-onyx/70 max-w-3xl mx-auto">
              Our commitment to culture-first strategy, cinematic excellence, and measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-fiery/10 text-fiery rounded-full mb-6 group-hover:bg-fiery group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-oswald font-medium text-onyx mb-4 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="font-jetbrains-mono text-onyx/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 px-6 bg-onyx" ref={clientsRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isClientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-roboto-condensed font-black leading-[0.85] mb-6 text-white tracking-tight uppercase">
              Trusted by <span className="text-fiery">Culture Leaders</span>
            </h2>
            <p className="text-lg font-jetbrains-mono text-white/70">
              Brands that choose to lead culture, not follow it
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isClientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isClientsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-8 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-fiery to-fiery/80 text-white" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-roboto-condensed font-black leading-[0.85] mb-8 tracking-tight uppercase">
              Ready to Create Films<br />
              That <span className="text-onyx">Lead Culture?</span>
            </h2>
            <p className="text-xl font-jetbrains-mono text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how cinematic storytelling can position your brand as a cultural leader and drive meaningful engagement with your audience.
            </p>
            
            <Link href="/contact">
              <motion.button
                className="bg-onyx hover:bg-onyx/90 text-white px-12 py-4 font-oswald font-medium text-lg tracking-widest uppercase transition-all duration-300 flex items-center gap-3 justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Discovery Call
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}