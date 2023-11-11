import { prismaClient } from "@/lib/prisma";

const ProductsPage = async () => {
  const products = await prismaClient.product.findMany();

  return <h1>products</h1>;
};

export default ProductsPage;
