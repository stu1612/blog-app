import Image from "next/image";
import Link from "next/link";

// files
import { FeaturedPost } from "@/types";
import PostCreatedAt from "./PostCreatedAt";
import { truncateString } from "@/utils/truncateString";

export default function BlogCard({ post }: { post: FeaturedPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="text-sm transition duration-300 ease-in-out hover:underline hover:underline-offset-4"
    >
      <div className="flex flex-col h-auto lg:grid lg:grid-cols-2 lg:min-h-[250px] lg:h-fit">
        <figure className="relative h-[200px] lg:h-full">
          <Image
            src={post.image.url}
            alt={post.title}
            fill
            className="w-full"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="flex-evenly-start flex-col px-5 py-10 sm:px-6 lg:px-12 bg-light-10 dark:bg-[#1B2430]">
          <p className="text-xs">
            <PostCreatedAt createdAt={post?.createdAt} /> -{" "}
            <span>{post?.categories[0].name}</span>
          </p>
          <h3 className="font-h3 py-2">{post.title}</h3>
          <p className="text-base hidden xl:block">
            {truncateString(post?.excerpt, 80)}
          </p>
          <p className="text-sm text-zinc-700 xl:hidden">Read more</p>
        </div>
      </div>
    </Link>
  );
}
