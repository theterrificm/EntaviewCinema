import { useEffect, useState } from "react";
import LogoLoader from "@/components/logo-loader";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import CredibilitySection from "@/components/credibility-section";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";
import FinalCTASection from "@/components/final-cta-section";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-onyx text-white overflow-x-hidden">
      {showLoader && <LogoLoader />}
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <CredibilitySection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}
