import Link from "next/link";

import { mobileNavLinks } from "@/constants/navLinks";
import useNavContext from "@/hooks/useNavContext";

export default function NavbarSmall() {
  const { isOpen, toggleNav } = useNavContext();

  return (
    <ul
      className={`bg-light-10 text-slate-700 z-10 padding-container fixed h-[calc(100vh-80px)] flex-col justify-evenly ${
        isOpen
          ? "flex w-[80%] right-0 box-shadow custom-transition  md:hidden"
          : "hidden"
      }`}
    >
      {mobileNavLinks.map((mLink) => (
        <div key={mLink.id}>
          {mLink.href !== undefined ? (
            <Link
              href={mLink.href}
              className="mobile-navLink"
              onClick={toggleNav}
            >
              {mLink.title}
            </Link>
          ) : (
            <a href={mLink.link} target="_blank" className="mobile-navLink">
              {mLink.title}
            </a>
          )}
        </div>
      ))}
    </ul>
  );
}
