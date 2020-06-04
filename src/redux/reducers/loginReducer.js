// import {fetchUserRequest} from "../actions/loginActions"
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOG_USEROUT_REQ, LOG_USEROUT_FAIL, LOG_USEROUT_SUCCESS} from '../actions/types'


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
        case  LOG_USEROUT_REQ:
            return {
                ...state,
                isLoading: true,
                data: [],
                error: []
            }
        case LOG_USEROUT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                data: [],
        }
        case LOG_USEROUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error:[],
                data:[]
            }
        default:
            return state

    }
}

export default loginReducer;