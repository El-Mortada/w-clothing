import React from "react";
import { useContext } from "react";
import { Fragment } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CategoriesContext } from "../../Context/CategoriesContextProvider";

export default function ProductCategory() {
  const { name } = useParams();
  console.log(name);

  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title, index) => {
        if (title == name) {
          return (
            <Fragment key={index}>
              <h2>
                <span>{title.toUpperCase()}</span>
              </h2>
              <div className="products-container">
                {categoriesMap[title].map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </Fragment>
          );
        }
      })}
    </>
  );
}
