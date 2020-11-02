import { combineReducers } from 'redux'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import contributorReducer from './contributorReducer'
import featureReducer from './featureReducer'

export default combineReducers({
    auth: authReducer,
    project: projectReducer,
    contributors: contributorReducer,
    features: featureReducer
})