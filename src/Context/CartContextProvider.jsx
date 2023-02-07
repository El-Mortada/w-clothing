import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addCartItem = (item, cartItems) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id == item.id);

    if (existingItem) {
      return cartItems.map((cartItem) =>
        cartItem.id == item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...item, quantity: 1 }];
  };

  const addProductItem = (item) => {
    setCartItems(addCartItem(item, cartItems));
    console.log(cartItems);
  };

  const decreaseItem = (checkOutItem, cartItems) => {
    const existingItem = cartItems.find(
      (cartItem) => checkOutItem.id === cartItem.id
    );
    if (existingItem.quantity == 1) {
      return cartItems.filter((cartItem) => cartItem.id !== checkOutItem.id);
    }
    if (existingItem) {
      return cartItems.map((cartItem) =>
        checkOutItem.id === cartItem.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  };
  const removeProductItem = (checkOutItem) => {
    setCartItems(decreaseItem(checkOutItem, cartItems));
    console.log(cartItems);
  };

  const getTotal = cartItems.reduce(
    (accumulative, cartItem) => accumulative + cartItem.quantity,
    0
  );

  const removeItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const getTotalPrice = () => {
    const totalArray = cartItems.map(
      (cartItem) => cartItem.quantity * cartItem.price
    );
    const totalPrice = totalArray.reduce(
      (accumulative, totalArrayitem) => accumulative + totalArrayitem,
      0
    );
    console.log(totalPrice);
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    setTotalItems(getTotal);
    console.log(totalItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        isClicked,
        setIsClicked,
        cartItems,
        setCartItems,
        addProductItem,
        totalItems,
        removeProductItem,
        removeItem,
        getTotalPrice,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
