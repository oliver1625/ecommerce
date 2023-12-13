import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllCategories, getAllCart } from "../redux/action";

import ProductsList from "./ProductsList";
import HomeImage from "../images/pexels-karolina-grabowska-5632402.jpg";
import CategoryList from "./CategoryList";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product);
  const allCategories = useSelector((state) => state.category);
  const [productList, setProductList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
        dispatch(getAllCart());
  }, [dispatch]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  return (
    <div className="home">
      <main>
        <img src={HomeImage} className="home-image" alt="HomeIMage" />
        <div className="main-wrapper">
          {/* <Sidebar handleCategoryChange={handleCategoryChange} /> */}
          <section className="category-list">
            <CategoryList category={allCategories} />
          </section>
          <section className="product-wrapper">
            <ProductsList product={allProducts} />
          </section>
        </div>
      </main>
    </div>
  );
}
export default Home;
