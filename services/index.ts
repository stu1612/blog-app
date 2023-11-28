import { gql, request } from "graphql-request";

// import { FeaturedPost } from "@/types";

// interface FeaturedBlogQuery {
//   posts: FeaturedPost[];
// }

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
      categories {
        name
        id
        slug
      }
    }
  }
`;

export const getBlogPostBySlug = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      excerpt
      createdAt
      image {
        url
      }
      content {
        raw
      }
      categories {
        id
        slug
        name
      }
    }
  }
`;
