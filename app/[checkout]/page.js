"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const App= () => {
  const [clientSecret, setClientSecret] = useState("");

  const searchParams = useSearchParams();

  const price = searchParams.get('price');

  

  useEffect(() => {
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { price } }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#e10505',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default App;
