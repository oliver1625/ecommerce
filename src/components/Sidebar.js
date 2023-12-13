import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Sidebar(props) {
    const { handleCategoryChange} = props

    const products = useSelector((state) => state.product)
    return (
        <div className='sidebar'>
        <select
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}
        >
            {!products?.category?.length? <>hgfn</> : (
                <>
                {products.category.map((item) => (
                    <option value="" key={item.id} >{item}</option>
                ))}
                </>
            )}
        </select>
        </div>
    )
}

export default Sidebar