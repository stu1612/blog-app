import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";

import Hero from "@/components/layout/Hero";
import ContentLargeScreen from "@/components/layout/ContentLargeScreen";
import ContentSmallScreen from "@/components/layout/ContentSmallScreen";
import { Suspense } from "react";
import SkeletonHomeLayout from "@/components/skeleton/SkeletonHomeLayout";
import SectionLayout from "@/components/layout/SectionLayout";

export default async function Home() {
  const { posts } = await fetchGraphQL(featuredBlogs);

  return (
    <>
      <Hero />
      <SectionLayout title="Recent Featured Blogs">
        <ContentSmallScreen posts={posts} />
        <ContentLargeScreen posts={posts} />
      </SectionLayout>
    </>
  );
}
