import { Moon, Sun } from "phosphor-react";
import React, { useState } from "react";
import { useDarkMode } from "../utils/useDarkMode";

export const Header = () => {
  const { classToRemove, setTheme } = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    classToRemove === "light" ? true : false
  );

  const toggleDarkMode = (isChecked: boolean) => {
    setTheme(classToRemove);
    setDarkMode(isChecked);
  };
  return (
    <div className="flex justify-around h-20 top-3 items-center">
      <div className="">
        <strong className="text-2xl">React Weather App</strong>
      </div>

      <div>
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            checked={darkMode}
            type="checkbox"
            value=""
            id="default-toggle"
            className="sr-only peer"
            onChange={(e) => toggleDarkMode(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <Moon size={20} />
          </span>
        </label>
      </div>
    </div>
  );
};
