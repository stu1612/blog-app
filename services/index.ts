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

export const getBlogs = gql`
  query Posts {
    posts {
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

export const getCategories = gql`
  query Categories {
    categories {
      id
      name
      slug
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

export const getPostsByCategory = gql`
  query PostsByCategory($categorySlug: String!) {
    posts(where: { categories_some: { slug: $categorySlug } }) {
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
`;
