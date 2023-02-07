import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContextProvider";
import "./CheckoutItem.styles.scss";

export default function CheckoutItem({ checkoutItem }) {
  const { addProductItem, removeProductItem, removeItem } =
    useContext(CartContext);
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={`${checkoutItem.imageUrl}`} alt={checkoutItem.name} />
        </div>
        <span className="name">{checkoutItem.name}</span>
        <span className="quantity">
          <div
            className="arrow"
            onClick={() => {
              removeProductItem(checkoutItem);
            }}
          >
            &#10094;
          </div>
          <span className="value">{checkoutItem.quantity}</span>
          <div
            className="arrow"
            onClick={() => {
              addProductItem(checkoutItem);
            }}
          >
            &#10095;
          </div>
        </span>
        <div className="price">{checkoutItem.price}</div>
        <div
          className="remove-button"
          onClick={() => {
            removeItem(checkoutItem);
          }}
        >
          &#10005;
        </div>
      </div>
    </>
  );
}
