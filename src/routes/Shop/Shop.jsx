import React, { Fragment } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CategoriesContext } from "../../Context/CategoriesContextProvider";
import "../Shop/Shop.styles.scss";

export default function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, index) => (
        <Fragment key={index}>
          <h2>
            <span>
              <Link to={`${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
            </span>
          </h2>
          <div className="products-container">
            {categoriesMap[title]
              .filter((_, index) => index < 4)
              .map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}
