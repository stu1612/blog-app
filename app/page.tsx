// npm
import { Suspense } from "react";

// files
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import ThemeToggler from "@/components/themes/ThemeToggler";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <ThemeToggler />
      <h1>Hello</h1>
      <Suspense fallback={<Loading />}>
        <FeaturedBlogs />
      </Suspense>
    </div>
  );
}
