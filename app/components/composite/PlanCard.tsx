import { Button } from "../ui/Button";
import PlanAdvantage from "../ui/PlanAdvantage";

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

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="p-4 md:p-8 bg-background rounded-3xl">
      <div className="relative">
        <div className="space-y-4">
          <h5 className="text-2xl md:text-3xl lg:text-4xl text-primary-normal font-bold">
            {plan.planTitle}{" "}
          </h5>
          <p className="text-base md:text-xl text-neutral-normal font-medium">
            {plan.subTitle}{" "}
          </p>
        </div>
        <div className="my-6">
          <p className="text-base md:text-xl text-neutral-normal font-medium">
            {" "}
            <span className="text-2xl md:text-3xl text-black font-bold">{`IDR ${plan.amount}`}</span>{" "}
            /month
          </p>
        </div>
        <p className="text-sm md:text-lg lg:text-xl text-neutral-normal font-medium">
          {plan.description}
        </p>
        {/* Affichage des offres de plan */}
        {/* avantage inclus dans le plan + les fonctionnalités */}
        <div className="my-6 space-y-4">
          {plan.planOffer.map((planOffer_item, index) => (
            <div key={`${planOffer_item.title}-${index}`} className="space-y-4">
              <p className="text-sm md:text-xl text-black font-medium">
                {planOffer_item.title}{" "}
              </p>
              {/* on affiche chaque avantage du plan, icon zip + avantage */}
              {planOffer_item.advantage.map((plan_advantage, adv_index) => (
                <PlanAdvantage
                  key={`advantage-${adv_index}`}
                  bgColor={plan_advantage.bgColor}
                  advantage={plan_advantage.listAdvantage}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Bouton free trial */}
        <div className="relative">
          <Button variant="primary" href="#pricing" className="w-full">
            Free trial
          </Button>
        </div>
      </div>
    </div>
  );
}
