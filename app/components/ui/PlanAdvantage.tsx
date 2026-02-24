import { Zap } from "lucide-react";

interface PlanAdvantageProps {
  bgColor: "primary" | "gray";
  advantage: string;
}

export default function PlanAdvantage({
  bgColor,
  advantage,
}: PlanAdvantageProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Icone */}
      <div
        className={`w-5 h-5 flex items-center justify-center rounded-full ${
          bgColor === "primary" ? "bg-primary-normal" : "bg-[#D9D9D9] "
        }`}
      >
        <Zap size={12} fill="white" stroke="white" color="white" />
      </div>
      {/* fonctionnalité */}
      <p className="text-base lg:text-lg text-darker font-medium">
        {advantage}
      </p>
    </div>
  );
}
