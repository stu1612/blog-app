import FeaturedBlogs from "@/components/FeaturedBlogs";
import ThemeToggler from "@/components/ThemeToggler";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <ThemeToggler />
      <h1>Hello</h1>
      <FeaturedBlogs />
    </div>
  );
}
