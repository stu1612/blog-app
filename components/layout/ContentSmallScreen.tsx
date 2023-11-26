import BlogCard from "../common/BlogCard";
// import CategoryItem from "../common/CategoryItem";
import { FeaturedPost } from "@/types";
import ProjectsList from "./ProjectsList";

interface iFeaturedPosts {
  posts?: FeaturedPost[];
}

export default function ContentSmallScreen({ posts }: iFeaturedPosts) {
  return (
    <div className="grid grid-container-sm gap-10">
      <div className="grid grid-categories">
        <div className="flex flex-row gap-5 flex-center flex-wrap py-10">
          {/* <CategoryItem title="all" />
          <CategoryItem title="css" />
          <CategoryItem title="react" />
          <CategoryItem title="tailwind" />
          <CategoryItem title="vue" /> */}
        </div>
      </div>
      <div className="grid-blogs grid gap-y-10">
        {posts?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      <ProjectsList />
    </div>
  );
}
