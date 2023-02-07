import React from "react";
import "./CartIcon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContextProvider";

export default function CartIcon() {
  const { isClicked, setIsClicked, totalItems } = useContext(CartContext);
  const setDropDown = () => setIsClicked(!isClicked);

  return (
    <div className="cart-icon-container" onClick={setDropDown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
}
