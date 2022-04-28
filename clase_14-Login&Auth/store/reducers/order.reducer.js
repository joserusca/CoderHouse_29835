import { GET_ORDERS, DELETE_ORDER } from "../actions/order.action";

const initialState = {
    items : [],
    selected : null
}

const OrderReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDERS:
            console.log('GET_ORDERS');
            return {
                ...state,
                items: action.payload
            }
        case DELETE_ORDER: 
            console.log("DELETE_ORDER");
            return {
                ...state,
                items: state.items.filter( item => item.id != action.orderID)
            }
        default:
            return state;
    }
}

export default OrderReducer;