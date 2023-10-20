import { useContext } from "react";
import TextBadge from "./text-badge";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product-discount";
import { Separator } from "@radix-ui/react-separator";
import { currency } from "@/helpers";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { products, cartBasePrice, cartTotalDiscount, cartTotalPrice } = useContext(CartContext);

  const handlePurchase = async () => {
    const checkout = await createCheckout(products);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    })
  }

  return (
    <div className="flex flex-col gap-8 h-full">
      <TextBadge icon={"cart"}>CARRINHO</TextBadge>
      {products.length > 0 ? (
        <>
          <ScrollArea className="h-[60%]">
            <div className="flex flex-col gap-5">
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product) as any}
                />
              ))}
            </div>
          </ScrollArea>

          <div className="flex flex-col gap-2">
            <Separator />
            <div className="flex justify-between text-xs">
              <p>Subtotal</p>
              <p>{currency(cartBasePrice)}</p>
            </div>

            <Separator />
            <div className="flex justify-between text-xs">
              <p>Entrega</p>
              <p>GRÁTIS</p>
            </div>

            <Separator />
            <div className="flex justify-between text-xs">
              <p>Descontos</p>
              <p>{currency(cartTotalDiscount)}</p>
            </div>

            <Separator />
            <div className="flex justify-between text-sm font-bold">
              <p>TOTAL</p>
              <p>{currency(cartTotalPrice)}</p>
            </div>
          </div>
          <Button onClick={handlePurchase}>Finalizar Compra</Button>
        </>
      ) : (
        <div className="flex flex-col items-center text-sm">
          <p>Carrinho vazio!</p>
          <p>Vamos aproveitar e turbinar seu setup</p>
        </div>
      )}
    </div>
  );
}

export default Cart;