import Image from "next/image";
import Link from "next/link";

// files
import { FeaturedPost } from "@/types";
import PostCreatedAt from "./PostCreatedAt";
import { truncateString } from "@/utils/truncateString";

export default function BlogCard({ post }: { post: FeaturedPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="text-sm transition duration-300 ease-in-out hover:underline hover:underline-offset-4"
    >
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 h-[600px] md:h-[300px] ">
        <figure className="relative">
          <Image
            src={post.image.url}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="flex-evenly-start flex-col px-5 py-10 sm:px-6 lg:px-12 bg-light-10 dark:bg-[#1B2430]">
          <p className="text-xs">
            <PostCreatedAt createdAt={post?.createdAt} /> -{" "}
            <span>{post?.categories[0].name}</span>
          </p>
          <h3 className="font-h3">{post.title}</h3>
          <p className="text-sm">{truncateString(post?.excerpt, 100)}</p>
          <p className="text-sm">Read more</p>
        </div>
      </div>
    </Link>
  );
}
