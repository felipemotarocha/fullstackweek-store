import { ProductWithTotalPrice } from "@/helpers/product-discount";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "lucide-react";
import { currency } from "@/helpers";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col max-w-[150px] gap-4">
      <div className="relative flex h-[170px] w-[150px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 flex gap-1">
            <ArrowDown size={16} />
            <p className="text-xs">{product.discountPercentage + "%"}</p>
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          {product.name}
        </p>
        <div className="flex gap-2 items-center">
          {product.discountPercentage > 0 ? (
            <>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">{currency(Number(product.basePrice))}</p>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs opacity-60 line-through">{currency(product.totalPrice)}</p>
            </>
          ) : (
            <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">{currency(Number(product.basePrice))}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;