import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import { computeProductTotalPrice } from "@/helpers/product-discount";
import ProductDetail from "./components/product-detail";
import SectionTitle from "@/app/(home)/components/section-title";
import ProductList from "@/components/ui/product-list";
import { Metadata } from "next";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "FSW Store | Produto",
};

const ProductDetailPage = async ({
  params: { slug },
}: ProductDetailPageProps) => {
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
    <div className="mx-auto flex flex-col gap-8 pb-8 lg:max-w-[1040px] lg:px-24 lg:py-10">
      <div className="w-full gap-8 lg:flex lg:justify-between">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductDetail product={computeProductTotalPrice(product)} />
      </div>
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};
export default ProductDetailPage;
