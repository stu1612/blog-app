import * as dotenv from "dotenv";

dotenv.config();

const HYGRAPH_ENDPOINT: string = process.env.HYGRAPH_ENDPOINT! || "";

async function getFeaturedBlogs() {
  try {
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query LatestPosts {
              posts(last: 4) {
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
              }
            }`,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error - Status: ${response.status}`);
    }

    const data = await response.json();

    return data.data.posts;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error fetching getLatestBlogPosts", error.message);
      throw error;
    } else {
      console.log("Unknown Error", error);
      throw error;
    }
  }
}

export default async function FeaturedBlogs() {
  const featured = await getFeaturedBlogs();

  console.log(featured);
  return <div>FeaturedBlogs</div>;
}
