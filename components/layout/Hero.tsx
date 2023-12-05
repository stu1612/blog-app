"use client";

import Image from "next/image";

import useNavContext from "@/hooks/useNavContext";

export default function Hero() {
  const { isOpen } = useNavContext();
  return (
    <section
      className={`h-auto padding-container custom-transition ${
        isOpen ? "blur-sm md:blur-0" : ""
      }`}
    >
      <div>
        <h1 className="font-h1 pr-8">
          <span className="font-bold">Welcome to stuBlog!</span> Web Dev blog
          covering a range of{" "}
          <span className="font-black bg-hyper clip-text">frontend</span> and{" "}
          <span className="font-black bg-emerald clip-text">fullstack</span>{" "}
          topics.{" "}
        </h1>
      </div>
      <div className="grid grid-cols-gallery my-20">
        <figure className="relative h-[400px]">
          <Image
            src="/software-development.jpg"
            alt="computer on a desk showing a code IDE and some content of a blog article"
            fill
            style={{ objectFit: "cover" }}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="flex-col flex-start sm:px-6 md:flex-center lg:px-12">
          <h2 className="font-h2 py-6 md:py-4">
            Dummies guide to web development
          </h2>
          <p className="font-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quas omnis distinctio, vero ducimus magni ratione aspernatur debitis
            adipisci accusantium beatae nostrum modi dolor in ad recusandae,
            architecto a temporibus!
          </p>
        </div>
      </div>
    </section>
  );
}
