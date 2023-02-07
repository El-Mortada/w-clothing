import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Shop_Data from "../shop-data.js";
import { getCategoriesAndDocuments } from "../Utilities/Firebase/Firebase.js";

export const CategoriesContext = createContext([]);

export default function CategoriesContextProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
}
