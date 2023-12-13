import {
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
  POST_CART,
  GET_SPECIFIC_CATEGORIES,
  GET_ALL_CARTS,
} from "../constants";
const INITIAL_STATE = {
  product: [],
  category: [],
  specificCategory: [],
  carts: [],
  postCart: [],
  loading: true,
};

const reducer = (state = INITIAL_STATE, action) =>{

    const{type, payload} = action

    switch (type) {
      case GET_ALL_PRODUCTS:
        return {
          ...state,
          product: payload,
          loading: false,
        };
      case GET_ALL_CATEGORIES:
        return {
          ...state,
          category: payload,
          loading: false,
        };
      case GET_SPECIFIC_CATEGORIES:
        return {
          ...state,
          specificCategory: payload,
          loading: false,
        };
      case GET_ALL_CARTS:
        return {
          ...state,
          carts: payload,
          loading: false,
        };
      case POST_CART:
        return {
          ...state,
          postCart: payload,
          loading: false,
        };

      default:
        return state;
    }
}

export default reducer;