import Image from "next/image";

interface Feature {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="relative">
      {/* card image */}
      <div className="max-w-104 sm:h-70 bg-background mb-4 md:mb-8 rounded-2xl ">
        <div className="flex  items-center justify-center ">
          <Image
            src={feature.imageSrc}
            alt={`{$feature.imageSrc} Interface`}
            className={`object-contain p-6`}
            width={320}
            height={302}
            // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      {/* Contenu du bas */}
      <div className="space-y-1 md:space-y-4">
        <p className="text-lg md:text-xl text-darker font-bold">
          {" "}
          {feature.title}{" "}
        </p>
        <p className="text-xs md:text-base text-neutral-dark font-medium ">
          {" "}
          {feature.description}{" "}
        </p>
      </div>
    </div>
  );
}
