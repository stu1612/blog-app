import { HYGRAPH_ENDPOINT } from "@/config";
// import { featuredBlogs } from "@/services";
import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/api";

// async function getFeaturedBlogs() {
//   try {
//     const response = await fetch(HYGRAPH_ENDPOINT, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: featuredBlogs,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error - Status: ${response.status}`);
//     }

//     const { data } = await response.json();

//     return data.posts;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log("Error fetching getLatestBlogPosts", error.message);
//       throw error;
//     } else {
//       console.log("Unknown Error", error);
//       throw error;
//     }
//   }
// }

// import { getFeaturedBlogs } from "@/services/blogs";
// import { useGraphQL } from "@/hooks/useGraphQL";
// import { FeaturedPosts } from "@/types";

export default async function FeaturedBlogs() {
  // const featured = await getFeaturedBlogs();
  const featured = await fetchGraphQL(featuredBlogs);

  console.log(featured);
  //   const { data } = useGraphQL<FeaturedPosts>(getFeaturedBlogs());

  //   console.log(data);
  return <div>FeaturedBlogs</div>;
}
