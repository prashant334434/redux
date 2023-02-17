import { combineReducers } from "redux";
import cakeReducer from "./Cakes/CakeReducer";
import IceCreameReducer from "./IceCreame/IceCreameReducer";
import { UserReducer } from "./user/userReducer";

const rootReducer= combineReducers({
    cake:cakeReducer,
    iceCreame:IceCreameReducer,
    user:UserReducer
})

export default rootReducer