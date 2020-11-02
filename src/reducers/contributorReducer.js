/* eslint-disable import/no-anonymous-default-export */
import {ADD_CONTRIBUTOR, ADD_CONTRIBUTOR_FAIL, GET_CONTRIBUTORS, GET_CONTRIBUTORS_FAIL, LOADING} from '../actions/types'

const initialState = {
    contributors: [],
    isLoading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CONTRIBUTORS:
            return {
                ...state,
                contributors: [...action.payload],
                isLoading: false
            }
        case ADD_CONTRIBUTOR:
            return {
                ...state,
                contributors: [...state.contributors, action.payload],
                isLoading: false
            }
        case ADD_CONTRIBUTOR_FAIL:
        case GET_CONTRIBUTORS_FAIL:
            return{
                ...state,
                isLoading: false
            }
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return {
                ...state
            }
    }
}