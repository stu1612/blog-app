// npm
import { Suspense } from "react";

// files
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import ThemeToggler from "@/components/themes/ThemeToggler";
import Loading from "./loading";
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);
  return (
    <div className="h-screen w-full">
      <ThemeToggler />
      <h1>Hello</h1>
      <Suspense fallback={<Loading />}>
        <FeaturedBlogs posts={posts} />
      </Suspense>
    </div>
  );
}
