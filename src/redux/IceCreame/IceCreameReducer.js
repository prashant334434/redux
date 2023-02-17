import { BUY_ICECREAME } from "./IceCreameTypes"

const intialState={
    numOfIceCreame:20
}

const IceCreameReducer=(state =intialState,action)=>{
      switch(action.type){
        case BUY_ICECREAME:
            return{
                ...state,
                numOfIceCreame: state.numOfIceCreame -1
            }

        default:
            return state
      }  
}
export default IceCreameReducer