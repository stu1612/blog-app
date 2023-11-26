interface iCategory {
  category: string;
  filterBlogsByCategory?: (selectedCategory: string) => void;
  resetBlogsCategory?: () => void;
}

export default function CategoryItem({
  category,
  filterBlogsByCategory,
  resetBlogsCategory,
}: iCategory) {
  const handleClick = () => {
    if (category === "all" && resetBlogsCategory) {
      resetBlogsCategory();
    } else if (filterBlogsByCategory) {
      filterBlogsByCategory(category);
    }
  };
  return (
    <p
      className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer"
      onClick={handleClick}
    >
      {category}
    </p>
  );
}
