import CategoryItem from "../common/CategoryItem";
import LargeScreenProjectsList from "./LargeScreenProjectsList";
import { CategoryType, FeaturedPost, FeaturedPostsProps } from "@/types";
import BlogCard from "../common/BlogCard";
import useCategoryContext from "@/hooks/useCategoryContext";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function ContentLargeScreen({}) {
  const { postsList, categoryList } = useCategoryContext();

  return (
    <div className="grid-container-lg grid gap-10 my-20">
      <div className="grid-blogs grid gap-y-10">
        {postsList?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      <div className="grid-side px-12">
        <h4 className="font-normal text-sm">Find recent blogs by category</h4>
        <h3 className="font-h3 bg-hyper clip-text">Categories</h3>

        <div className="flex flex-row gap-5 flex-wrap py-10 ">
          <CategoryItem category="all" />
          {categoryList?.map((category: CategoryType, index: number) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
        <LargeScreenProjectsList />
      </div>
    </div>
  );
}
