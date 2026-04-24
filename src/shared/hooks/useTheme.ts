import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  // cargar tema inicial
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      applyTheme(savedTheme);
      setTheme(savedTheme);
    } else {
      // si no hay nada, usar lo que esté en el HTML
      const isDark = document.documentElement.classList.contains("dark");
      const initial: Theme = isDark ? "dark" : "light";

      applyTheme(initial);
      setTheme(initial);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const html = document.documentElement;

    (theme === "dark") 
      ? html.classList.add("dark")
      : html.classList.remove("dark");

    localStorage.setItem("theme", theme);
  };

  const toggleTheme = (enabled: boolean) => {
    const newTheme: Theme = enabled ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
  };
};