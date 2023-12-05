import { getCategories } from "@/services";
import { fetchGraphQL } from "@/services/api";
import Link from "next/link";

type Category = {
  id: string;
  name: string;
  slug: string;
};

// type Props = {
//   handleClick: (categoryId: string) => void;
// };

export default async function CategoryList() {
  const { categories } = await fetchGraphQL(getCategories);

  return (
    <div className="flex flex-row gap-5 flex-wrap py-10 ">
      <Link href={`/blogs`}>
        <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
          all
        </p>
      </Link>
      {categories.map((category: Category) => (
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
  );
}
