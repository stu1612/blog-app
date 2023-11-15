import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import ThemeToggler from "@/components/themes/ThemeToggler";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <ThemeToggler />
      <h1>Hello</h1>
      <FeaturedBlogs />
    </div>
  );
}
