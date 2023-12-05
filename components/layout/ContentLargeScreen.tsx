"use client";

import CategoryItem from "../common/CategoryItem";
import LargeScreenProjectsList from "./LargeScreenProjectsList";
import { CategoryType, FeaturedPost, FeaturedPostsProps } from "@/types";
import BlogCard from "../common/BlogCard";
import useCategoryContext from "@/hooks/useCategoryContext";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
import Categories from "./Categories";
import CategoryList from "./CategoryList";

export default function ContentLargeScreen({
  posts = [],
}: {
  posts?: FeaturedPost[];
}) {
  const [filteredList, setFilteredList] = useState<FeaturedPostsProps>({
    posts: posts,
  });

  const handleClick = (categoryId: string) => {
    const filtered = posts?.filter((post) =>
      post.categories.some((category) => category.id === categoryId)
    );
    setFilteredList({ posts: filtered });
  };

  return (
    <div className="grid-container-lg grid gap-10 my-20">
      <div className="grid-blogs grid gap-y-10">
        {posts?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      <div className="grid-side px-12">
        <h4 className="font-normal text-sm">Find recent blogs by category</h4>
        <h3 className="font-h3 bg-hyper clip-text">Categories</h3>

        <LargeScreenProjectsList />
      </div>
    </div>
  );
}
