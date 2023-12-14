"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Welcome from "./Welcome";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type CategoryProps = {
  categories?: Category[];
};

export default async function CategoryList({ categories }: CategoryProps) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <Welcome />
      ) : (
        <>
          <h4 className="hidden md:block font-normal text-sm">
            Fiilter posts by category
          </h4>
          <h3 className="font-h2 inline-block bg-hyper clip-text md:font-h3">
            Categories
          </h3>
          <div className="flex flex-row justify-center gap-5 flex-wrap py-10 md:justify-start ">
            <Link href={`/blogs`}>
              <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
                all
              </p>
            </Link>
            {categories?.map((category: Category) => (
              <Link href={`/blogs/${category.slug}`} key={category.slug}>
                <p
                  className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer"
                  key={category?.id}
                >
                  {category?.name}
                </p>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
