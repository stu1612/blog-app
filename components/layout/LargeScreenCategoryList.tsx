import CategoryItem from "../common/CategoryItem";

export default function LargeScreenCategoryList() {
  return (
    <div className="flex flex-row gap-5 flex-wrap py-10 ">
      <CategoryItem title="all" />
      <CategoryItem title="css" />
      <CategoryItem title="react" />
      <CategoryItem title="tailwind" />
      <CategoryItem title="vue" />
    </div>
  );
}
