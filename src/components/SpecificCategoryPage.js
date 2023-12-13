import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Product from './Product';

function SpecificCategoryPage({product}) {
      const { name } = useParams();
const specificCategories = useSelector((state) => state.specificCategory);
console.log(specificCategories, "specificCategories");
// const filteredProducts = specificCategories.filter(
//   (product) => product.category === name
// );
  return (
    <div className="product">
      {/* <div className="product-list">
        {!filteredProducts?.length ? (
          <></>
        ) : (
          <>
            {filteredProducts.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </>
        )}
      </div> */}
    </div>
  );
}

export default SpecificCategoryPage