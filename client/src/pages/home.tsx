import { useEffect, useState } from "react";
import LogoLoader from "@/components/logo-loader";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import GuideSection from "@/components/guide-section";
import PlanSection from "@/components/plan-section";
import StakesSection from "@/components/stakes-section";
import CoreOffersSection from "@/components/core-offers-section";
import FeaturesSection from "@/components/features-section";
import VideoGallerySection from "@/components/video-gallery-section";
import BrandingShowcaseSection from "@/components/branding-showcase-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
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
      <GuideSection />
      <PlanSection />
      <StakesSection />
      <CoreOffersSection />
      <FeaturesSection />
      <VideoGallerySection />
      <BrandingShowcaseSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
    </div>
  );
}
