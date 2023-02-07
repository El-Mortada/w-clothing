import React from "react";
import "./CategoryItem.style.jsx";
import { Link, useNavigate } from "react-router-dom";
import {
  CategoryContainer,
  BackgroundImage,
  Body,
} from "./CategoryItem.style.jsx";

export default function CategoryItem({ category }) {
  const { title, imageUrl } = category;

  const navigate = useNavigate();

  const navigateHandler = () => navigate(`shop/${title.toLowerCase()}`);
  return (
    <>
      <CategoryContainer onClick={navigateHandler}>
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <Body>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </Body>
      </CategoryContainer>
    </>
  );
}
