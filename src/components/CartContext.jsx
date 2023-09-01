import React, { useContext, useState } from "react";

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const useCartUpdate = () => {
  return useContext(CartUpdateContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
};
