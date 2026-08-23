"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();
  const mounted = useMounted();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/final-year-projects" },
    { name: "Technologies", path: "/technologies" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Internships", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#081120]/80 backdrop-blur-xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-16 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {mounted ? (
            <Image
              src={
                theme === "dark"
                  ? "/projects/logo-dark.png"
                  : "/projects/logo-light.png"
              }
              alt="ITE Tech Solutions"
              width={45}
              height={45}
              priority
              className="drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-300"
            />
          ) : (
            <div className="w-[45px] h-[45px]" />
          )}
          <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ITE Tech Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-5 xl:gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`group relative transition ${
                pathname === item.path
                  ? "text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-400"
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                  pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm hover:scale-105 transition shadow-sm"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            className="text-gray-900 dark:text-white text-2xl p-1 focus:outline-none"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#081120]/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium ${
                  pathname === item.path
                    ? "text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-center py-3 rounded-full hover:opacity-95 transition"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
