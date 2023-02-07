import React, { useContext } from "react";
import { useEffect } from "react";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../Context/CartContextProvider";
import "./CheckoutPage.styles.scss";

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, totalPrice } = useContext(CartContext);

  useEffect(() => {
    getTotalPrice();
  }, [cartItems]);
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <h2>Product</h2>
          </div>
          <div className="header-block">
            <h2>description</h2>
          </div>
          <div className="header-block">
            <h2>quantity</h2>
          </div>
          <div className="header-block">
            <h2>price</h2>
          </div>
          <div className="header-block">
            <h2>remove</h2>
          </div>
        </div>
        {cartItems.map((checkoutItem, index) => (
          <CheckoutItem key={index} checkoutItem={checkoutItem} />
        ))}
        <div className="total">
          <h3>Total: ${totalPrice}</h3>
        </div>
      </div>
    </>
  );
}
