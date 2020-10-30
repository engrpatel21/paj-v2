/* eslint-disable import/no-anonymous-default-export */

import  tokenService from '../services/tokenService'
import { 
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
   
} from '../actions/types.js'

const initialState = {
    token: tokenService.getToken(),
    user: tokenService.getToken() ? tokenService.getUserFromToken() : null,
    isloading: false,
    isAuthenticated: tokenService.getToken() ? true : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            tokenService.setToken(action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                user: tokenService.getUserFromToken()

            }
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT_SUCCESS:
            case REGISTER_FAIL:
                tokenService.removeToken()
                return {
                    ...state,
                    token: null,
                    user: null,
                    isAuthenticated: false,
                    isLoading: false
                }
        default:
            return {
                ...state
            }
    }
}
