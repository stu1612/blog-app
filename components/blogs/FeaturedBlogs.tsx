import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/services/api";
import { FeaturedPost } from "@/types";

export default async function FeaturedBlogs() {
  const blogs: FeaturedPost[] | undefined = await fetchGraphQL(featuredBlogs);

  return (
    <section>
      <p>Blogs</p>
    </section>
  );
}
