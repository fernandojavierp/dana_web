"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Define classes based on the page
  const footerClass = isHomePage ? "bg-transparent" : "bg-white border-t border-gray-200";
  const textClass = isHomePage ? "text-white" : "text-gray-600";

  return (
    <footer className={`w-full py-1 ${footerClass} ${isHomePage ? "absolute bottom-0" : ""}`}>
      <div className="container mx-auto px-4 text-center">
        <p className={`text-sm ${textClass}`}>
          &copy; {new Date().getFullYear()} Dana Diesendorf. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

