import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { getSpecificCategory } from '../redux/action';
import { Link, useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

import '../css/CategoryList.css'

function CategoryList(props) {
    const { category } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        dispatch(getSpecificCategory(selectedCategory))
    },[dispatch, selectedCategory])

    function handleCategoryChange(category) {
      navigate(`/category-page/${category}`);
      console.log(`/category-page/${category}`);
    }

  return (
    <Grid className="category-list-wrapper" spacing={2}>
      {category &&
        category.map((item) => (
          <Button
            variant="outlined"
            component={Link}
            to={`/category-page/${selectedCategory}`}
            onClick={() => handleCategoryChange(item)}
            value={item}
          >
            {item}
          </Button>
        ))}
    </Grid>
  );
}

export default CategoryList