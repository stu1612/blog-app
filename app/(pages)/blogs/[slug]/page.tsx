import { Suspense } from "react";
import Loading from "./loading";
import CMSRichText from "@/components/common/CMSRichText";
import CategoryList from "@/components/layout/CategoryList";
import { GRAPHQL_ENDPOINT } from "@/config";
import { FeaturedPostsProps } from "@/types";
import BlogCard from "@/components/common/BlogCard";
import ContentLargeScreen from "@/components/layout/ContentLargeScreen";
import ContentSmallScreen from "@/components/layout/ContentSmallScreen";

interface BlogPost {
  params: {
    slug: string;
  };
}

async function getPostsByCategory(categorySlug: string) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query PostsByCategory($categorySlug: String!) {
              posts(where: {categories_some: {slug: $categorySlug}}) {
                createdAt
                excerpt
                id
                publishedAt
                slug
                title
                updatedAt
                image {
                  url
                }
                categories {
                  id
                  slug
                  name
                }
              }
            }
          `,
        variables: {
          categorySlug: categorySlug,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export default async function Blogs({ params }: BlogPost) {
  // properties
  const { slug } = params;

  const posts = await getPostsByCategory(slug);

  return (
    <section className="padding-container w-full">
      <h2 className="font-h2">Check out my blogs related to {slug} !</h2>
      <ContentSmallScreen posts={posts} />
      <ContentLargeScreen posts={posts} />
    </section>
  );
}
