"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Home() {
  const handleCheckout = useCallback(async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const { id } = await res.json();
    const stripe = await stripePromise;
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: id });
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Stripe Checkout in Next.js (TSX) 🚀</h1>
      <button
        onClick={handleCheckout}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Checkout $20
      </button>
    </main>
  );
}
