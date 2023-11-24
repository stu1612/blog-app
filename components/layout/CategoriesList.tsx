import React from "react";
import CategoryItem from "../common/CategoryItem";

export default function CategoriesList() {
  return (
    <div className="grid grid-categories">
      <div className="flex flex-row gap-5 flex-center flex-wrap py-10">
        <CategoryItem title="all" />
        <CategoryItem title="css" />
        <CategoryItem title="react" />
        <CategoryItem title="tailwind" />
        <CategoryItem title="vue" />
      </div>
    </div>
  );
}
