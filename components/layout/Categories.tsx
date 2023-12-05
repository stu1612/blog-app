import { getCategories } from "@/services";
import { fetchGraphQL } from "@/services/api";
import CategoryList from "./CategoryList";

export default async function Categories() {
  const { categories } = await fetchGraphQL(getCategories);

  return <CategoryList categories={categories} />;
}
