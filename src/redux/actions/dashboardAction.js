import axios from "axios";
import {
    FETCH_USER_DATA_REQUEST,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
    POST_USER_DATA_REQUEST,
    POST_USER_DATA_SUCCESS,
    POST_USER_DATA_FAILURE,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_REQ,
    DELETE_CATEGORY_SUCCESS
} from './types'



const apiUrl = 'http://localhost:8000';


export const fetchUserDataReq = () => {
    return {
        type: FETCH_USER_DATA_REQUEST
    }
};

export const fetchUserDataSuccess = data => {
    return {
        type: FETCH_USER_DATA_SUCCESS,
        payload: data
    }
};

export const fetchUserDataFailure = error => {
    return {
        type: FETCH_USER_DATA_FAILURE,
        payload: error
    }
};
export const postUserDataReq = () => {
    return {
        type: POST_USER_DATA_REQUEST
    }
};

export const postUserDataSuccess = data => {
    return {
        type: POST_USER_DATA_SUCCESS,
        payload: data
    }
};

export const postUserDataFail = error => {

    return {
        type: POST_USER_DATA_FAILURE,
        payload: error
    }


};


export const DeleteCatReq = () => {
    return{
       type: DELETE_CATEGORY_REQ
    }
};

export const DeleteCatSuccess = data =>{
    return {
        type:DELETE_CATEGORY_SUCCESS,
        payload: data
    }
}

export const DeleteCatFail = error=>{
    return {
        type:DELETE_CATEGORY_FAIL,
        payload: error
    }
}

export const postUserData = (obj) => {
    return function (dispatch) {
        const user = localStorage.getItem('user')
        const myObj = {
            'username': user,
            'data': obj
        }
        dispatch(postUserDataReq());
        axios.post(apiUrl + '/update', myObj).then(resp => {
            dispatch(postUserDataSuccess(resp.data))
          console.log('post esp', resp.data)
        }).catch(error => {
            dispatch(postUserDataFail(error.message))
        })
    }
};

export const deleteCat = (obj) => {
    return function (dispatch) {
        const user = localStorage.getItem('user')

        console.log(obj)
        const myObj = {
            'username' : user,
            'data': obj
        }
        console.log("Inside deleteCat", myObj);
        dispatch(DeleteCatReq());
        axios.delete(apiUrl + '/delCat', {params: myObj}).then(resp => {
            dispatch(DeleteCatSuccess(resp.data))
                console.log('Delete resp', resp.data)
        }).catch(error => {
            dispatch(DeleteCatFail(error.message))
        })
    }

};


export const fetchUserData = (obj) => {
    return function (dispatch) {

        console.log("obj", obj);

        dispatch(fetchUserDataReq());
        axios.get(apiUrl + '/getData', {params: obj}).then(resp => {
            //response.data data is the document of user
            // console.log("fetching");
            dispatch(fetchUserDataSuccess(resp.data))
          // console.log("fetching",resp.data );
        }).catch(error => {
            dispatch(fetchUserDataFailure(error.message))
        })
    }
};