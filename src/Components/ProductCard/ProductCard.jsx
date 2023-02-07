import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContextProvider";
import Button from "../Button/Button";
import "../ProductCard/ProductCard.style.scss";

export default function ProductCard({ item }) {
  const { addProductItem } = useContext(CartContext);

  return (
    <>
      <div className="product-card-container">
        <img src={`${item.imageUrl}`} alt={`${item.name}`} />
        <div className="footer">
          <span className="name">{item.name}</span>
          <span className="price">${item.price}</span>
        </div>
        <Button
          typeName={"inverted"}
          onClick={() => {
            addProductItem(item);
          }}
        >
          Add To Cart
        </Button>
      </div>
    </>
  );
}
