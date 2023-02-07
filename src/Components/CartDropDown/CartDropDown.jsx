import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContextProvider";
import Button from "../Button/Button";
import CartItem from "../../Components/CartItem/CartItem";
import "./CartDropDown.scss";

export default function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/check-out");
  };

  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))}
        </div>

        <Button onClick={navigateToCheckout}>CHECKOUT</Button>
      </div>
    </>
  );
}
