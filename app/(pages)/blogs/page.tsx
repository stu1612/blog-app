// files
import BlogCard from "@/components/common/BlogCard";
import CategoryList from "@/components/layout/CategoryList";
import { getBlogs, getCategories } from "@/services";
import { fetchGraphQL } from "@/services/api";
import { FeaturedPostsProps } from "@/types";
import { GRAPHQL_ENDPOINT } from "@/config";
import ContentLargeScreen from "@/components/layout/ContentLargeScreen";
import ContentSmallScreen from "@/components/layout/ContentSmallScreen";

async function getAllBlogs() {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query Posts{
              posts {
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

export default async function Blogs() {
  const posts = await getAllBlogs();

  return (
    <section className="padding-container w-full">
      {/* <h2 className="font-h2">Check out all my blogs right here !</h2> */}
      <ContentSmallScreen posts={posts} />
      <ContentLargeScreen posts={posts} />
    </section>
  );
}
