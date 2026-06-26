"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme =
      resolvedTheme === "dark" ? "light" : "dark";

    // Chrome / Edge View Transition
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        w-11 h-11
        rounded-full
        border border-slate-300 dark:border-white/10
        bg-white dark:bg-white/5
        backdrop-blur-xl
        flex items-center justify-center
        shadow-md
        hover:scale-110
        active:scale-95
        transition-all duration-300
      "
    >
      {resolvedTheme === "dark" ? (
        <Sun
          size={18}
          className="text-yellow-400 transition-all duration-500"
        />
      ) : (
        <Moon
          size={18}
          className="text-slate-700 dark:text-slate-200 transition-all duration-500"
        />
      )}
    </button>
  );
}