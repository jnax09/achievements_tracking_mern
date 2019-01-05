import {
    GET_ACHIEVEMENTS,
    ADD_ACHIEVEMENT,
    DELETE_ACHIEVEMENT,
    ACHIEVEMENTS_LOADING
} from '../actions/types'

const initialState = {
    achievements: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ACHIEVEMENTS:
            return {
                ...state,
                achievements: [...action.payload],
                loading: false
            }

        case DELETE_ACHIEVEMENT:
            return {
                ...state,
                achievements: state.achievements.filter(achievement => achievement._id !== action.payload)
            }

        case ADD_ACHIEVEMENT:
            return {
                ...state,
                achievements: [...state.achievements, action.payload]
            }

        case ACHIEVEMENTS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}