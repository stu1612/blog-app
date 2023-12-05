import { Suspense } from "react";
import Loading from "./loading";
import CMSRichText from "@/components/common/CMSRichText";
import CategoryList from "@/components/layout/CategoryList";
import { GRAPHQL_ENDPOINT } from "@/config";
import { FeaturedPostsProps } from "@/types";
import BlogCard from "@/components/common/BlogCard";

interface BlogPost {
  params: {
    slug: string;
  };
}

type Props = {
  title: string;
};

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
  console.log("category posts ", posts);

  return (
    <section>
      <h1>Blogs</h1>
      <CategoryList />
      <div>
        {posts?.map((post: any) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
}
