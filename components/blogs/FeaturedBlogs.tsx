// npm
import Link from "next/link";

// files
import { FeaturedPost } from "@/types";

interface iFeaturedPosts {
  posts?: FeaturedPost[];
}

function BlogPost({ post }: { post: FeaturedPost }) {
  return (
    <div className="border-2 m-4">
      <h1>{post.title}</h1>
      <Link href={`/blog/${post.slug}`}>See more</Link>
    </div>
  );
}

export default async function FeaturedBlogs({ posts }: iFeaturedPosts) {
  return (
    <section>
      <h1>Hello</h1>
      {posts?.map((post: FeaturedPost) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </section>
  );
}
