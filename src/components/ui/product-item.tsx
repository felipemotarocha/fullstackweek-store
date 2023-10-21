import { ProductWithTotalPrice } from "@/helpers/product-discount";
import Image from "next/image";
import { currency } from "@/helpers";
import DiscountBadge from "./discount-badge";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex flex-col max-w-[150px] gap-4">
        <div className="relative aspect-square flex h-[170px] w-[150px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
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
    </Link>
  );
}

export default ProductItem;