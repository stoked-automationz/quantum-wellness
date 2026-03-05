import { NextRequest, NextResponse } from "next/server";
import { stripe, PRODUCTS, type ProductKey } from "@/lib/stripe";
import type Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const { productKey, email } = await request.json();

    if (!productKey || !PRODUCTS[productKey as ProductKey]) {
      return NextResponse.json(
        { error: "Invalid product" },
        { status: 400 }
      );
    }

    const product = PRODUCTS[productKey as ProductKey];
    const origin = request.headers.get("origin") || "https://quantumwellnesswarrior.com";

    const isRecurring = "recurring" in product && product.recurring;

    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: product.price,
        ...(isRecurring && "interval" in product
          ? { recurring: { interval: product.interval } }
          : {}),
      },
      quantity: 1,
    };

    const session = await stripe.checkout.sessions.create({
      mode: isRecurring ? "subscription" : "payment",
      success_url: `${origin}/apply?success=true&product=${productKey}`,
      cancel_url: `${origin}/apply?canceled=true`,
      customer_email: email || undefined,
      line_items: [lineItem],
      metadata: {
        product: productKey,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
