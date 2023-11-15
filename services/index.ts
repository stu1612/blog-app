import { gql, request } from "graphql-request";

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
