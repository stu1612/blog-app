"use client";

// npm
import Link from "next/link";
import { useState } from "react";

// files
import ThemeToggler from "../themes/ThemeToggler";
import Burger from "./Burger";
import { navLinks, socialLinks, mobileNavLinks } from "@/constants/navLinks";

export default function Navbar() {
  // state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // methods
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-green-400 z-10 padding-container fixed h-[80px]  ${
        isOpen ? "w-[80%] right-0 md:w-full " : "w-full "
      }`}
    >
      {/* LARGE NAVBAR */}
      <div className="w-appWidth justify-between items-center flex mx-auto h-full">
        <ul className="hidden bg-green-500 flex-1 md:flex">
          {socialLinks.map((sLink) => (
            <a
              href={sLink.url}
              key={sLink.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sLink.icon}
            </a>
          ))}
        </ul>
        <div>
          <Link href="/">
            <h1>stuBlog</h1>
          </Link>
        </div>
        <ul className="hidden bg-green-500 items-center flex-1 justify-end md:flex">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.id}>
              {link.title}
            </Link>
          ))}
          <ThemeToggler />
        </ul>
        <Burger isOpen={isOpen} toggleNavbar={toggleNavbar} />
      </div>

      {/* MOBILE NAVBAR */}
      <ul
        className={`bg-white z-10 padding-container fixed h-[calc(100vh-80px)] flex-col justify-around ${
          isOpen
            ? "flex w-[80%] right-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  md:hidden"
            : "hidden"
        }`}
      >
        {mobileNavLinks.map((mLink) => (
          <div key={mLink.id}>
            {mLink.href !== undefined ? (
              <Link
                href={mLink.href}
                className="font-mobile-link"
                onClick={toggleNavbar}
              >
                {mLink.title}
              </Link>
            ) : (
              <a href={mLink.link} target="_blank" className="font-mobile-link">
                {mLink.title}
              </a>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
}
