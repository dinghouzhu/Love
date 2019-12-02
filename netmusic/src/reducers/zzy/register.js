const register = {
    userInfo:[]

}
const password = (state=[],action) =>{
    switch(action.type){
        case "USER_REGISTER":
            return action.payload 
        default:
            return state 
    }
}

export default (state=register,action) => {
    return {
        userInfo: password(state.userInfo,action),
    }
}
