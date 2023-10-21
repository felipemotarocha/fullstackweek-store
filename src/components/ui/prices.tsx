import { currency } from "@/helpers";
import { Separator } from "./separator";
import { twMerge } from "tailwind-merge";

interface PricesProps {
  subtotal: number;
  totalDiscount: number;
  totalPrice: number;
  className?: string;
}

const Prices = ({
  subtotal,
  totalDiscount,
  totalPrice,
  className,
}: PricesProps) => {
  const _className = twMerge("flex flex-col gap-2", className);
  return (
    <div className={_className}>
      <Separator />
      <div className="flex justify-between text-xs">
        <p>Subtotal</p>
        <p>{currency(subtotal)}</p>
      </div>

      <Separator />
      <div className="flex justify-between text-xs">
        <p>Entrega</p>
        <p>GRÁTIS</p>
      </div>

      <Separator />
      <div className="flex justify-between text-xs">
        <p>Descontos</p>
        <p>- {currency(totalDiscount)}</p>
      </div>

      <Separator />
      <div className="flex justify-between text-sm font-bold">
        <p>TOTAL</p>
        <p>{currency(totalPrice)}</p>
      </div>
    </div>
  );
};

export default Prices;
