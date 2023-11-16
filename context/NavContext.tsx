"use client";

import { createContext } from "react";
import { useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

type ContextType = {
  isOpen: boolean;
  toggleNav: () => void;
};

const initState = false;

export const NavContext = createContext<ContextType | undefined>(undefined);

export const NavContextProvider = ({ children }: ChildrenProps) => {
  // state
  const [isOpen, setIsOpen] = useState(initState);

  // methods
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const contextValue: ContextType = {
    isOpen,
    toggleNav,
  };
  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
};
