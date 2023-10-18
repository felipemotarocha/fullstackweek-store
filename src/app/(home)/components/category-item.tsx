import { Button } from "@/components/ui/button";
import { CATEGORY_ICONS } from "@/constants";
import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Button key={category.id} variant="outline" className="hover:bg-transparent flex items-center gap-2">
      {CATEGORY_ICONS[category.slug as keyof typeof CATEGORY_ICONS]}
      <span>{category.name}</span>
    </Button>
  );
}

export default CategoryItem;