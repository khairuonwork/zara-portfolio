"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Hamburger from "../hamburger/hamburger";

const navLinks = [
  { label: "Activities", href: "/activities" },
  { label: "Contact", href: "/contact" },
  { label: "Missions", href: "/missions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>

        {/* Always-visible hamburger */}
        <Hamburger isOpen={open} toggle={() => setOpen(!open)} />
      </div>

      {/* Menu for all screen sizes */}
      <div
        className={`bg-black px-4 pb-4 transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block py-2 transition-colors duration-200 ${
              pathname === link.href
                ? "text-blue-400 font-semibold"
                : "text-white"
            }`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
