// npm
import { Suspense } from "react";

// files
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import Loading from "./loading";
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";
import Hero from "@/components/layout/Hero";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="grid grid-cols-2 h-[300px] ">
      <figure className="relative">
        <Image
          src="/images/software-development.jpg"
          alt="alt"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="flex-evenly-start flex-col sm:px-6 lg:px-12">
        <p className="text-xs">
          2021-06-16 - <span>CSS</span>
        </p>
        <h3 className="font-h3">title of blog</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero
          ipsum autem exercitationem quod dolor.
        </p>
        <Link href="/" className="text-sm underline underline-offset-4">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);

  return (
    <>
      <Hero />
      <section className="padding-container w-full">
        <h2 className="font-h2">Recent Blogs</h2>
        <div className="grid grid-cols-3 gap-10 my-20">
          <div className="grid col-span-2 bg-red-500 gap-y-10">
            <Blog />
            <Blog />
          </div>
          <div className="grid col-span-1 bg-blue-500">Projects</div>
        </div>
        {/* <Suspense fallback={<Loading />}>
          <FeaturedBlogs posts={posts} />
        </Suspense> */}
      </section>
    </>
  );
}
