// import { React } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

interface iSocialLinks {
  id: number;
  url: string;
  icon: React.ReactElement;
}

export const socialLinks: iSocialLinks[] = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/stuartbolderson/",
    icon: <IoLogoLinkedin size={26} />,
  },
  {
    id: 2,
    url: "https://github.com/stu1612",
    icon: <IoLogoGithub size={26} />,
  },
];

export const navLinks = [
  {
    id: 1,
    title: "Blogs",
    href: "/blogs",
  },
  {
    id: 2,
    title: "about",
    href: "/about",
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
  },
];

export const mobileNavLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
    link: null,
  },
  {
    id: 2,
    title: "Blogs",
    href: "/blogs",
    link: null,
  },
  {
    id: 3,
    title: "About",
    href: "/about",
    link: null,
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
    link: null,
  },
  {
    id: 5,
    title: "Linkedin",
    href: undefined,
    link: "https://www.linkedin.com/in/stuartbolderson/",
  },
  {
    id: 6,
    title: "Github",
    href: undefined,
    link: "https://github.com/stu1612",
  },
];
