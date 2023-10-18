import { Category } from "@prisma/client";
import CategoryItem from "./category-item";
import { prismaClient } from "@/lib/prisma";

interface CategoriesProps {
  categories: Category[];
}


export const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (<div className="grid grid-cols-2 gap-x-4 gap-y-2">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>);
}