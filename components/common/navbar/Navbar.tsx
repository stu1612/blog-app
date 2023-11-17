"use client";

// npm
import Link from "next/link";

// files
import ThemeToggler from "../../themes/ThemeToggler";
import Burger from "./Burger";
import { navLinks, socialLinks, mobileNavLinks } from "@/constants/navLinks";
import useNavContext from "@/hooks/useNavContext";

export default function Navbar() {
  const { isOpen, toggleNav } = useNavContext();

  return (
    <nav
      className={`bg-light-30 dark:bg-dark-100 z-10 padding-container fixed h-[80px] ${
        isOpen ? "w-[80%] right-0 md:w-full " : "w-full "
      }`}
    >
      {/* LARGE NAVBAR */}
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
        {/* <ul className="hidden items-center flex-1 justify-end md:flex"> */}
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

      {/* MOBILE NAVBAR */}
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
    </nav>
  );
}
