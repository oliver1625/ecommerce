import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar(props) {
    const { handleCategoryChange} = props

    const products = useSelector((state) => state.product)
    console.log("datasidebar", products)
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
            {/* <option value="">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Aquatics">Aquatics</option> */}
        </select>
        </div>
    )
}

export default Sidebar