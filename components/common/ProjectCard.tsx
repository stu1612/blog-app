import Image from "next/image";
import { images } from "@/constants/images";

type Project = {
  id: number;
  name: string;
  html_url: string;
  description?: string;
};

type Props = {
  project: Project;
  index: any;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <a href={`${project?.html_url}`} target="_blank">
      <div className="flex flex-row justify-start items-center ">
        <figure className="relative h-[150px] w-[150px] lg:h-[80px] lg:w-[80px] mr-3">
          <Image
            src={images[index].img}
            alt="github screenshot reference"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-none lg:rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="flex flex-col">
          <p>{project?.name}</p>
          <small className="block text-sm underline underline-offset-4 lg:hidden">
            Read more
          </small>
        </div>
      </div>
    </a>
  );
}
