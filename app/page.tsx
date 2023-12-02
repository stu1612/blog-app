// files
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";
import Hero from "@/components/layout/Hero";
import MainContent from "@/components/layout/MainContent";
import { Suspense } from "react";

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);

  return (
    <>
      <Hero />
      <Suspense fallback="loading...">
        <MainContent posts={posts} />
      </Suspense>
    </>
  );
}
