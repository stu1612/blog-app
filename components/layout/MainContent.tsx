// files
// import BlogCard from "../common/BlogCard";
// import ProjectsList from "./ProjectsList";
import { FeaturedPost } from "@/types";
// import LargeScreenProjectsList from "./LargeScreenProjectsList";
// import CategoryItem from "../common/CategoryItem";
import { Suspense } from "react";
import Loading from "@/app/loading";
import ContentLargeScreen from "./ContentLargeScreen";
import ContentSmallScreen from "./ContentSmallScreen";

interface iFeaturedPosts {
  posts?: FeaturedPost[];
}

// const ContentSmallScreen = ({ posts }: iFeaturedPosts) => {
//   return (
//     <div className="grid grid-container-sm gap-10">
//       <div className="grid grid-categories">
//         <div className="flex flex-row gap-5 flex-center flex-wrap py-10">
//           <CategoryItem title="all" />
//           <CategoryItem title="css" />
//           <CategoryItem title="react" />
//           <CategoryItem title="tailwind" />
//           <CategoryItem title="vue" />
//         </div>
//       </div>
//       <div className="grid-blogs grid gap-y-10">
//         {posts?.map((post) => (
//           <BlogCard post={post} key={post.id} />
//         ))}
//       </div>
//       <ProjectsList />
//     </div>
//   );
// };

// const ContentLargeScreen = ({ posts }: iFeaturedPosts) => {
//   return (
//     <div className="grid-container-lg grid gap-10 my-20">
//       <div className="grid-blogs grid gap-y-10">
//         {posts?.map((post) => (
//           <BlogCard post={post} key={post.id} />
//         ))}
//       </div>
//       <div className="grid-side px-12">
//         <h4 className="font-normal text-sm">Find recent blogs by category</h4>
//         <h3 className="font-h3 bg-hyper clip-text">Categories</h3>

//         <div className="flex flex-row gap-5 flex-wrap py-10 ">
//           <CategoryItem title="all" />
//           <CategoryItem title="css" />
//           <CategoryItem title="react" />
//           <CategoryItem title="tailwind" />
//           <CategoryItem title="vue" />
//         </div>
//         <LargeScreenProjectsList />
//       </div>
//     </div>
//   );
// };

export default function MainContent({ posts }: iFeaturedPosts) {
  return (
    <section className="padding-container w-full">
      <h2 className="font-h2">Recent Blogs</h2>
      <Suspense fallback={<Loading />}>
        <ContentSmallScreen posts={posts} />
        <ContentLargeScreen posts={posts} />
      </Suspense>
    </section>
  );
}
