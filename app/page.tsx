// npm
import { Suspense } from "react";

// files
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import Loading from "./loading";
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);
  return (
    <div className="h-screen padding-container">
      <Suspense fallback={<Loading />}>
        <FeaturedBlogs posts={posts} />
      </Suspense>
    </div>
  );
}
