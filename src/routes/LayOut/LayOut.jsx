import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";

export default function LayOut() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
