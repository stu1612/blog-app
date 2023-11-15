import { gql, request } from "graphql-request";

import { HYGRAPH_ENDPOINT } from "@/config";
import { FeaturedPost } from "@/types";

interface FeaturedBlogQuery {
  posts: FeaturedPost[];
}

export const featuredBlogs = gql`
  query LatestPosts {
    posts(last: 4) {
      createdAt
      excerpt
      id
      slug
      title
      image {
        url
      }
    }
  }
`;

//   const result = await request<FeaturedBlogQuery>(HYGRAPH_ENDPOINT, query);

//   return result.posts;
