import {FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WOEID_START, FETCH_WOEID_SUCCESS} from '../actions'

const initialState = {
    weather: [],
    woeid: "",
    isLoading: false,
    error: ""

}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WEATHER_START:
            return {
                ...state,
                isLoading: true      
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                weather: action.payload
            }
        case FETCH_WOEID_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_WOEID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                woeid: action.payload
            }
        default:
            return state
    }
}