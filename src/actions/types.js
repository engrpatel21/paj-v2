import tokenService from '../services/tokenService'

export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN-SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const GET_ERRORS = 'GET_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const ADD_PROJECT = 'ADD_PROJECT'
export const ADD_PROJECT_FAIL = 'ADD_PROJECT_FAIL'
export const DELETE_PROJECT = 'DELETE_PROJECT'
export const GET_USER_PROJECTS = 'GET_USER_PROJECTS'
export const LOADING = 'LOADING'
export const GET_PROJECT_DETAIL = 'GET_PRJOECT_DETAIL'
export const ADD_CONTRIBUTOR = 'ADD_CONTRIBUTOR'
export const ADD_CONTRIBUTOR_FAIL = 'ADD_CONTRIBUTOR_FAIL'
export const GET_CONTRIBUTORS = 'GET_CONTRIBUTORS'
export const GET_CONTRIBUTORS_FAIL = 'GET_CONTRIBUTORS_RAIL'

export const config ={
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()}
}