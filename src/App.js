import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/products"
import Product from "./components/product"
import Cart from "./components/cart"

const App = () => (
  <div className="App">
    <h1>Product Catalog</h1>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    <Cart />
  </div>
);

export default App;
