import axios from "axios";
 import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './types'

const apiUrl = 'http://localhost:8000';


export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
};

export const fetchUserSuccess = data => {
  return{
    type: FETCH_USER_SUCCESS,
    payload: data
  }
};

export const fetchUserFailure = error =>{
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
};

export const fetchUser = (obj) => {
  return function(dispatch){
    dispatch(fetchUserRequest());
    axios.post(apiUrl+'/check',obj).then(resp =>{
    //response.data data is the document of user
      dispatch(fetchUserSuccess(resp.data))
    }).catch(error => {
        dispatch(fetchUserFailure(error.message))
    })
  }
};







// // export function login(body){
// //     return(dispatch)=>{
// //         return axios.get("http://localhost:8000/check", body).then((response)=>{
// //             dispatch(loginUser(response.doc));
// //         })
// //     }
// // }
// //
// //
// // export function loginUser(username){
// //     return {type: "SESSION", username};
// // }
//
// export const fetchUser = (posts) => {
//   return {
//     type: FETCH_POST,
//     posts
//   }
// };
//
// export const fetchAllPosts =() => {
//   return (dispatch) => {
//     return axios.get(apiUrl+'/check')
//       .then(response => {
//         dispatch(fetchUser(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };
