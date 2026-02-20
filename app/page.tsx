import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div className="relative pt-10 md:pt-20">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
