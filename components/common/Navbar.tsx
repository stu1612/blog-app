"use client";

import Link from "next/link";
import ThemeToggler from "../themes/ThemeToggler";

import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <nav className="hidden w-full justify-between items-center fixed bg-green-400 z-10 h-[80px] md:flex">
        <ul className="bg-green-500 flex-1 flex">
          <a href="/">
            <IoLogoGithub />
          </a>
          <a href="/">
            <IoLogoLinkedin />
          </a>
          <a href="/">
            <AiOutlineMail />
          </a>
        </ul>
        <div>
          <Link href="/">
            <h1>stuBlog</h1>
          </Link>
        </div>
        <ul className="bg-green-500 flex items-center flex-1 justify-end">
          <ThemeToggler />
          <Link href="/">Blogs</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </ul>
      </nav>

      <nav className="h-full fixed flex bg-green-400 w-full flex-col z-10 items-center justify-center md:hidden">
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
      </nav>
    </>
  );
}
