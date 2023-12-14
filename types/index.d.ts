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

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
  image: {
    url: string;
  };
  content: {
    raw: string;
  };
  categories: {
    id: string;
    slug: string;
    name: string;
  }[];
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

export type CategoriesProps = {
  posts?: FeaturedPostsProps;
  setPostLists: React.Dispatch<React.SetStateAction<FeaturedPostsProps>>;
};

export type SocialProps = {
  id: number;
  url: string;
  icon: React.ReactElement;
};
