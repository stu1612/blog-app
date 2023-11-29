"use client";

// files
import { FeaturedPost } from "@/types";
import { Suspense } from "react";
import Loading from "@/app/loading";
import ContentLargeScreen from "./ContentLargeScreen";
import ContentSmallScreen from "./ContentSmallScreen";
import { CategoryContextProvider } from "@/context/CategoryContext";

interface iFeaturedPosts {
  posts?: FeaturedPost[];
}

export default function MainContent({ posts }: iFeaturedPosts) {
  return (
    <CategoryContextProvider posts={posts}>
      <section className="padding-container w-full">
        <h2 className="font-h2">Recent Blogs</h2>
        <Suspense fallback="loading ..">
          <ContentSmallScreen />
          <ContentLargeScreen />
        </Suspense>
      </section>
    </CategoryContextProvider>
  );
}
