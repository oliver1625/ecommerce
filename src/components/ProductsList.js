import React from 'react'
import Product from './Product';
import Grid from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'

function ProductsList() {
    const products = useSelector((state) => state.product)
    return (
        <div className="product">
                    <div className='product-list'>
        {!products?.length? <></> : (
            <>
            {products.map((product) => (
                <Product data={product} key={product.id}/>
            ))}
            </>
        )}
        </div>
        </div>
    )
}

export default ProductsList