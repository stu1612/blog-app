import { useContext } from "react";
import { CategoryContext } from "@/context/CategoryContext";

export default function useCategoryContext() {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("Wrap category context provider around child elements");
  }
  return context;
}
