import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/prisma";
import { PackageIcon, PlusIcon } from "lucide-react";

const ProductsPage = async () => {
  const products = await prismaClient.product.findMany();

  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <PackageIcon size={18} />
        Produtos
      </Badge>

      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-bold">
          Produtos encontrados: {products.length}
        </p>

        <Button className="flex gap-2">
          <PlusIcon size={18} />
          Adicionar produto
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
