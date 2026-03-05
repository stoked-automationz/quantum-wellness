import Stripe from "stripe";

function getStripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
  }
  return new Stripe(key, {
    typescript: true,
  });
}

// Lazy-initialize to avoid build-time errors
let _stripe: Stripe | null = null;
export function getStripe() {
  if (!_stripe) {
    _stripe = getStripeClient();
  }
  return _stripe;
}

export const stripe = {
  get checkout() {
    return getStripe().checkout;
  },
};

export const PRODUCTS = {
  FORGE_YOUR_LIFE: {
    name: "Forge Your Life — Week-Long Apprenticeship",
    price: 555500, // $5,555 in cents
    description: "7-day volcanic transformation apprenticeship",
  },
  FORGE_PAYMENT_PLAN: {
    name: "Forge Your Life — Payment Plan (5x $1,111)",
    price: 111100, // $1,111 in cents
    description: "Forge Your Life — installment 1 of 5",
    installments: 5,
  },
  BREATH_CIRCLE: {
    name: "Vital Breath Circle — Monthly",
    price: 3300, // $33 in cents
    description: "Weekly live breathwork + full archive access",
    recurring: true,
    interval: "month" as const,
  },
  PERMACULTURE_RESIDENCY: {
    name: "Permaculture Residency — Monthly",
    price: 60000, // $600 in cents
    description: "Extended land training — room, board, and training included",
    recurring: true,
    interval: "month" as const,
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;
