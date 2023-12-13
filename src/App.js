import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList"
import SpecificCategoryPage from "./components/SpecificCategoryPage";
import Product from "./components/Product";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductsList />} />
          <Route path="/category-page/:name" element={<SpecificCategoryPage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
