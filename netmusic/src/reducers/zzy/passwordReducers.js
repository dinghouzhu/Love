const pwdState = {
    password:[]

}
const password = (state=password,action) =>{
    switch(action.type){
        case "PHONE_LOGIN":
            return action.payload 
        case "USER_REGISTER":
            return action.payload 
        default:
            return state 
    }
}

export default (state=pwdState,action) => {
    return {
        password: password(state.password,action),
    }
}

