import Link from "next/link";

import { mobileNavLinks } from "@/constants/navLinks";
import useNavContext from "@/hooks/useNavContext";
import SocialIcons from "../common/SocialIcons";
import ThemeToggler from "@/app/_providers/Theme/ThemeSelector";

export default function NavbarSmall() {
  const { isOpen, toggleNav } = useNavContext();

  return (
    <ul
      className={`bg-light-10 text-slate-700 z-10 padding-container fixed h-[calc(100vh-80px)] flex-col justify-evenly ${
        isOpen
          ? "flex w-[80%] right-0 box-shadow custom-transition md:hidden"
          : "hidden"
      }`}
    >
      <ThemeToggler />

      {mobileNavLinks.map((link) => (
        <Link
          href={link.href}
          className="mobile-navLink"
          onClick={toggleNav}
          key={link.id}
        >
          {link.title}
        </Link>
      ))}
      <div className="flex">
        <SocialIcons />
      </div>
    </ul>
  );
}
