import { URL_AUTH_SIGNUP } from '../../constants/database'

export const SIGNUP = 'SIGNUP'

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        })

        if(!response.ok) {
            const errorResponse =  await response.json()
            const errorID = errorResponse.error.message
            console.log(email);
            console.log(password);
            console.log(errorID);
            let message = 'No se ha podido registrar'
            if (errorID === 'EMAIL_EXISTS') message = 'Este email ya está registrado'
            throw new Error(message)
        }

        const data = await response.json()
        console.log("Dispatching SIGNUP");
        console.log(data);
        dispatch({ 
            type: SIGNUP,
            token: data.idToken,
            user: data.email
        })
    }
}

