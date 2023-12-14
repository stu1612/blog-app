import Link from "next/link";

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <Link href="/contact" className="relative group cursor-pointer">
      <span>{text}</span>
      <span className="absolute left-0 -bottom-1 w-full h-2 bg-sky dark:bg-midnight -z-10 group-hover:h-full group-hover:transition-all duration-300 "></span>
    </Link>
  );
}
