"use client";

import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterUsefulLinksProps {
  usefulLink: FooterSection;
}

export default function FooterUsefulLinks({
  usefulLink,
}: FooterUsefulLinksProps) {
  return (
    <div className="text-neutral-light space-y-6">
      <h4 className="text-base md:text-xl font-bold">{usefulLink.title}</h4>
      <ul className="flex flex-col gap-4">
        {usefulLink.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-base md:text-xl hover:text-neutral-dark-hover transition-colors duration-200"
            >
              {link.label}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
