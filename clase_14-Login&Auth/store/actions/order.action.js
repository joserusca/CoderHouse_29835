import { URL_API } from "../../constants/database";
export const GET_ORDERS = 'GET_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER';

const orderByUserID = (data, user) => {
    const items = []
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
    //return items.filter(item => item.user === user)
    return items;
}

export const getOrders = () => {
    return async dispatch => {
        try {  
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
    
            const result = await response.json()
            //console.log(result);
            const items = orderByUserID(result, 'user')
            
            dispatch({ 
                type: GET_ORDERS, 
                payload: items
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try{
            await fetch(`${URL_API}/ordenes/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'contetent-type': 'application/json'
                }
            })
            dispatch({
                type: DELETE_ORDER, orderID: id
            })
        } catch(error) {
            console.log(error.message);
        }
    }
}