import { useState, useEffect } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<string>(localStorage.theme || "dark");
  const classToRemove = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(classToRemove);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, classToRemove]);

  return { classToRemove, setTheme } as const;
}
