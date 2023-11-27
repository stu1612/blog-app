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

export type CategoryType = {
  name: string;
  // id: number;
};

export type CategoryProps = {
  categories: CategoryType[];
};

export type FeaturedPostsProps = {
  posts?: FeaturedPost[];
};
