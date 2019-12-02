let usercount={
    userid:"",
}
const phone = (state="",action) =>{
    //  console.log(action)
    switch(action.type){
        case "PUSH_COUNT":
            return action.payload
        case "USER_REGISTER":
            return action.payload 
        default:
            return state 
    }
}

export default (state=usercount,action) => {
    return {
        userid:phone(state.userid,action),
    }
}


