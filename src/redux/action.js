import axios from "axios";
import { GET_PRODUCTS, GET_IMAGES } from "../constants";

export const getProducts = () => async dispatch =>{
    try{
        axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product")
            .then(res =>{
                // console.log(res.data.data.product)
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data.data.product
                })
            })
    }
    catch(e){   
        console.log(e)
    }
}