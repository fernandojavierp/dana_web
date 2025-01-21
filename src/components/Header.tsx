"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = (path: string) =>
    `text-sm font-medium ${
      pathname === path ? "text-purple-300" : isHomePage ? "text-white" : "text-gray-700"
    } hover:text-purple-300 transition-colors duration-400`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 py-4 ${
        isHomePage ? "bg-transparent" : "bg-white border-b border-gray-200"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        {/* Logo / Brand */}
        <Link
          href="/"
          className={`text-1xl font-bold tracking-tight ${
            isHomePage ? "text-white" : "text-gray-900"
          } hover:text-purple-300 transition-colors duration-700`}
        >
          DANA DIESENDORF
        </Link>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            title={isMenuOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden ${
              isHomePage ? "text-white" : "text-gray-900"
            } focus:outline-none`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 ${
                isHomePage ? "bg-transparent" : "bg-white bg-opacity-90"
              } shadow-md rounded-lg py-2 text-center lg:hidden`}
            >
              <Link
                href="/paintings"
                className={`${linkClasses("/paintings")} block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                PAINTINGS
              </Link>
              <Link
                href="/expositions"
                className={`${linkClasses("/expositions")} block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                EXPOSITIONS
              </Link>
              <Link
                href="/about"
                className={`${linkClasses("/about")} block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT ME
              </Link>
              <Link
                href="/contact"
                className={`${linkClasses("/contact")} block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/paintings" className={linkClasses("/paintings")}>
            PAINTINGS
          </Link>
          <Link href="/expositions" className={linkClasses("/expositions")}>
            EXPOSITIONS
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            ABOUT ME
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
}
