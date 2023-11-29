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
  postsList: FeaturedPost[];
  filterPostsByCategory: (selectedCategory: string) => void;
  resetPosts: () => void;
  categoryList: any;
};

export const CategoryContext = createContext<ContextType | undefined>(
  undefined
);

export const CategoryContextProvider = ({
  children,
  posts,
}: ChildrenProps & PostsProps) => {
  const [postsList, setPostsList] = useState<FeaturedPost[]>(posts || []);
  const [categoryList, setCategoryList] = useState<any>();
  // const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const category = posts?.flatMap((post) => post.categories[0]?.name || []);
    const categories = [...new Set(category)];
    setCategoryList(categories);
  }, [posts]);

  const filterPostsByCategory = (selectedCategory: string) => {
    const categoryLower = selectedCategory.toLowerCase();

    if (categoryLower === "") {
      setPostsList(posts!);
    } else {
      const filteredPosts = posts
        ? posts.filter((post) =>
            post.categories.some(
              (category) => category.name.toLowerCase() === categoryLower
            )
          )
        : [];
      setPostsList(filteredPosts);
    }
  };

  const resetPosts = () => {
    setPostsList(posts!);
  };

  const contextValue: ContextType = {
    postsList,
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
