import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <nav className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900 hover:text-teal-500 transition-colors duration-200"
        >
          Dana Diesendorf
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            href="/work"
            className="text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="/expositions"
            className="text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors duration-200"
          >
            Expositions
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors duration-200"
          >
            About me
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}


