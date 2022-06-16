import { GET_PRODUCTS } from "../constants"
const INITIAL_STATE ={
    product : [],
    loading: true
}

const reducer = (state = INITIAL_STATE, action) =>{

    const{type, payload} = action

    switch (type) {

        case GET_PRODUCTS:

            return{
                ...state,
                product: payload,
                loading: false
            }


        default: return state;
    }
}

export default reducer;