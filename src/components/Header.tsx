"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/donate", label: "Donate", isButton: true }
  ];

  return (
    <header className="bg-white w-full shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <div className="h-12 w-auto relative">
            <img
              src="/logo.png"
              alt="Dewees Island Conservancy Logo"
              width={90}
              height={28}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-8">
          {links.map((link, index) =>
            link.isButton ? (
              <Link
                key={index}
                href={link.href}
                className="px-4 py-2 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors"
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={index}
                href={link.href}
                className="text-[#5b7e95] hover:text-[#4c6a80] font-medium transition-colors"
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#5b7e95] rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 pb-4">
              {links.map((link, index) =>
                link.isButton ? (
                  <Link
                    key={index}
                    href={link.href}
                    className="w-full px-4 py-2 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded text-center transition-colors"
                    onClick={toggleMenu}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="px-2 py-2 text-[#5b7e95] hover:text-[#4c6a80] font-medium transition-colors"
                    onClick={toggleMenu}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
