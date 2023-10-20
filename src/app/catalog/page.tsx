import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./components/category-item";
import TextBadge from "@/components/ui/text-badge";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col gap-8 p-5">
      <TextBadge icon="catalog">Catálogo</TextBadge>
      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;