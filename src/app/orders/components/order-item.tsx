import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import OrderStatus from "./order-status";
import OrderProducts from "./order-products";
import Prices from "@/components/ui/prices";
import { Prisma } from "@prisma/client";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product-discount";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}
const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      const productWithDiscount = computeProductTotalPrice(
        orderProduct.product,
      );
      return acc + productWithDiscount.totalPrice * orderProduct.quantity;
    }, 0);
  }, [order.orderProducts]);

  const discount = subtotal - total;

  return (
    <Card className="px-5">
      <Accordion type="single" collapsible>
        <AccordionItem className="border-0" value="item-1">
          <AccordionTrigger>
            <div className="flex flex-col text-start">
              <p className="text-sm font-bold">NÚMERO DO PEDIDO</p>
              <p className="text-xs font-normal opacity-60">
                {order.OrderNumber}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-5">
              <OrderStatus
                orderStatus={order.status}
                orderDate={order.createdAt}
              />
              {order.orderProducts.map((product) => (
                <OrderProducts key={product.id} orderProduct={product} />
              ))}
            </div>
            <Prices
              className="mt-4"
              subtotal={subtotal}
              totalDiscount={discount}
              totalPrice={total}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
