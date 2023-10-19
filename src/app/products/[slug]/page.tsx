import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import { computeProductTotalPrice } from "@/helpers/product-discount";
import ProductDetail from "./components/product-detail";
import SectionTitle from "@/app/(home)/components/section-title";
import ProductList from "@/components/ui/product-list";

interface ProductDetailPageProps {
  params: {
    slug: string;
  }
}

const ProductDetailPage = async ({ params: { slug } }: ProductDetailPageProps) => {

  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetail product={computeProductTotalPrice(product)} />
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  )
}
export default ProductDetailPage;