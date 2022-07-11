import { useState, useEffect } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<string>(localStorage.theme);
  const themeColor = theme === "dark" ? "light" : "dark";
  console.log(theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(themeColor);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, themeColor]);

  return { themeColor, setTheme } as const;
}
