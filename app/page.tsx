// npm
import { Suspense } from "react";

// files
import Loading from "./loading";
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";
import Hero from "@/components/layout/Hero";
import SmallScreenBlogsLayout from "@/components/layout/SmallScreenBlogsLayout";
import LargeScreenBlogsLayout from "@/components/layout/LargeScreenBlogsLayout";

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);

  return (
    <>
      <Hero />
      <section className="padding-container w-full">
        <h2 className="font-h2">Recent Blogs</h2>

        <SmallScreenBlogsLayout />

        <LargeScreenBlogsLayout />

        {/* <Suspense fallback={<Loading />}>
          <FeaturedBlogs posts={posts} />
        </Suspense> */}
      </section>
    </>
  );
}
