// files
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";
import Hero from "@/components/layout/Hero";
import ContentLargeScreen from "@/components/layout/ContentLargeScreen";
import ContentSmallScreen from "@/components/layout/ContentSmallScreen";
import { Suspense } from "react";

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);

  return (
    <>
      <Hero />
      <section className="padding-container w-full">
        <h2 className="font-h2">Recent Blogs</h2>
        <ContentSmallScreen posts={posts} />
        <ContentLargeScreen posts={posts} />
      </section>
    </>
  );
}
