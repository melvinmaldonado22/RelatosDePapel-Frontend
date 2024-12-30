import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
    console.log(cart);
};
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, clearCart };
};
