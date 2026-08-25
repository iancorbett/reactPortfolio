import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { cn } from "@/lib/utils";

const THEME_KEY = "portfolio-theme";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);

    // Default to dark unless the user has explicitly chosen light
    const shouldUseDarkMode = storedTheme !== "light";

    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
    setIsDarkMode(shouldUseDarkMode);

    // Save the default so future loads stay consistent
    if (!storedTheme) {
      localStorage.setItem(THEME_KEY, "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;

    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);

    localStorage.setItem(
      THEME_KEY,
      newDarkMode ? "dark" : "light"
    );
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