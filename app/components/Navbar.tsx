"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Liste des liens de navigation
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#why-us", label: "Why us" },
  ];

  return (
    <nav
      className="
      bg-card border-b border-border
      sticky top-0 z-50
      backdrop-blur-sm bg-card/95
    "
    >
      <div
        className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
      "
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            {/* Icône "n" stylisé - vous remplacerez par votre logo */}
            <div
              className="
              w-8 h-8 md:w-10 md:h-10
              rounded-lg
              bg-primary
              flex items-center justify-center
              text-primary-foreground font-bold text-lg
            "
            >
              n
            </div>

            {/* Texte du logo */}
            <div className="flex flex-col leading-none">
              <span className="text-foreground font-semibold text-base md:text-lg">
                noona
              </span>
              <span className="text-muted-foreground text-xs md:text-sm">
                kasir
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP - Caché sur mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-foreground text-md font-medium
                  hover:text-primary
                  transition-colors duration-200
                  relative
                  after:absolute after:bottom-0 after:left-0 after:right-0
                  after:h-0.5 after:bg-primary
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-200
                  hover:after:scale-x-100
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON - Desktop */}
          <div className="hidden md:block">
            <Link
              href="#trial"
              className="
                inline-flex items-center justify-center
                px-6 py-2.5
                bg-primary text-primary-foreground
                hover:bg-primary-hover
                rounded-lg
                font-medium text-md
                transition-colors duration-200
                shadow-sm hover:shadow-md
              "
            >
              Free Trial
            </Link>
          </div>

          {/* BOUTON HAMBURGER - Mobile uniquement */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              md:hidden
              p-2 rounded-lg
              text-foreground
              hover:bg-neutral-light
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-primary
            "
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Icône hamburger animée */}
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`
                h-0.5 w-full bg-current rounded-full
                transition-all duration-300 origin-left
                ${isMobileMenuOpen ? "rotate-45" : ""}
              `}
              />
              <span
                className={`
                h-0.5 w-full bg-current rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "opacity-0" : ""}
              `}
              />
              <span
                className={`
                h-0.5 w-full bg-current rounded-full
                transition-all duration-300 origin-left
                ${isMobileMenuOpen ? "-rotate-45" : ""}
              `}
              />
            </div>
          </button>
        </div>

        {/* MENU MOBILE - Slide down */}
        <div
          className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="py-4 space-y-3 border-t border-border">
            {/* Liens de navigation mobile */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  block px-4 py-2 rounded-lg
                  text-foreground font-medium text-md
                  hover:bg-neutral-light
                  hover:text-primary
                  transition-colors duration-200
                "
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button mobile */}
            <div className="px-4 pt-2">
              <Link
                href="#trial"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  w-full
                  inline-flex items-center justify-center
                  px-6 py-3
                  bg-primary text-primary-foreground
                  hover:bg-primary-hover
                  rounded-lg
                  font-medium text-md
                  transition-colors duration-200
                "
              >
                Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
