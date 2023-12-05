"use client";

import useNavContext from "@/hooks/useNavContext";

import NavbarLarge from "./NavbarLarge";
import NavbarSmall from "./NavbarSmall";

export default function Navbar() {
  const { isOpen } = useNavContext();

  return (
    <header>
      <nav
        className={`bg-light-30 dark:bg-dark-100 z-10 padding-container fixed h-[80px] ${
          isOpen ? "w-[80%] right-0 md:w-full " : "w-full "
        }`}
      >
        <NavbarLarge />
        <NavbarSmall />
      </nav>
    </header>
  );
}
