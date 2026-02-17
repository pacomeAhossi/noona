"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "../ui/Button";
import Image from "next/image";

interface Partners {
  logo: string | StaticImport;
  name: string;
}

const listPartners: Partners[] = [
  {
    logo: "/assets/icons/alphawave.jpg",
    name: "AlphaWave",
  },
  {
    logo: "/assets/icons/fusion.jpg",
    name: "FusionX",
  },
  {
    logo: "/assets/icons/opticore.jpg",
    name: "OptiCore",
  },
  {
    logo: "/assets/icons/maxiwave.jpg",
    name: "MaxiWave",
  },
  {
    logo: "/assets/icons/stella.jpg",
    name: "StellarCore",
  },
];

export default function HeroSection() {
  return (
    <section id="#home">
      <div className="container m-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-darker font-black capitalize leading-tight max-w-3xl mx-auto text-center text-pretty">
            Noona digital cashier <br /> monitor outlet revenue receipts
          </h1>
          <p className="text-base sm:text-lg mt-2 font-medium max-w-2xl mx-auto max-sm:text-balance">
            we developed an innovative and efficient point-of-sale (POS)
            application specifically designed for the Indonesian MSME market.
          </p>
          <div className="mt-6 sm:mt-12.5 mb-10 md:mb-21 flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-center sm:gap-2">
            <Button
              href="#pricing"
              variant="primary"
              className="capitalize w-fit sm:w-auto"
            >
              {" "}
              Free trial
            </Button>
            <Button
              href="#"
              variant="outline"
              className="capitalize w-fit sm:w-auto"
            >
              {" "}
              Log in
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="px-4">
            <div className="flex items-center gap-4 md:justify-between flex-wrap ">
              {listPartners.map((partner) => (
                <div key={partner.name} className="flex gap-2 items-center">
                  {/* Logo */}
                  <div className="relative flex items-center justify-center gap-4">
                    <Image
                      src={partner.logo}
                      width={28}
                      height={34}
                      alt={partner.name}
                    />
                  </div>
                  {/* name */}
                  <p className="text-xs sm:text-sm text-neutral-normal">
                    {" "}
                    {partner.name}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
