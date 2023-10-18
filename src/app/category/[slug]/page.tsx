import ProductItem from "@/components/ui/product-item";
import TextBadge from "@/components/ui/text-badge";
import { computeProductTotalPrice } from "@/helpers/product-discount";
import { prismaClient } from "@/lib/prisma";

const CategoryPage = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <TextBadge slug={category.slug}>{category.name}</TextBadge>
      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;