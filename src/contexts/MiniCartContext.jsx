import React, { createContext, useState, useEffect } from "react";

export const MiniCartContext = createContext({
  toggleMinicart: () => {},
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  calculate: () => {},
  cartItems: [],
});

export const MiniCartContextProvider = ({ children }) => {
  const [isMinicartOpen, setMinicartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleMinicart = () => {
    setMinicartOpen((prev) => !prev);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      let newCartItems;

      if (existingProduct) {
        newCartItems = prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCartItems = [...prev, { ...product, quantity: 1 }];
      }

      const { subtotal, total } = calculate(newCartItems);

      console.log(`Added to cart: ${product.name}`);
      console.log(`Current cart items:`, newCartItems);
      console.log(`Current quantity:`, newCartItems.reduce((acc, item) => acc + item.quantity, 0));
      console.log(`Subtotal:`, subtotal);
      console.log(`Total (including shipping):`, total);

      return newCartItems;
    });
  };

  const handleRemoveFromCart = (id, decreaseQuantity = false) => {
    setCartItems((prev) => {
      const newCartItems = prev.map((item) => {
        if (item.id === id) {
          if (decreaseQuantity && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null; // Mark for removal
        }
        return item;
      }).filter(Boolean); // Remove null items

      const { subtotal, total } = calculate(newCartItems);
      
      console.log(`Removed item with ID: ${id}`);
      console.log(`Current cart items:`, newCartItems);
      console.log(`Subtotal:`, subtotal);
      console.log(`Total (including shipping):`, total);

      return newCartItems;
    });
  };

  const calculate = (items) => {
    const subtotal = items.reduce((acc, item) => acc + item.selling_price * item.quantity, 0);
    const shippingFee = subtotal >= 30 ? 10 : 0; // Shipping fee logic
    const total = subtotal + shippingFee;

    console.log(`Current cart items:`, items);
    console.log(`Shipping fee:`, shippingFee > 0 ? shippingFee : "No shipping fee.");

    return { subtotal, total, shippingFee }; // Return all values
  };

  return (
    <MiniCartContext.Provider
      value={{
        toggleMinicart,
        handleAddToCart,
        handleRemoveFromCart,
        calculate,
        cartItems,
      }}
    >
      {children}
    </MiniCartContext.Provider>
  );
};
