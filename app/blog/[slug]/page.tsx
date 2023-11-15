import React from "react";

interface iBlogPost {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: iBlogPost) {
  // properties
  const { slug } = params;
  return <div>BlogPost - {slug}</div>;
}
