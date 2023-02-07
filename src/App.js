import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./routes/Authentication/Authentication";
import CheckoutPage from "./routes/CheckoutPage/CheckoutPage";
import Home from "./routes/Home/Home";
import LayOut from "./routes/LayOut/LayOut";
import Shop from "./routes/Shop/Shop";
import ProductCategory from "./routes/ProductCategory/ProductCategory";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "shop/*",
          element: <Shop />,
        },
        {
          index: true,
          element: <Home />,
        },
        {
          path: "auth",
          element: <Authentication />,
        },
        {
          path: "check-out",
          element: <CheckoutPage />,
        },
        {
          path: "shop/:name",
          element: <ProductCategory />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
};
export default App;
