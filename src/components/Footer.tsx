"use client"

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5b7e95] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Dewees Island Conservancy</h3>
            <p className="text-sm md:text-base">
              A 501(c)3 non-profit organization dedicated to<br className="hidden md:block" />
              protecting and preserving our natural environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div className="space-y-2">
              <h4 className="font-medium">Connect</h4>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/DeweesIslandConservancy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/deweesislandconservancy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-200 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCxvQG29R8-7ukSjyv12mFhQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-200 transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Quick Links</h4>
              <nav className="flex flex-col space-y-1 text-sm">
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/intern-program" className="hover:underline">Intern Program</Link>
                <Link
                  href="https://checkout.square.site/merchant/ML03XSQFYMM2D/checkout/RE7U5Z25C6EQCBNZBU4NPQ4J"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-sm text-center md:text-left">
          <p>Copyright © {currentYear} Dewees Island Conservancy</p>
        </div>
      </div>
    </footer>
  );
}
