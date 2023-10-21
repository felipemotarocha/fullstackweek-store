"use server";

import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";
import { OrderStatus } from "@prisma/client";

export const createOrder = async (
  cartProducts: CartProduct[],
  userId: string,
) => {
  const order = await prismaClient.order.create({
    data: {
      userId: userId,
      status: OrderStatus.WAITING_FOR_PAYMENT,
      //Criação da OrderProducts junto com a order
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });
  return order;
};
