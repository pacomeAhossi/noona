"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BenefitCard from "./BenefitCard";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitCarouselProps {
  benefits: Benefit[];
}

export function BenefitsCarousel({ benefits }: BenefitCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });
  // State pour désactiver le bouton
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // On écoute le changement des slides
  useEffect(() => {
    if (!emblaApi) return;

    requestAnimationFrame(() => {
      onSelect();
    });
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // fonction pour aller à la slide précédente
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  // Fonction pour aller à la slide suivante
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full px-4 md:px-0">
      {/* CAROUSEL */}
      <div className="overflow-hidden w-full mb-8" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_270px] md:flex-[0_0_270px] pl-4 md:pl-6 min-w-0 cursor-pointer"
            >
              <BenefitCard benefit={benefit} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation pour desktop */}
      <div className="hidden md:flex gap-4 justify-start">
        <NavButton
          direction="prev"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <NavButton
          direction="next"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>

      {/*Boutons flottants sur les côtés sur mobile */}
      <div className="md:hidden">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute top-1/2 -left-5 -translate-y-1/2 z-10 p-2 disabled:opacity-0 transition-opacity"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute top-1/2 -right-5 -translate-y-1/2 z-10 p-2 disabled:opacity-0 transition-opacity"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

// Sous-composant pour éviter la répétition du style des boutons desktop
function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center w-12 h-12 rounded-lg bg-card border border-border hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
    >
      {direction === "prev" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}

// Icons simples
// const ArrowLeftIcon = () => (
//   <svg
//     className="w-5 h-5"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M15 19l-7-7 7-7"
//     />
//   </svg>
// );
// const ArrowRightIcon = () => (
//   <svg
//     className="w-5 h-5"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M9 5l7 7-7 7"
//     />
//   </svg>
// );
