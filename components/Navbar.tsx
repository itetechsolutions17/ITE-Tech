"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081120]/80 backdrop-blur-xl border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          ITE Tech Solutions
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm">

          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`group relative transition ${
                pathname === item.path
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
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

        {/* BUTTON */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2 bg-green-600 rounded-full hover:bg-green-500 transition"
        >
          Request Callback
        </Link>

      </div>

    </header>
  );
}