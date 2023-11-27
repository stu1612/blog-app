"use client";

import React, { createContext, useState, useEffect } from "react";
import {
  FeaturedPost,
  FeaturedPostsProps,
  CategoryType,
  CategoryProps,
} from "@/types";

type ChildrenProps = {
  children: React.ReactNode;
};

type PostsProps = {
  posts?: FeaturedPost[];
};

type ContextType = {
  filteredPosts: FeaturedPost[];
  filterPostsByCategory: (
    selectedCategory: string
    // posts: FeaturedPost[]
  ) => void;
  resetPosts: () => void;
  categoryList: any;
};

export const CategoryContext = createContext<ContextType | undefined>(
  undefined
);

export const CategoryContextProvider = ({
  children,
  posts = [],
}: ChildrenProps & PostsProps) => {
  const [filteredPosts, setFilteredPosts] = useState<FeaturedPost[]>([]);
  const [categoryList, setCategoryList] = useState<any>();
  // const [category, setCategory] = useState<string>("");

  useEffect(() => {
    setFilteredPosts(posts);
    const category = posts?.flatMap((post) => post.categories[0]?.name || []);
    const categories = [...new Set(category)];
    setCategoryList(categories);
  }, [posts]);

  // const categories = ({posts}) => {
  //   const category = posts?.map((post) => post.categories[0].name);
  //   const categoryList = [...new Set(category)];
  //   setCategoryList(categoryList);
  // };

  const filterPostsByCategory = (selectedCategory: string) => {
    const categoryLower = selectedCategory.toLowerCase();

    if (categoryLower === "") {
      setFilteredPosts(posts);
    } else {
      const filteredBlogs = posts
        ? posts.filter((post) =>
            post.categories.some(
              (category) => category.name.toLowerCase() === categoryLower
            )
          )
        : [];
      setFilteredPosts(filteredBlogs);
    }
  };

  const resetPosts = () => {
    setFilteredPosts(posts);
  };

  const contextValue: ContextType = {
    filteredPosts,
    filterPostsByCategory,
    resetPosts,
    categoryList,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};
