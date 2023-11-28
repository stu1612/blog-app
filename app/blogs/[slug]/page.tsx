import { Suspense } from "react";
import Loading from "./loading";
import { getBlogPostBySlug } from "@/services";
import { fetchGraphQL } from "@/services/api";
import CMSRichText from "@/components/common/CMSRichText";

interface iBlogPost {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: iBlogPost) {
  // properties
  const { slug } = params;

  const blogPost = await fetchGraphQL(getBlogPostBySlug, slug);
  console.log("blog ", blogPost.post.content);
  return (
    <section>
      <h1>{blogPost?.post.title}</h1>
      <Suspense fallback={<Loading />}>
        {blogPost?.post?.content && (
          <CMSRichText
            content={blogPost?.post?.content?.raw}
            // references={blogPost?.content?.raw}
          />
        )}
      </Suspense>
    </section>
  );
}
