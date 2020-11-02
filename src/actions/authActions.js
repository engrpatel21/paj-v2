import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
   
} from './types'
import axios from 'axios'

const BASE_URL = '/api/auth'

export const login = (cred) => dispatch => {
    const config = {
        'Content-Type': 'application/json'
    }
    axios.post(`${BASE_URL}/login`, cred, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const signup = (cred) => dispatch => {
    const config = {
        'Content-Type': 'application/json'
    }
    axios.post(`${BASE_URL}/signup`, cred, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: REGISTER_FAIL
        }))
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// function signup(user) {
//     return fetch(BASE_URL + 'signup', {
//       method: 'POST',
//       headers: new Headers({'Content-Type': 'application/json'}),
//       body: JSON.stringify(user)
//     })
//     .then(res => {
//       console.log(res, '<-- response object')
//       return res.json();
//     })
//     .then(json => {
//       if(json.token) return json;
//       console.log(json, '<-- the error')
//       throw new Error(`${json.err}`)
//     })
//     .then(({ token }) => {
//       tokenService.setToken(token);
//     })
//   }

// function login(creds) {
//     return fetch(BASE_URL + "login", {
//       method: "POST",
//       headers: new Headers({ "Content-Type": "application/json" }),
//       body: JSON.stringify(creds),
//     })
//     .then((res) => {
//       // Valid login if we have a status of 2xx (res.ok)
//       if (res.ok) return res.json();
//       throw new Error("Bad Credentials!");
//     })
//     .then(({ token }) => tokenService.setToken(token));
//   }