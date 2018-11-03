import { combineReducers } from 'redux'
import achievementReducer from './achievementReducer'

export default combineReducers({
    achievement: achievementReducer
})