import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Eye, Target, Zap } from "lucide-react";

export default function CampaignResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const campaigns = [
    {
      brand: "ICON Amsterdam",
      campaign: "Fashion Launch",
      results: [
        { metric: "£500K", label: "in quality sales" },
        { metric: "27%", label: "uplift in conversions" },
        { metric: "15%", label: "IG follower growth" }
      ]
    },
    {
      brand: "PlayStation",
      campaign: "Rezzil Player Campaign",
      results: [
        { metric: "80+", label: "worldwide gaming platforms" },
        { metric: "22%", label: "increase in launch sales" },
        { metric: "120K", label: "views opening week" },
        { metric: "95%", label: "positive sentiment" }
      ]
    },
    {
      brand: "Jägermeister",
      campaign: "Meister Hunter Series",
      results: [
        { metric: "250K+", label: "views across campaign" },
        { metric: "61%", label: "boost in engagement" }
      ]
    },
    {
      brand: "Gain the Edge",
      campaign: "Brand Film Launch",
      results: [
        { metric: "17%", label: "increase in sales post-launch" },
        { metric: "75%+", label: "uplift in engagement" }
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-onyx text-stone relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fiery rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-fiery rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-roboto-condensed font-black mb-6 leading-[0.85] tracking-tight uppercase text-stone">
            <span className="text-fiery">Performance</span> That Speaks <em className="italic">Volumes</em>
          </h2>
          <p className="text-xl md:text-2xl font-jetbrains-mono font-light opacity-80 max-w-3xl mx-auto">
            Real campaigns. Real results. Real impact on brands that matter.
          </p>
        </motion.div>

        {/* Campaign Results Grid */}
        <div className="space-y-16 mb-20">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.brand}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Campaign Title */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-roboto-condensed font-black text-fiery uppercase tracking-wide mb-2">
                  {campaign.brand}
                </h3>
                <p className="text-lg font-jetbrains-mono font-light opacity-60 uppercase tracking-widest">
                  {campaign.campaign}
                </p>
              </div>

              {/* Results in AOD-style layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-8">
                {campaign.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center">
                    <div className="text-5xl md:text-7xl font-anton font-black text-stone mb-2 tracking-tight">
                      {result.metric}
                    </div>
                    <div className="text-sm md:text-base font-jetbrains-mono uppercase tracking-widest opacity-60">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {index < campaigns.length - 1 && (
                <div className="w-24 h-px bg-fiery/30 mx-auto mt-16"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-fiery/10 border border-fiery/30 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-roboto-condensed font-black mb-4 text-fiery uppercase">
            Ready for Your Results Story?
          </h3>
          <p className="text-lg font-jetbrains-mono font-light opacity-80 mb-8 max-w-2xl mx-auto">
            These aren't lucky breaks. They're the result of strategic creativity that puts performance first.
          </p>
          <motion.button
            className="bg-fiery text-onyx px-12 py-4 text-lg font-oswald font-medium hover:bg-fiery/90 transition-all duration-300 shadow-lg hover:shadow-xl tracking-widest uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Campaign
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}