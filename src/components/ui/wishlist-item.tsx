import { Prisma } from "@prisma/client";
import Image from "next/image";
import DiscountBadge from "./discount-badge";

interface WishlistItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      wishLists: true;
    };
  }>;
}

const WishlistItem = ({ product }: WishlistItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex aspect-square h-40 w-40 rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />
        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-[6rem] top-3">
            {product.discountPercentage}
          </DiscountBadge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex">
          <p className="truncate text-sm">{product.name}</p>
        </div>
        <div className="flex">
          <p className="truncate text-sm font-semibold">
            R$ {product.basePrice.toFixed(2)}
          </p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default WishlistItem;
