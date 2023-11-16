"use client";

import useNavContext from "@/hooks/useNavContext";

export default function Hero() {
  const { isOpen } = useNavContext();
  return (
    <section
      className={`h-screen padding-container custom-transition ${
        isOpen ? "blur-sm md:blur-0" : ""
      }`}
    >
      <h1 className="heading-h1 pr-8">
        <span className="font-bold">Welcome to stuBlog!</span> Web Dev blog
        covering a range of{" "}
        <span className="font-black bg-hyper clip-text">frontend</span> and{" "}
        <span className="font-black bg-emerald clip-text">fullstack</span>{" "}
        topics.{" "}
      </h1>
    </section>
  );
}
