import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  title: string;
};

export default function ProjectCard({ img, title }: Props) {
  return (
    <Link href="/">
      <div className="flex flex-row justify-start items-center ">
        <figure className="relative h-[150px] w-[150px] lg:h-[80px] lg:w-[80px] mr-3">
          <Image
            src={img}
            alt="alt"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-none lg:rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="flex flex-col">
          <p>{title}</p>
          <small className="block text-sm underline underline-offset-4 lg:hidden">
            Read more
          </small>
        </div>
      </div>
    </Link>
  );
}
