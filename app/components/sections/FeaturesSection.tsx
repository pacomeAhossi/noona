"use client";
import FeatureCard from "../composite/FeatureCard";

export default function FeaturesSection() {
  interface Feature {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
  }

  const features: Feature[] = [
    {
      id: 1,
      title: "Digital Cashier Application",
      description: "Maximize profits, and provide a better experience customer",
      imageSrc: "/assets/img/features/digital_cashier_feature.png",
    },
    {
      id: 2,
      title: "Digital Payment Through QRIS",
      description: "Accept payment through various QRIS e-wallet methods",
      imageSrc: "/assets/img/features/digital_payment_feature.png",
    },
    {
      id: 3,
      title: "Realtime Report Dashboard",
      description:
        "With real-time data, you can make faster and more informed decisions",
      imageSrc: "/assets/img/features/realtime_report_feature.png",
    },
  ];
  return (
    <section id="features" className="relative bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Espace pour absorber le chauvechaument de l'image */}
          <div className="pt-[calc(25%*0.712+80px)] md:pt-[calc(50%*0.712+40px)] lg:pt-[calc(50%*0.712+100px)]" />
          <div className="text-center mb-5 md:mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-darker capitalize font-bold text-balance">
              New platform features
            </h2>
          </div>
          <div className="max-w-7xl mx-auto p-4">
            {/* Grid de features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
