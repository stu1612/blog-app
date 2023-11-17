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
    <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 h-[300px] ">
      <figure className="relative">
        <Image
          src="/images/software-development.jpg"
          alt="alt"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="flex-evenly-start flex-col sm:px-6 lg:px-12 bg-light-10 dark:bg-[#1B2430]">
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

        {/* SMALL */}
        <div className="grid grid-container-sm gap-10">
          <div className="grid grid-categories">
            <div className="flex flex-row gap-5  flex-center flex-wrap py-10">
              <p className="bg-yellow-300 py-2 px-4 rounded-lg">all</p>
              <p className="bg-yellow-300 py-2 px-4 rounded-lg">css</p>
              <p className="bg-yellow-300 py-2 px-4 rounded-lg">react</p>
              <p className="bg-yellow-300 py-2 px-4 rounded-lg">cms</p>
              <p className="bg-yellow-300 py-2 px-4 rounded-lg">tailwind</p>
              <p className="bg-yellow-300 py-2 px-4 rounded-lg">vue</p>
            </div>
          </div>
          <div className="grid-blogs grid gap-y-10">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
          <div className="grid-projects">
            <div className="flex flex-col gap-5">
              <h3 className="font-h3">Latest Projects</h3>
              <div>
                <div>
                  <p>Latest project 1</p>
                </div>
                <div>
                  <p>Latest project 2</p>
                </div>
                <div>
                  <p>Latest project 3</p>
                </div>
                <div>
                  <p>Latest project 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LARGE */}
        <div className="grid-container-lg grid gap-10 my-20">
          <div className="grid-blogs grid gap-y-10">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
          <div className="grid-side px-12">
            <h4 className="font-normal text-sm">
              Find recent blogs by category
            </h4>
            <h3 className="font-h3 bg-hyper clip-text">Categories</h3>
            <div className="flex flex-row gap-5 flex-wrap py-10 ">
              <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
                all
              </p>
              <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
                css
              </p>
              <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
                react
              </p>
              <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
                cms
              </p>
              <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
                tailwind
              </p>
              <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
                vue
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-normal text-sm">
                Check out my recent github projects
              </h4>

              <h3 className="font-h3 bg-emerald clip-text">Latest Projects</h3>
              <div className="py-10 grid gap-5">
                {/* PROJ CARD */}
                <div className="flex flex-row justify-start items-center ">
                  <figure className="relative w-[50px] h-[50px] mr-3">
                    <Image
                      src="/images/git_1.jpg"
                      alt="alt"
                      fill
                      className="rounded-full"
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <p>Portfolio Project</p>
                </div>

                {/* PROJ CARD */}
                <div className="flex flex-row justify-start items-center ">
                  <figure className="relative w-[50px] h-[50px] mr-3">
                    <Image
                      src="/images/git_2.jpg"
                      alt="alt"
                      fill
                      className="rounded-full"
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <p>Eccommerce Solutions</p>
                </div>

                {/* PROJ CARD */}
                <div className="flex flex-row justify-start items-center ">
                  <figure className="relative w-[50px] h-[50px] mr-3">
                    <Image
                      src="/images/git_3.jpg"
                      alt="alt"
                      fill
                      className="rounded-full"
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <p>GSAP Three JS App</p>
                </div>

                {/* PROJ CARD */}
                <div className="flex flex-row justify-start items-center ">
                  <figure className="relative w-[50px] h-[50px] mr-3">
                    <Image
                      src="/images/git_4.jpg"
                      alt="alt"
                      fill
                      className="rounded-full"
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <p>Mobile Restaurant Order Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Suspense fallback={<Loading />}>
          <FeaturedBlogs posts={posts} />
        </Suspense> */}
      </section>
    </>
  );
}
