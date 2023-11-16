"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggler from "../themes/ThemeToggler";
import Burger from "./Burger";

import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

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
      <div className="w-appWidth justify-between items-center flex mx-auto h-full">
        <ul className="hidden bg-green-500 flex-1 md:flex">
          <a href="/">
            <IoLogoGithub />
          </a>
          <a href="/">
            <IoLogoLinkedin />
          </a>
        </ul>
        <div>
          <Link href="/">
            <h1>stuBlog</h1>
          </Link>
        </div>
        <ul className="hidden bg-green-500 items-center flex-1 justify-end md:flex">
          <ThemeToggler />
          <Link href="/">Blogs</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </ul>
        <Burger isOpen={isOpen} toggleNavbar={toggleNavbar} />
      </div>
      <ul
        className={`bg-white z-10 padding-container fixed h-full flex-col ${
          isOpen
            ? "flex w-[80%] right-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  md:hidden"
            : "hidden"
        }`}
      >
        <Link href="/" className="py-6 uppercase">
          Home
        </Link>
        <Link href="/blogs" className="py-6 uppercase">
          Blogs
        </Link>
        <Link href="/" className="py-6 uppercase">
          About
        </Link>
        <Link href="/" className="py-6 uppercase">
          Contact
        </Link>
        <Link href="/" className="py-6 uppercase">
          Linkedin
        </Link>
        <Link href="/" className="py-6 uppercase">
          github
        </Link>
        <Link href="/" className="py-6 uppercase">
          email me
        </Link>
      </ul>
    </nav>
  );
}

{
  /* <nav className="h-full fixed flex  bg-green-400 w-full flex-col z-10 items-center justify-center md:hidden">
        <div className="absolute top-5 right-5">
          <Burger />
        </div>
        <ul className="flex flex-col justify-around items-center h-full bg-red-400 py-16">
          <Link href="/">stuBlog</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </ul>
        <ul className="flex justify-center items-center h-full w-full bg-red-700 flex-1 py-16">
          <a href="/" className="mx-4">
            <IoLogoGithub />
          </a>
          <a href="/" className="mx-4">
            <IoLogoLinkedin />
          </a>
          <a href="/" className="mx-4">
            <AiOutlineMail />
          </a>
        </ul>
      </nav> */
}
