import {
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
    FETCH_USER_DATA_REQUEST,
    POST_USER_DATA_REQUEST,
    POST_USER_DATA_FAILURE,
    POST_USER_DATA_SUCCESS,
    DELETE_CATEGORY_REQ,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,
    POST_BILL_REQ,
    POST_BILL_SUCCESS,
    POST_BILL_FAIL,
    DELETE_BILL_REQ,
    DELETE_BILL_FAIL,
    DELETE_BILL_SUCCESS
} from '../actions/types'


export const initialState = {
    isLoading: false,
    data: [],
    bills: [],
    error: []

};


const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: [],
                error: []
            };
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bills: action.payload.doc.data,
                data: action.payload,
                error: []

            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                data: [],

            };
        case  POST_USER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case POST_USER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bills: action.payload.doc.data,
                data: action.payload,
                error: []

            };
        case POST_USER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case DELETE_CATEGORY_REQ:
            return {
                ...state,
                isLoading: true,
            }

        case DELETE_CATEGORY_SUCCESS:
            return{
                ...state,
                isLoading: false,
                bills: action.payload.doc.data,
                data:action.payload,
                error:[]
            }
        case DELETE_CATEGORY_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_BILL_REQ:
            return{
                ...state,
                isLoading: true,

            }
        case POST_BILL_SUCCESS:
            return{
                ...state,
                isLoading: false,
                bills:action.payload.doc.data,
                data:action.payload,
                error:[]
            }
        case POST_BILL_FAIL:
            return{
                ...state,
                isLoading: false,
                error:action.payload
            }
        case DELETE_BILL_REQ:
            return{
                ...state,
                isLoading: true,
            }
        case DELETE_BILL_SUCCESS:
            return{
                ...state,
                isLoading: false,
                bills:action.payload.doc.data,
                data:action.payload,
                error:[]
            }
        case DELETE_BILL_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload

            }
        default:
            return state

    }
}

export default dashboardReducer;