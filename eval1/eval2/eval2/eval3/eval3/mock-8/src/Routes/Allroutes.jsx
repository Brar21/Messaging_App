import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Order from "../Pages/Order";

import Singleproduct from "./Singleproduct";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Singleproduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
