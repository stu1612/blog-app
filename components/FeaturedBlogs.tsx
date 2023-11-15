import { featuredBlogs } from "@/services";
import { fetchGraphQL } from "@/api";

export default async function FeaturedBlogs() {
  const featured = await fetchGraphQL(featuredBlogs);

  console.log(featured);
  return <div>FeaturedBlogs</div>;
}
