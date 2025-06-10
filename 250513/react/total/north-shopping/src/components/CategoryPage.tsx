import { useEffect } from "react";
import { useStore } from "../store/useStore";
import SectionSwiper from "./SectionSwiper";

const CategoryPage = ({ categoryName }: { categoryName: string }) => {
  const { items, fetchItems, getItemCategory } = useStore();
  const categoryItems = getItemCategory(categoryName);

  useEffect(() => {
    if (items.length === 0) {
      fetchItems();
    }
  }, []);
  return (
    <div>
      <SectionSwiper category={categoryItems} />
    </div>
  );
};

export default CategoryPage;
