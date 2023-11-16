// npm
import { Suspense } from "react";

// files
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import Loading from "./loading";
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";
import Hero from "@/components/layout/Hero";

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);

  return (
    <Hero />
    /* <Suspense fallback={<Loading />}>
        <FeaturedBlogs posts={posts} />
      </Suspense> */
  );
}
