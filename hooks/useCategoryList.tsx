import { FeaturedPostsProps } from "../types";
import { useEffect, useState } from "react";

export const useCategoryList = ({ posts }: FeaturedPostsProps) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const category = posts?.flatMap((post) => post.categories[0]?.name || []);
      const uniqueCategories = [...new Set(category)];
      setCategoryList(uniqueCategories);
    }
  }, [posts]);

  return { categoryList };
};
