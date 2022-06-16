import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Product(props) {
    const { data } = props
    return (
        <div className='product-card'>
            <div className='card-header'>
                <p>{data.name}</p>
            </div>
            <div className="image">
                <img src={`https://electronic-ecommerce.herokuapp.com/${data.image}`} alt="" />
            </div>
            <div className="price">
                {data.price}
            </div>
            <div className="blink_me">
                Left in stock : {data.stock}
            </div>
            <div className="overlay">
                <button className='add-cart'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product