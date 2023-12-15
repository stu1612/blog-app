import { Suspense } from "react";
import { getBlogPostBySlug } from "@/services";
import { fetchGraphQL } from "@/services/api";
import CMSRichText from "@/components/common/CMSRichText";

type BlogPost = {
  params: {
    slug: string;
  };
};

export default async function Blog({ params }: BlogPost) {
  const { slug } = params;

  const blogPost = await fetchGraphQL(getBlogPostBySlug, slug);
  return (
    <section className="w-appWidth padding-container">
      <h1 className="font-h2 py-6">{blogPost?.post.title}</h1>
      <Suspense fallback={"Loading .."}>
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
