import { currency } from "@/helpers";
import { computeProductTotalPrice } from "@/helpers/product-discount";
import { Prisma } from "@prisma/client";
import Image from "next/image";
interface OrderProductsProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}
const OrderProducts = ({ orderProduct }: OrderProductsProps) => {
  const productWithDiscount = computeProductTotalPrice(orderProduct.product);
  return (
    <div className="flex gap-4">
      <div className="flex h-[80px] w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          alt={orderProduct.product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="h-fit rounded-md bg-accent px-3 py-1 text-[0.625rem]">
          Vendido e entregue por:{" "}
          <span className="font-semibold">FSW Store</span>
        </p>
        <p className="text-xs">{orderProduct.product.name}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">
              {currency(
                Number(productWithDiscount.totalPrice) * orderProduct.quantity,
              )}
            </p>
            {productWithDiscount.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-60">
                {currency(
                  Number(productWithDiscount.basePrice) * orderProduct.quantity,
                )}
              </p>
            )}
          </div>
          <p className="text-xs opacity-60">Qtd: {orderProduct.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
