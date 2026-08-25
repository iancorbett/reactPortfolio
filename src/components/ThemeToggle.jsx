import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // Dark mode is the default unless the user explicitly chose light mode
    const shouldUseDarkMode = storedTheme !== "light";

    setIsDarkMode(shouldUseDarkMode);

    if (shouldUseDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;

    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-16 md:top-5 md:right-5 z-50",
        "p-2 rounded-full transition-colors duration-300",
        "hover:bg-secondary/80",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
      aria-label={
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      title={
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};