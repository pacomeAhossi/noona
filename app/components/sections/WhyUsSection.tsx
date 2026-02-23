import Image from "next/image";
import { BenefitsCarousel } from "../composite/BenefitsCarousel";
import { Button } from "../ui/Button";

export default function WhyUsSection() {
  interface Benefit {
    icon: string;
    title: string;
    description: string;
  }

  const benefits: Benefit[] = [
    {
      icon: "/assets/icons/trending-up.png",
      title: "Simple & Accurate",
      description: "Monitor Outlet revenue receipts in real-time.",
    },
    {
      icon: "/assets/icons/discount.png",
      title: "Affordable",
      description: "Affordable price in its class.",
    },
    {
      icon: "/assets/icons/discount.png",
      title: "Domestic works",
      description: "Designed and built by the nation's children.",
    },
    {
      icon: "/assets/icons/trending-up.png",
      title: "Continuous innovation",
      description:
        "We continue to develop, according to the difficulties found in the field.",
    },
  ];

  return (
    <section className="relative bg-card py-20 md:py-28 lg:py-44">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background p-7 md:p-10 lg:p-15 rounded-3xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {/* aperçu mockup mobile */}
              <div className="bg-secondary rounded-2xl px-17.5 pt-8 pb-5 ">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/img/features/mobile-interface.png"
                    width={347}
                    height={602}
                    alt="Mobile app interface"
                  />
                </div>
              </div>
              {/* side why */}
              <div className="px-4">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darker leading-tight">
                    Why you should choose Noona?
                  </h2>
                  <p className="text-sm sm:text-lg lg:text-xl text-neutral-dark font-medium">
                    because we provide what you need, so you will feel satisfied
                    with our performance.
                  </p>
                </div>
                <div className="py-4">
                  {/* <BenefitsCarousel benefits={benefits} /> */}
                  <BenefitsCarousel benefits={benefits} />
                </div>
                {/* Bouton CTA */}
                <div className="pt-4">
                  <Button variant="primary" href="#pricing">
                    Try Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
