"use client";
import Link from "next/link";
import Image from "next/image";
import FooterUsefulLinks from "../composite/FooterUsefulLinks";
import LogoImage from "../../../public/assets/logo_footer.svg";
import Linkedin from "../../../public/assets/social/linkedin.svg";
import Youtube from "../../../public/assets/social/youtube.svg";
import Facebook from "../../../public/assets/social/facebook.svg";
import Subscribe from "../composite/Subscribe";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const usefulLinks: FooterSection[] = [
  {
    title: "Company",
    links: [
      { href: "#", label: "Plans & Pricing" },
      { href: "#", label: "Platform Features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "Free Demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Cookies Policy" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 lg:py-16 bg-secondary text-neutral-light">
      <div className="container m-auto px-4 md:px-6">
        <div className="max-w-7xl m-auto">
          {/* Partie avec newsletter */}
          <Subscribe />

          {/* grid pour les useful links */}
          <div className="py-8 lg:py-16 border-b border-[#394A5A] ">
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              {/* section brand */}
              <div className="lg:col-span-2 space-y-6">
                <Link href="/">
                  <Image
                    src={LogoImage}
                    alt="Logo Noona kasir"
                    width={69}
                    height={67}
                    className="w-full h-auto max-w-17.25 "
                  />
                </Link>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium md:leading-relaxed max-w-md">
                  We growing up your business with professional treatment
                </p>
                <p className="text-base sm:text-lg md:text-2xl">
                  noona kasir, {currentYear}
                </p>
              </div>
              {/* liens utiles du footer */}
              {usefulLinks.map((usefulLink) => (
                <FooterUsefulLinks
                  key={usefulLink.title}
                  usefulLink={usefulLink}
                />
              ))}
            </div>
          </div>

          {/* all right reserved */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 text-neutral-light pt-5 md:pt-9">
            <p className="text-base md:text-xl text-neutral-light font-medium">
              &copy; noona kasir Inc. all right reserved
            </p>
            <div className="flex gap-4 md:justify-self-end">
              <div className="w-6 h-6">
                <Link
                  href="https://www.linkedin.com/in/pacôme-ahossi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Linkedin}
                    alt="Pacôme linkedin link"
                    className="w-full h-full "
                  />
                </Link>
              </div>
              <div className="w-6 h-6">
                <Link
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Youtube}
                    alt=" Youtube link"
                    className="w-full h-full "
                  />
                </Link>
              </div>
              <div className="w-6 h-6">
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Facebook}
                    alt=" Facebook link"
                    className="w-auto h-auto "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
