import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 h-[600px] md:h-[300px] ">
      <figure className="relative">
        <Image
          src="/images/software-development.jpg"
          alt="alt"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="flex-evenly-start flex-col px-5 py-10 sm:px-6 lg:px-12 bg-light-10 dark:bg-[#1B2430]">
        <p className="text-xs">
          2021-06-16 - <span>CSS</span>
        </p>
        <h3 className="font-h3">title of blog</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero
          ipsum autem exercitationem quod dolor.
        </p>
        <Link href="/" className="text-sm underline underline-offset-4">
          Read more
        </Link>
      </div>
    </div>
  );
}
