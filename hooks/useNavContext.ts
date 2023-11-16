import { useContext } from "react";
import { NavContext } from "@/context/NavContext";

export default function useNavContext() {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("Wrap nav context provider around child elements");
  }
  return context;
}
