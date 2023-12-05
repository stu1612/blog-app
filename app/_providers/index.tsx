"use client";

import { ThemeProvider } from "./Theme";
import { NavProvider } from "./Navbar";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <NavProvider>{children}</NavProvider>
    </ThemeProvider>
  );
};
