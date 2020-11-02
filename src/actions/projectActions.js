import {
    ADD_PROJECT, 
    ADD_PROJECT_FAIL,
    DELETE_PROJECT, 
    GET_USER_PROJECTS, 
    LOADING, 
    config,
    ADD_CONTRIBUTOR_FAIL} from './types'
import axios from 'axios'





export const addProject = newProject => dispatch =>{
    dispatch(loading())
    axios.post('/api/projects', newProject, config)
        .then(res => dispatch({
            type: ADD_PROJECT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ADD_PROJECT_FAIL,
            payload: err
        }))
}

export const deleteProject = project_id => dispatch => {
    dispatch(loading())
    axios.delete(`/api/projects/${project_id}`, config)
        .then(res => dispatch({
            type: DELETE_PROJECT,
            payload: project_id
        }))
        .catch(err => dispatch({
            type: ADD_CONTRIBUTOR_FAIL,
            payload: err
        }))
}

export const getUserProjects = () => dispatch => {
    dispatch(loading())
    axios.get(`/api/contributors/projects`, config)
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