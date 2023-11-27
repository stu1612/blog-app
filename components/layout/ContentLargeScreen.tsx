"use client";

import { useState } from "react";

import CategoryItem from "../common/CategoryItem";
import LargeScreenProjectsList from "./LargeScreenProjectsList";
import { CategoryType, FeaturedPostsProps } from "@/types";
import BlogCard from "../common/BlogCard";
import useCategoryContext from "@/hooks/useCategoryContext";

export default function ContentLargeScreen({ posts }: FeaturedPostsProps) {
  // state
  const [category, setCategory] = useState("");
  // const [filterBlogList, setFilteredBlogList] = useState(posts);

  const { filteredPosts, categoryList } = useCategoryContext();

  // organise category lists
  // const categories = posts?.map((post) => post.categories[0].name);
  // const categoryList = [...new Set(categories)];

  // const filterBlogsByCategory = (selectedCategory: string) => {
  //   const categoryLower = selectedCategory.toLowerCase();

  //   if (categoryLower === "") {
  //     setFilteredBlogList(posts);
  //   } else {
  //     const filteredBlogs = posts
  //       ? posts.filter((post) =>
  //           post.categories.some(
  //             (cat) => cat.name.toLowerCase() === categoryLower
  //           )
  //         )
  //       : [];
  //     setFilteredBlogList(filteredBlogs);
  //   }
  //   setCategory(selectedCategory);
  // };

  // const resetBlogsCategory = () => {
  //   setFilteredBlogList(posts);
  // };

  return (
    <div className="grid-container-lg grid gap-10 my-20">
      <div className="grid-blogs grid gap-y-10">
        {/* {filterBlogList?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))} */}
        {filteredPosts?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      <div className="grid-side px-12">
        <h4 className="font-normal text-sm">Find recent blogs by category</h4>
        <h3 className="font-h3 bg-hyper clip-text">Categories</h3>

        <div className="flex flex-row gap-5 flex-wrap py-10 ">
          <CategoryItem
            category="all"
            // resetBlogsCategory={resetBlogsCategory}
          />
          {categoryList?.map((category: CategoryType, index: number) => (
            <CategoryItem
              key={index}
              category={category}
              // filterBlogsByCategory={filterBlogsByCategory}
            />
          ))}
        </div>
        <LargeScreenProjectsList />
      </div>
    </div>
  );
}
