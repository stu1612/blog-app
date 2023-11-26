import { FeaturedPost } from "@/types";
export type FeaturedPost = {
  createdAt: string;
  excerpt: string;
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  image: {
    url: string;
  };
  categories: [
    {
      name: string;
      id: string;
      slug: string;
    }
  ];
};

export type Category = {
  name: string;
  id: string;
  slug: string;
};

export type FeaturedPostsProps = {
  posts?: FeaturedPost[];
};
