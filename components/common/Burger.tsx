"use client";

import useNavContext from "@/hooks/useNavContext";

export default function Burger() {
  const { isOpen, toggleNav } = useNavContext();
  return (
    <button
      onClick={toggleNav}
      className="flex flex-col justify-end items-end cursor-pointer z-50 bg-dark-100 dark:bg-light-30 p-3 md:hidden"
    >
      <span
        className={`burger-line h-0.5 w-6  ${
          isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`burger-line h-0.5 w-5 my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`burger-line h-0.5 w-6 ${
          isOpen ? "-rotate-45 -translate-y-1 bg-zinc-100" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}
