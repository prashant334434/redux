import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./UserTypes"

const intialState ={
    loading: false,
    user:[],
    error:''
}

 
 export const UserReducer =(state = intialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
              ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
              ...state,
                loading:false,
                user:action.payload,
                error:''
            }
            case FETCH_USERS_FAILURE:
                return{
                  ...state,
                    loading:false,
                    error:action.payload,
                    user:[]
                }
                default:
                    return state
    }
}