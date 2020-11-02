import { 
    GET_CONTRIBUTORS, 
    GET_CONTRIBUTORS_FAIL, 
    ADD_CONTRIBUTOR, 
    ADD_CONTRIBUTOR_FAIL, 
    LOADING, 
    config } from './types'
import axios from 'axios'

const BASE_URL = '/api/contributors'

export const getContributors = (project_id) => dispatch => {
    dispatch(loading())
    axios.get(`${BASE_URL}/${project_id}`, config)
        .then( res => dispatch({
            type: GET_CONTRIBUTORS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_CONTRIBUTORS_FAIL,
            payload: err
        }))
}

export const addContributor = (project_id, contributor) => dispatch => {
    dispatch(loading())
    axios.post(`${BASE_URL}/${project_id}`, contributor, config)
        .then( res => dispatch({
            type: ADD_CONTRIBUTOR,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ADD_CONTRIBUTOR_FAIL,
            payload: err
        }))
}

export const loading = () =>{
    return {
        type: LOADING
    }
}