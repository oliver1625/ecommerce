import React, { useState } from 'react'
import Product from './Product';


import '../css/ProductList.css'

function ProductsList({product}) {

  return (
    <div className="product">
      <div className="product-list">
        {!product?.length ? (
          <></>
        ) : (
          <>
            {product.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductsList