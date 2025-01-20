"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const linkClasses = (path: string) =>
    `text-sm font-medium ${
      pathname === path ? "text-green-300" : isHomePage ? "text-white" : "text-gray-700"
    } hover:text-purple-300 transition-colors duration-400`;

  return (
    <header className={`fixed top-0 left-0 w-full z-10 py-4 ${isHomePage ? "bg-transparent" : "bg-white border-b border-gray-200"}`}>
      <nav className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        {/* Logo / Brand */}
        <Link
          href="/"
          className={`text-1xl font-bold tracking-tight ${isHomePage ? "text-white" : "text-gray-900"} hover:text-purple-300 transition-colors duration-700`}
        >
          DANA DIESENDORF
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-3">
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


