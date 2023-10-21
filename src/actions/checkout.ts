"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

export async function createCheckout(products: CartProduct[], orderId: string) {
  // Create checkout
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/orders/`,
    cancel_url: `${process.env.NEXTAUTH_URL}`,
    metadata: {
      orderId,
    },
    // Define products
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            images: [product.imageUrls[0]],
            description: product.description,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      };
    }),
  });

  return checkout;
}
