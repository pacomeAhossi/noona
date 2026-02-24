"use client";

import PlanCard from "../composite/PlanCard";

interface Advantage {
  bgColor: "primary" | "gray";
  listAdvantage: string;
}
interface TieredPricing {
  title: string;
  advantage: Advantage[];
}
interface Plan {
  planTitle: string;
  subTitle: string;
  amount: string;
  description: string;
  planOffer: TieredPricing[];
}

const plansList: Plan[] = [
  {
    planTitle: "Basic",
    subTitle: "Perfect plan to get started",
    amount: "129.000",
    description: "Features you get by buying basic",
    planOffer: [
      {
        title: "Basic POS features",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Digital Cashier Application",
          },
          {
            bgColor: "primary",
            listAdvantage: "Employee Managment (2 employees)",
          },
        ],
      },
      {
        title: "Payment Receipt",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Digital Payment Throught QRIS",
          },
        ],
      },
      {
        title: "Payment Receipt",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Dashboard Laporan Realtime",
          },
          {
            bgColor: "gray",
            listAdvantage: "Raw Material Management",
          },
          {
            bgColor: "gray",
            listAdvantage: "Prescription Management",
          },
          {
            bgColor: "gray",
            listAdvantage: "Cost of Goods Sold",
          },
        ],
      },
      {
        title: "Other Support",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Online Education & Training",
          },
          {
            bgColor: "primary",
            listAdvantage: "Call Centre Support",
          },
          {
            bgColor: "primary",
            listAdvantage: "WhatsApp Support",
          },
        ],
      },
    ],
  },
  {
    planTitle: "Premium",
    subTitle: "Perfect plan to get started",
    amount: "159.000",
    description: "Features you get by buying Premium",
    planOffer: [
      {
        title: "Basic POS features",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Digital Cashier Application",
          },
          {
            bgColor: "primary",
            listAdvantage: "Employee Managment (5 employees)",
          },
        ],
      },
      {
        title: "Payment Receipt",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Digital Payment Throught QRIS",
          },
        ],
      },
      {
        title: "Payment Receipt",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Dashboard Laporan Realtime",
          },
          {
            bgColor: "gray",
            listAdvantage: "Raw Material Management",
          },
          {
            bgColor: "gray",
            listAdvantage: "Prescription Management",
          },
          {
            bgColor: "gray",
            listAdvantage: "Cost of Goods Sold",
          },
        ],
      },
      {
        title: "Other Support",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Online Education & Training",
          },
          {
            bgColor: "primary",
            listAdvantage: "Call Centre Support",
          },
          {
            bgColor: "primary",
            listAdvantage: "WhatsApp Support",
          },
        ],
      },
    ],
  },
  {
    planTitle: "Pro",
    subTitle: "Perfect plan to get started",
    amount: "189.000",
    description: "Features you get by buying Pro",
    planOffer: [
      {
        title: "Basic POS features",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Digital Cashier Application",
          },
          {
            bgColor: "primary",
            listAdvantage: "Employee Managment (10 employees)",
          },
        ],
      },
      {
        title: "Payment Receipt",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Digital Payment Throught QRIS",
          },
        ],
      },
      {
        title: "Payment Receipt",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Dashboard Laporan Realtime",
          },
          {
            bgColor: "primary",
            listAdvantage: "Raw Material Management",
          },
          {
            bgColor: "primary",
            listAdvantage: "Prescription Management",
          },
          {
            bgColor: "primary",
            listAdvantage: "Cost of Goods Sold",
          },
        ],
      },
      {
        title: "Other Support",
        advantage: [
          {
            bgColor: "primary",
            listAdvantage: "Online Education & Training",
          },
          {
            bgColor: "primary",
            listAdvantage: "Call Centre Support",
          },
          {
            bgColor: "primary",
            listAdvantage: "WhatsApp Support",
          },
        ],
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-card pb-20 md:pb-28 lg:pb-44">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-darker font-bold max-sm:text-balance">
              Ready to Improve efficiency with us?
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-neutral-dark font-medium">
              Choose a plan that suits your business needs
            </p>
          </div>
          <div className="w-full mt-5 lg:mt-10 px-6 md:px-0 lg:px-4">
            {/* Grid pour afficher les plans de forfait */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {plansList.map((plan) => (
                <PlanCard key={plan.planTitle} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
