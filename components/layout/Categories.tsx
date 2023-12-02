"use client";

import React from "react";
import CategoryItem from "../common/CategoryItem";
import { CategoryType, FeaturedPostsProps, FeaturedPost } from "@/types";
import { useCategoryList } from "@/hooks/useCategoryList";

// export default function Categories({ posts }: FeaturedPostsProps) {

export type Props = {
  posts?: FeaturedPostsProps["posts"];
  setPostLists: React.Dispatch<React.SetStateAction<FeaturedPostsProps>>;
};

export default function Categories({ posts, setPostLists }: Props) {
  const { categoryList } = useCategoryList({ posts: posts || [] });

  const filterPostsByCategory = (selectedCategory: string) => {
    const categoryLower = selectedCategory.toLowerCase();

    if (categoryLower === "") {
      //   setPostLists(posts!);
      setPostLists((prev) => ({ ...prev, posts }));
    } else {
      const filteredPosts = posts
        ? posts.filter((post) =>
            post.categories.some(
              (category) => category.name.toLowerCase() === categoryLower
            )
          )
        : [];
      setPostLists((prev) => ({ ...prev, posts: filteredPosts }));
    }
  };
  return (
    <div className="flex flex-row gap-5 flex-wrap py-10 ">
      <CategoryItem category="all" />
      {/* {categoryList?.map((category: CategoryType, index: number) => (
        <CategoryItem key={index} category={category} />
      ))} */}
      {categoryList?.map((category, index) => (
        // <CategoryItem key={index} category={category} />
        <p
          className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer"
          onClick={() => filterPostsByCategory(category)}
          key={index}
        >
          {category}
        </p>
      ))}
    </div>
  );
}
