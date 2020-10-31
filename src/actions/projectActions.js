import {ADD_PROJECT, ADD_PROJECT_FAIL, GET_USER_PROJECTS, LOADING} from './types'
import tokenService from '../services/tokenService'
import axios from 'axios'



const config ={
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()}
}

export const addProject = newProject => dispatch =>{
    dispatch(loading())
    axios.post('/api/projects', newProject, config)
        .then(res => dispatch({
            type: ADD_PROJECT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ADD_PROJECT_FAIL
        }))
}

export const getUserProjects = () => dispatch => {
    dispatch(loading())
    axios.get(`/api/users/projects`, config)
        .then(res => dispatch({
            type: GET_USER_PROJECTS,
            payload: res.data
        }))
}

export const loading = () => {
    return {
        type: LOADING,
    }
}