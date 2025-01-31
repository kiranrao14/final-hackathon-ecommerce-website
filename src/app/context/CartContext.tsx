"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ProductInput {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartProduct extends Omit<ProductInput, "price"> {
  price: number; // Convert price to number for cart
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: ProductInput) => void;
  removeFromCart: (id: string, removeAll?: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error parsing cart from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (product: ProductInput) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevCart,
        { ...product, quantity: 1 }, // No need to parse price, it's already a number
      ];
    });
  };

  const removeFromCart = (id: string, removeAll = false) => {
    setCart((prevCart) =>
      removeAll
        ? prevCart.filter((item) => item.id !== id)
        : prevCart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }
  return context;
};
