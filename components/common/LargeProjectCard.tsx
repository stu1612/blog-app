import Image from "next/image";

type Props = {
  img: string;
  title: string;
};

export default function LargeProjectCard({ img, title }: Props) {
  return (
    <div className="flex flex-row justify-start items-center ">
      <figure className="relative w-[50px] h-[50px] mr-3">
        <Image
          src={img}
          alt="alt"
          fill
          className="rounded-full"
          style={{ objectFit: "cover" }}
        />
      </figure>
      <p>{title}</p>
    </div>
  );
}
