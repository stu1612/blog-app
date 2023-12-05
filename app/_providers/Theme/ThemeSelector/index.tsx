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
