import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  title: string;
};

export default function ProjectCard({ img, title }: Props) {
  return (
    <div className="flex flex-row justify-start items-center ">
      <figure className="mr-3 h-[80px] w-[80px] relative">
        <Image src={img} alt="alt" fill style={{ objectFit: "cover" }} />
      </figure>
      <div className="flex flex-col">
        <p>{title}</p>
        <Link href="/" className="text-sm underline underline-offset-4">
          Read more
        </Link>
      </div>
    </div>
  );
}
