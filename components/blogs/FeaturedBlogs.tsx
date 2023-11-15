import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";
import { FeaturedPost } from "@/types";

export default async function FeaturedBlogs() {
  const { posts } = await fetchGraphQL(featuredBlogs);

  return (
    <section>
      {posts ? (
        posts.map((post: FeaturedPost) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
