// import {fetchUserRequest} from "../actions/loginActions"
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from '../actions/types'


export const initialState = {
    isLoading: false,
    data: [],
    error: []

};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: [],
                error: []
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: []

            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                data: [],

            };
        default:
            return state

    }
}

export default loginReducer;