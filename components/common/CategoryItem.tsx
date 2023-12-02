import { CategoryType } from "@/types";

interface iCategory {
  category: any;
  // filterBlogsByCategory?: (selectedCategory: string) => void;
  // resetBlogsCategory?: () => void;
}

// import useCategoryContext from "@/hooks/useCategoryContext";

export default function CategoryItem({ category }: iCategory) {
  // const { filterPostsByCategory, resetPosts } = useCategoryContext();

  // const handleClick = () => {
  //   if (category === "all") {
  //     resetPosts();
  //   } else {
  //     filterPostsByCategory(category);
  //   }
  // };

  return (
    // <p
    //   className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer"
    //   onClick={handleClick}
    // >
    //   {category}
    // </p>
    <p
      className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer"
      onClick={() => {}}
    >
      {category}
    </p>
  );
}
