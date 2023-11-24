import BlogCard from "../common/BlogCard";
import CategoriesList from "./CategoriesList";
import ProjectsList from "./ProjectsList";

export default function SmallScreenBlogsLayout() {
  return (
    <div className="grid grid-container-sm gap-10">
      <CategoriesList />
      <div className="grid-blogs grid gap-y-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <ProjectsList />
    </div>
  );
}
