import { cn, formatedPrice } from "@/lib/utils";

interface CartPriceProps {
  title: string;
  isDiscount: boolean;
  price: number | string;
  className?: string;
}

const CartPrice = ({ price, title, isDiscount, className }: CartPriceProps) => {
  return (  
    <div className={cn("flex justify-between", className)}>
      <span className="capitalize">{title}</span>
      <span>
        {isDiscount ? "- " : null}{" "}
        {typeof price == "number" && !isNaN(price)
          ? formatedPrice(Number(price))
          : price}
      </span>
    </div>
  );
};

export default CartPrice;
