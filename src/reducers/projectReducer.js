/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_PROJECT, 
    ADD_PROJECT_FAIL, 
    GET_USER_PROJECTS,
    DELETE_PROJECT, 
    LOADING
} from '../actions/types'

const initialState = {
    userProjects: [],
    currentProject: {},
    isLoading: false
}

export default function(state= initialState, action){
    switch(action.type){
        case ADD_PROJECT:
            return {
                ...state,
                userProjects: [...state.userProjects, action.payload],
                isLoading: false
            }
        case GET_USER_PROJECTS:
            return {
                ...state,
                userProjects: [...action.payload],
                isLoading: false
            }
        case DELETE_PROJECT:
            return{
                ...state,
                userProjects: state.userProjects.filter(project => project.projectId._id !== action.payload),
                isLoading: false
            }
        case ADD_PROJECT_FAIL:
            return{
                ...state
            }
        case LOADING:
            return{
                ...state,
                isLoading: true
            }
        default:
            return {
                ...state
            }
    }
}
