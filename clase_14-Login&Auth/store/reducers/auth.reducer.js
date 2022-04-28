import { SIGNUP } from '../actions/auth.action'

const initialState = {
    token: null,
    user: null
}

const AuthReducer = (state = initialState, action) => {    
    switch (action.type) {
        case SIGNUP:
            console.log(SIGNUP);
            return {...state, token: action.token, user: action.user}
        default:
            return state
    }
}

export default AuthReducer;