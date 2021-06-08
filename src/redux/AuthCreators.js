import { AUTH_SUCCESS, AUTH_FAILED, AUTH_LOADING, AUTH_LOGOUT } from './ActionTypes'
import axios from 'axios'

export const auth_success = (token, userId) => {
    return ({
        type: AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId

        }
    })
}

export const auth_loading = (isLoading) => {
    return ({
        type: AUTH_LOADING,
        payload: isLoading
    })
}

export const Logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expireTime')
    return ({
        type: AUTH_LOGOUT
    })
}

export const authErr = (errMsg,authPara) => {
    const payLoadItem={
        errMsg:errMsg,
        authState:authPara
    }
    return ({
        type: AUTH_FAILED,
        payload: payLoadItem
    })
}



export const auth = (email, password, auth) => dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    dispatch(auth_loading(true))
    // console.log('AuthCreator:',authData)

    let authUrl = null
    if (auth === 'Signup') {
        authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    }
    else {
        authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    }
    const API_KEY = 'AIzaSyBG3nee1WhEqYrF2_1BJ_ToLRPtxG6fijk'
    axios.post(authUrl + API_KEY, authData)
        .then(response => response.data)
        .then(data => {
            // console.log('Response Data:',data)
            localStorage.setItem('token', data.idToken)
            localStorage.setItem('userId', data.localId)
            let expireTime = new Date(new Date().getTime() + data.expiresIn * 1000);
            localStorage.setItem('expireTime', expireTime)
            
            setTimeout(()=>{

                dispatch(
                    auth_success(data.idToken, data.localId)
                )
                dispatch(auth_loading(false))
            },3000)
            

        })
        .catch(err => {
            console.log('AuthErr:',err.response.data.error.message)
         
            setTimeout(()=>{
                dispatch(authErr(err.response.data.error.message,auth))
                dispatch(auth_loading(false))
            },3000)
            
        })
}

export const AuthCheck = () => dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
        // logout
        dispatch(Logout())
    }
    else {
        const expireTime = localStorage.getItem('expireTime')
        if (new Date() > expireTime) {
            // logOut
            dispatch(Logout())
        }
        else {
            const userId = localStorage.getItem('userId')
            dispatch(auth_success(token, userId))
        }
    }
}