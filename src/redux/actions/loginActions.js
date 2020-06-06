import axios from "axios";
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    LOG_USEROUT_REQ,
    LOG_USEROUT_FAIL,
    LOG_USEROUT_SUCCESS
} from './types'

// const apiUrl = 'http://localhost:8000';

const apiUrl = 'http://3.134.98.84:8000';


export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
};

export const fetchUserSuccess = data => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
};

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};

export const logOutReq = () => {
    return {
        type: LOG_USEROUT_REQ

    }
}

export const LogOutSuccess = () => {
    return {
        type: LOG_USEROUT_SUCCESS,
        Payload: []
    }
}

export const LogOutFail = error => {
    return {
        type: LOG_USEROUT_SUCCESS,
        Payload: error
    }
}

export const fetchUser = (obj) => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.post(apiUrl + '/check', obj).then(resp => {
            //response.data data is the document of user
            dispatch(fetchUserSuccess(resp.data))
        }).catch(error => {
            dispatch(fetchUserFailure(error.message))
        })
    }
};
export const logOut = () => {
    return function (dispatch) {
        dispatch(logOutReq());

        dispatch(LogOutSuccess());


    }
}







