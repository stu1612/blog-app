import Link from "next/link";

import { navLinks, socialLinks } from "@/constants/navLinks";
import Burger from "../common/Burger";

import useNavContext from "@/hooks/useNavContext";
import ThemeToggler from "@/app/_providers/Theme/ThemeSelector";

export default function NavbarLarge() {
  const { isOpen } = useNavContext();

  return (
    <div
      className={`w-appWidth flex-between mx-auto h-full ${
        isOpen ? "border-0" : "border-b border-slate-500"
      } `}
    >
      <ul className="hidden flex-1 md:flex">
        {socialLinks.map((sLink) => (
          <a
            href={sLink.url}
            key={sLink.id}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            {sLink.icon}
          </a>
        ))}
      </ul>
      <div>
        <Link href="/">
          <h1 className="font-semibold text-lg lg:text-xl">stuBlog</h1>
        </Link>
      </div>
      <ul className="hidden flex-1 md:flex-end">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.id} className="font-link">
            {link.title}
          </Link>
        ))}
        <ThemeToggler />
      </ul>
      <Burger />
    </div>
  );
}
