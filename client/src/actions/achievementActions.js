import axios from 'axios'
import {GET_ACHIEVEMENTS, ADD_ACHIEVEMENT, DELETE_ACHIEVEMENT, ACHIEVEMENTS_LOADING} from './types'

export const getAchievements = () => async dispatch => {
    dispatch(setAchievementsLoading())

    const res = await axios.get('/api/achievements')
    dispatch ({
        type: GET_ACHIEVEMENTS,
        payload: res.data
    })
} 

export const addAchievement = (achievement) => async dispatch => {
    const res = await axios.post('/api/achievements', achievement)
    dispatch ({
        type: ADD_ACHIEVEMENT,
        payload: res.data
    })
}

export const deleteAchievement = (id) => async dispatch => {
    await axios.delete(`/api/achievements/${id}`)
    dispatch ({
        type: DELETE_ACHIEVEMENT,
        payload: id
    })
}  

export const setAchievementsLoading = () => {
    return {
        type: ACHIEVEMENTS_LOADING
    }
} 