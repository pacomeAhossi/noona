"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../brand/Logo";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}
const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why-us", label: "Why us" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].href);
  const pathname = usePathname();

  // on désactive le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Fermer le menu au clic sur un lien
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  const handleActiveLink = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="bg-card border-b top-0 z-50 h-20">
      <div
        className="
        container mx-auto
        px-4 sm:px-6 lg:px-8
      "
      >
        <div className=" flex items-center justify-between border-b p-4 h-20">
          {/* LOGO */}
          <Logo />

          {/* NAVIGATION DESKTOP - Cachée sur mobile */}
          <nav
            className="hidden md:flex items-center bg-neutral-light p-3 rounded-[46px] w-138 h-12 "
            aria-label="Navigation principale"
          >
            <ul className="flex items-center justify-center ">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => handleActiveLink(link.href)}
                      className={`text-[#080808] text-lg font-medium px-9 py-2 transition-all duration-300 ease-out whitespace-nowrap ${
                        activeLink === link.href
                          ? "bg-background rounded-3xl "
                          : ""
                      } `}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA BUTTON - Desktop */}
          <div className="hidden md:block">
            <Button variant="primary" href="#pricing">
              Free Trial
            </Button>
          </div>

          {/* BOUTON HAMBURGER - Mobile uniquement */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              md:hidden
              p-2 rounded-lg
              text-primary
              hover:bg-neutral-light
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-primary
              relative z-50
            "
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {/* Icône hamburger animée */}
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`
                h-0.5 w-full bg-current rounded-full
                transition-all duration-300 origin-left
                ${isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""}
              `}
              />
              <span
                className={`
                h-0.5 w-full bg-current rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}
              `}
              />
              <span
                className={`
                h-0.5 w-full bg-current rounded-full
                transition-all duration-300 origin-left
                ${isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : ""}
              `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* OVERLAY - Mobile (fond sombre semi-transparent) */}
      {isMobileMenuOpen && (
        <div
          className="
            fixed inset-0 bg-darker/50 backdrop-blur-sm
            md:hidden
            z-40
            animate-in fade-in duration-200
          "
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MENU MOBILE - Slide depuis la droite */}
      <div
        className={`
          fixed top-0 right-0 bottom-0
          w-4/5 max-w-sm
          bg-card
          md:hidden
          z-50
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Contenu du menu mobile */}
        <div className="flex flex-col h-full">
          {/* En-tête du menu mobile */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Logo />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                p-2 rounded-lg
                text-foreground
                hover:bg-neutral-light
                transition-colors
              "
              aria-label="Fermer le menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation mobile */}
          <nav className=" overflow-y-auto py-6" aria-label="Navigation mobile">
            <ul className="space-y-1 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="
                      block px-4 py-3 rounded-lg
                      text-[#080808] font-medium text-lg
                      hover:bg-neutral-light
                      hover:text-primary
                      transition-colors duration-200
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button mobile - En bas */}
          <div className="p-6 border-t border-border">
            <Button
              variant="primary"
              href="#pricing"
              className="w-full"
              onClick={handleLinkClick}
            >
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
