// npm
import Link from "next/link";

// files
import { FeaturedPost } from "@/types";

interface iFeaturedPosts {
  posts?: FeaturedPost[];
}

function BlogPost({ post }: { post: FeaturedPost }) {
  return (
    <div className="border-2">
      <h1>{post.title}</h1>
      <Link href={`/blogs/${post.slug}`}>See more</Link>
    </div>
  );
}

export default async function FeaturedBlogs({ posts }: iFeaturedPosts) {
  return (
    <section>
      {posts?.map((post: FeaturedPost) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </section>
  );
}
