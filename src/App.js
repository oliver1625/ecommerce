import React, {useEffect, useState} from "react";
import './App.css';
import ProductsList from './components/ProductsList';
import store from "./redux/store";
import {getProducts} from "./redux/action";
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from "./components/Sidebar";

function App() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product)

  const [productList, setProductList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();
  
  useEffect(() => {
    dispatch(getProducts())
    setProductList(products)
  }, [dispatch])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <div className="App">
      <header className="">
        <nav>
        <p>Ecommerce</p>
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>1</span>
        </div>
        </nav>
      </header>
      <main>
        <div className="main-wrapper">
        <Sidebar handleCategoryChange={handleCategoryChange} />
        <ProductsList />
        </div>
      </main>
    </div>
  );
}
export default App;
