"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "/technologies" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Internships", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#081120]/80 backdrop-blur-xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <img
              src="projects/ITE_logo.png"
              alt="ITE Tech Solutions"
              width={55}
              height={55}
              className="drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />
          </Link>

          <Link
            href="/"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >

            ITE Tech Solutions
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`group relative transition ${pathname === item.path
                ? "text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-400"
                }`}
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${pathname === item.path
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-4">

          <ThemeToggle />

          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition"
          >
            Book Consultation
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">

          <ThemeToggle />

          <button
            className="text-gray-900 dark:text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-[#081120] border-t border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-4">

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`${pathname === item.path
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-green-600 text-center py-2 rounded-full hover:bg-green-500 transition"
              >
                Request Callback
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>

  );
}
