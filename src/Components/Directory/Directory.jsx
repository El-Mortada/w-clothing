import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Directory.style.scss";

export default function Directory({ categories }) {
  return (
    <>
      <div className="categories-container">
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    </>
  );
}
