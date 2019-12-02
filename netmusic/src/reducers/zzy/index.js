//合并reducers

import {combineReducers} from "redux"
import phoneReducer from "./phoneReducers"
import passwordReducer from "./passwordReducers"
import pushcount from "./pushcount"
import captcha from "./captcha"
import register from "./register"
let rootReducer = combineReducers({
     phoneReducer,
     passwordReducer,
     pushcount,
     captcha,
     register
})

export default rootReducer