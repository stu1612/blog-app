import BlogCard from "../common/BlogCard";
import Image from "next/image";
import Link from "next/link";
import LargeScreenCategoryList from "./LargeScreenCategoryList";

export default function LargeScreenBlogsLayout() {
  return (
    <div className="grid-container-lg grid gap-10 my-20">
      <div className="grid-blogs grid gap-y-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="grid-side px-12">
        <h4 className="font-normal text-sm">Find recent blogs by category</h4>
        <h3 className="font-h3 bg-hyper clip-text">Categories</h3>

        <LargeScreenCategoryList />
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
          La
        </div>
      </div>
    </div>
  );
}
