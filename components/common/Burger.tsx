"use client";

interface iBurgerProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

export default function Burger({ isOpen, toggleNavbar }: iBurgerProps) {
  return (
    <button
      onClick={toggleNavbar}
      className="flex flex-col justify-end items-end cursor-pointer z-50 bg-[#fa0047] p-3 md:hidden"
    >
      <span
        className={`bg-zinc-100 block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1 bg-zinc-100" : "-translate-y-0.5"
          }`}
      ></span>
      <span
        className={`bg-zinc-100 block transition-all duration-300 ease-out 
          h-0.5 w-5 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`bg-zinc-100 block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1 bg-zinc-100" : "translate-y-0.5"
          }`}
      ></span>
    </button>
  );
}
