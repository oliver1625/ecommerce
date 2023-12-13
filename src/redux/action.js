import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
  GET_SPECIFIC_CATEGORIES,
  GET_ALL_CARTS,
  POST_CART,
} from "../constants";

export const getAllProducts = () => async (dispatch) => {
  try {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // console.log(res.data)
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const getAllCategories = () => async (dispatch) => {
  try {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: res.data,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSpecificCategory = (selectedCategory) => async (dispatch) => {
  try {
    axios
      .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => {
        console.log(selectedCategory, "selectedCategory");
        dispatch({
          type: GET_SPECIFIC_CATEGORIES,
          payload: res.data,
        });
      });
  } catch (e) {
    console.log(e);
  }
};

export const getAllCart = () => async (dispatch) => {
  try {
    axios.get(`https://fakestoreapi.com/carts`).then((res) => {
      dispatch({
        type: GET_ALL_CARTS,
        payload: res.data,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const postNewCartItem = (data) => async (dispatch) => {
  console.log(data, "data");

  try {
    axios
      .post(`https://fakestoreapi.com/carts`, {
        userId: data.userId,
        date: data.date,
        products: data.products,
      })
      .then((res) => {
        dispatch({
          type: POST_CART,
          payload: res.data,
        });
      });
  } catch (e) {
    console.log(e);
  }
};
