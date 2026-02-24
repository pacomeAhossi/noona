import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";
import PricingSection from "./components/sections/PricingSection";
import WhyUsSection from "./components/sections/WhyUsSection";

export default function Home() {
  return (
    <div className="relative pt-10 md:pt-20">
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <PricingSection />
    </div>
  );
}
