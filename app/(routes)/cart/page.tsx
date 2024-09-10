"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  const cart = useCart();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 p-16 sm:px-6 lg:px_8">
          <h1 className="text-black text-3xl font-bold">Panier</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && 
                <p className="text-neutral-500">
                  Aucun article ajouté au panier
                </p>
              }
              <ul>
                {cart.items.map((item) => (
                    <CartItem
                        key={item.id}
                        data={item}
                    />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
