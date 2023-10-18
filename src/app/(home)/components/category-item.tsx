import { Button } from "@/components/ui/button";
import { ICONS } from "@/constants";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Button key={category.id} variant="outline" className="hover:bg-transparent flex items-center gap-2 w-full">
        {ICONS[category.slug as keyof typeof ICONS]}
        <span>{category.name}</span>
      </Button>
    </Link>
  );
}

export default CategoryItem;