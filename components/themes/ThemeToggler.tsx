"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    // <div>
    //   <button
    //     className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
    //     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    //   >
    //     {theme === "light" ? "Dark" : "Light"}
    //   </button>
    // </div>
    <label htmlFor="switch" className="switch">
      <input
        type="checkbox"
        name="switch"
        id="switch"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span className="slider"></span>
    </label>
  );
}
