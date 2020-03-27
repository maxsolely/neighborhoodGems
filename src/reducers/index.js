import { combineReducers } from 'redux'
import gemReducer from './gemReducer'

export default combineReducers({
  gems: gemReducer
})