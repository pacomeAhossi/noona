import Image from "next/image";
import React from "react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitCardProps {
  benefit: Benefit;
}
export default function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="px-4 py-6 rounded-3xl bg-card w-auto h-auto md:min-h-52">
      <div className="relative w-10 h-10 mb-2">
        <Image
          src={benefit.icon}
          width={40}
          height={40}
          className="w-full"
          alt={benefit.title}
        />
      </div>
      <p className="text-sm sm:text-xl text-darker font-bold mb-4">
        {" "}
        {benefit.title}{" "}
      </p>
      <p className="text-xs sm:text-base text-darker">{benefit.description}</p>
    </div>
  );
}
