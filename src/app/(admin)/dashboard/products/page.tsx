import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import ProductTable from "./components/product-table";

const Products = async () => {
  const products = await prismaClient.product.findMany({
    include: {
      category: true,
    },
  });

  const productsWithTotalPrice = products.map((product) => {
    return {
      ...product,
      totalPrice: computeProductTotalPrice(product).totalPrice,
    };
  });

  return (
    <div className="w-full overflow-auto p-10">
      <ProductTable products={productsWithTotalPrice} />
    </div>
  );
};

export default Products;
