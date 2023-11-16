import { Suspense } from "react";
import Loading from "./loading";

interface iBlogPost {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: iBlogPost) {
  // properties
  const { slug } = params;
  return (
    <div>
      <Suspense fallback={<Loading />}>BlogPost</Suspense>
    </div>
  );
}
