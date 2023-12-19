import BlogCard from "../common/BlogCard";
import { FeaturedPostsProps } from "@/types";
import Projects from "./ProjectsSmallScreen";
import Categories from "./Categories";

export default function ContentSmallScreen({ posts }: FeaturedPostsProps) {
  return (
    <div className="grid grid-container-sm gap-10">
      <div className="grid grid-categories">
        <div className="flex-row gap-5 flex-center flex-wrap py-10">
          <Categories />
        </div>
      </div>
      <div className="grid-blogs grid gap-y-10">
        {posts?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      <Projects />
    </div>
  );
}
