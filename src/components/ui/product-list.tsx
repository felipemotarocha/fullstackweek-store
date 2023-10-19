import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product-discount";
import { Product } from "@prisma/client";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => {
        return (
          <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
        )
      })}
    </div>
  );
}

export default Products;