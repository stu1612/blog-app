import LargeScreenProjectsList from "./LargeScreenProjectsList";
import { FeaturedPost } from "@/types";
import BlogCard from "../common/BlogCard";
import Categories from "./Categories";
import { Suspense } from "react";
import SkeletonLayout from "../skeleton/SkeletonBlogsLayout";

export default function ContentLargeScreen({
  posts = [],
}: {
  posts?: FeaturedPost[];
}) {
  return (
    <div className="grid-container-lg grid gap-10 my-20">
      <div className="grid-blogs grid gap-y-10 h-fit">
        {posts?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      <div className="grid-side px-12">
        <Categories />
        <LargeScreenProjectsList />
      </div>
    </div>
  );
}
