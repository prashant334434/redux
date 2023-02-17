import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./UserTypes"

 export const fetchUsersRequest =() =>{
    return{
        type:FETCH_USERS_REQUEST,
    }
}

export const fetchUsersSuccess = (users) =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUsersFailure = (error) =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

 export const fetchUsers= ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response=>{
            // response.data is the array of users
            const  users=response.data
            dispatch(fetchUsersSuccess(users))
         })
         .catch(error=>{
            // error.message is the error desciption
            const errorMessage = error.message
            dispatch(fetchUsersFailure(errorMessage))
         })
    }
}