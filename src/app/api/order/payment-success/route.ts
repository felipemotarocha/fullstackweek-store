import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const POST = async (req: Request) => {
  const signature = req.headers.get("stripe-signature")!;

  if (!signature) return NextResponse.error();

  const text = await req.text();

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  // if (event.type === "checkout.session.async_payment_failed") {
  // }

  // if (event.type === "checkout.session.async_payment_succeeded") {
  // }

  if (event.type === "checkout.session.completed") {
    // const session = event.data.object as Stripe.Checkout.Session;

    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      },
    );
    const lineItems = sessionWithLineItems.line_items;

    // TODO: save order to database
    console.log(lineItems);
  }
  return NextResponse.json({ received: true });
};
