import { Prisma } from "@prisma/client";
import Image from "next/image";
import DiscountBadge from "./discount-badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface WishListItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      wishLists: true;
    };
  }>;
  className?: string;
}

const WishListItem = ({ product, className }: WishListItemProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-3 top-3">
            {product.discountPercentage}
          </DiscountBadge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex">
          <p className="truncate text-sm"> {product.name}</p>
        </div>
        <div className="flex">
          <p className="truncate text-sm font-semibold">
            {" "}
            R$ {Number(product.basePrice).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WishListItem;
